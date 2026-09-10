# node 核心模块

> 原文出处：https://blog.csdn.net/qq_35812380/article/details/124626900

## node 核心模块

### 零. path模块

```
const path = require('path')
console.log(__filename);

// 1. 获取路径中的基础名称
/*
1 返回接收路径中的最后一部分
2 第二个参数表示扩展名, 如果没有设置则返回完整文件名称带后缀

*/
console.log(path.basename(__filename));

console.log(path.basename(__filename, '.js'));

console.log(path.basename(__filename, '.css'));

console.log(path.basename('/a/b/c'));
console.log(path.basename('/a/b/c/'));

// 2. 获取路径目录名 (路径)
/*
1 返回路径中最后一个部分上一层目录所在路径
*/
console.log(path.dirname(__filename));

// 3.获取路径扩展名
/*
1 返回路径文件中相应文件的后缀名
*/
console.log(path.extname(__filename));

// 4. 解析路径

const obj = path.parse('/a/b/c')
console.log(obj);

// 5. 序列化路径
const obj1 = path.parse('/a/b/c')
console.log(path.format(obj1));

// 6. 是否为绝对路径
// path.isAbsolute('/foo')

// 7. 拼接路径
console.log(path.join('a/b', 'c','index.html'));//=>a\b\c\index.html
console.log(path.join('')); // => .

// 8.规范化路径
console.log(path.normalize('a///b/c')); // => a\b\c

// 9. 绝对路径
console.log(path.resolve('index.html'));

// 10.获取当前文件的上级目录

path.resolve(__dirname, '..')

// 11.上两级
console.log(path.resolve(__dirname, '../../'));

// 12. (获取根目录, 再连接)
 path.resolve(__dirname, '../vue2')// 获取根目录, 再连接// => C:\Users\leo\Desktop\micro-web\vue2
```

> 1、path.resolve()

作用：path.resolve() 该方法将一些的 路径/路径段 解析为绝对路径。

语法：path.resolve( [from…],to )

说明：将参数to位置的字符解析到一个绝对路径里，[from … ]为选填项，路径源；

用法：

```
var path = require("path")     //引入node的path模块

path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', 'baz')   // returns '/foo/bar/baz'
path.resolve('/foo/bar', '/baz')   // returns '/baz'
path.resolve('/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','/foo/bar', '../baz')   // returns '/foo/baz'
path.resolve('home','./foo/bar', '../baz')   // returns '/home/foo/baz'
path.resolve('home','foo/bar', '../baz')   // returns '/home/foo/baz'
```

总结：从后向前，若字符以 / 开头，不会拼接到前面的路径；若以 `.. /` 开头，拼接前面的路径，且不含最后一节路径；若以 ./ 开头 或者没有符号 则拼接前面路径；

另：path.resolve总是返回一个以相对于当前的工作目录（working directory）的绝对路径。

### 一. Buffer模块

> 一块内存空间

1, IO操作

2.Stream 流,充当缓冲区

```
let buf = Buffer.alloc(6)

//fill
// buf.fill('123')
// console.log(buf);
// console.log(buf.toString());

//write
console.log(buf.write('123'));

// toString

// slice

// indexOf  ===-1 不存在

// concat--------拼接buffer

// Buffer.concat([b1,b2])

// isBuffer------是否为Buffer类型
// Buffer.isBuffer(b1)

// 重写方法
ArrayBuffer.prototype.slice = function (sep) {
    ...
}
```

### 二. fs模块

1. readFile: 读文件
2. writeFile: 写文件
3. appendFile: 向文件追加数据
4. copyFile: 复制文件

