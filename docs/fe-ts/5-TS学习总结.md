# [TS]学习总结

## 总结

###### TS8种基础类型

string、number、boolean、undefined、null、object、bigint、symbol

###### 特俗类型：

void、never、any、unknown

- void：用于函数没有返回值

- never：用于函数抛出异常或函数内部死循环

- any：任意类型

- unknown：不知道什么类型

###### Array和函数类型定义：

```js
let list:number[] = [1,2,3]
let list:string[] = ['a,'b','c']
let list:Array<number> = [1,2,3]
```

```js
function add(x:number,y:number):number{
    return x+y;
}
```

###### 元组、交叉类型、联合类型

```js
//元组
let list:[number,string,boolean] = [1,'jack',true]

// 交叉类型
type User = { name: string }
type AgeType = { age: number }
let jack: User & AgeType = { name:'jack', age: 30 }

// 联合类型
let num:string | number = '1'
```

###### 接口5种场景

```js
interface Person {
    name: string;
    age?: number;
    [k:string]: string | number;
}


interface User extends Person{
    gender: 'male'
}
```

###### 泛型使用

```js
function identity<T>(num:T):T{
    return num;
}

identity<number>(10);
```

###### keyof、typeof、in使用

- keyof 获取对象键

- typeof 获取对象类型

- in指定属性需要在某一个key中

```js
interface Person{
    name: string;
    age: number;
}

type Keys = keyof Person; // Keys会得到：'name' | 'age'



const user = { name: 'jack', age: 30 }
type UserType = typeof user; // 会返回一个user类型，包含name和age


type UserType2 = {
    [k in Keys]: string;
}
// UserType2会约束属性必须包含name和age
```

###### TS学习方法

- 每一个语法都要手写出来，理解没有偏差。

- 项目当中反复使用。

- 工作当中举一反三、活学活用。
