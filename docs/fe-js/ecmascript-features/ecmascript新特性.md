# ECMAScript 新特性

> 本文档系统讲解 ECMAScript 自 ES2015（ES6）以来的重要新特性，从语言基础到高级特性，帮助你掌握现代 JavaScript 开发所需的核心知识。

## 目录

- 1. 课程介绍
- 2. ECMAScript 概述
- 3. ES2015 概述
- 4. ES2015 准备工作
- 5. ES2015 let 与块级作用域
- 6. ES2015 const
- 7. ES2015 数组的解构
- 8. ES2015 对象的解构
- 9. ES2015 模板字符串
- 10. ES2015 带标签的模板字符串
- 11. ES2015 字符串的扩展方法
- 12. ES2015 参数默认值
- 13. ES2015 剩余参数
- 14. ES2015 展开数组
- 15. ES2015 箭头函数
- 16. ES2015 箭头函数与 this
- 17. ES2015 对象字面量的增强
- 18. ES2015 Object.assign
- 19. ES2015 Object.is
- 20. ES2015 Proxy
- 21. ES2015 Proxy 对比 defineProperty
- 22. ES2015 Reflect
- 23. ES2015 Promise
- 24. ES2015 class 类
- 25. ES2015 静态方法
- 26. ES2015 类的继承
- 27. ES2015 Set
- 28. ES2015 Map
- 29. ES2015 Symbol
- 30. ES2015 Symbol 补充
- 31. ES2015 for...of 循环
- 32. ES2015 可迭代接口
- 33. ES2015 实现可迭代接口
- 34. ES2015 迭代器模式
- 35. ES2015 生成器
- 36. ES2015 生成器应用
- 37. ES2015 ES Modules
- 38. ES2016 概述
- 39. ES2017 概述

---

## 1. 课程介绍

### 课程目标

系统讲解 ECMAScript 自 ES2015 以来的重要新特性，从语言基础到高级特性，掌握现代 JavaScript 开发的核心知识。



---

## 2. ECMAScript 概述

### 什么是 ECMAScript

ECMAScript（简称 ES）是由 ECMA 国际制定的**脚本语言标准**（标准编号 ECMA-262）。JavaScript 是 ECMAScript 最主流的实现。

### 版本历史

| 版本 | 年份 | 别名 | 重要特性 |
| --- | --- | --- | --- |
| ES1 | 1997 | — | 初版 |
| ES3 | 1999 | — | 正则、异常处理 |
| ES5 | 2009 | ES5 | 严格模式、JSON、数组方法 |
| ES2015 | 2015 | ES6 | 革命性更新 |
| ES2016 | 2016 | ES7 | 年度发布模式 |
| ES2017 | 2017 | ES8 | async/await |

---

## 3. ES2015 概述

ES2015（即 ES6）是 ECMAScript 历史上最大的一次更新，引入了大量改变开发方式的新特性：

- 变量声明：`let`、`const`，块级作用域
- 解构赋值：数组、对象
- 模板字符串与带标签模板
- 函数增强：参数默认值、剩余参数、展开运算符、箭头函数
- 对象增强：属性简写、计算属性名、`Object.assign`、`Object.is`
- 元编程：`Proxy`、`Reflect`
- 异步：`Promise`
- 面向对象：`class`、继承、`static`
- 集合：`Set`、`Map`
- 原始类型：`Symbol`
- 迭代协议：`for...of`、可迭代接口、迭代器
- 生成器：`function*`
- 模块化：`ES Modules`

---

## 4. ES2015 准备工作

### 运行环境

- 现代浏览器（Chrome / Firefox / Safari / Edge）原生支持大部分 ES2015 特性
- Node.js（建议 6+ 版本）可直接运行
- 兼容旧环境可使用 Babel 转译

### 快速验证

```js
// 在浏览器控制台或 node 中执行
const greet = name => `Hello, ${name}!`;
console.log(greet('ES2015'));
```

### 目录约定

本系列示例均为独立小片段，可直接复制到控制台运行。

---

## 5. ES2015 let 与块级作用域

### 问题背景

`var` 只有函数作用域和全局作用域，存在变量提升与污染问题：

```js
if (true) {
  var a = 1;
}
console.log(a); // 1，a 泄漏到外层
```

### let 的块级作用域

