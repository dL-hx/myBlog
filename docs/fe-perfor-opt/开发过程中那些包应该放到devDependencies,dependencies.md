# 开发过程中那些包应该放到devDependencies,dependencies

默认安装在`dependencies`中了，
开发环境依赖:`devDependencies`



**dependencies:**
```
	"core-js": "^3.6.5",
    "vue": "^2.6.11" /react
```


高端项目一般会封装核心`core-js`库





**devDependencies**
+ "axios": "^0.21.1",
+  vue-router:"^3.5.1"

+  vuex/redux
+  element/antd
+  node-sass: "^4.12.0",

部分loader
+ "sass-loader": "^8.0.0",


vue-router: npm install --save vue-router
url-loader: npm install --save-dev






---
问题?
为什么vue-router需要安装在devDependencies?
> 因为是开发时候的依赖,  对于一般项目来说,  npm install也会安装devDependencies里面的依赖的啊,  所以安装到`dependencies`生产环境依赖,依然是可以运行的,但推荐是放到开发依赖中


1.将他们放到peerDependencies中，这样的好处是在用户安装依赖的时候，如果没有peerDependencies下的依赖的模块的话，会报警告来提示用户去下载
2.axios用fetch代替，redux用useContext代替，这样可以减少模块的依赖，进而减少包的体积。


参考:
https://juejin.cn/post/6844903449247629320

