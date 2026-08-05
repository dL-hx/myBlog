# TypeScript 语言

> 本文档系统讲解类型系统基础、Flow 类型检查器、TypeScript 入门与配置、基础类型、接口与类，以及泛型与类型声明等高级特性，帮助你从类型思维过渡到 TypeScript 工程化开发。

## 目录

- 一、课程概述
- 二、类型系统基础
  - 2.1 强类型与弱类型
  - 2.2 静态类型与动态类型
  - 2.3 JavaScript 类型系统特征
  - 2.4 弱类型的问题
  - 2.5 强类型的优势
- 三、Flow 类型检查器
  - 3.1 Flow 概述
  - 3.2 Flow 快速上手
  - 3.3 Flow 编译移除注解
  - 3.4 Flow 开发工具插件
  - 3.5 Flow 类型推断
  - 3.6 Flow 类型注解
  - 3.7 Flow 原始类型
  - 3.8 Flow 数组类型
  - 3.9 Flow 对象类型
  - 3.10 Flow 函数类型
  - 3.11 Flow 特殊类型
  - 3.12 Flow Mixed 与 Any
  - 3.13 Flow 类型小结
  - 3.14 Flow 运行环境 API
- 四、TypeScript 入门与配置
  - 4.1 TypeScript 概述
  - 4.2 TypeScript 快速上手
  - 4.3 TypeScript 配置文件
  - 4.4 TypeScript 原始类型
  - 4.5 TypeScript 标准库声明
  - 4.6 TypeScript 中文错误消息
  - 4.7 TypeScript 作用域问题
- 五、TypeScript 基础类型
  - 5.1 TypeScript Object 类型
  - 5.2 TypeScript 数组类型
  - 5.3 TypeScript 元组类型
  - 5.4 TypeScript 枚举类型
  - 5.5 TypeScript 函数类型
  - 5.6 TypeScript 任意类型
  - 5.7 TypeScript 隐式类型推断
  - 5.8 TypeScript 类型断言
- 六、TypeScript 接口与类
  - 6.1 TypeScript 接口
  - 6.2 TypeScript 接口补充
  - 6.3 TypeScript 类的基本使用
  - 6.4 TypeScript 类的访问修饰符
  - 6.5 TypeScript 类的只读属性
  - 6.6 TypeScript 类与接口
  - 6.7 TypeScript 抽象类
- 七、TypeScript 高级特性
  - 7.1 TypeScript 泛型
  - 7.2 TypeScript 类型声明

---

## 一、课程概述

本课程围绕前端类型系统展开，分为两条主线：

1. **类型思维建立**：从强/弱类型、静/动态类型的概念入手，理解 JavaScript 类型系统的特点及其带来的问题，认识强类型语言的优势。
2. **工程化落地**：先通过 Flow 了解类型注解的基本玩法，再系统学习 TypeScript 的配置、基础类型、接口与类，最后掌握泛型与类型声明等高级特性。

学习目标：能够使用 TypeScript 编写具备类型约束的可维护代码，并为第三方 JavaScript 库编写类型声明。

---

## 二、类型系统基础

### 2.1 强类型与弱类型

类型系统按「是否允许隐式类型转换」分为两类：

- **强类型（Strongly Typed）**：语言中不允许任意的隐式类型转换。例如把一个字符串与数字相加时，多数强类型语言会直接报错。
- **弱类型（Weakly Typed）**：语言允许任意的隐式类型转换。

> 注意：强/弱类型是「类型转换的宽容度」概念，而不是「有没有类型」的概念。强类型语言同样有类型，只是它不允许你随意把 A 当成 B 用。

### 2.2 静态类型与动态类型

类型系统按「类型检查发生的时机」分为两类：

- **静态类型（Statically Typed）**：变量在声明时类型即确定，编译阶段就完成类型检查。例如 TypeScript、Java。
- **动态类型（Dynamically Typed）**：变量类型在运行时才确定，类型检查发生在运行阶段。例如 JavaScript、Python。

> 静态类型 ≠ 强类型，二者维度不同。TypeScript 是静态 + 强类型；JavaScript 是动态 + 弱类型。

### 2.3 JavaScript 类型系统特征

JavaScript 是**动态类型 + 弱类型**语言：

- 变量没有固定类型，运行时可以重新赋值为任意类型的值。
- 运算符会自动进行隐式类型转换，`'1' + 1` 得到 `"11"`，`'1' - 1` 得到 `0`。

