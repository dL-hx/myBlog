// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { inBrowser } from 'vitepress'
import Layout from './myLayout.vue'
import busuanzi from "busuanzi.pure.js";
import VisitorPanel from "./components/VisitorPanel.vue";

import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-after': () => h(Layout)
    });
  },

  enhanceApp( ctx ) {
    const { app, router, siteData } = ctx;
    app.component("VisitorPanel", VisitorPanel);

    if (inBrowser) {
      router.onAfterPageLoad  = () => {
        busuanzi.fetch();
      };
    }
  },
}
