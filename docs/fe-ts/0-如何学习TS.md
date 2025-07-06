# 如何学习TS?

![alt text](assets/6a157815fd99ee02b40242853ddc81cd.jpeg)

## 一. 8种内置基础类型.ts
```ts
/* eslint-disable @typescript-eslint/no-unused-vars */
// 定义类型: string
const name: string = 'jack'

// 定义类型: number
const age: number = 30

// 定义类型: boolean
const isTrue: boolean = true

// 特殊的几个:---------
// 定义undefined类型
let a: undefined

// 定义null类型
const b: null = null

// 定义object类型
const user: object = {}

// 或者
const user1: { name: string; age: number } = { name: 'zhangsan', age: 24 }

// 定义bigint类型
const big: bigint = 100n

// 定义symbol符号类型
const sym: symbol = Symbol('hepan')

export default {}

```

## 二. void、never、any、unknown类型

#### void类型

`void`表示没有任何类型，不能直接赋值。

```js
let a: void; 
let b: number = a; // 报错
```

> 给变量赋值为void是没有意义的。

如果一个函数没有返回值，此时我们可以定义为`void`

```js
function fn():void {
    console.log('今天天气不错')
}


<a href="javascript:void;"></a>
```

#### never类型

`never`类型表示永不存在的值的类型。
(在报错或者死循环时候使用)
```js
// 抛出异常
function error(): never {
  throw new Error('我是一个Error'); 
}

// 死循环
function loop(): never {
  while (true) {
    console.log('这里是死循环')
  };
}
```

#### any类型

`any`类型表示任意类型。

```js
let num:number = 1000;
num = "jack" // 报错


let num:any = 1000;
num = "jack" // 不报错


// 调用方法，依然不报错
num.setName('jack')
```

> 虽然any不做任何约束，但是非常不推荐这样使用，这样会带来隐患。

我们在开发组件、模块、定义函数、调用接口时，如果类型很难定义出来、不知道属于什么类型等场景，可以适当使用any类型。

#### unknown类型

`unknown`与`any`一样，所有类型都可以分配给`unknown`，反之把`unknown` 赋值给其它类型会报错。

```js
// unknown 可以接收任意类型
let name:string = "jack"
let user:unknown = name;

// unknown 不可以赋值给其它类型，any除外，下面会报错
let name:unknown = "jack"
let user:string = name;
```


(在报错或者死循环时候使用)
```js
// 抛出异常
function error(): unknown {
  throw new Error('我是一个Error'); 
}

// 死循环
function loop(): unknown {
  while (true) {
    console.log('这里是死循环')
  };
}
```
#### 总结：

- 能确定类型的，尽量定义类型。

- 无法确定类型的，可以使用 any 进行兜底。

- 当函数没有返回值时，可以使用void定义。

- any和unknown可以接收任意类型值，any可以赋值给任意类型，但unknown不可以赋值给任意类型。

- ###### void和any在项目中是比较常见的，never和unknown不常用。

## 三. 数组和函数类型定义.ts
```ts
// 数组类型的定义
const list1: number[] = [1, 2, 3]

const list2: Array<number> = [1, 2, 3]

const list3: [number, string, boolean] = [1, '2', true]

const list4: [{ name: string; age: number }] = [{ name: 'jack', age: 30 }]

const list5: Array<{ name: string; age: number }> = [{ name: 'jack', age: 30 }]

interface User {
  name: string
  age: number
}

const list6: Array<User> = [{ name: 'jack', age: 30 }]

// 函数类型的定义
// :在函数括号后加冒号
// 变量类型定义:在变量后加冒号

function add1(a: number, b: number): number {
  return a + b
}

function add2(a: number, b: number): void {
  console.log(a + b)
}

// 定义报错用unkown
function add3(a: number, b: number): unknown {
  throw new Error('Error')
}

// 箭头函数两种定义
// (括号后面加冒号)
const add4 = (a: number, b: number): number => {
  return a + b
}

// (变量后加冒号)
const add5:(a: number, b: number) => number = (a: number, b: number) => {
  return a + b
}

export default {}

```


