# TypeScript 常用的工具类型



> 总结了常用的工具类型

> 用TS保证类型安全

### `Awaited<Type>`

> 获取`Promise`中的结果类型

### `ReturnType<Type>`

> 获取函数的返回值类型. 用ReturnType

```ts
// 获取Func 类型的返回值类型
type Func = (value:string)=> string;
// 约束变量u的类型为`函数的返回值`类型
const u:ReturnType<Func> ="1";
```







### **`Parameters<Type>`**

> 获取函数的参数类型，将每个参数类型放进一个元组中。 用Parametes

```ts
type U = Parameters<(a:number, b:string)=> void>;// [number, string]
```



### `NonNullable<Type>`

> 去除类型中的null,和undefined

```ts
// 用NonNullable去除类型中的null, 和undefined类型
type U = NonNullable<string[]|null|undefined>; // string[]
```



### `Omit<Type, Keys>`

> 省略
>
> 移除一些属性, 用Omit,Omit<T, K>从T中取出除去K的其他所有属性
>
> **本质上是Pick的反向操作，排除掉Keys。**

```ts
type Test = {
  name: string;
  age: number;
  salary?: number;
};
type omitted = Omit<Test, "age">;
// 结果
// type omitted = {
//     name: string;
//     salary?: number;
// }

// 将其赋值给omitted对象
const omitted:Omitted = {
    name: 'zhangsan',
    salary:29
}
```

### `Pick<Type, Keys>`

> 选择
>
> 从Type中选取一系列的属性, 用Pick, 构成新的类型

```ts
type Test = {
  name: string;
  age: number;
  salary?: number;
};

//pick
type Picked = Pick<Test, "name" | "age">;
// 结果
// type Picked = {
//     name: string;
//     age: number;
// }

// 将其赋值给pick对象
const pick:Picked = {
    name: 'zhangsan',
    age:29
}
```



```ts
type Pick<T, K extends keyof T> = {
    [P in K]: T[P]
};
```





### `Exclude<T, U>`

> 移除
>
> 移除联合类型中的某些类型, 用`Exclude<T, U>`.表示从T中移除出U

```ts
type U1 = Exclude<"string"|"number"|"boolean","string">; // "number"|"boolean"
```



### `Extract<T, U>`

> 抽取
>
> 提取联合类型中的某些类型, 用`Extract<T, U>`.表示从T中提取出U

```ts
type U = Extract<string | number|(()=>void), Function>; // ()=>void
```

用`Extract` 提取联合类型中的函数类型,得到`()=>void`

#### 1. 用于基础类型

```ts
type base1 = Extract<string | number, string>; //string || never; //实测是string
type base2 = Extract<string, string | number>; //string
```

#### 2. 用于函数

```ts
type func1 = (one: number, two: string) => string;
type func2 = (one: number) => string;

//  参数少的函数类型 extends 参数多的函数类型 返回true
//  参数多的函数类型 extends 参数少的函数类型 返回false
type beginType1 = func1 extends func2 ? func1 : never; //never
type beginType2 = func2 extends func1 ? func2 : never; //func2

//这个Extract是TS内置方法
type tType1 = Extract<func1, func2>; //never
type tType2 = Extract<func2, func1>; //= (one: number) => string  和上面有区别
```

#### 3.Extract 用于类

```ts
class People {
  public name!: string;
  public age!: number;
  public address!: string;
  eat() {}
}

class CnPeople extends People {
  private phone!: string;
}

let cp = new CnPeople();

// 现在这个Extractxx是自定义的，不是内置。但功效和内置的Extract一样
type Extractxx<T, U> = T extends U ? T : never;

// 定律1：子类 extends 父类； 永远true，返回T类型
type extractType = Extractxx<CnPeople, People>; // CnPeople

// 定律: 父类 extends 子类； 只有实例属性或实例方法一样时则为true
type extractType2 = Extractxx<People, CnPeople>; // never 
```

#### 4. Exclude 刚好和 Extract 相反

```ts
type ec1 = Exclude<func1, func2>; //(one: number, two: string) => string;
type ec2 = Exclude<string, string | number>; //never
```



