# Flex经典等分布局
## CSS 书写规范

+ 布局
+ 宽高
+ 对齐(水平/垂直)
+ 颜色/字体/背景色




+ display :     block/flex
+ width: xxx% ,xxx px
+ height: xxx px
+ line-height: xxx px


![alt text](assets/10e75904c2fef3f4d516d84e16fec6ad.png)



字体, 样式,  背景色

```html

<div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
```

```css
@import './common/stylus/mixins.less';


.tab{
  // flex 三栏布局
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px; 
  	// 调用该方法,
    // border-bottom: 1px solid rgba(7,17,27,0.1);
	// 解决下边框1px
  .border-1px(rgba(7,17,27,0.1));
  .tab-item{
    flex: 1;
    text-align: center;

	
    & > a{
      display: block; // 保证a 标签变为块级元素,撑满整个父容器
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active{// a 标签 active 时候的样式
        color: rgb(240,20,20);
      }
    }
  }
}
```


## 解决下边框1px 像素问题?
mixins?
定义一个css 方法
```css
.border-1px(@color;){
    position:relative;
    &:after{
        display:block;
        position:absolute;
        left:0;
        bottom:0;
        width:100%;
        border-top:1px solid @color;
        content:' ';
    }
}
```


