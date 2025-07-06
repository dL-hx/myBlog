#  性能优化, React.memo
### 1. 函数组件修改同一个值,不会重新渲染.类组件会setState会重新渲染
    (当响应式数据没有发生改变时候, 更新时不会重新执行, 不会重新render随机数没有变)

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
    /* 
    性能优化, React.memo
    1. 函数组件修改同一个值,不会重新渲染.类组件会setState会重新渲染
    (当响应式数据没有发生改变时候, 更新时不会重新执行, 不会重新render随机数没有变)

    2. React.memo类似纯组件,可提高组件性能表现(类组件PureComponent)
    当传递的值发生改变,重新render,当没有发生改变不重新render .
    加Math.random(),验证
    */

    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { useState } = React;

    // 不重新Render
    let Welcome = (props) => {  
      const [ count, setCount ] = useState(0);
      const handleClick= () => {
        setCount(1);
      }
      console.log(123);
      return (
        <div>
          <button onClick={handleClick}>点击</button>
          hello Welcome { Math.random() }
        </div>
      );
    }
    
    let element = (
      <Welcome />
    );
    root.render(element);
  </script>
</body>

</html>
```
###  2. React.memo类似纯组件,可提高组件性能表现(类组件PureComponent)
    当传递的值发生改变,重新render,当没有发生改变不重新render .
    加Math.random(),验证

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="../react.development.js"></script>
  <script src="../react-dom.development.js"></script>
  <script src="../babel.min.js"></script>
</head>
<body>
  <div id="app"></div>
  <script type="text/babel">

    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { useState } = React;

    let Welcome = (props) => {  
      const [ count, setCount ] = useState(0);
      const handleClick= () => {
        setCount(1);
      }
      return (
        <div>
          <button onClick={handleClick}>点击</button>
          hello Welcome
          <Head count={count} />
        </div>
      );
    }

    // 不包裹,每次都更新
    // 包裹,依赖更新时候才会更新
    let Head = React.memo(() => {
      return (
        <div>hello Head, { Math.random() }</div>
      )
    })
    
    let element = (
      <Welcome />
    );
    root.render(element);


  </script>
</body>
</html>
```