## 四. 元组与交叉类型使用
## 元组
###### 数组一般有同类型的值组成，但有时候存在多种类型，我们多种类型定义称为元组。

###### 数组定义：同一类型

```js
// 纯数字
let list:number[] = [1,2,3]
// 纯字符串
let list:string[] = ['1','2','3']

// 使用Array泛型
let list:Array<number> = [1,2,3]
```

###### 元组定义：不同类型

```js
const list: [number, string, boolean] = [1, '2', true]


// 解构
const user:[number,string] = [1,'Jack']
const [id,name] = user;


// 可选类型
const list:[number,number,number?] = [1,2,3]
const list:[number,number,number?] = [1,2]
```

## 交叉类型
> 多用对象定义
> [https://zhuanlan.zhihu.com/p/627526459](https://zhuanlan.zhihu.com/p/627526459)
###### 把多个类型合并为一个类型，称为交叉类型。
###### 联合类型表示或的关系
> a|b,    
> a, b, a b
###### 交叉类型表示取两个类型的并集
> 取出范围最大的


###### 例子：

```js
// JS里面使用且
const count = 10;
if(count > 0 && count <10) console.log('执行代码')
// TS里面也是类似写法，我们先看或使用

// 1. 或使用

let id = 1; 
let id = '1';

// 联合类型
let id:number | string = 1; 


```

那且如何使用？一个变量不可能即是数字又是字符串

```js
// 错误的用法
let id: number & string = 1; 


type UserType = { id: number, name: string}
type AgeType = { age: number}


const user:UserType & AgeType = { id:1, name: 'jack', age: 30}

```

###### 例子：
```ts
// 元组&交叉类型.ts

// 元组
const list: [number, string, boolean, object] = [1, '2', true, {}]

// 交叉类型
type AgeType = { age: number }
type UserType = { id: number; name: string }

const user: UserType & AgeType = { id: 1, name: 'jack', age: 30 }
const userAge:AgeType = {age: 30}

const userInfo: UserType = {id: 2, name: 'Tom'}

export default {}

```

## 五. 接口五种场景与使用

在Java语言中，接口是一个非常重要的概念，是对行为的抽象，具体功能由类去负责实现。

在TypeScript中，接口是一个非常灵活的概念，除了用于抽象以外，还可以用于类型的描述。

###### 接口定义：

```js
interface Person {
    name: string;
    age: number;
}


const jack:Person = {
    name: 'Jack',
    age:30
}

// 少字段会报错
const tom:Person = {
    name: 'Tom',
}

// 多字段也会报错
const tom:Person = {
    name: 'Tom',
    age: 30,
    money: 100
}
```

> 接口一般首字母大写

###### 属性只读或可选

```js
interface Person {
    readonly name: string;
    age?: number;
}

// 正确
const tom:Person = {
    name: 'tom'
}


// 报错
tom.name = 'jack'
```

###### 任意属性

比如说，我们不确定这个用户具体有哪些属性，怎么去定义类型？

```js
interface Person {
    name: string;
    age: number;
} 

const tom:Person = {
    id: 1,
    name: 'tom',
    age: 30,
    gender: 'male',
    edu: '本科'
}


// 添加任意属性
interface Person {
    name: string;
    age: number;
    [k:string] : any; 
} 
```

> 注意：一旦定义了任意属性，那么确定的属性和类型必须是它的类型的子集。

###### 定义函数类型

```js
const add = (x, y) => {
  return x + y
}


// 添加类型
const add = (x:number, y:number):number => {
  return x + y
}

// 接口定义函数类型
interface Sum{
    (x:number,y:number):number
}

const add: Sum = (x, y) => {
  return x + y
}


// type定义函数类型
type Sum = (x:number,y:number)=>number;
```

###### 接口继承

```js
interface User {
    id: number;
    name: string;
}

interface Person extends User {
    age: number;
}
const Tom:Person = {
    id: 1,
    name: 'tom',
    age: 30
}


type Person = User & { age: number }
```

###### 接口和Type区别？

接口通过interface定义，type是用来定义类型别名。

接口可以重复定义，type不可以。

接口可以继承，type不可以继承，但是可以使用联合类型和交叉类型来模拟继承。


###### 例子：
```ts
// 接口.ts
// 1. 定义接口
interface Person {
  name: string
  age: number
}

const jack: Person = {
  name: 'jack',
  age: 30
}

const tom: Person = {
  name: 'jack',
  age: 30
}

// 2. readonly定义的字段不可修改
// ? 问号字段表示 接口字段可选
interface P {
  readonly name: string
  age?: number
}

const lily: P = {
  name: 'lily'
}

// readonly定义的字段不可修改 (报错)
// lily.name = 'Tom'

// 3. 定义任意字段的动态属性接口
// >可接收任意字段
// 注意: 任意字段的接口值,应包含父接口的所有类型
interface T {
  name: string
  age: number
  // 定义动态属性字段
  [k: string]: string | number
  // 或者
  // [k: string]: any
}
const a: T = {
  name: 'jack',
  age: 30,
  id: 1,
  gender: 'male',
  edu: '本科'
}

// 4. 函数类型接口定义
interface Sum{
    (x: number, y: number) : number
}
const add:Sum = (x, y) => {
  return x + y
}

// 或者

type Sum1 =  (x: number, y: number) => number

const add1:Sum1 = (x, y) => {
    return x + y
}



// 5. 接口继承与type类型模拟继承
// > 接口可以继承，type不可以继承，但是可以使用联合类型和交叉类型来模拟继承。

interface User{
    id: number;
    name: string;
}

interface Person extends User{
    age: number
}

const zee: Person = {
    name: "zee",
    age: 30,
    id: 1
}

// 表示并集,取范围最大的
type Person1 = User & {age : number}

const foo: Person1 = {
    name: "foo",
    age: 30,
    id: 1
}

type U1 = { id: number; name: string }

// 表示或的关系
type Person2 = { age: number } | U1
const tim1: Person2 = {
    id: 1,
    name: 'tim',
    age: 30
}

export default {}


```

## 六. 泛型三种定义与使用方式
## 泛型

在编译期间不确定变量的类型，在调用时，由开发者指定具体的类型。

###### 场景1：如何给arg参数和函数指定类型

```js
function identity(arg){
    return arg;
}

identity(1)
identity('jack')
identity(true)
identity([])
identity(null)
```

> 定义的时候，无法确定类型，只有在调用的时候，才能确定参数类型。

```js
function identity<T>(arg:T):T{
    return arg;
}

identity<number>(1)
identity<string>('jack')
```

###### 场景2：多个类型如何传递？

```js
function identity(x,y){
    return x;
}

identity(1,2)
identity('a',2)



function identity<T,U>(x:T,y:U):T{
    return x;
}
identity<number,number>(1,2)
identity<string,number>('a',2)
```

###### 回顾一下任意属性

```js
interface Person{
    [k:string]: string | number | boolean;
}
```

任意属性是不确定有什么属性，泛型是不确定有什么类型。

###### 场景3：Pick使用

Pick 就是挑选的意思，可以从已有的类型中，挑选一些类型进行使用。

```js
interface User{
    id: number;
    name1: string;
    age: number;
}


type AgeType = Pick<User, 'age' | 'name1'>

let Jack:AgeType = {
    name: 'jack',
    age: 30
}
```
###### 例子：
```ts
function identity<T>(arg: T): T {
  return arg
}

identity<number>(1)

function identity2<K, V>(x:K, y:V):K {
    return x
}

identity2<number, number>(1,2)
identity2<string, boolean>('jack', true)


// Pick挑选类型
interface User{
    id: number;
    name: string;
    age: number
}

// 挑选User类型中的'name', 'age'组成新类型AgeType
type AgeType = Pick<User, 'name'|'age'>

const Jack:AgeType = {
    name: 'jack',
    age: 30
}

export default {}
```

如在react代码中为接口添加泛型，保证接口返回值类型确定
```js
export default {
  get<T>(url: string, params?: object):Promise<T> {
    return instance.get(url, { params })
  },
  post<T>(url: string, data?: object):Promise<T>  {
    return instance.post(url, data)
  }
}
```
```js
 request.get<string>('/users', {
           id: 12345
        })
       .then(res => {
           console.log('res:', res);
       })
       .catch((error) => {
           console.log('error:', error);
       })
```
## 七. 关键知识点 keyof,typeof, in的使用
###### keyof

JS当中获取key的语法：Object.keys()

TS当中获取key的类型：keyof

```js
interface Person {
    id: number;
    name: string;
    age: number;
}

type K1 = keyof Person; // 'id' | 'name | 'age'
```
通过keyof获取接口的key值, 将其中的key值,组成一个新类型K1,他是一个联合类型

可以将一个变量指定为K1, 他的属性只能为 'id' | 'name | 'age',其中之一(字符串)



###### typeof
实例参考
[https://blog.csdn.net/zxl1990_ok/article/details/125474154](https://blog.csdn.net/zxl1990_ok/article/details/125474154)
对变量使用获取变量类型
对对象使用获取对象类型
对函数使用获取函数类型
对enum使用获取enum类型
对类使用获取类的类型
```js
interface Person {
    id: number;
    name: string;
    age: number;
}


cosnt Jack = { id: 1, name: 'jack', age: 30 }

type User = typeof Jack;
const Tom:User = { id: 2, name: 'tom', age: 30}
```
对Jack变量使用typeof,生成一个新类型User,User的定义就是Person类型, 将User类型定义为Tom的类型
###### in

`in` 遍历枚举类型
只能在`type`类型中使用,不能在`interface`中使用
```js
type Keys = 'id' | 'name' | 'age'

type User = {
    [k in Keys] : any;
}
```
定义Keys类型 = 'id' | 'name' | 'age'
定义类型User, 
[k in Keys] : any;
表示,
[k in Keys]  :  key必需是Keys中的值, 'id','name' ,'age'其中一个
any: 值类型,可以是任意类型


###### 例子：
```ts
// keyof 获取键值
interface User{
  id: number
  name: string
  age: number
}
type Keys = keyof User // keyof 获取键值,生成新类型Keys,赋值给k1
const k1:Keys = 'age'


// typeof
// 获取对象类型
const user = {name: 'jack', age: 30}
type User1 = typeof user; // 推断出user对象的类型
// 赋值给新对象定义
const u1:User1 = {name: 'u1', age: 20}


// in
// 使原来的任意类型的key,现在只能在指定范围内选

interface User2{
  [k: string]: any
}
// User2,   类型key为string对象,值为任意值

// 使原来的任意类型的key,现在只能在指定范围内选
type User3 = {
  [k in Keys]:any
}
/* 
type User3 = {
    id: any;
    name: any;
    age: any;
}
*/
const tom:User3 = {
  id: 1,
  name: 'jack',
  age: 30,
}

export default {}

```
## 八.tsconfig.json配置
TypeScript 使用 tsconfig.json 文件作为其配置文件，当一个目录中存在 tsconfig.json 文件，则认为该目录为 TypeScript 项目的根目录。



###### 基础字段

- files - 设置要编译的文件的名称；['./src/main.tsx']

- include - 设置需要进行编译的文件，支持路径模式匹配；['src']

- exclude - 设置无需进行编译的文件，支持路径模式匹配；['node_modules']

- compilerOptions - 编译配置选项；



###### 编译配置

```js
{
   "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ],
  "compilerOptions": {
  
    /* 基本选项 */
    "target": "es5",                       // 指定 ECMAScript 目标版本: 'ES3' (default), 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', or 'ESNEXT'
    "module": "commonjs",                  // 指定使用模块: 'commonjs', 'amd', 'system', 'umd' or 'es2015'
    "lib": [],                             // 指定要包含在编译中的库文件
    "allowJs": true,                       // 允许编译 javascript 文件
    "checkJs": true,                       // 报告 javascript 文件中的错误
    "jsx": "preserve",                     // 指定 jsx 代码的生成: 'preserve', 'react-native', or 'react'
    "declaration": true,                   // 生成相应的 '.d.ts' 文件
    "sourceMap": true,                     // 生成相应的 '.map' 文件
    "outFile": "./",                       // 将输出文件合并为一个文件
    "outDir": "./",                        // 指定输出目录
    "rootDir": "./",                       // 用来控制输出目录结构 --outDir.
    "removeComments": true,                // 删除编译后的所有的注释
    "noEmit": true,                        // 不生成输出文件
    "importHelpers": true,                 // 从 tslib 导入辅助工具函数
    "isolatedModules": true,               // 将每个文件做为单独的模块 （与 'ts.transpileModule' 类似）.
    // 只编译修改过的文件,这个时候会生成tsconfig.tsbuildinfo,下次编译的时候会进行对比只编译修改过的文件 
    "incremental": true,

    /* 严格的类型检查选项 */
    "strict": true,                        // 启用所有严格类型检查选项，不允许隐式any类型
    "noImplicitAny": true,                 // 在表达式和声明上有隐含的 any类型时报错
    "strictNullChecks": true,              // 启用严格的 null 检查
    "noImplicitThis": true,                // 当 this 表达式值为 any 类型的时候，生成一个错误
    "alwaysStrict": true,                  // 以严格模式检查每个模块，并在每个文件里加入 'use strict'

    /* 额外的检查 */
    "noUnusedLocals": true,                // 有未使用的变量时，抛出错误
    "noUnusedParameters": true,            // 有未使用的参数时，抛出错误
    "noImplicitReturns": true,             // 并不是所有函数里的代码都有返回值时，抛出错误
    "noFallthroughCasesInSwitch": true,    // 报告 switch 语句的 fallthrough 错误。（即，不允许 switch 的 case 语句贯穿）

    /* 模块解析选项 */
    "moduleResolution": "node",            // 选择模块解析策略： 'node' (Node.js) or 'classic' (TypeScript pre-1.6)
    "baseUrl": "./",                       // 用于解析非相对模块名称的基目录
    "paths": {},                           // 模块名到基于 baseUrl 的路径映射的列表
    "rootDirs": [],                        // 根文件夹列表，其组合内容表示项目运行时的结构内容
    "typeRoots": [],                       // 包含类型声明的文件列表
    "types": [],                           // 需要包含的类型声明文件名列表
    "allowSyntheticDefaultImports": true,  // 允许从没有设置默认导出的模块中默认导入。

    /* Source Map Options */
    "sourceRoot": "./",                    // 指定调试器应该找到 TypeScript 文件而不是源文件的位置
    "mapRoot": "./",                       // 指定调试器应该找到映射文件而不是生成文件的位置
    "inlineSourceMap": true,               // 生成单个 soucemaps 文件，而不是将 sourcemaps 生成不同的文件
    "inlineSources": true,                 // 将代码与 sourcemaps 生成到一个文件中，要求同时设置了 --inlineSourceMap 或 --sourceMap 属性

    /* 其他选项 */
    "experimentalDecorators": true,        // 启用装饰器
    "emitDecoratorMetadata": true ,         // 为装饰器提供元数据的支持
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 总结
- 每一个语法都要手写出来，理解没有偏差。

- 项目当中反复使用。

- 工作当中举一反三、活学活用。