```js
if (true) {
  let b = 2;
}
console.log(b); // ReferenceError: b is not defined
```

### 不存在变量提升（暂时性死区）

```js
console.log(c); // ReferenceError（TDZ）
let c = 3;

// 若用 var，则输出undefined
```


### 不能重复声明

```js
let d = 1;
let d = 2; // SyntaxError
```

### for 循环中的经典应用

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 0 1 2
}
// 若用 var，则输出三个 3
```

---

## 6. ES2015 const

### 声明常量

`const` 声明一个**只读**的常量，必须在声明时赋值：

```js
const PI = 3.14159;
PI = 3; // TypeError: Assignment to constant variable
```

### 块级作用域

与 `let` 一样，`const` 也具备块级作用域与暂时性死区。

### 对象 / 数组是可变的

`const` 只保证**绑定不变**，不保证值不可变：

```js
const obj = { name: 'Tom' };
obj.name = 'Jerry'; // 允许
obj = {};           // TypeError

const arr = [1, 2];
arr.push(3); // 允许
```

### 使用建议

默认用 `const`，确实需要重新赋值时才用 `let`，避免使用 `var`。

---

## 7. ES2015 数组的解构

### 基本用法

```js
const arr = [1, 2, 3];
const [a, b, c] = arr;
console.log(a, b, c); // 1 2 3
```

### 跳过元素

```js
const [ , , third] = [1, 2, 3];
console.log(third); // 3
```

### 设置默认值

```js
const [x = 0, y = 0] = [1];
console.log(x, y); // 1 0
```

### 剩余元素

```js
const [first, ...rest] = [1, 2, 3, 4];
console.log(rest); // [2, 3, 4]
```

### 交换变量

```js
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2 1
```

---

## 8. ES2015 对象的解构

### 基本用法

```js
const obj = { name: 'Tom', age: 18 };
const { name, age } = obj;
console.log(name, age); // Tom 18
```

### 重命名

```js
const { name: userName } = obj;
console.log(userName); // Tom
```

### 设置默认值

```js
const { gender = 'unknown' } = obj;
console.log(gender); // unknown
```

### 嵌套解构

```js
const user = { info: { id: 1, name: 'A' } };
const { info: { id, name } } = user;
```

### 解构参数

```js
function print({ name, age }) {
  console.log(name, age);
}
print({ name: 'Tom', age: 18 });
```

---

## 9. ES2015 模板字符串

### 基本语法

使用反引号（`）包裹，支持多行与插值：

```js
const name = 'Tom';
const msg = `Hello, ${name}!
Welcome to ES2015.`;
console.log(msg);
```

### 插值表达式

`${}` 内可以是任意合法表达式：

```js
const a = 1, b = 2;
console.log(`${a} + ${b} = ${a + b}`); // 1 + 2 = 3
```

### 多行文本

```js
const html = `
  <div>
    <p>line 1</p>
    <p>line 2</p>
  </div>
`;
```

---

## 10. ES2015 带标签的模板字符串

### 标签函数

模板字符串前可以加一个函数名，称为「标签」：

```js
const result = tag`Hello ${'world'}`;
```

### 工作原理

标签函数接收两部分参数：

1. `strings`：静态文本数组
2. 后续参数：每个插值表达式的值

```js
function tag(strings, ...values) {
  console.log(strings); // ["Hello ", ""]
  console.log(values);  // ["world"]
  return 'processed';
}

const name = 'world';
console.log(tag`Hello ${name}`); // processed
```

### 应用场景

- 防止 XSS 的 HTML 转义（`html` 标签）
- 国际化（i18n）
- 样式化字符串（如 styled-components）

---

## 11. ES2015 字符串的扩展方法

### includes / startsWith / endsWith

```js
const str = 'Hello ES2015';
str.includes('ES');        // true
str.startsWith('Hello');   // true
str.endsWith('2015');      // true
```

### repeat

```js
'x'.repeat(3); // "xxx"
```

### padStart / padEnd（ES2017，常一并介绍）

```js
'5'.padStart(2, '0'); // "05"
'5'.padEnd(3, '0');   // "500"
```

### 模板字符串与遍历

字符串可迭代，`for...of` 可按字符遍历（含 Unicode 码点）。

---

## 12. ES2015 参数默认值

### 基本用法