### Partial

> 将类型的所有属性变为可选属性, 用Partial

```ts
interface User{
    name:string;
    age:number;
}

const u:User= {  // X, 类型缺失, 报错
    name:'zhangsan'
}


const u:Partial<User> = { // 使用Partial,将所有类型变为可选后,不报错. 可赋值给变量u使用
    name:'zhangsan'
}
```

```ts
type Partial<T> = {
    [P in keyof T]?: T[P]
};
```



### Required

> 将类型的所有属性变为必选,用Required属性

```ts
interface User{
    name?: string;
    age?: number;
    gender?: string[]

const u:Required<User> = {
    name:'zhangsan',
    age:18,
    gender:["male"]
}
```

用`Required<User>`处理后的属性,直接赋值给变量`u`. 变量`u`的所有属性都是**必选**的

```ts
type Required<T> = {
    [P in keyof T]-?: T[P]
};
```



### Readonly

> 将数组或对象的属性值转换为只读的,用`Readonly`

```ts
interface User {
    name: string;
    age: number;
    gender?: 'male'|'female'
}
 
let u: Readonly<User> = {
   name: "hello",
   age: 10,
   gender: 'male'
}
u.age = 190   // X, 用Readonly 包裹的接口,各属性是只读的. 将其指定为变量类型.  
              // 变量赋值报错
```



### Record

> 解释1: 将对象所有属性的值转化为`T`类型, 用`Record<K extends keyof any,T>`

> 解释2: 快速生成某种属性的`K`类型

> 解释3: `Record<K,T>`构造具有给定类型`T`的一组属性`K`的类型。在将一个类型的属性映射到另一个类型的属性时，`Record`非常方便。

> 解释4: 将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型.

例子1:

```ts
type Property = 'use1'|'use2'
type User = Record<Property, string>

const u: User = {
    use1:'xiaoxue',
    use2:'zhangsan'
}
```

将生成的User类型赋值给u使用



例子2:

```ts
type HD = Record<string, string|name>
const hd:HD = {name:'zhangsan',age:28, address:'abc'}
```



例子3:

```ts
interface EmployeeType {
    id: number;
    fullname: string;
    role: string;
}
 
let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: "John Doe", role: "Designer" },
    1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
    2: { id: 3, fullname: "Sara Duckson", role: "Developer" },
}
 
// 0: { id: 1, fullname: "John Doe", role: "Designer" },
// 1: { id: 2, fullname: "Ibrahima Fall", role: "Developer" },
// 2: { id: 3, fullname: "Sara Duckson", role: "Developer" }
```

`Record`的工作方式相对简单。在这里，它期望数字作为类型，属性值的类型是`EmployeeType`，因此具有`id`，`fullName`和`role`字段的对象。



源码

```ts
/**
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
```

常用的格式

```ts
type proxyKType = Record<K,T>
```

这里会将K中的所有属性值都转换为T类型，并将返回的新类型返回给proxyKType，K可以是联合类型、对象、枚举….

```text
//demo1
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}
```

可以看到 IPets 类型是由 Record<petsGroup, IPetInfo>返回的。将petsGroup中的每个值(‘dog’ | ‘cat’ | ‘fish’)都转为 IPetInfo 类型。

当然也可以自己在第一个参数后追加额外的值，如下面：



```text
//demo2
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup | 'otherAnamial', IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    },
    otherAnamial:{
        name:'otherAnamialName',
        age:10
    }
}
```

可以看到在demo1的基础上，demo2在

type IPets = Record<petsGroup | ‘otherAnamial’, IPetInfo>; 中除了petsGroup的值之外，还追加了 'otherAnamial’这个值。



https://www.bilibili.com/video/BV1gL411Y7Mf/?spm_id_from=333.337.search-card.all.click&vd_source=631062e9ff21033189723c8ac931c360





下一节:

手写工具类型

https://www.bilibili.com/video/BV1Lv4y1H7SK/?spm_id_from=333.337.search-card.all.click&vd_source=631062e9ff21033189723c8ac931c360