这种灵活性提高了开发效率，但也埋下了隐患。

### 2.4 弱类型的问题

弱类型在运行时才会暴露问题，典型表现：

```js
// 1. 函数参数类型不确定，内部逻辑可能出错
function sum(a, b) {
  return a + b
}
sum(1, 2)        // 3
sum('1', 2)      // "12" —— 返回了意料之外的字符串

// 2. 对象属性随意访问，运行前无法发现拼写错误
const obj = { name: 'Tom' }
obj.age.toUpperCase() // TypeError: Cannot read properties of undefined

// 3. 函数可能返回多种类型，调用方难以约定
function getResult(flag) {
  if (flag) return 100
  return 'fail'   // 调用方无法在编码阶段预知返回类型
}
```

这些问题只有等到代码真正运行、甚至到达特定分支时才会报错。

### 2.5 强类型的优势

引入强类型后，错误被提前到编码/编译阶段：

- **更早的错误发现**：类型不匹配在编写代码时即被提示。
- **更智能的编码提示**：编辑器能基于类型推断自动补全。
- **更可读的代码**：类型本身就是文档，明确表达函数输入输出的约束。
- **更安全的重构**：修改接口后，类型系统会标出所有受影响的地方。

---

## 三、Flow 类型检查器

### 3.1 Flow 概述

Flow 是 Facebook 出品的 JavaScript 静态类型检查器。它在 JavaScript 基础上**增加类型注解**，通过单独的类型检查工具在开发阶段发现类型错误，而不改变 JavaScript 的运行方式。

### 3.2 Flow 快速上手

1. 安装：`npm i flow-bin -D`
2. 初始化：`npx flow init`（生成 `.flowconfig`）
3. 在文件顶部添加 `// @flow` 注释。
4. 运行检查：`npx flow`

```js
// @flow
function square(n: number): number {
  return n * n
}
square(2)      // OK
square('2')    // 类型错误
```

### 3.3 Flow 编译移除注解

浏览器不认识 Flow 的类型注解，需要通过 Babel 移除：

```bash
npm i @babel/core @babel/cli @babel/preset-flow -D
```

`.babelrc` 配置：

```json
{
  "presets": ["@babel/preset-flow"]
}
```

### 3.4 Flow 开发工具插件

在 VS Code 中安装 **Flow Language Support** 插件，可获得实时的类型检查与错误提示，无需每次手动运行命令行。

### 3.5 Flow 类型推断

即使不写注解，Flow 也能根据代码上下文推断类型：

```js
// @flow
function foo() {
  return 1 + 2   // Flow 推断出返回值是 number
}
```

类型推断可以减少冗余注解，但在复杂场景中显式注解更可靠。

### 3.6 Flow 类型注解

基本语法是在变量、函数参数、返回值后加 `: 类型`：

```js
// @flow
let num: number = 100
function greet(name: string): string {
  return 'Hello ' + name
}
```

### 3.7 Flow 原始类型

Flow 支持 JavaScript 原始类型：

- `number`、`string`、`boolean`
- `null`、`void`（对应 `undefined`）
- `symbol`

```js
let a: number = 1
let b: string = 'x'
let c: boolean = true
let d: null = null
let e: void = undefined
```

### 3.8 Flow 数组类型

```js
let arr1: Array<number> = [1, 2, 3]
let arr2: number[] = [1, 2, 3]      // 等价写法
let mixed: Array<number | string> = [1, 'a'] // 联合类型
```

### 3.9 Flow 对象类型

```js
let obj: { name: string, age: number } = {
  name: 'Tom',
  age: 18
}
```

### 3.10 Flow 函数类型

```js
// 参数和返回值都可以注解
const fn: (x: number, y: number) => number = (a, b) => a + b

// 函数作为参数
function call(f: () => void) {
  f()
}
```

### 3.11 Flow 特殊类型

- **字面量类型**：`let s: 'success' = 'success'`
- **联合类型**：`let x: number | string`
- **交叉类型**：`type A = B & C`
- `?T` 表示 `T | null | undefined`，如 `let v: ?number`

### 3.12 Flow Mixed 与 Any

- `mixed`：Flow 的**顶层类型**，表示任意值，但使用时仍需做类型细化（type refinement），更安全。
- `any`：**完全绕过类型检查**，Flow 不再对其做任何约束，应尽量避免。

