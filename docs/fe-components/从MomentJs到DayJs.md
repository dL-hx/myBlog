---
outline: deep
---
# 从 MomentJs 到 DayJs

## MomentJs

http://momentjs.cn/
Moment.js是一个轻量级的JavaScript时间库，它方便了日常开发中对时间的操作。如：获取时间，设置时间，格式化时间，比较时间等等

### MomentJs 常用 API

### 获取时间

```
1. 获取当前时间 
   `moment()`

2. 获取今天0时0分0秒 
   `moment().startOf('day')`

3. 获取本周第一天(周日)0时0分0秒 
   `moment().startOf('week')`

4. 获取本周周一0时0分0秒 
   `moment().startOf('isoWeek')`

5. 获取当前月第一天0时0分0秒 
   `moment().startOf('month')`

6. 获取今天23时59分59秒 
   `moment().endOf('day')`

7. 获取本周最后一天(周六)23时59分59秒 
   `moment().endOf('week')`

8. 获取本周周日23时59分59秒 
   `moment().endOf('isoWeek')`

9. 获取当前月最后一天23时59分59秒 
   `moment().endOf('month')`

10. 获取当前月的总天数 
    `moment().daysInMonth()` 

11. 获取时间戳(以秒为单位)
    `moment().format('X')` // 返回值为字符串类型
    `moment().unix()` // 返回值为数值型

12. 获取时间戳(以毫秒为单位)
    `moment().format('x')` // 返回值为字符串类型
    `moment().valueOf()` // 返回值为数值型

13. 获取年份
    `moment().year()`
    `moment().get('year')`

14. 获取月份
    `moment().month()`  // (0~11, 0: January, 11: December)
    `moment().get('month')`

15. 获取一个月中的某一天
    `moment().date()`
    `moment().get('date')`

16. 获取一个星期中的某一天
    `moment().day()` // (0~6, 0: Sunday, 6: Saturday)
    `moment().weekday()` // (0~6, 0: Sunday, 6: Saturday)
    `moment().isoWeekday()` // (1~7, 1: Monday, 7: Sunday)
    `moment().get('day')`
    `mment().get('weekday')`
    `moment().get('isoWeekday')`

17. 获取小时
    `moment().hours()`
    `moment().get('hours')`

18. 获取分钟
    `moment().minutes()`
    `moment().get('minutes')`

19. 获取秒数
    `moment().seconds()`
    `moment().get('seconds')`

20. 获取当前的年月日时分秒
    `moment().toArray()` // [years, months, date, hours, minutes, seconds, milliseconds]
    `moment().toObject()` // {years: xxxx, months: x, date: xx ...}

### 设置时间

1. 设置年份
   `moment().year(2019)`
   `moment().set('year', 2019)`
   `moment().set({year: 2019})`

2. 设置月份
   `moment().month(11)`  // (0~11, 0: January, 11: December)
   `moment().set('month', 11)` 

3. 设置某个月中的某一天
   `moment().date(15)`
   `moment().set('date', 15)`

4. 设置某个星期中的某一天
   `moment().weekday(0)` // 设置日期为本周第一天（周日）
   `moment().isoWeekday(1)` // 设置日期为本周周一
   `moment().set('weekday', 0)`
   `moment().set('isoWeekday', 1)`

5. 设置小时
   `moment().hours(12)`
   `moment().set('hours', 12)`

6. 设置分钟
   `moment().minutes(30)`
   `moment().set('minutes', 30)`

7. 设置秒数
   `moment().seconds(30)`
   `moment().set('seconds', 30)`

8. 下一年份
   `moment().add(1, 'years')`
   `moment().add({years: 1})`

9. 下一月份
   `moment().add(1, 'months')`

10. 下一天
    `moment().add(1, 'days')`

11. 下一周
    `moment().add(1, 'weeks')`

12. 下一小时
    `moment().add(1, 'hours')`

13. 下一分钟
    `moment().add(1, 'minutes')`

14. 下一秒
    `moment().add(1, 'seconds')`

15. 上一年份
    `moment().subtract(1, 'years')`
    `moment().subtract({years: 1})`

16. 上一月份
    `moment().subtract(1, 'months')`

17. 上一天
    `moment().subtract(1, 'days')`

18. 上一周
    `moment().subtract(1, 'weeks')`

19. 上一小时
    `moment().subtract(1, 'hours')`

20. 上一分钟
    `moment().subtract(1, 'minutes')`

21. 上一秒
    `moment().subtract(1, 'seconds')`
```