```js
function greet(name = 'Guest') {
  return `Hello, ${name}`;
}
greet();        // "Hello, Guest"
greet('Tom');   // "Hello, Tom"
```

### 默认值表达式

默认值可以是函数调用等表达式（惰性求值）：

```js
function foo(x = Math.random()) {
  return x;
}
```

### 与解构结合

```js
function request({ url, method = 'GET' } = {}) {
  console.log(method);
}
```

### 注意事项

- 默认值参数之后的参数也应给默认值，否则需显式传 `undefined` 才能触发
- 参数默认值是独立作用域，不能引用同作用域后的参数（早期 TDZ 报错）

---

## 13. ES2015 剩余参数

### 语法

使用 `...` 收集剩余参数为真正的数组：

```js
function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6
```

### 与 arguments 对比

| 特性 | arguments | 剩余参数 |
| --- | --- | --- |
| 类型 | 类数组 | 真数组 |
| 箭头函数 | 不可用 | 可用 |
| 命名 | 无 | 可命名 |

### 与解构组合

```js
function fn(first, ...rest) {
  console.log(first, rest);
}
fn(1, 2, 3); // 1 [2, 3]
```

---

## 14. ES2015 展开数组

### 基本用法

`...` 将数组「展开」为独立元素：

```js
const arr = [1, 2, 3];
console.log(...arr); // 1 2 3
```

### 合并数组

```js
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1, 2, 3, 4]
```

### 复制数组（浅拷贝）

```js
const copy = [...arr];
```

### 替代 apply

```js
Math.max(...[1, 5, 3]); // 5
```

---

## 15. ES2015 箭头函数

### 语法

```js
const add = (a, b) => a + b;
const square = x => x * x;
const greet = () => 'hi';
```

### 多语句函数体

```js
const fn = x => {
  const y = x + 1;
  return y;
};
```

### 返回对象字面量

需用括号包裹，避免被解析为函数体：

```js
const obj = () => ({ name: 'Tom' });
```

### 特性总结

- 更简洁的语法
- 没有自己的 `this`、`arguments`、`super`、`new.target`
- 不能用作构造函数（不能用 `new`）

---

## 16. ES2015 箭头函数与 this

### 关键区别

箭头函数**不绑定自己的 `this`**，而是继承外层词法作用域的 `this`。

```js
const obj = {
  name: 'Tom',
  say: function () {
    setTimeout(() => {
      console.log(this.name); // Tom，继承 say 的 this
    }, 0);
  }
};
obj.say();
```

### 对比普通函数

```js
const obj2 = {
  name: 'Tom',
  say() {
    setTimeout(function () {
      console.log(this.name); // undefined，this 指向全局
    }, 0);
  }
};
```

### 适用场景

- 回调函数中需要访问外层 `this`
- 数组方法（`map`、`filter`、`forEach`）回调

### 不适用场景

- 对象方法（需要动态 `this` 时）
- 构造函数
- 需要使用 `arguments` 时

---

## 17. ES2015 对象字面量的增强

### 属性简写

```js
const name = 'Tom';
const age = 18;
const user = { name, age }; // 等同于 { name: name, age: age }
```

### 方法简写

```js
const obj = {
  say() { return 'hi'; } // 等同于 say: function() {}
};
```

### 计算属性名

```js
const key = 'level';
const obj = {
  [key]: 1,
  [`${key}Name`]: 'A'
};
// { level: 1, levelName: 'A' }
```

---

## 18. ES2015 Object.assign

### 作用

将一个或多个源对象的可枚举属性**拷贝**到目标对象，返回目标对象。

```js
const target = { a: 1 };
const source = { b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }
```

### 合并多个对象

```js
const merged = Object.assign({}, { a: 1 }, { b: 2 }, { a: 3 });
// { a: 3, b: 2 }，后者覆盖前者
```

### 浅拷贝

只复制一层，嵌套对象为引用：

```js
const o1 = { nested: { x: 1 } };
const o2 = Object.assign({}, o1);
o2.nested.x = 9;
console.log(o1.nested.x); // 9
```


### 深拷贝
```js
JSON.parse(JSON.stringify(original))

// 使用 Lodash 库的 
_.cloneDeep(original)
```


