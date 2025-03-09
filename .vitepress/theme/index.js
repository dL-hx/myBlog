// https://vitepress.dev/guide/custom-theme
import { h, onMounted, watch, nextTick } from "vue";
import DefaultTheme from 'vitepress/theme'
import { inBrowser, useRoute } from 'vitepress'
import vitepressNprogress from 'vitepress-plugin-nprogress'
import mediumZoom from "medium-zoom";
import Layout from './myLayout.vue'
import busuanzi from "busuanzi.pure.js";

import VisitorPanel from "./components/VisitorPanel.vue";
import NotFound from './components/NotFound.vue'
import Confetti from './components/Confetti.vue'

import 'vitepress-plugin-nprogress/lib/css/index.css'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => h(Layout),
      'not-found': () => h(NotFound)
    });
  },

  setup() {
    const route = useRoute();
    const initZoom = () => {
      // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
      mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
    };
    onMounted(() => {
      initZoom();
    });
    watch(
      () => route.path,
      () => nextTick(() => initZoom())
    );
  },

  enhanceApp( ctx ) {
    const { app, router, siteData } = ctx;
    app.component("VisitorPanel", VisitorPanel);
    app.component("Confetti", Confetti);

    vitepressNprogress(ctx);
    if (inBrowser) {
      router.onAfterPageLoad  = () => {
        busuanzi.fetch();
      };
    }
  },
}
