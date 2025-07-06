
# react useState使用与常见问题
![](assets/3745b80281d86a687348b5d563648483.png)
> 用于为函数组件引入状态
> 
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style></style>
  <script src="../react.development.js"></script>
  <script src="../react-dom.development.js"></script>
  <script src="../babel.min.js"></script>
  <script src="../lodash.min.js"></script>
</head>

<body>
  <div id="app"></div>
  <script type="text/babel">
   
    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { flushSync } = ReactDOM;

    let { useState, useEffect } = React;

    let Welcome = (props)=>{
        const initCount = () => {
        console.log('initCount');
        return 2*2*2;
      }
      // 5. 初始需要大量计算的情况，可以写一个回调函数，这样可以惰性加载函数，只让函数调用一次
      const [count, setCount] = useState(()=>{
        return initCount();
      });
      const [msg, setMsg] = useState('hello');
      
      // 4.利用扩展运算符的形式来解决对象修改的问题
      // const [info, setInfo] = useState({
      //   username: 'xiaoming',
      //   age: 20
      // })
      // setInfo({
      //   ...info,
      //   username: 'xiaoqiang'
      // })

      const handleClick = () => {
         //0. 取消批处理合并更新, render 2次
        // flushSync(()=>{
        //   setCount(count + 1)
        // })
        // flushSync(()=>{
        //   setMsg('hi')
        // })

        // 1. 合并更新,setCount(异步更新) 3次相当于1次, count值为1
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)

        // 2. 如何取消批处理合并,让值累加?,改为回调函数写法,内部会依次执行函数, 执行3次  count值为3
        // setCount((count)=> count+1)
        // setCount((count)=> count+1)
        // setCount((count)=> count+1)

        // 3. 异步更新,获取异步更新的值?
        // 在setCount执行后,直接获取值,发现是更新前的值.如何修复?

        // 在类组件中,是通过setState,的第二个参数,在回调函数中获取同步数据

        // 函数组件中useState,没有第二个参数获取这个同步更新的值,   需要使用useEffect,监听,获取同步更新的值


        // 既然要进行自动批处理操作，所以函数是异步的
        // useState()：对应响应式数据的修改函数是没有第二个参数的，所以要监听数据改变后的时机，在函数组件中是通过 useEffect() 来实现的
        // setCount(count + 1, ()=>{   // ✖
        //   console.log(count)
        // })



      }
      console.log(123);
      return (
        <div>
          <button onClick={handleClick}>点击</button>
          <div>hello world, { count }, { msg }</div>
        </div>
      );
    }
   



   
    

    let element = (
      <Welcome />
    );

    root.render(element)

  </script>
</body>

</html>
```
## 0. 取消批处理合并更新, render 2次
        // flushSync(()=>{
        //   setCount(count + 1)
        // })
        // flushSync(()=>{
        //   setMsg('hi')
        // })
## 1. 合并更新,setCount(异步更新) 3次相当于1次, count值为1
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
## 2. 如何取消批处理合并,让值累加?,改为回调函数写法,内部会依次执行函数, 执行3次  count值为3
        // setCount((count)=> count+1)
        // setCount((count)=> count+1)
        // setCount((count)=> count+1)
## 3. 异步更新,获取异步更新的值?useEffect
> 用useEffect监听同步
        // 在setCount执行后,直接获取值,发现是更新前的值.如何修复?

        // 在类组件中,是通过setState,的第二个参数,在回调函数中获取同步数据

        // 函数组件中useState,没有第二个参数获取这个同步更新的值,   需要使用useEffect,监听,获取同步更新的值


        // 既然要进行自动批处理操作，所以函数是异步的
        // useState()：对应响应式数据的修改函数是没有第二个参数的，所以要监听数据改变后的时机，在函数组件中是通过 useEffect() 来实现的
        // setCount(count + 1, ()=>{   // ✖
        //   console.log(count)
        // })
## 4. 结合useRef处理
问题：React开发中经常会遇到，组件渲染时都是上一次的数据，每次修改state数据，都不会立即在页面上显示更新。

原因：这是由于React里事件分为合成事件和原生事件，合成事件和钩子函数都是异步的，原生事件是同步的。由于useState是异步事件，所以会出现异步更新问题。在调用setData()的过程中，不要试图立即获取数据状态的变化。

解决方案：使用useRef存储数据，useEffect监听数据变化，并进行更新。

定义：


```js
const [initEditClassFormData, setInitEditClassFormData] = useState();
 
const initFormRef = useRef();
 
useEffect(() => {
    initFormRef.current = initEditClassFormData;
  }, [initEditClassFormData]);

```

调用：使用时，不再用initEditClassFormData，使用initFormRef.current

```
initFormRef.current
```

## 5.利用扩展运算符的形式来解决对象修改的问题
      // const [info, setInfo] = useState({
      //   username: 'xiaoming',
      //   age: 20
      // })
      // setInfo({
      //   ...info,
      //   username: 'xiaoqiang'
      // })

##  6. 初始值大量计算,优化
> 初始需要大量计算的情况，可以写一个回调函数，这样可以惰性加载函数，只让函数调用一次
 
      const [count, setCount] = useState(()=>{
        return initCount();
      });
      const [msg, setMsg] = useState('hello');
## FAQ
[https://zh-hans.legacy.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies](https://zh-hans.legacy.reactjs.org/docs/hooks-faq.html#is-it-safe-to-omit-functions-from-the-list-of-dependencies)
## 小结
讨论了下useState会遇到的一些问题,与优化技巧
