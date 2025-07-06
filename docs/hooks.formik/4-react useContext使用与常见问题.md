
# react useContext使用与常见问题

+ 1. 在函数组件实现跨组件通信的方式
+ 2. 注册Context将value传递给子组件

+    let MyContext = React.createContext('默认值');
+   <MyContext.Provider value={} >
+    let value = useContext(MyContext)
![在这里插入图片描述](assets/33894ccbc526ca6b70e8ce60329da75f.png)

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
    let { useContext } = React;
    let MyContext = React.createContext('默认值');
    // 实现三层组件的跨组件通信
    let Welcome = (props) => {  
      return (
        <div>
          hello Welcome
          <MyContext.Provider value="welcome的问候~~~">
            <Head />
          </MyContext.Provider>
        </div>
      );
    }
    let Head = () => {
      return (
        <div>
          hello Head
          <Title />
        </div>
      );
    }
    let Title = () => {
      let value = useContext(MyContext);
      return (
        <div>
          hello Title, { value }
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