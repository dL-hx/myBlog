
# 一 Typecript and React

### 一 安装
```
$ npx create-react-app my-app --template typescript
```
`[0]`:[https://create-react-app.bootcss.com/docs/adding-typescript](https://create-react-app.bootcss.com/docs/adding-typescript)



### 二 经典代码段
`Hello.tsx`
```tsx
import React from "react";

interface IHelloProps{
    message ?:string
}

const Hello:React.FC<IHelloProps> = (props) => {
  return (
    <div>{props.message}</div>
  )
}

Hello.defaultProps = {
    message :"Hello World"
}

export default Hello
```