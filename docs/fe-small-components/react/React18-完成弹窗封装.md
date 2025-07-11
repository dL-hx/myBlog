---
outline: deep
---

# React18-完成弹窗封装
## 弹框封装

### 用法

```js
// 创建
userRef.current?.open('create')
// 修改
userRef.current?.open('edit',values)

{/* 创建用户 */}
<CreateUser mRef={userRef} update={} />
```

### 组件暴露open方法

文档地址：https://react.dev/reference/react/useImperativeHandle

```js
useImperativeHandle(ref, createHandle, dependencies?)
```

##### 方法一：**ref + forwardRef + useImperativeHandle**

```ts
// 父组件 OrderList
import React, { useEffect, useRef, useState } from 'react'

export default () => {
    const userRef = useRef()

    const handleOpen = () => {
        userRef.current?.open()
    }
    return <CreateUser ref={userRef} />
}


// 子组件 CreateUser
const CreateUser = forwardRef((props: IProp, ref: any) => {
    // 组件内部完成显隐
    const [visible, setVisible] = useState(false)
    // 暴露 open 方法给父组件调用
    useImperativeHandle(ref, () => ({
        open: () => {
          setVisible(true)
        }
    }))
    return (
    <Modal
      title="新增用户"
      width={800}
      open={visible}
      okText="确定"
      cancelText="取消"
      onOk={handleOk}
      onCancel={handleCancel}
    >...此处省略...</Modal>
})
```

**forwardRef官方解释：https://zh-hans.reactjs.org/docs/react-api.html#reactforwardref**

##### 方法二：自定义属性 + useImperativeHandle

```ts
// 父组件 OrderList
import React, { useEffect, useRef, useState } from 'react'
 
export default () => {
    const userRef = useRef()

    const handleOpen = () => {
        userRef.current?.open()
    }
    return <CreateOrder userRef={userRef} />
}

// 子组件 CreateOrder
interface IProp {
  userRef: MutableRefObject<{ open: () => void } | undefined>
}
const CreateUser = (props: IProp) => {
    const [visible, setVisible] = useState(false)
    useImperativeHandle(props.userRef, () => ({
        open: () => {
          setVisible(true)
        }
    }))
    return (
        <Modal
          title="新增用户"
          width={800}
          open={visible}
          okText="确定"
          cancelText="取消"
          onOk={handleOk}
          onCancel={handleCancel}
        >...此处省略...</Modal>
    )
}
```

> 这种方式注意，<CreateOrder userRef={userRef} /> 组件上面的属性不可以定义ref，需要自定义其它属性。

### 类型定义

```js
import { MutableRefObject } from 'react'

// 操作类型
export type IAction = 'create' | 'edit' | 'delete'

// 弹框组件属性类型
export interface IModalProp {
  mRef: MutableRefObject<{ open: (type: IAction) => void } | undefined>
  update: () => void
}
```

### 开发弹窗功能

1. 定义弹框表单

```js
export interface CreateParams {
  userName: string
  userEmail: string
  mobile?: number
  job?: string
  state?: number
  roleList?: string[]
  deptId?: string[]
  userImg: string
}
```

2. 添加表单验证

```js
// 用户名称、userEmail和部门是必填
<Form.Item
  name="userEmail"
  label="邮箱"
  rules={[
    {
      required: true,
      message: '请输入邮箱'
    }
  ]}
>
  <Input placeholder="请输入邮箱:xxx@mars.com" />
</Form.Item>

// 提交时验证
const valid = await form.validateFields()
```

3. 定义弹框

```js
<Modal
  title={action === 'create' ? '新增用户' : '编辑用户'}
  width={800}
  open={visible}
  okText="确定"
  cancelText="取消"
  onOk={handleOk}
  onCancel={handleCancel}
>
    ......
</Modal>
```

### 相关接口

1. 部门列表

2. 角色列表

> 等后面讲解完部门和角色以后，再过来把用户列表完善。
> 具体也需要结合AntD文档参考