### 日期格式化

| 格式代码 | 说明                       | 返回值例子                 |
| -------- | -------------------------- | -------------------------- |
| M        | 数字表示的月份，没有前导零 | 1到12                      |
| MM       | 数字表示的月份，有前导零   | 01到12                     |
| MMM      | 三个字母缩写表示的月份     | Jan到Dec                   |
| MMMM     | 月份，完整的文本格式       | January到December          |
| Q        | 季度                       | 1到4                       |
| D        | 月份中的第几天，没有前导零 | 1到31                      |
| DD       | 月份中的第几天，有前导零   | 01到31                     |
| d        | 星期中的第几天，数字表示   | 0到6，0表示周日，6表示周六 |
| ddd      | 三个字母表示星期中的第几天 | Sun到Sat                   |
| dddd     | 星期几，完整的星期文本     | 从Sunday到Saturday         |
| w        | 年份中的第几周             | 如42：表示第42周           |
| YYYY     | 四位数字完整表示的年份     | 如：2014 或 2000           |
| YY       | 两位数字表示的年份         | 如：14 或 98               |
| A        | 大写的AM PM                | AM PM                      |
| a        | 小写的am pm                | am pm                      |
| HH       | 小时，24小时制，有前导零   | 00到23                     |
| H        | 小时，24小时制，无前导零   | 0到23                      |
| hh       | 小时，12小时制，有前导零   | 00到12                     |
| h        | 小时，12小时制，无前导零   | 0到12                      |
| m        | 没有前导零的分钟数         | 0到59                      |
| mm       | 有前导零的分钟数           | 00到59                     |
| s        | 没有前导零的秒数           | 1到59                      |
| ss       | 有前导零的描述             | 01到59                     |
| X        | Unix时间戳                 | 1411572969                 |

1. 格式化年月日： 'xxxx年xx月xx日'
   `moment().format('YYYY年MM月DD日')`

2. 格式化年月日： 'xxxx-xx-xx'
   `moment().format('YYYY-MM-DD')`

3. 格式化时分秒(24小时制)： 'xx时xx分xx秒'
   `moment().format('HH时mm分ss秒')`

4. 格式化时分秒(12小时制)：'xx:xx:xx am/pm'
   `moment().format('hh:mm:ss a')`

5. 格式化时间戳(以毫秒为单位)
   `moment().format('x')` // 返回值为字符串类型

6. 其他示例
   `moment().format('MMMM Do YYYY, h:mm:ss a');` // 五月 24日 2019, 7:47:43 晚上
   `moment().format('dddd');`                    // 星期五
   `moment().format("MMM Do YY");`               // 5月 24日 19
   `moment().format('YYYY [escaped] YYYY');`     // 2019 escaped 2019
   `moment().format();`                          // 2019-05-24T19:47:43+08:00    


### 比较时间

    let start_date = moment().subtract(1, 'weeks')
    let end_date = moment()
    end_date.diff(start_date) // 返回毫秒数
    end_date.diff(start_date, 'months') // 0
    end_date.diff(start_date, 'weeks') // 1
    end_date.diff(start_date, 'days') // 7
    start_date.diff(end_date, 'days') // -7

### 相对时间

    moment().fromNow(); 

### 日历时间

    moment().calendar(); 

### 国际化

import 'moment/locale/zh-cn'
moment.locale('zh-cn');  


## day.js

https://day.js.org/zh-CN/
Moment.js 的 2kB 轻量化方案，拥有同样强大的 API



安装：npm install dayjs

使用：dayjs()