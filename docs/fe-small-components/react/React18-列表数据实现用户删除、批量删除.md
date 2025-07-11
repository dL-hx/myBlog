---
outline: deep
---

# React18-列表数据实现用户删除、批量删除

## 用户删除、批量删除接口

### 删除、批量删除接口

接口地址

```shell
POST

/users/delete
```

请求参数

```js
{
  userIds: []
}
```

> 参数为数组，删除和批量删除共用

### 功能介绍

1. 单个删除

删除按钮绑定事件，点击显示弹框确认。

```js
// 删除
const handleDel = (values: DataType) => {
  // 此处要注意，不可以直接赋值
  /**
   * 1. 如果要通过更改状态的方式传参，则需要这么做。
   * userIds.push(values.userId)
   * setUserIds(userIds)
   * 2. 直接把参数传过去，不更改状态
   */
  Modal.confirm({
    title: '确认',
    content: <span>确认删除该用户吗？</span>,
    onOk: async () => {
      delUserSubmit([values.userId])
    }
  })
}
```

2. 批量删除

添加复选框配置，勾选后，保存`userIds`状态，点击批量删除按钮，触发弹框确认

```js
// 绑定复选框事件
const rowSelection = {
  type: 'checkbox',
  selectedRowKeys: userIds,
  onChange: async (selectedRowKeys: React.Key[]) => {
    setUserIds(selectedRowKeys as number[])
  }
}

// 批量删除确认
const handlePatchConfirm = () => {
  if (userIds.length == 0) {
    message.error('请选择要删除的用户')
    return
  }
  Modal.confirm({
    title: '确认',
    content: <span>确认删除该批用户吗？</span>,
    onOk: async () => {
      delUserSubmit()
    }
  })
}
```

3. 调用公共删除接口

```js
// 批量删除
const delUserSubmit = async (ids?: number[]) => {
  try {
    await api.userDel({
      userIds: ids || (userIds as number[]) //可单个删除，也可批量删除
    })
    message.success('删除成功')
    setUserIds([])
    getUserList()
  } catch (error) {
    console.log(error)
  }
}
```

