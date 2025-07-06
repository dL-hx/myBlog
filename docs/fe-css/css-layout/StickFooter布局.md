# StickFooter布局
网址:
[https://www.w3cplus.com/css3/css-secrets/sticky-footers.html](https://www.w3cplus.com/css3/css-secrets/sticky-footers.html)


**如果页面内容不够长的时候，页脚块粘贴在视窗底部；**

**如果内容足够长时，页脚块会被内容向下推送。**

base.css , 清除浮动
```css
.clearfix{
    display: inline-block;
    &:after{
        display: block;
        content: '.';
        height: 0;
        line-height: 0;
        clear: both;
        visibility: hidden;
    }
}
```
base.html
```html
<div v-show="detailShow" class="detail">
      <div class="detail-wrapper clearfix">　　　　
        <div class="detail-main">                  
        
      </div>
      <div class="detail-close" @click="hideDetail">//底层
      
      </div>
    </div>

```


------------------

```html
   <div v-show="detailShow" class="detail" @click="hideDetail" transition="fade">
      <div class="detail-wrapper clearFix">　　　　　//内容的包装层
        <div class="detail-main">                   //关键padding-bottom 64px
          <h1 class="name">{{seller.name}}</h1>
          <div class="star-wrapper">
            <star :size="48" :score="seller.score"></star>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="detail-close" @click="hideDetail">//底层
        <i class="iconfont icon-cha"></i>
      </div>
    </div>

```