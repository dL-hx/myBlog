# Promise 源码解析

## 概述
本文档深入解析Promise的实现原理，通过手写一个符合Promise/A+规范的Promise类来理解其内部工作机制。

## Promise/A+ 规范要点

### 核心要求
1. **状态**：Promise必须处于以下三种状态之一：pending、fulfilled、rejected
2. **状态转换**：只能从pending转换为fulfilled或rejected，且不可逆
3. **then方法**：必须提供then方法来访问当前或最终的值或原因
4. **异步执行**：then方法的回调必须异步执行

## 基础实现

### 1. 基本结构
```javascript
class MyPromise {
    constructor(executor) {
        this.state = 'pending'; // pending, fulfilled, rejected
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        
        const resolve = (value) => {
            if (this.state === 'pending') {
                this.state = 'fulfilled';
                this.value = value;
                this.onFulfilledCallbacks.forEach(fn => fn());
            }
        };
        
        const reject = (reason) => {
            if (this.state === 'pending') {
                this.state = 'rejected';
                this.reason = reason;
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
        // 基础实现，后续完善
    }
}
```

### 2. then方法实现
```javascript
then(onFulfilled, onRejected) {
    // 参数可选
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };
    
    const promise2 = new MyPromise((resolve, reject) => {
        if (this.state === 'fulfilled') {
            setTimeout(() => {
                try {
                    const x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
        } else if (this.state === 'rejected') {
            setTimeout(() => {
                try {
                    const x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
        } else if (this.state === 'pending') {
            this.onFulfilledCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            });
            
            this.onRejectedCallbacks.push(() => {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (error) {
                        reject(error);
                    }
                });
            });
        }
    });
    
    return promise2;
}
```

### 3. resolvePromise函数
```javascript
function resolvePromise(promise2, x, resolve, reject) {
    // 防止循环引用
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise'));
    }
    
    // 如果x是Promise实例
    if (x instanceof MyPromise) {
        x.then(
            value => resolvePromise(promise2, value, resolve, reject),
            reject
        );
        return;
    }
    
    // 如果x是对象或函数
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        let called = false;
        try {
            const then = x.then;
            if (typeof then === 'function') {
                then.call(
                    x,
                    value => {
                        if (called) return;
                        called = true;
                        resolvePromise(promise2, value, resolve, reject);
                    },
                    reason => {
                        if (called) return;
                        called = true;
                        reject(reason);
                    }
                );
            } else {
                resolve(x);
            }
        } catch (error) {
            if (called) return;
            called = true;
            reject(error);
        }
    } else {
        resolve(x);
    }
}
```

## 完整实现

### MyPromise完整类
```javascript
class MyPromise {
    constructor(executor) {
        this.state = 'pending';
        this.value = undefined;
        this.reason = undefined;
        this.onFulfilledCallbacks = [];
        this.onRejectedCallbacks = [];
        
        const resolve = (value) => {
            if (value instanceof MyPromise) {
                return value.then(resolve, reject);
            }
            
            setTimeout(() => {
                if (this.state === 'pending') {
                    this.state = 'fulfilled';
                    this.value = value;
                    this.onFulfilledCallbacks.forEach(callback => callback());
                }
            });
        };
        
        const reject = (reason) => {
            setTimeout(() => {
                if (this.state === 'pending') {
                    this.state = 'rejected';
                    this.reason = reason;
                    this.onRejectedCallbacks.forEach(callback => callback());
                }
            });
        };
        
        try {
            executor(resolve, reject);
        } catch (error) {
            reject(error);
        }
    }
    
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason; };
        
        const promise2 = new MyPromise((resolve, reject) => {
            const handleFulfilled = () => {
                try {
                    const x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            };
            
            const handleRejected = () => {
                try {
                    const x = onRejected(this.reason);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            };
            
            if (this.state === 'fulfilled') {
                setTimeout(handleFulfilled);
            } else if (this.state === 'rejected') {
                setTimeout(handleRejected);
            } else if (this.state === 'pending') {
                this.onFulfilledCallbacks.push(() => setTimeout(handleFulfilled));
                this.onRejectedCallbacks.push(() => setTimeout(handleRejected));
            }
        });
        
        return promise2;
    }
    
    catch(onRejected) {
        return this.then(null, onRejected);
    }
    
    finally(callback) {
        return this.then(
            value => MyPromise.resolve(callback()).then(() => value),
            reason => MyPromise.resolve(callback()).then(() => { throw reason; })
        );
    }
    
    static resolve(value) {
        if (value instanceof MyPromise) {
            return value;
        }
        
        return new MyPromise(resolve => {
            resolve(value);
        });
    }
    
    static reject(reason) {
        return new MyPromise((_, reject) => {
            reject(reason);
        });
    }
    
    static all(promises) {
        return new MyPromise((resolve, reject) => {
            const results = [];
            let completed = 0;
            
            if (promises.length === 0) {
                resolve(results);
                return;
            }
            
            promises.forEach((promise, index) => {
                MyPromise.resolve(promise).then(
                    value => {
                        results[index] = value;
                        completed++;
                        
                        if (completed === promises.length) {
                            resolve(results);
                        }
                    },
                    reject
                );
            });
        });
    }
    
    static race(promises) {
        return new MyPromise((resolve, reject) => {
            promises.forEach(promise => {
                MyPromise.resolve(promise).then(resolve, reject);
            });
        });
    }
    
    static allSettled(promises) {
        return new MyPromise(resolve => {
            const results = [];
            let completed = 0;
            
            const processResult = (index, status, valueOrReason) => {
                results[index] = {
                    status,
                    [status === 'fulfilled' ? 'value' : 'reason']: valueOrReason
                };
                completed++;
                
                if (completed === promises.length) {
                    resolve(results);
                }
            };
            
            promises.forEach((promise, index) => {
                MyPromise.resolve(promise).then(
                    value => processResult(index, 'fulfilled', value),
                    reason => processResult(index, 'rejected', reason)
                );
            });
        });
    }
}
```