```js
function deepClone(obj){
  // 1. 基础类型直接返回（包括 null）
  // 基础类型（number, string, boolean, null, undefined, symbol, function）直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  // 2. 新建容器：数组还是对象
  const newObj = Array.isArray(obj) ? [] : {};

  // 3. 遍历并递归赋值
  for (let key in obj) {
    // 只拷贝对象自身的属性（不拷贝原型链上的）
    if (obj.hasOwnProperty(key)) {
      newObj[key] = simpleDeepClone(obj[key]);
    }
  }

  return newObj;
}
```




### 应用场景

- 对象合并配置
- 复制对象做默认值填充

---

## 19. ES2015 Object.is

### 与 === 的区别

`Object.is` 处理了两个 `===` 的特殊边界：

```js
NaN === NaN;        // false
Object.is(NaN, NaN); // true

+0 === -0;          // true
Object.is(+0, -0);  // false
```

### 用法

```js
Object.is('foo', 'foo'); // true
Object.is({}, {});       // false
```

### 结论

绝大多数情况用 `===` 即可；需精确判断 `NaN` 或 `+0 / -0` 时才用 `Object.is`。

---

## 20. ES2015 Proxy

### 概念

`Proxy` 用于创建一个对象的**代理**，拦截并自定义其基本操作（读取、赋值、删除等）。

```js
const target = { name: 'Tom' };
const proxy = new Proxy(target, {
  get(obj, prop) {
    return prop in obj ? obj[prop] : 'default';
  },
  set(obj, prop, value) {
    obj[prop] = value;
    return true;
  }
});

proxy.age;      // 'default'
proxy.name = 'Jerry';
target.name;    // 'Jerry'（操作的是原对象）
```

### 常用拦截器

- `get` / `set` / `has` / `deleteProperty`
- `apply`（函数调用）/ `construct`（new）
- `ownKeys` / `getOwnPropertyDescriptor`

---

## 21. ES2015 Proxy 对比 defineProperty

### Object.defineProperty 的局限

```js
const obj = {};
Object.defineProperty(obj, 'x', {
  get() { return 1; },
  set(v) { console.log('set', v); }
});
```

问题：

- 需逐个属性定义，**无法监听新增/删除属性**
- 数组的索引变化、长度变化难以监听

### Proxy 的优势

- **代理整个对象**，自动覆盖所有属性（含新增）
- 支持数组、函数、Map/Set 等
- 拦截操作种类更丰富

### 对比表

| 维度 | defineProperty | Proxy |
| --- | --- | --- |
| 监听范围 | 已有属性 | 全部属性（含新增） |
| 数组 | 困难 | 容易 |
| 性能 | 初始化快 | 运行时略慢 |
| 兼容性 | 好 | ES2015+ |

> Vue 3 正是用 Proxy 重写了响应式系统替代 Vue 2 的 defineProperty。

---

## 22. ES2015 Reflect

### 概念

`Reflect` 是一个内置对象，提供了一系列**静态方法**，用于替代 `Object` 上一些命令式操作，并与 `Proxy` 的拦截器一一对应。

### 常用方法

```js
Reflect.get(obj, 'name');
Reflect.set(obj, 'name', 'Tom');
Reflect.has(obj, 'name');     // 等价 'name' in obj
Reflect.deleteProperty(obj, 'name');
Reflect.ownKeys(obj);
```

### 与 Proxy 配合

`Reflect` 的方法签名与 `Proxy` 陷阱一致，便于在拦截器中「默认转发」：

```js
const proxy = new Proxy(target, {
  get(target, prop, receiver) {
    console.log('get', prop);
    return Reflect.get(target, prop, receiver);
  }
});
```

### 优点

- 返回布尔值（如 `deleteProperty`），更易判断成败
- 函数式调用，避免 `Object` 的怪异行为

---

## 23. ES2015 Promise

### 概念

`Promise` 解决了**传统异步编程中回调函数嵌套过深的问题**

```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('done'), 1000);
});

promise
  .then(value => console.log(value))
  .catch(err => console.error(err));
```

### 状态

- `pending`：进行中
- `fulfilled`：已成功
- `rejected`：已失败

状态一旦改变就不可逆。

### 链式调用