```js
function f1(value: mixed) {
  // 必须判断类型后才能使用，否则报错
  if (typeof value === 'number') return value + 1
}
function f2(value: any) {
  return value.foo.bar // Flow 完全不检查
}
```

### 3.13 Flow 类型小结

Flow 以「非侵入」方式给 JavaScript 增加类型检查：代码写法基本不变，仅添加注解，再通过工具移除注解完成编译。适合希望渐进式引入类型的现有项目。

### 3.14 Flow 运行环境 API

Flow 提供了针对运行环境（如浏览器 DOM、Node.js）的类型声明，需要在 `.flowconfig` 中开启对应 lib，或使用 `flow-typed` 仓库安装第三方库的类型定义。

---

## 四、TypeScript 入门与配置

### 4.1 TypeScript 概述

TypeScript 是微软开发的开源语言，是 JavaScript 的**超集**（任何合法的 JS 都是合法的 TS）。它在 JS 基础上增加了静态类型系统和 ES 新特性支持，最终编译为标准 JavaScript 运行在任何环境中。

### 4.2 TypeScript 快速上手

```bash
npm i typescript -D
npx tsc --init          # 生成 tsconfig.json
npx tsc index.ts        # 编译单个文件
```

```ts
let count: number = 1
count = 'hello' // 编译报错：不能把 string 赋给 number
```

### 4.3 TypeScript 配置文件

`tsconfig.json` 常用字段：

```json
{
  "compilerOptions": {
    "target": "ES2015",     // 编译目标
    "module": "ESNext",     // 模块系统
    "strict": true,         // 开启严格模式
    "outDir": "./dist",     // 输出目录
    "rootDir": "./src"      // 源码根目录
  },
  "include": ["src"]
}
```

### 4.4 TypeScript 原始类型

```ts
let n: number = 1
let s: string = 'a'
let b: boolean = true
let nu: null = null
let un: undefined = undefined
let sym: symbol = Symbol('id')
let big: bigint = 100n
```

### 4.5 TypeScript 标准库声明

`lib` 选项指定编译时引入的标准库声明文件（如 DOM、ES2015 等）。`target` 会自动带一组默认 lib。当使用新语法（如 `Promise`）但 target 过旧时，需要手动补充 lib：

```json
{
  "compilerOptions": {
    "target": "ES5",
    "lib": ["ES2015", "DOM"]
  }
}
```

### 4.6 TypeScript 中文错误消息

TypeScript 4.4+ 支持本地化错误信息，设置环境变量即可：

```bash
set TS_LOCALE=zh-CN   # Windows
```

或在调用时指定，方便中文开发者阅读报错。

### 4.7 TypeScript 作用域问题

在 Node 环境中，多个文件直接 `tsc` 编译可能产生全局作用域冲突。解决方式：

- 使用 `import/export` 让文件成为模块（拥有独立作用域）。
- 或在文件内声明 `export {}`，强制文件成为模块。

---

## 五、TypeScript 基础类型

### 5.1 TypeScript Object 类型

`object` 表示非原始类型（对象、数组、函数等）：

```ts
let obj: object = {}
let arr: object = []
let fn: object = () => {}
```

更常见的是用接口或字面量形式约束对象结构（见第六节）。

### 5.2 TypeScript 数组类型

```ts
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]  // 泛型写法
```

### 5.3 TypeScript 元组类型

元组（Tuple）是**固定长度、且每个位置类型确定**的数组：

```ts
let tuple: [number, string] = [18, 'Tom']
tuple[0] = 20        // OK
tuple[0] = 'x'       // 报错
```

常用于 `Object.entries()`、CSV 行等场景。

### 5.4 TypeScript 枚举类型

`enum` 用于给一组数值取有意义的名字：

```ts
enum Status {
  Pending,   // 0
  Fulfilled, // 1
  Rejected   // 2
}
const s: Status = Status.Pending
```

可指定初始值，也可使用字符串枚举：

```ts
enum Direction {
  Up = 'UP',
  Down = 'DOWN'
}
```

### 5.5 TypeScript 函数类型

```ts
function add(x: number, y: number): number {
  return x + y
}

// 完整函数类型注解
let calc: (a: number, b: number) => number = (a, b) => a + b
```

可选参数用 `?`，默认值参数可省略类型注解：

```ts
function greet(name: string, msg?: string): string {
  return msg ? `${msg}, ${name}` : name
}
```

### 5.6 TypeScript 任意类型

`any` 表示任意类型，关闭类型检查。应谨慎使用：

