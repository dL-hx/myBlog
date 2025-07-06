---
outline: deep
---
# Vue3---路由优化（刷新时候，在当前路由）

> 1. 刷新时候，在当前路由
> 2. 优化：如果当前路由就是当前的路由,就不要触发set

`components/MainNav.vue`

```js
<script>
import { ref, watch } from 'vue'
import { NAV_LIST } from '../const/nav'
import {useRouter, useRoute} from 'vue-router'
export default {
  name: 'MainNav',
  setup() {
    const router = useRouter()
    const route = useRoute() // 获取当前路由对象

    // 刷新时候，在当前路由
    watch(route,(val)=>{
      console.log(val);
      // console.log(val.fullPath) // 当前路由
      for (let i = 0; i < NAV_LIST.length; i++) {
        if (val.fullPath.indexOf(NAV_LIST[i].url)!==-1) { // 如果当前路由与路由匹配上
           currentIndex.value = i  // 设置active
        }
      }
    }, {deep: true})    // 深度监听

    const currentIndex = ref(0) // 创建响应式变量
    
    const setCurrentIndex = (data, index) => {
      // 优化：如果当前路由就是当前的路由,就不要触发set
      if (data.url === route.fullPath) {
        return ;
      }

      currentIndex.value = index
      router.push(data.url)
    }

    const searchStatus = ref(true)
    const setSearchStatus = (type) => {
      searchStatus.value = type
    }
    return {
      NAV_LIST,
      currentIndex,
      setCurrentIndex,
      searchStatus,
      setSearchStatus,

    }
  }
}
</script>
```

