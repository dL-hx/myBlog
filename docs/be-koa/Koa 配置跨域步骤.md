# Koa 配置跨域步骤

配置`中间件`

`/service`

```shell
$	cd service
```

```shell
$	npm install koa-cors --save
```



主要通过koa-cors插件来处理，共3个步骤：

①安装：

```javascript
npm install koa-cors --save
```

②引入：

```javascript
const cors = require('koa-cors');   // 解决跨域
```

③注册：

```javascript
app.use(cors());
```

ps：注意，要把 app.use(cors());  放在路由的前面，坑已踩