```ts
let value: any = 100
value = 'hello'   // 不报错
```

尽量使用 `unknown`（更安全，使用前需断言/收窄）替代 `any`。

### 5.7 TypeScript 隐式类型推断

未显式标注时，TS 会推断类型：

```ts
let num = 1          // 推断为 number
let str = 'a'        // 推断为 string
function foo() {
  return true        // 推断返回 boolean
}
```

若无法推断，则默认为 `any`（在 `noImplicitAny` 严格模式下会报错）。

### 5.8 TypeScript 类型断言

当开发者比编译器更清楚类型时，可手动断言：

```ts
const el = document.querySelector('.box') as HTMLElement
// 或 JSX 之外：<HTMLElement>document.querySelector('.box')
```

断言不等同于类型转换，它只是告诉编译器「相信我」。不可断言为不存在的类型关系。

---

## 六、TypeScript 接口与类

### 6.1 TypeScript 接口

接口（Interface）用于约束对象的结构：

```ts
interface User {
  name: string
  age: number
}

function printUser(user: User): void {
  console.log(user.name, user.age)
}
```

`?` 表示可选属性，`readonly` 表示只读属性。

### 6.2 TypeScript 接口补充

- **只读属性**：`readonly id: number`
- **可选属性**：`email?: string`
- **任意属性**（索引签名）：

动态成员

```ts
interface Config {
  [key: string]: string
}
```

- 接口可继承：

```ts
interface Animal { name: string }
interface Dog extends Animal { bark(): void }
```

### 6.3 TypeScript 类的基本使用

```ts
class Person {
  name: string
  constructor(name: string) {
    this.name = name
  }
  say() {
    console.log(this.name)
  }
}
```

### 6.4 TypeScript 类的访问修饰符

- `public`：默认，任意可访问。
- `private`：仅类内部访问。
- `protected`：类内部及子类可访问。

```ts
class Account {
  public name: string
  private balance: number = 0
  protected id: string = 'x'
}
```

### 6.5 TypeScript 类的只读属性

使用 `readonly` 修饰符让属性初始化后不可修改：

```ts
class Point {
  readonly x: number
  constructor(x: number) {
    this.x = x
  }
}
```

### 6.6 TypeScript 类与接口

类可以实现（implements）接口，保证类满足某个契约：

```ts
interface Logger {
  log(msg: string): void
}

class ConsoleLogger implements Logger {
  log(msg: string) {
    console.log(msg)
  }
}
```

### 6.7 TypeScript 抽象类

抽象类不能实例化，只能被继承，用于抽取公共逻辑：

```ts
abstract class Shape {
  abstract area(): number   // 子类必须实现
  describe() {
    console.log('面积：', this.area())
  }
}

class Circle extends Shape {
  constructor(private r: number) { super() }
  area() { return Math.PI * this.r ** 2 }
}
```

---

## 七、TypeScript 高级特性

### 7.1 TypeScript 泛型

泛型（Generics）让类型「参数化」，提高复用性与类型安全：

```ts
function identity<T>(value: T): T {
  return value
}
identity<number>(1)
identity('a')   // 也可推断
```

泛型可用于接口、类：

```ts
interface Box<T> {
  value: T
}

class Queue<T> {
  private data: T[] = []
  push(item: T) { this.data.push(item) }
  pop(): T | undefined { return this.data.shift() }
}
```

常用泛型约束（`extends`）：

```ts
function len<T extends { length: number }>(arg: T): number {
  return arg.length
}
```

### 7.2 TypeScript 类型声明

为没有类型的 JavaScript 库编写声明文件（`.d.ts`）：
```ts
// 类型声明
import { camelCase } from 'lodash'

// declare function camelCase (input: string): string
const res = camelCase('hello typed')

```


```ts
// types/my-lib.d.ts
declare module 'my-lib' {
  export function foo(input: string): number
}
```

```sh
npm i @types/xxx -D
```
常见做法：

- 使用 `declare` 声明变量、函数、模块、命名空间。
- 第三方库优先安装 `@types/xxx`（如 `@types/lodash`）。
- 项目内共享类型可通过 `declare global` 扩展全局类型。
- 在 `tsconfig.json` 的 `typeRoots` / `types` 中管理声明文件搜索范围。

> 当引入一个 JS 模块缺少类型时，可先以 `declare module 'xxx'` 快速声明，再逐步补充细节，保证工程顺利编译。

---

*TypeScript 学习系列完整文档*
