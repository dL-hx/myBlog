<!--Layout.vue-->
<template #doc-after>
      <div style="margin-top: 24px">
        <Giscus
          v-if="route.path !== '/all-pages.html'"
          :key="page.filePath"
          repo="dL-hx/myBlog"
          repo-id="R_kgDOOFC3bQ"
          category="General"
          category-id="DIC_kwDOOFC3bc4CnvWj"
          mapping="pathname"
          strict="0"
          reactions-enabled="1"
          emit-metadata="0"
          input-position="bottom"
          lang="zh-CN"
          crossorigin="anonymous"
          :theme="isDark ? 'dark' : 'light'"
        />
      </div>
</template>
 
<script setup>
import Giscus from "@giscus/vue";
import DefaultTheme from "vitepress/theme";
import { watch } from "vue";
import { inBrowser, useData , useRoute} from "vitepress";

// 判断路由等于/all-pages,不加载giscus组件
const route = useRoute()


const { isDark, page } = useData();
 
const { Layout } = DefaultTheme;
 
watch(isDark, (dark) => {
  if (!inBrowser) return;
 
  const iframe = document
    .querySelector("giscus-widget")
    ?.shadowRoot?.querySelector("iframe");
 
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: dark ? "dark" : "light" } } },
    "https://giscus.app"
  );
});
</script>
 