# Ts中常用的引用类型

```ts
/**
 * ts中将引用类型分为两个大类.
 * 复合引用类型: 数组,元组,函数,对象,类的实例等
 * 内置引用类型: Date(日期)对象, RegExp(正则), Math(数学)对象等
 * 
 * 复合引用类型需要用户自行定义该类型的组成形式. 
 * 如: 数组和元组, 需自行定义组成类型与长度
 * 对函数: 定义其参数, 行为, 返回值
 * 对对象与类实例: 定义其成员, 结构与行为
 * 
 */

// 示例如下:

// 声明常量变量
let number:number = 1
const str: string = 'string'

// 声明数组
let animals: string[] = ['cat','dog', 'bird']

// 声明元组(固定长度数组)
let sex:[string, string] = ['male', 'female']

// 声明函数
function printArrayContent(arr: string[]):void {
    console.log(`共有${arr.length}个元素`);
}

// 输出: 共有2个元素
printArrayContent(animals)

// 声明对象
let person:{name: string, age: number, selfIntroduction:()=>void} = {
    name: "Hello world",
    age: 111,
    selfIntroduction: function (): void {
        console.log(`My name is ${this.name}, ${this.age} old`);
    }
}

// 输出 My name is Hello world, 111 old
person.selfIntroduction()

// 枚举
enum Gender {
    Male = 0,
    Female = 1
}

let i: {name: string, gender: Gender};
i = {
    name: '孙悟空',
    gender: Gender.Male
}

console.log(i.gender === Gender.Male);

// 类型别名
type myType = 1 | 2 | 3 | 4;
let k: myType;
let l: myType;
let m: myType;

k = 2; 

// 声明类
class Phone{
    system: string;
    ram: number;
    rom:number;
    constructor(theSystem:string, theRam:number, theRom:number) {
        this.system = theSystem;
        this.ram = theRam
        this.rom = theRom
    }
    bootPrompt(distanceInMeters:number = 0){
        console.log(`System: ${this.system}, RAM: ${this.ram}GB, ROM: ${this.rom}GB`);
    }
}

let androidPhone:Phone = new Phone('Android', 8, 256);

// 输出: System: Android, RAM: 8GB, ROM: 256GB
androidPhone.bootPrompt()

// 对于内置引用类型, 通常已经由变成语言定义好该类型的结构, 成员, 行为. 直接使用即可

// 如下示例代码:

let currentDate = new Date(2022, 5, 1)

// 注意,TS中的月份是从0开始, 0代表1月

// 输出: 当前时间为Wed Jun 01 2022 00:00:00 GMT+0800 (中国标准时间)
console.log(`当前时间为${currentDate}`);

let patt1 = new RegExp("e")


// 输出: true
console.log(patt1.test("free"));


```