## 源码解析

### 1. 状态管理
```javascript
// Promise的三种状态
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

// 状态转换是单向的
// pending -> fulfilled (通过resolve)
// pending -> rejected (通过reject)
// 一旦转换，状态不可逆
```

### 2. 微任务与宏任务
```javascript
// Promise使用微任务执行回调
// 原生Promise使用微任务队列
// 我们的实现使用setTimeout模拟（宏任务）
// 实际实现应该使用queueMicrotask或MutationObserver

// 微任务实现示例
const microTask = (callback) => {
    if (typeof queueMicrotask === 'function') {
        queueMicrotask(callback);
    } else if (typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver(callback);
        const textNode = document.createTextNode('');
        observer.observe(textNode, { characterData: true });
        textNode.data = '1';
    } else {
        setTimeout(callback, 0);
    }
};
```

### 3. then方法的链式调用
```javascript
// then方法返回新的Promise
// 实现链式调用的关键
promise.then(value => {
    return value * 2;
}).then(value => {
    console.log(value); // 前一个then的返回值作为下一个then的输入
});
```

### 4. Promise解析过程
```javascript
// resolvePromise处理各种返回值类型
// 1. 普通值：直接resolve
// 2. Promise：等待其状态改变
// 3. thenable对象：调用其then方法
// 4. 循环引用：抛出TypeError
```

## 测试用例

### 基础功能测试
```javascript
// 测试1: 基本功能
const p1 = new MyPromise((resolve) => {
    resolve('success');
});

p1.then(value => {
    console.log(value); // 'success'
});

// 测试2: 异步resolve
const p2 = new MyPromise((resolve) => {
    setTimeout(() => resolve('async success'), 1000);
});

p2.then(value => {
    console.log(value); // 1秒后输出 'async success'
});

// 测试3: 链式调用
const p3 = new MyPromise((resolve) => {
    resolve(1);
});

p3.then(value => value + 1)
  .then(value => value * 2)
  .then(value => {
      console.log(value); // 4
  });
```

### 符合Promise/A+规范的测试
```javascript
// 使用promises-aplus-tests进行测试
MyPromise.deferred = function() {
    const deferred = {};
    deferred.promise = new MyPromise((resolve, reject) => {
        deferred.resolve = resolve;
        deferred.reject = reject;
    });
    return deferred;
};

// 运行测试: npx promises-aplus-tests MyPromise.js
```

## 性能优化

### 1. 内存优化
```javascript
// 清理已执行的回调
class OptimizedPromise extends MyPromise {
    constructor(executor) {
        super(executor);
        // 执行后清理回调数组
        this.cleanupCallbacks = () => {
            this.onFulfilledCallbacks = [];
            this.onRejectedCallbacks = [];
        };
    }
}
```

### 2. 执行优化
```javascript
// 避免不必要的异步包装
then(onFulfilled, onRejected) {
    // 如果已经是同步状态，可以直接执行
    if (this.state === 'fulfilled') {
        // 但为了符合规范，仍然需要异步执行
        return new MyPromise((resolve, reject) => {
            setTimeout(() => {
                try {
                    const x = onFulfilled(this.value);
                    resolvePromise(promise2, x, resolve, reject);
                } catch (error) {
                    reject(error);
                }
            });
        });
    }
    // ... 其他代码
}
```

## 实际应用中的注意事项

### 1. 错误处理
```javascript
// 总是添加catch处理
promise
    .then(processData)
    .catch(handleError)
    .finally(cleanup);

// 或者在async/await中使用try-catch
async function process() {
    try {
        const result = await promise;
        // 处理结果
    } catch (error) {
        // 处理错误
    }
}
```

### 2. 取消功能
```javascript
// Promise原生不支持取消，但可以模拟
class CancelablePromise {
    constructor(executor) {
        let cancel;
        const promise = new MyPromise((resolve, reject) => {
            cancel = (reason) => {
                reject(new Error(reason || 'Cancelled'));
            };
            executor(resolve, reject);
        });
        
        promise.cancel = cancel;
        return promise;
    }
}
```

### 3. 超时处理
```javascript
MyPromise.prototype.timeout = function(ms, message = 'Timeout') {
    return MyPromise.race([
        this,
        new MyPromise((_, reject) => {
            setTimeout(() => reject(new Error(message)), ms);
        })
    ]);
};

// 使用
fetchData().timeout(5000, '请求超时').then(handleData).catch(handleError);
```

## 学习资源

### 官方文档
- [Promise/A+规范](https://promisesaplus.com/)
- [MDN Promise文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)

### 测试工具
- [promises-aplus-tests](https://github.com/promises-aplus/promises-tests)

### 进阶阅读
- [V8 Promise源码解析](https://v8.dev/blog/fast-async)
- [浏览器中的微任务与宏任务](https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)

---

*本文档详细解析了Promise的实现原理，通过手写Promise可以深入理解异步编程的核心机制。建议读者结合实际代码进行练习和测试。*