```
const fs = require('fs')
const path = require('path')

// console.log(path.resolve(__dirname,'data.txt')); // 找到文件的绝对路径进行拼接

// readFile
// fs.readFile(path.resolve(__dirname,'data.txt'), 'utf-8', (err, data)=>{
//     if(err){
//         return;
//     }

//     console.log(data);

// })

// writeFile
// fs.writeFile(path.resolve(__dirname, 'demo.txt'), 'hello nodejs ', (err) => {
//     if (!err) {
//         // 将写入数据进行读取
//         fs.readFile(path.resolve(__dirname, 'demo.txt'), 'utf-8', (err, data) => {
//             if (err) {
//                 return;
//             }

//             console.log(data);

//         })

//     }
// })

// appendFile
fs.appendFile(path.resolve(__dirname, 'demo.txt'), 'tffans', (err) => {
        if (!err) {
            console.log('写入成功');


        }
})

// copyFile
fs.copyFile(path.resolve(__dirname, 'demo.txt'),path.resolve(__dirname, 'test.txt'), (err) => {
    if (!err) {
        console.log('拷贝成功');
    }
})

// watchFile 监控文件
// 20s 监控一次
// watchFile 通过定时轮询文件，检查文件是否发生变化
// 第二个参数如果是对象，则代表配置选项
//   interval 表示轮询文件的时间间隔 默认 `5007`
// 回调函数接收 current 和 previous 两个<fs.Stats>类 分别包含文件变化前后的相关信息
fs.watchFile('data.txt', { interval: 20 }, (current, previous) => {
    if (current.mtime !== previous.mtime) {
      // mtime 表示最新修改时间
      console.log('文件内容被修改')
    }
  })

// 调用 API 修改文件
// 也可以手动打开文件去修改内容
fs.writeFile('data.txt', 'Hello', err => {
    console.log('写入内容')
    setTimeout(() => {
      fs.writeFile('data.txt', 'Hello', err => {
        console.log('写入内容相同')
      })
    }, 1000)
  })

  // 写入内容
  // 文件内容被修改
  // 写入内容相同
  // 文件内容被修改

  // watchFile 监听任务会一直持续，控制台不会退出
  // 需要手动停止监听，当删除了所有监听器，程序就会停止运行
  // 第二个参数可以指定要删除的监听器(watchFile 的回调函数)，如果不指定则删除指定文件的全部监听器
  setTimeout(() => {
    fs.unwatchFile('data.txt')
  }, 3000)
```

```
文件操作实现 md 转 html
安装模块
marked：将 markdown 内容转化成 html 的工具，官方文档
browser-sync：开启一个 Web 站点打开 html 页面，并实时更新，官方文档
默认样式表
如果你使用 Typora，可以在主题文件夹中选择一个样式表，例如本例使用的 github.css。

示例 markdown 文件
index.md：

# 文件操作实现 md 转 html

## 安装模块

- marked：将 markdown 内容转化成 html 的工具，[官方文档](https://marked.js.org/)
- browser-sync：开启一个 Web 站点打开 html 页面，并实时更新，[官方文档](https://browsersync.io/docs/api)

实现命令
# mdToHtml.js：应用程序文件
# markdown path：markdown 文件路径
node mdToHtml.js <markdown path>
```

编写程序

```
const fs = require('fs')
const path = require('path')
const marked = require('marked')
const browserSync = require('browser-sync')

// 01 读取 markdown 和 css 的内容
// 02 将上述读取的内容，替换模板中的占位符，生成最终需要展示的 html 字符串
// 03 将最终 html 字符串写入到指定的 html 文件中
// 04 监听 markdown 文件内容的变化，实时更新 html 内容
// 05 实时显示 html 内容

// html 模板
const temp = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <style>
    {{style}}
  </style>
</head>
<body>{{content}}</body>
</html>
`

// markdown 文件路径
const mdPath = path.join(__dirname, process.argv[2])
// css 文件路径
const cssPath = path.resolve('github.css')
// html 最终转化的文件路径
// 指定为与 markdown 文件同目录下的同名 html 文件
const htmlPath = mdPath.replace(path.extname(mdPath), '.html')

// 监听 markdown 文件
fs.watchFile(mdPath, (current, previous) => {
  if (current.mtime !== previous.mtime) {
    // 读取 markdown 内容
    fs.readFile(mdPath, 'utf8', (err, data) => {
      // 将 markdown 转化为 html
      const content = marked(data)
      // 读取 css 内容
      fs.readFile(cssPath, 'utf8', (err, style) => {
        // 替换内容
        const html = temp.replace('{{style}}', style).replace('{{content}}', content)

        // 写入指定 html 文件
        fs.writeFile(htmlPath, html, err => {
          console.log('写入成功')
        })
      })
    })
  }
})

// 开启服务 显示 html 内容
browserSync.init({
  server: {
    baseDir: __dirname, // 服务的根目录
    index: path.basename(htmlPath) // 指定首页的文件名
  },
  watch: true // 监听更新
})
```

执行命令  `node mdToHtml.js index.md`

### 三. 目录api

### 四. 模块化历程

> 程序化的结构和组织方式拆分之后而生成的小而精，并且具有低耦合特点的松散片段

组件化前端开发

传统开发常见问题：

* 命名冲突和污染
* 代码冗余，无效请求过多，影响加载速度
* 文件间的依赖关系复杂，容易出错

#### CommonJS 规范

> node 项目中常用

`module.exports`

果其它的模块想要使用这些数据，可以使用 `require` 语法进行加载。

#### AMD规范

AMD 规范中提供了 `define` `require` 两个关键字实现模块化的操作。

#### ES Module 规范

> 浏览器环境使用

提供了 `import` 和 `export` 关键字实现模块的导入导出，同时还有 `as` `export default` 这样的特有语法。

#### Nodejs 与 CommonJS

#### 模块导入与导出

#### module.exports 和 exports 有什么区别?

规定了通过 module.exports 执行模块的导出数据操作。

而单个 exports 实际上是 Nodejs 自己为了方便操作，提供给每个模块的变量，它实际上指向了 module.exports 指向的内存地址（对象引用地址）。

因此可以直接通过 exports 导出相应的内容，不能直接直接给 exports 重新赋值，这等于切断了 exports 和 module.exports 之间的联系。

```
// m.js
const age = 18

