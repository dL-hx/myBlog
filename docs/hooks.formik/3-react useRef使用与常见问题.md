# react useRef使用与常见问题


## 1. Dom操作: useRef()
```js
    // 1. Dom操作: useRef()
    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { useState, useEffect, useRef } = React;
    
    let Welcome = (props) => {
      const myRef = useRef()

      const handleClick = () =>{
        myRef.current.focus()
      }
  
      return (
        <div>
          <button onClick={handleClick}>点击</button>
          <input ref={myRef} type='text' />
        </div>
      );
    }
    
    let element = (
      <Welcome />
    );
    root.render(element);
```


## 2. 函数组件的转发: React.forwardRef()
```js
      // 2. 函数组件的转发: React.forwardRef()
    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { useState, useEffect, useRef, forwardRef } = React;
    
    let Head = forwardRef((props, ref)=> {
      return (
        <div>
          hello Head
          {/*将 ref 转发到子组件的input上 */}
          <input ref={ref} type='text' />
      </div>
      )
    })

    let Welcome = (props) => {
      const myRef = useRef()

      const handleClick = () =>{
        // 点击时候会触发子组件的focus事件
        myRef.current.focus()
      }
  
      return (
        <div>
          <button onClick={handleClick}>点击</button>
          {/*ref 和组件关联*/}
          <Head ref={myRef}></Head>
        </div>
      );
    }
    
    let element = (
      <Welcome />
    );
    root.render(element);
```

## 3. 对普通值进行记忆, 类似于一个class的实例属性
```js
 // 3. 对普通值进行记忆, 类似于一个class的实例属性
    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { useState, useEffect, useRef } = React;
    

    let Welcome = (props) => {
      // 响应式数据,具有记忆功能,点击后响应式数据加1
      const [num, setNum] = useState(0);

      // let count = 0; // 普通的count不具有记忆功能
      const count = useRef(0) // 可以给普通值进行记忆操作

      const handleClick = () =>{
        count.current++;
        console.log(count.current);
        
        setNum(num + 1)

        // console.log(num); // 还是之前的值

      }
  
      return (
        <div>
          <button onClick={handleClick}>点击</button>
        
        </div>
      );
    }
    
    let element = (
      <Welcome />
    );
    root.render(element);
```

## 4. 结合useEffect,只在更新时触发
```js
 // 4. 结合useEffect,只在更新时触发
    let app = document.querySelector('#app');
    let root = ReactDOM.createRoot(app);
    let { useState, useEffect, useRef } = React;
    

    let Welcome = (props) => {
      // 响应式数据,具有记忆功能,点击后响应式数据加1
      const [num, setNum] = useState(0);

      const isUpdate = useRef(false) 

      useEffect(()=>{// 只在点击时候触发
       if (isUpdate.current) {
        console.log(num);
       }
      })

      const handleClick = () =>{
        setNum(num + 1)
        isUpdate.current = true

        // console.log(num); // 还是之前的值

      }
  
      return (
        <div>
          <button onClick={handleClick}>点击</button>
        
        </div>
      );
    }
    
    let element = (
      <Welcome />
    );
    root.render(element);
```

## FAQ
[https://zh-hans.legacy.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function](https://zh-hans.legacy.reactjs.org/docs/hooks-faq.html#why-am-i-seeing-stale-props-or-state-inside-my-function)