```js
fetch('/api')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### 静态方法

```js
Promise.all([p1, p2]);      // 全部成功才成功
Promise.race([p1, p2]);     // 谁先结束用谁
Promise.resolve(value);
Promise.reject(error);
```

---

## 24. ES2015 class 类

### 基本语法

`class` 是**基于原型的继承**的语法糖，让面向对象写法更清晰：

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  say() {
    return `I'm ${this.name}`;
  }
}

const p = new Person('Tom');
p.say(); // "I'm Tom"
```

### 本质是函数

```js
typeof Person; // "function"
Person === Person.prototype.constructor; // true
```

### 注意事项

- 类声明**不会提升**（TDZ）
- 类内部方法**不可枚举**（不同于 ES5 构造函数原型方法）
- 类内部默认严格模式

---

## 25. ES2015 静态方法

### static 关键字

`static` 定义的方法属于类本身，而非实例：

```js
class MathUtil {
  static add(a, b) {
    return a + b;
  }
}

MathUtil.add(1, 2); // 3
// new MathUtil().add 不存在
```

### 静态属性（约定写法）

ES2015 规范未标准化静态属性声明，通常用：

```js
class Config {
  static version = '1.0'; // 后续标准支持
}
```

### 应用场景

- 工具方法集合
- 工厂方法

```js
class Person {
  constructor(name) { this.name = name; }
  static create(name) { return new Person(name); }
}
```

---

## 26. ES2015 类的继承

### extends 与 super

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 必须在使用 this 前调用
  }
  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog('Rex');
dog.speak(); // "Rex barks"
```

### super 的两种用法

- `super()`：在子构造函数中调用父类构造函数
- `super.method()`：调用父类方法

### 注意事项

- 子类构造函数必须在使用 `this` 前调用 `super()`
- 静态方法也会被继承

---

## 27. ES2015 Set

### 概念

`Set` 是**值的集合**，成员**唯一、无序**。

```js
const set = new Set([1, 2, 2, 3]);
set.size; // 3
set.has(2); // true
```

### 常用方法

```js
set.add(4);
set.delete(1);
set.has(1);   // false
set.forEach(v => console.log(v));
set.clear();
```

### 数组去重

```js
const arr = [1, 1, 2, 3, 3]
// const unique = Array.from(new Set(arr)) // [1, 2, 3]

const unique = [...new Set(arr)]; // [1, 2, 3]
```

### 可迭代

`Set` 实现了可迭代接口，可用 `for...of` 遍历。

---

## 28. ES2015 Map

### 概念

`Map` 是**键值对集合**，键可以是任意类型（对象、函数等），不会像对象那样被强制转为字符串。

```js
const map = new Map();
const key = { id: 1 };
map.set(key, 'value');
map.get(key); // 'value'
map.has(key); // true
```

### 常用方法

```js
map.set('name', 'Tom');
map.get('name');   // 'Tom'
map.size;
map.delete('name');
map.clear();
map.forEach((value, key) => console.log(key, value));
```

### Map 与 Object 对比

| 维度 | Object | Map |
| --- | --- | --- |
| 键类型 | string / symbol | 任意类型 |
| 大小 | 需手动计算 | `size` |
| 迭代 | 需转换 | 原生可迭代 |
| 默认键 | 有原型链键 | 无 |

---

## 29. ES2015 Symbol

### 概念

`Symbol` ，
- 表示**唯一的、不可变**的值
- 常用作对象属性的唯一键，
- **避免`key`命名冲突**。

```js
const s1 = Symbol('desc');
const s2 = Symbol('desc');
s1 === s2; // false
```

### 作为属性键

```js
const KEY = Symbol('key');
const obj = {
  [KEY]: 'secret'
};
obj[KEY]; // 'secret'
```

### 内置 Symbol

语言内部用 `Symbol.iterator`、`Symbol.toStringTag` 等控制对象行为。

### 获取 Symbol 键

```js
Object.getOwnPropertySymbols(obj); // [Symbol(key)]
```

---

## 30. ES2015 Symbol 补充

### Symbol.for / Symbol.keyFor

`Symbol.for` 在全局注册表中按描述符查找/创建共享 Symbol：

```js
const a = Symbol.for('app');
const b = Symbol.for('app');
a === b; // true

Symbol.keyFor(a); // 'app'
```

### Symbol 与隐私

Symbol 键**不会被常规遍历**（`for...in`、`Object.keys`）枚举到，因此可用于「伪私有」属性（但 `Object.getOwnPropertySymbols` 仍可获取）。

