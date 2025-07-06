---
outline: deep
---
# Vue3---路由优化（刷新时候，在当前路由）


![在这里插入图片描述](assets/Snipaste_2025-07-06_12-36-22.png)



> **何时使用**
对评价进行展示

## 一 需求明确
实现一个star组件,  展示5个星,  
支持 (全星, 半星, 空星),   
支持 大小(24px, 36px, 48px)
## 一 问题分析
要展示5颗星,v-for   

接口定义
|属性      |  默认值    | 备注     |
| ---- | ---- | ---- |
| size     |  48(备选项,48,36,24)    |  星星的大小 (单位px)    |
| score     | Number     |  星星个数, 为3.6展示3星半      |


图片定义

.star24_half
.star36_half
.star48_half

状态定义
.on 全星
.half 半星
.off 0星


## 二. 代码实现
```html
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
```

通过监听 `starType` 的样式, 控制星的大小
```js
 props: {
    // 1.定义外部传递来的属性
    size:{ // 尺寸
      type:Number
    },
    score:{// 展示得分
      type:Number
    }

  },
  starType() {
   return 'star-' + this.size;
},
```

```css
  .star
    
    .star-item
     
    &.star-48
     
    &.star-36
 
    &.star-24
      
```


```vue
<template>
  <!-- 定义基础默认的样式,   :class= 定义动态附加样式 -->
  <div class="star" :class="startType">
    <span v-for="(itemClass, index) in itemClasses" :class="itemClass" class="star-item" :key="index"></span>
  </div>
</template>

<script type="text/ecmascript-6">
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

export default {
  props: {
    // 1.定义外部传递来的属性
    size: { // 尺寸
      type: Number
    },
    score: {// 展示得分
      type: Number
    }

  },
  data() {
    return {
      detailShow: false // 默认是不展示
    }
  },
  computed: {
    startType() {// 依赖于 size 属性
      return 'star-' + this.size
    },

    // 3. 利用计算属性,  计算星星个数
    itemClasses(){
      let result = [] // 构造出 ['on','on','on','half', 'off']这样的数组
      // Math.floor(3.6 *2) /2 =3.5  
       // Math.floor(3.4 *2) /2 =3   
      // Math.floor(4 *2) /2 =4
      // 向下取0.5倍数,  判断是否过半的.  数学方法进行精确  
      let score = Math.floor(this.score *2) /2
      let hasDecimal = score % 1 !==0 // 是否有小数
      let integer = Math.floor(score) // 是否有整数

      // 1. 构造全星
      for (let i = 0; i < integer; i++) {
        result.push(CLS_ON)
      }

      // 2. 添加半星
      if (hasDecimal) {
        result.push(CLS_HALF)
      }

      // 3. 补齐空星
      while(result.length < LENGTH){
        result.push(CLS_OFF)
      }

      return result
    }
  }
};
</script>


```

``` html
<style lang="less" scoped>
// mixin 混入
// @import "../../common/stylus/mixins.less";


.bg-image-base(@url: '') {
  @2xImgUrl: "@2x.png";
  // call mixin .c-icon();
  background-image: url("@{url}@{2xImgUrl}");
}

;


@media (-webkit-min-device-pixel-ratio: 2),
(min-device-pixel-ratio: 2) {
  .bg-image-base(@url: '') {
    @3xImgUrl: "@3x.png";
    // call mixin .c-icon();
    background-image: url("@{url}@{3xImgUrl}");
  }
}



// .bg-image('star24_half','')

// .on 全星
// .half 半星
// .off 0星

// 2. 定义css样式
.star {
  font-size: 0;

  .star-item {
    // 横向排布
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {

    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      // 设置最后一个元素没有 右侧间距
      &:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image-base('star48_on')
      }

      &.half {
        .bg-image-base('star48_half')
      }

      &.off {
        .bg-image-base('star48_off')
      }
    }
  }




   &.star-36 {

    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      // 设置最后一个元素没有 右侧间距
      &:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image-base('star36_on')
      }

      &.half {
        .bg-image-base('star36_half')
      }

      &.off {
        .bg-image-base('star36_off')
      }
    }
  }



  
 &.star-24 {

    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;

      // 设置最后一个元素没有 右侧间距
      &:last-child {
        margin-right: 0;
      }

      &.on {
        .bg-image-base('star24_on')
      }

      &.half {
        .bg-image-base('star24_half')
      }

      &.off {
        .bg-image-base('star24_off')
      }
    }
  }



}
</style>
```
## 三.调用
>          <v-star :size="48" :score="3.6"/>

1. 注册组件
```
export default {
...
  props: {
  
  },

  components: {
    'v-star': Star
  },


  data() {
    return {

    }
  },
  created() {// 转换为对应的样式

  },

  methods: {
 
  }

}
```


2. 引用组件
```md
 <v-star :size="48" :score="3.6"/>
```


3. 包裹组件, 决定组件展示的位置,  不去将样式封装在组件内部




```md
 <div class="star-wrapper">
    <v-star :size="48" :score="seller.score"/>
  </div>



### CSS
       .star-wrapper{
        /* 水平居中 */
        text-align: center;
        margin-top: 18px;
        padding: 2px 0;
}

```

```



## 总结
这里的核心思路在于,  通过运用计算属性computed,   
1. 利用父级传来的score,  计算出 列表  itemClasses,   补足星数
2. 利用父级传来的size,   同步 startType(), 方法,  与 'star-<size>'(star-48, star-36, star-24), 样式属性进行配合,   决定了星星的大小

3. .start-item,样式,  与具体的 'star-<size>'(star-48,  &.on/ &.off) ,样式追加,  先行设计盒子的宽度,  后置入对应的图片,  进行展示

4. 使用mixins,  方法,  简化了代码编写的思路
5. 将样式容器封装在组件外部,  不影响组件内部的布局


## vue 小总结
vue 中, 属性值如果需要用数字 ,  需要使用v-bind (简写为`:` )绑定属性值,
ps: 否则, 将被解析为`string`字符串,
如下:
```
 <v-star :size="48" :score="3.6"/>


```

## 参考文档
https://ant.design/components/rate-cn/

https://element.eleme.cn/#/zh-CN/component/rate


https://github.com/ElemeFE/element/blob/dev/packages/rate/src/main.vue

