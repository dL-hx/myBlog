---
outline: deep
---
# Vue组件------入离场动画

入离厂动画
> 官网文档
> https://cn.vuejs.org/v2/guide/transitions.html#CSS-%E8%BF%87%E6%B8%A1
## 1. 包裹任意元素
```html
    <transition name="fade">
    	<element></element>
    </transition>
```

## 2. 添加css样式
```css

  .fade-enter-active {
    transition: all .5s;
  }

  .fade-enter-active,
  .fade-leave-active {
    opacity: 1;
    background-color: rgba(7, 17, 27, 0.8);
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    background-color: rgba(7, 17, 27, 0);
  }


```

## 3.三方插件法
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./lib/vue-2.4.0.js"></script>
    <link rel="stylesheet" href="./lib/animate.css">

    <!-- 入场 bounceIn -->
    <!-- 离场 bounceOut -->
</head>

<body>
    <div id="app">
        <input type="button" value="toggle" @click="flag=!flag">

        <!-- 需求: 点击按钮, 让h3显示, 再点击按钮, 让h3 隐藏 -->

        
<!--         <transition
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut">
            <h3 v-if='flag'>这是一个h3</h3>
        </transition> -->


        <!-- 使用 :duration 来统一设置 入场 和离场 时候的动画时长(以毫秒计) -->

<!--         <transition
            enter-active-class="bounceIn"
            leave-active-class="bounceOut"
            :duration="200"
        >
            <h3 v-if='flag' class="animated">这是一个h3</h3>
    </transition> -->


    <!-- :duration="{ enter: 200, leave: 400 }" 定制进入和移出的持续时间 -->

    <transition
            enter-active-class="bounceIn"
            leave-active-class="bounceOut"
            
            :duration="{ enter: 200, leave: 400 }"
        >
            <h3 v-if='flag' class="animated">这是一个h3</h3>
        </transition>
            </div>

    <script>
        // 创建Vue 实例, 得到 ViewModel 
        var vm = new Vue({
            el: '#app',
            data: {
                flag: false
            },
            methods: {
                /* 
                toggle() {
                    this.flag = !this.flag
                }
                 */
            },
        })
    </script>
</body>

</html>
```