const addFn = (x, y) => {
  return x + y
}

module.exports = {
  age,
  addFn
}

/*

// 或者这样导出
exports.age = age
exports.addFn = addFn

// 但是不能这样,因为这样切断了 exports 和 module.exports 之间的联系。
exports = { //输出结果为=>
  age,
  addFn
}

 */
```

```
// main.js
const obj = require('./m.js')
console.log(obj) // { age: 18, addFn: [Function: addFn] }
```

### 五. 事件—events

> EventEmitter类

* on =====>addEventListener
* emit: 触发事件
* once: 首次触发
* off: 移除监听=====>removeEventListener

```
const EventEmitter = require('events')

const ev = new EventEmitter()

// on
ev.on('事件1', () => {
  console.log('事件1执行')
})

const handler = () => {
  console.log('事件1执行---顺序2')
}
ev.on('事件1', handler)

// once
ev.once('事件2', () => {
  console.log('事件2执行')
})

// emit
ev.emit('事件1')
ev.emit('事件1')
ev.emit('事件2')
ev.emit('事件2')

// off
ev.off('事件1', handler)
ev.emit('事件1')

// 注册的处理函数也可以传参：
const EventEmitter = require('events')

const ev = new EventEmitter()

ev.on('事件1', (a, b) => {
  console.log(a, b)
})

ev.emit('事件1', 1, 2)

// 事件处理函数（非箭头函数）中的 this 指向 EventEmitter 实例：
ev.on('事件1', function() {
  console.log(this)
  console.log(this === ev) // true
})
ev.on('事件1', () => {})
ev.on('事件2', () => {})
ev.emit('事件1')
```

```
// EventEmitter 实例中可以查看监听了什么事件以及每个事件上绑定的处理函数，例如：

EventEmitter {
  _events: [Object: null prototype] {
    '事件1': [ [Function], [Function] ],
    '事件2': [Function]
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  [Symbol(kCapture)]: false
}
```

#### 事件驱动发布-订阅模式

简单模拟发布订阅模式

```
class PubSub {
  constructor() {
    this._events = {}
  }

  // 注册
  subscribe(event, callback) {
    if (!this._events[event]) {
      this._events[event] = []
    }
    this._events[event].push(callback)
  }

  // 发布
  publish(event, ...args) {
    const items = this._events[event]
    if (items && items.length) {
      items.forEach(callback => {
        callback(...args)
      })
    }
  }
}

const ps = new PubSub()

ps.subscribe('事件1', function () {
  console.log('事件1执行')
})
ps.subscribe('事件1', function () {
  console.log('事件1执行----2')
})

ps.publish('事件1')
ps.publish('事件1')
```

### 五. 浏览器中的 Event Loop

#### 完整事件循环执行顺序

* 从上到下执行所有的同步代码
* 执行过程中将遇到的宏任务和微任务添加到相应的队列
* 同步代码执行完毕后，执行满足条件的微任务回调
* 微任务队列执行完毕后执行所有满足需求的宏任务回调
* 循环上述操作
* \*注意：每执行一个宏任务之后都会立刻检查微任务队列

```
// 宏任务
setTimeout(() => {
  console.log('s1')
  // 微任务
  Promise.resolve().then(() => {
    console.log('p1')
  })
  // 微任务
  Promise.resolve().then(() => {
    console.log('p2')
  })
})

// 宏任务
setTimeout(() => {
  console.log('s2')
  // 微任务
  Promise.resolve().then(() => {
    console.log('p3')
  })
  // 微任务
  Promise.resolve().then(() => {
    console.log('p4')
  })
})
```

* 最终打印结果：`s1 p1 p2 s2 p3 p4`

```
setTimeout(() => {
  console.log('s1')
  Promise.resolve().then(() => {
    console.log('p2')
  })
  Promise.resolve().then(() => {
    console.log('p3')
  })
})

Promise.resolve().then(() => {
  console.log('p1')
  setTimeout(() => {
    console.log('s2')
  })
  setTimeout(() => {
    console.log('s3')
  })
})
```

* 最终打印结果：`s1 p1 p2 p3 s2 s3`

…