### 常用内置 Symbol 举例

- `Symbol.iterator`：定义迭代行为
- `Symbol.toStringTag`：定制 `Object.prototype.toString` 返回值
- `Symbol.hasInstance`：定制 `instanceof`

```js
const obj = {
  [Symbol.toStringTag]: 'MyObj'
};
Object.prototype.toString.call(obj); // "[object MyObj]"
```

---

## 31. ES2015 for...of 循环

### 基本用法

`for...of` 用于遍历**可迭代对象**的元素（值）：

```js
const arr = [1, 2, 3];
for (const item of arr) {
  console.log(item); // 1 2 3
}
```

### 与 for...in 的区别

| 维度 | for...of | for...in |
| --- | --- | --- |
| 遍历 | 值 | 键（索引/属性名） |
| 适用 | 可迭代对象 | 任意对象 |
| 顺序 | 迭代顺序 | 不保证顺序 |

```js
const arr = ['a', 'b'];
for (const k in arr) console.log(k);  // '0' '1'
for (const v of arr) console.log(v);  // 'a' 'b'
```

### 可配合 break / continue / return

```js
for (const x of [1, 2, 3]) {
  if (x === 2) break;
  console.log(x); // 1
}
```

---

## 32. ES2015 可迭代接口

### 概念

可迭代接口（Iterable Protocol）
规定：
一个对象只要实现了 **`Symbol.iterator` 方法**，并返回一个**迭代器**，就是可迭代的。

```js
const arr = [1, 2, 3];
const iterator = arr[Symbol.iterator]();

iterator.next()
```

### 内建可迭代对象

- `Array`、`String`、`Set`、`Map`
- `arguments`、`NodeList`

### 为什么需要它

`for...of`、展开运算符 `...`、解构、`Promise.all` 等都依赖可迭代接口。

### 检测

```js
typeof obj[Symbol.iterator] === 'function'; // 是否可迭代
```

---

## 33. ES2015 实现可迭代接口

### 自定义可迭代对象

在对象上实现 `Symbol.iterator`，返回带 `next()` 的迭代器：

```js
const counter = {
  [Symbol.iterator]() {
    let count = 1;
    return {
      next() {
        if (count <= 3) {
          return { value: count++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const n of counter) {
  console.log(n); // 1 2 3
}
```

### 迭代器协议

`next()` 返回对象 `{ value, done }`：

- `value`：当前值
- `done`：是否结束

---

## 34. ES2015 迭代器模式

1. 原写法（硬编码循环）
```js
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶']
};

// 手动遍历每个分类
for (const item of todos.life) {
    console.log(item);
}
for (const item of todos.learn) {
    console.log(item);
}
for (const item of todos.work) {
    console.log(item);
}

```

方案1：使用 Object.values() 扁平化遍历（简单重构）

```js
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶']
};

// 一次性遍历所有分类的待办项
for (const category of Object.values(todos)) {
    for (const item of category) {
        console.log(item);
    }
}
```

方案2：让 todos 自身成为可迭代对象（自定义迭代器）
```js
const todos = {
    life: ['吃饭', '睡觉', '打豆豆'],
    learn: ['语文', '数学', '外语'],
    work: ['喝茶'],

    // // ❌ 手动实现（繁琐、急切复制、易出错）
    // 第一段（硬编码）：
    // [Symbol.iterator]: function () {
    //     const all = [...this.life, ...this.learn, ...this.work];
    //     let i = 0;
    //     return { next: () => ({ value: all[i], done: i++ >= all.length }) };
    // }

    // // ✅ 生成器实现（优雅、惰性、原生支持）
    // 第二段（硬编码）：
    // [Symbol.iterator]: function* () {
    //     yield* this.life;
    //     yield* this.learn;
    //     yield* this.work;
    // }

    // 自定义迭代器
    // 第三段（动态生成器）
    // [Symbol.iterator]: function* () {
    //     // 遍历对象自身的所有属性值（假设都是数组）
    //     for (const category of Object.values(this)) {
    //         yield* category;  // 委托给数组的迭代器，逐个产出元素
    //     }
    // }


   // 升级版动态迭代器：保留类目信息
    [Symbol.iterator]: function* () {
        for (const [key, list] of Object.entries(this)) {
            for (const item of list) {
                yield { category: key, item }; // 返回包含类目的对象
            }
        }
    }
};

// // 现在可以像遍历数组一样遍历 todos
// for (const item of todos) {
//     console.log(item);
// }



// 使用时，可以同时拿到类目和事项
for (const todo of todos) {
    console.log(`${todo.category}: ${todo.item}`);
}
// 输出：
// life: 吃饭
// life: 睡觉
// ...
// work: 喝茶
```



