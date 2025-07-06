#  React18之useTransition与useDeferredValue
 - useDeferredValue: 返回一个状态值表示过渡任务的等待状态,以及一个启动该过渡任务的函数
 - useDeferredValue接受一个值,并返回该值的新副本,该副本将推迟到更紧急的更新之后

## 1. 使用useTransition钩子函数,导出pendding状态和startTransition
```js
      let {  useTransition } = React;
      const [ pending, startTransition ] = useTransition(); // 增加loading效果
	  const handleChange = (ev) => {
          setSearchWord(ev.target.value)  //第一个任务

          // 添加延时过渡
          startTransition(()=>{
            setQuery(ev.target.value)   //第二个任务(不紧急的任务)
          })
        }
        
        return (
		<>
		{
              pending? <div>loading...</div> : <List query={query} />
        }
		</>
	)
```

完整代码
```js
    <script type="text/babel">
      let app = document.querySelector('#app');
      let root = ReactDOM.createRoot(app);
      let { memo, useState, useTransition} = React;

      let List = memo(({query})=>{
        const text = 'hello world'
        const items = []
        // 匹配输入的选项并且高亮
        if( query !== '' && text.includes(query) ){
          const arr = text.split(query);
          for(let i=0;i<10000;i++){
            items.push(<li key={i}>{arr[0]}<span style={{color:'red'}}>{query}</span>{arr[1]}</li>)
          }
        }
        else{
          for(let i=0;i<10000;i++){
            items.push(<li key={i}>{text}</li>);
          }
        }

        return (
          <ul>
            { items }
          </ul>
        )
      })

      let Welcome = memo(()=>{
        const [ searchWord, setSearchWord ] = useState('');
        const [ query, setQuery ] = useState('');
        const [ pending, startTransition ] = useTransition(); // 增加loading效果
        const handleChange = (ev) => {
          setSearchWord(ev.target.value)  //第一个任务

          // 添加延时过渡
          startTransition(()=>{
            setQuery(ev.target.value)   //第二个任务(不紧急的任务)
          })
        }
        return (
          <div>
            <input type="text" value={searchWord} onChange={handleChange} />
            {
              pending? <div>loading...</div> : <List query={query} />
            }
          </div>
        )
      })

      let Element = (
        <Welcome />
      );
      
      root.render(Element)

    </script>
```

## 2. 使用useDeferredValue ,获取返回值的新副本

```js
      let { memo, useState, useTransition, useDeferredValue } = React;
      let Welcome = memo(()=>{
        const [ searchWord, setSearchWord ] = useState('');
        const query = useDeferredValue(searchWord) // query就是不紧急的值(就是延迟后的值)
   
        const handleChange = (ev) => {
          setSearchWord(ev.target.value)  //第一个任务
        }
        return (
          <div>
            <input type="text" value={searchWord} onChange={handleChange} />
            <List query={query} />
          </div>
        )
      })
```