### 惰性迭代

迭代器可做到「按需产生」值，节省内存（如生成无限序列）。

### 对比：不用迭代器 vs 用结构化迭代器（React / Vue 模板渲染）

上面的「升级版动态迭代器」让 `todos` 自身成为可迭代对象，且 `next().value` 直接返回 `{ category, item }`。对比在 React / Vue 模板中渲染同样的数据结构，能直观看出差别。

**场景 1：不用迭代器（传统写法）**

前端需要先手动处理数据结构，再渲染。代码冗余且容易写错。

```jsx
// React 示例：需要先获取数据，再手动 Object.entries 嵌套循环
function TodoList({ todos }) {
  return (
    <ul>
      {Object.entries(todos).map(([category, items]) => 
        items.map((item, idx) => (
          // 注意：这里为了加分类标签，必须写两层 map
          <li key={`${category}-${idx}`}>
            <span className="tag">{category}</span>：{item}
          </li>
        ))
      )}
    </ul>
  );
}
```

痛点：`Object.entries(todos).map().items.map()` 双重嵌套，如果结构再复杂（如三层），代码立马变成“面包屑”地狱。

**场景 2：使用我们的结构化迭代器（推荐写法）**

因为 `todos` 本身已经是可迭代对象，且 `next().value` 直接返回 `{ category, item }`，前端只需要一层循环：

```jsx
// React 示例：直接把 todos 当数组遍历，所有转换逻辑已被迭代器“吃掉”
function TodoList({ todos }) {
  return (
    <ul>
      {[...todos].map(({ category, item }) => ( // 注意这里直接解构！
        <li key={`${category}-${item}`}>
          <span className="tag">{category}</span>：{item}
        </li>
      ))}
    </ul>
  );
}
```

核心收益：

- 模板里**只剩一层循环**，结构越复杂收益越大；
- 数据「扁平化 + 携带类目」的转换逻辑被封装进了迭代器，模板只关心渲染；
- `key` 可直接用 `${category}-${item}`，无需依赖不稳定索引 `idx`。

> Vue 模板同理：`todos` 用结构化迭代器后，`<template v-for="{ category, item } in todos">` 即可一层遍历，无需 `v-for` 嵌套。

### 实战：React Hooks + 远程数据（迭代器写法）

真实项目中 `todos` 是异步从接口拉取的，本地并不存在那个「可迭代对象」。做法不变：**拿到原始数据后，用同一个迭代器逻辑包一层，组件里永远只写一层循环**。

```jsx
import { useEffect, useState } from 'react';

// 1) 把「原始分类数据」包装成结构化可迭代对象（与第 34 节同一套迭代器）
function asTodoIterable(raw) {
  return {  
     *[Symbol.iterator]() {
      for (const [category, list] of Object.entries(raw)) {
        // 加一行防御：只迭代数组，忽略 null/数字/字符串
        if (Array.isArray(list)) {  
          for (const item of list) {
            yield { category, item };
          }
        }
      }
    }
  };
}

// 2) 远程获取数据
function useTodos() {
  // 初始空状态也必须可迭代，否则首屏 [...todos] 会报错
  const empty = { *[Symbol.iterator]() {} };
  const [todos, setTodos] = useState(empty);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    fetch('/api/todos')
      .then(res => res.json())
      .then(data => {
        if (alive) {
          setTodos(asTodoIterable(data)); // 数据到位即转成可迭代对象
          setLoading(false);
        }
      });
    return () => { alive = false; };
  }, []);

  // 直接返回已包装好的可迭代对象
  return { todos, loading };
}

// 3) 组件渲染——始终一层循环
function TodoList() {
  const { todos, loading } = useTodos();

  if (loading) return <p>加载中…</p>;

  return (
    <ul>
      {[...todos].map(({ category, item }) => (
        <li key={`${category}-${item}`}>
          <span className="tag">{category}</span>：{item}
        </li>
      ))}
    </ul>
  );
}
```

要点：

- `asTodoIterable` 把「远程原始结构」转成结构化可迭代对象，**与模板解耦**——接口字段名变了，只改这一处；
- **转换放在 `useEffect` 内**：数据到达后才 `setTodos(asTodoIterable(data))`，状态本身即是可迭代对象，避免每次渲染重复包装、引用稳定（利于 `React.memo` / 依赖比较）；
- **初始空状态也必须可迭代**（`empty`），否则首屏模板里 `[...todos]` 会因 `{}` 不可迭代而报错；
- 模板依旧是 `[...todos].map(({ category, item }) => ...)`，和场景 2 完全一致，远程/本地数据无差别；
- `useTodos` 用 `alive` 标志位避免组件卸载后 `setState` 警告（竞态保护）。

---

## 35. ES2015 生成器

### 概念

生成器（`function*`）是能**暂停和恢复执行**的函数，返回一个生成器对象（既是迭代器也是可迭代对象）。

```js
function* gen() {
  yield 1;
  yield 2;
  return 3;
}

const g = gen();
g.next(); // { value: 1, done: false }
g.next(); // { value: 2, done: false }
g.next(); // { value: 3, done: true }
```

### yield 表达式

`yield` 暂停函数，并将值传出；`next()` 的参数可作为上一个 `yield` 的返回值：

```js
function* gen() {
  const x = yield 'ask';
  console.log('got', x);
}
const g = gen();
g.next();        // { value: 'ask' }
g.next('hello'); // 输出 got hello
```

### 遍历生成器

```js
for (const v of gen()) {
  console.log(v); // 1 2
}
```

---

## 36. ES2015 生成器应用
### 案例1：发号器

```js
// Generator 应用
function * idGen () {
  let id = 1
  while (true) {
    yield id++
  }
}

const idMaker = idGen()

console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
console.log(idMaker.next().value)
```
### 案例2：使用 Generator 函数实现 iterator 方法

```js
const todos = {
  life: ['吃饭', '睡觉', '打豆豆'],
  learn: ['语文', '数学', '外语'],
  work: ['喝茶'],
  [Symbol.iterator]: function * () {
    const all = [...this.life, ...this.learn, ...this.work]
    for (const item of all) {
      yield item
    }
  }
}

for (const item of todos) {
  console.log(item)
}

```

### 异步流程（早期方案）

在 async/await 出现前，生成器 + 执行器（`co`）常用于管理异步：

```js
function* load() {
  const a = yield fetchA();
  const b = yield fetchB(a);
  return b;
}
```


---

## 37. ES2015 ES Modules


ES Modules（ESM）是 JavaScript 官方的**模块化方案**，使用 `import` / `export`。


## 38. ES2016 概述

ES2016 是采用年度发布模式后的第一个小版本，特性很少：

### Array.prototype.includes

判断数组是否包含某值（解决了 `indexOf` 无法识别 `NaN` 的问题）：

```js
[1, 2, NaN].includes(NaN); // true
[1, 2, 3].includes(2);     // true
```

### 指数运算符

```js
2 ** 3; // 8（等同于 Math.pow(2, 3)）
let x = 2;
x **= 3; // 8
```

> ES2016 仅这两项主要特性，体现了「每年小幅增量发布」的策略。

---

## 39. ES2017 概述

ES2017（ES8）引入了一些重要能力：

### async / await

基于 Promise 的语法糖，让异步代码写起来像同步：

```js
async function load() {
  try {
    const res = await fetch('/api');
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}
```

### Object.values / Object.entries

```js
Object.values({ a: 1, b: 2 });       // [1, 2]
Object.entries({ a: 1, b: 2 });      // [['a', 1], ['b', 2]]
```

### 字符串填充

```js
'5'.padStart(2, '0'); // '05'
'5'.padEnd(3, '0');   // '500'
```

### 其他

- `Object.getOwnPropertyDescriptors`
- 函数参数列表与调用支持尾逗号（trailing commas）
- `SharedArrayBuffer` 与 `Atomics`（并发）

---

> 文档完。建议配合 Node.js / 浏览器控制台实际运行各章节示例代码，以加深理解。
