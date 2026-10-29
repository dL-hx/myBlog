// .vitepress/config.mjs
import { defineConfig } from "file:///C:/Users/Lenovo/Desktop/myBlog/node_modules/.pnpm/vitepress@1.6.3_@algolia+client-search@5.20.4_search-insights@2.17.3/node_modules/vitepress/dist/node/index.js";

// .vitepress/nav.mjs
var nav_default = [
  { text: "\u4E3B\u9875", link: "/" },
  {
    text: "\u524D\u7AEF",
    items: [
      {
        text: "CSS\u76F8\u5173",
        items: [
          { text: "CSS\u57FA\u7840", link: "/docs/fe-css/css-base/CSS \u57FA\u7840" },
          { text: "CSS\u5E03\u5C40", link: "/docs/fe-css/css-layout/Flex\u7ECF\u5178\u7B49\u5206\u5E03\u5C40" },
          { text: "CSS\u7279\u6548", link: "/docs/fe-css/css-effect/\u6587\u5B57\u6E10\u53D8" },
          { text: "TailwindCSS", link: "/docs/fe-css/css-tailwind/TailwindCSS" }
        ]
      },
      {
        text: "JS\u76F8\u5173",
        items: [
          { text: "ECMAScript \u65B0\u7279\u6027", link: "/docs/fe-js/ecmascript-features/ecmascript\u65B0\u7279\u6027" },
          { text: "JavaScript \u6027\u80FD\u4F18\u5316", link: "/docs/fe-js/js-performance/js\u6027\u80FD\u4F18\u5316" },
          { text: "TypeScript \u8BED\u8A00", link: "/docs/fe-js/typescript/typescript\u8BED\u8A00" },
          { text: "DOM\u4E8B\u4EF6", link: "/docs/fe-js/dom-events/\u4E8B\u4EF6\u59D4\u6258\u4E0E\u6E32\u67D3\u6027\u80FD" },
          { text: "Part 1 \xB7 \u6A21\u5757\u4E00", link: "/docs/fe-js/modules/\u6A21\u5757\u4E00" }
        ]
      },
      {
        text: "JS\u8FDB\u9636",
        items: [
          { text: "\u51FD\u6570\u5F0F\u7F16\u7A0B\u8303\u5F0F", link: "/docs/fe-js/functional-programming/\u51FD\u6570\u5F0F\u7F16\u7A0B\u8303\u5F0F" },
          { text: "\u5F02\u6B65\u7F16\u7A0B", link: "/docs/fe-js/async-programming/\u5F02\u6B65\u7F16\u7A0B" },
          { text: "Promise \u6E90\u7801", link: "/docs/fe-js/promise-source/Promise \u6E90\u7801" },
          { text: "Part 2 \xB7 \u6A21\u5757\u4E8C", link: "/docs/fe-js/modules/\u6A21\u5757\u4E8C" }
        ]
      },
      {
        text: "\u524D\u7AEF\u5C0F\u7EC4\u4EF6",
        items: [
          { text: "React\u5C0F\u7EC4\u4EF6", link: "/docs/fe-small-components/react/React18-\u5217\u8868\u6570\u636E\u5B9E\u73B0\u7528\u6237\u5220\u9664\u3001\u6279\u91CF\u5220\u9664" },
          { text: "Vue\u5C0F\u7EC4\u4EF6", link: "/docs/fe-small-components/vue/Vue3---\u8DEF\u7531\u4F18\u5316\uFF08\u5237\u65B0\u65F6\u5019\uFF0C\u5728\u5F53\u524D\u8DEF\u7531\uFF09" }
        ]
      },
      {
        text: "React\u6570\u636E\u6D41",
        items: [
          { text: "Redux", link: "/docs/fe-redux/1. redux \u5B66\u4E60\u8FDB\u9636---Redux\u6838\u5FC3" },
          { text: "Mobx", link: "/docs/fe-mobx/mobx" },
          { text: "Hooks.formik", link: "/docs/hooks.formik/0-ReactHook\u6280\u5DE7" }
        ]
      },
      {
        text: "\u524D\u7AEF\u7EC4\u4EF6\u5316",
        link: "/docs/fe-components/\u53D7\u63A7\u7EC4\u4EF6\u4E0E\u975E\u53D7\u63A7\u7EC4\u4EF6\u7684\u9009\u7528\u6807\u51C6"
      },
      { text: "Nextjs", link: "/docs/fe/nextjs" },
      { text: "Typescript", link: "/docs/fe-ts/0-\u5982\u4F55\u5B66\u4E60TS" },
      {
        text: "\u524D\u7AEF\u6D4B\u8BD5",
        link: "/docs/fe/test/"
      },
      {
        text: "\u6570\u636E\u53EF\u89C6\u5316",
        link: "/docs/fe-date-visit/D3js\u4F7F\u7528"
      },
      {
        text: "\u6027\u80FD\u4F18\u5316",
        items: [
          { text: "CSS\u3001JS\u7684\u52A0\u8F7D\u4E0E\u6267\u884C", link: "/docs/fe-perfor-opt/CSS\u3001JS\u7684\u52A0\u8F7D\u4E0E\u6267\u884C" },
          { text: "\u61D2\u52A0\u8F7D\u4E0E\u9884\u52A0\u8F7D", link: "/docs/fe-perfor-opt/\u61D2\u52A0\u8F7D\u4E0E\u9884\u52A0\u8F7D" },
          { text: "\u6D4F\u89C8\u5668\u5B58\u50A8", link: "/docs/fe-perfor-opt/\u6D4F\u89C8\u5668\u5B58\u50A8" },
          { text: "\u6D4F\u89C8\u5668\u7F13\u5B58", link: "/docs/fe-perfor-opt/\u6D4F\u89C8\u5668\u7F13\u5B58" },
          { text: "\u56FE\u7247\u76F8\u5173\u7684\u4F18\u5316", link: "/docs/fe-perfor-opt/\u56FE\u7247\u76F8\u5173\u7684\u4F18\u5316" },
          { text: "\u91CD\u7ED8\u4E0E\u56DE\u6D41", link: "/docs/fe-perfor-opt/\u91CD\u7ED8\u4E0E\u56DE\u6D41" },
          { text: "\u8D44\u6E90\u5408\u5E76\u4E0E\u538B\u7F29", link: "/docs/fe-perfor-opt/\u8D44\u6E90\u5408\u5E76\u4E0E\u538B\u7F29" },
          { text: "\u81EA\u5B9A\u4E49\u5F00\u53D1\u670D\u52A1", link: "/docs/fe-perfor-opt/\u81EA\u5B9A\u4E49\u5F00\u53D1\u670D\u52A1" },
          { text: "webpack-------\u8DEF\u5F84\u4F18\u5316alias", link: "/docs/fe-perfor-opt/webpack-------\u8DEF\u5F84\u4F18\u5316alias" },
          { text: "\u56FE\u6807\u4F18\u5316-------IconMoon \u56FE\u6807\u5236\u4F5C", link: "/docs/fe-perfor-opt/\u56FE\u6807\u4F18\u5316-------IconMoon \u56FE\u6807\u5236\u4F5C" },
          { text: "\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u90A3\u4E9B\u5305\u5E94\u8BE5\u653E\u5230devDependencies,dependencies", link: "/docs/fe-perfor-opt/\u5F00\u53D1\u8FC7\u7A0B\u4E2D\u90A3\u4E9B\u5305\u5E94\u8BE5\u653E\u5230devDependencies,dependencies" }
        ]
      },
      {
        text: "\u5C0F\u7A0B\u5E8F\u5F00\u53D1",
        link: "/docs/fe-small-code/\u5C0F\u7A0B\u5E8F\u5F00\u53D1"
      },
      {
        text: "\u5FAE\u524D\u7AEF",
        items: [
          { text: "\u5FAE\u524D\u7AEF\u57FA\u7840", link: "/docs/fe/micro-fe-base/" },
          { text: "\u5FAE\u524D\u7AEF\u5B9E\u6218", link: "/docs/fe/micro-fe-demo/" }
        ]
      }
    ]
  },
  {
    text: "\u540E\u7AEF",
    items: [
      {
        text: "Nodejs",
        items: [
          { text: "Nodejs\u5165\u95E8", link: "/docs/be/node-demo/" },
          { text: "Nodejs\u5C0F\u5DE5\u5177", link: "/docs/be/node-tools/" }
        ]
      },
      {
        text: "\u6570\u636E\u5E93",
        items: [
          { text: "Mysql", link: "/docs/be-mysql/" },
          { text: "Mongodb", link: "/docs/be-mongodb/" }
        ]
      },
      { text: "Koa", link: "/docs/be-koa/Koa \u5165\u95E8" }
    ]
  },
  {
    text: "\u8FD0\u7EF4",
    items: [
      { text: "Docker", link: "/docs/ops-docker/Docker" },
      { text: "K8s", link: "/docs/ops-k8s/" }
    ]
  },
  { text: "\u6240\u6709\u9879\u76EE", link: "/all-pages" },
  {
    text: "\u5176\u4ED6",
    items: [
      { text: "\u4EE3\u7801\u901A\u7528\u7F29\u5199\u8868", link: "/docs/other/\u4EE3\u7801\u901A\u7528\u7F29\u5199\u8868/" },
      { text: "\u524D\u7AEFWeb\u7CFB\u7EDF\u67B6\u6784\u8BBE\u8BA1", link: "/docs/other/\u524D\u7AEFWeb\u7CFB\u7EDF\u67B6\u6784\u8BBE\u8BA1/" },
      {
        text: "\u5982\u4F55\u642D\u5EFA\u5E76\u90E8\u7F72\u81EA\u5DF1\u7684\u535A\u5BA2\u7F51\u7AD9",
        link: "/docs/other/\u5982\u4F55\u642D\u5EFA\u5E76\u90E8\u7F72\u81EA\u5DF1\u7684\u535A\u5BA2\u7F51\u7AD9/"
      },
      {
        text: "Anaconda\u5E38\u7528\u547D\u4EE4",
        link: "/docs/other/Anaconda\u5E38\u7528\u547D\u4EE4"
      },
      {
        text: "\u524D\u7AEF\u9762\u8BD5\u624B\u5199\u9898",
        link: "/docs/other/\u524D\u7AEF\u9762\u8BD5\u624B\u5199\u9898"
      },
      {
        text: "\u524D\u7AEF\u9762\u8BD5\u9898",
        link: "/docs/other/\u524D\u7AEF\u9762\u8BD5\u9898"
      },
      {
        text: "react\u5E38\u89C1\u9762\u8BD5\u9898",
        link: "/docs/other/react\u5E38\u89C1\u9762\u8BD5\u9898"
      }
    ]
  }
];

// .vitepress/gen_sidebar.mjs
import fs from "fs";
import path from "path";
var DIR_PATH = path.resolve();
var WHITE_LIST = [
  "index.md",
  "README.md",
  ".vitepress",
  "node_modules",
  "assets",
  "media",
  "public",
  "package.json",
  "package-lock.json"
];
var isDirectory = (path2) => fs.lstatSync(path2).isDirectory();
function extractNumber(text) {
  const numPart = text.split("-")[0];
  const num = parseInt(numPart, 10);
  return isNaN(num) ? Number.MAX_SAFE_INTEGER : num;
}
var intersections = (arr1, arr2) => Array.from(new Set(arr1.filter((item) => !new Set(arr2).has(item))));
function getList(parmas, path1, pathname) {
  const res = [];
  for (let file in parmas) {
    const dir = path.join(path1, parmas[file]);
    const isDir = isDirectory(dir);
    if (isDir) {
      const files = fs.readdirSync(dir);
      res.push({
        text: parmas[file],
        collapsible: true,
        items: getList(files, dir, `${pathname}/${parmas[file]}`)
      });
    } else {
      const name = path.basename(parmas[file]);
      const suffix = path.extname(parmas[file]);
      if (suffix !== ".md") {
        continue;
      }
      let link = `${pathname}${name}`;
      link = link.replace(".md", "");
      res.push({
        text: name.replace(".md", ""),
        link
      });
    }
  }
  function sortByNumber(arr) {
    return arr.sort((a, b) => {
      const aNum = extractNumber(a.text);
      const bNum = extractNumber(b.text);
      return aNum - bNum;
    });
  }
  const resSort = sortByNumber(res);
  return resSort;
}
var setSidebar = (pathname) => {
  const dirPath = path.join(DIR_PATH, pathname);
  const files = fs.readdirSync(dirPath);
  const items = intersections(files, WHITE_LIST);
  return getList(items, dirPath, pathname);
};

// .vitepress/sidebar.mjs
var sidebar_default = {
  "/": [
    {
      text: "\u6848\u4F8B",
      collapsed: true,
      items: [
        { text: "Markdown\u6848\u4F8B", link: "/markdown-examples" },
        { text: "Runtime API Examples", link: "/api-examples" }
      ]
    }
  ],
  "docs/fe-css/css-base/": setSidebar("/docs/fe-css/css-base/"),
  "docs/fe-css/css-layout/": setSidebar("/docs/fe-css/css-layout/"),
  "docs/fe-css/css-effect/": setSidebar("/docs/fe-css/css-effect/"),
  "docs/fe-css/css-tailwind/": setSidebar("/docs/fe-css/css-tailwind/"),
  "docs/fe-js/ecmascript-features/": setSidebar("/docs/fe-js/ecmascript-features/"),
  "docs/fe-js/js-performance/": setSidebar("/docs/fe-js/js-performance/"),
  "docs/fe-js/typescript/": setSidebar("/docs/fe-js/typescript/"),
  "docs/fe-js/functional-programming/": setSidebar("/docs/fe-js/functional-programming/"),
  "docs/fe-js/async-programming/": setSidebar("/docs/fe-js/async-programming/"),
  "docs/fe-js/modules/": setSidebar("/docs/fe-js/modules/"),
  "docs/fe-js/promise-source/": setSidebar("/docs/fe-js/promise-source/"),
  "docs/fe-js/dom-events/": setSidebar("/docs/fe-js/dom-events/"),
  "docs/fe-redux/": setSidebar("/docs/fe-redux/"),
  "docs/fe-mobx/": setSidebar("/docs/fe-mobx/"),
  "docs/hooks.formik/": setSidebar("/docs/hooks.formik/"),
  "docs/fe-components/": setSidebar("/docs/fe-components/"),
  "docs/fe-date-visit/": setSidebar("/docs/fe-date-visit/"),
  "docs/fe-small-components/react": setSidebar("/docs/fe-small-components/react/"),
  "docs/fe-small-components/vue": setSidebar("/docs/fe-small-components/vue/"),
  "docs/fe-perfor-opt/": setSidebar("/docs/fe-perfor-opt/"),
  "docs/fe-ts/": setSidebar("/docs/fe-ts/"),
  "docs/fe/test/": setSidebar("/docs/fe/test/"),
  "docs/fe/micro-fe-base/": setSidebar("/docs/fe/micro-fe-base/"),
  "docs/fe/micro-fe-demo/": [
    {
      text: "\u5FAE\u524D\u7AEF\u5B9E\u6218",
      items: [
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---01\u5BFC\u5B66", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---01\u5BFC\u5B66" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---02\u67B6\u6784\u57FA\u7840\u77E5\u8BC6", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---02\u67B6\u6784\u57FA\u7840\u77E5\u8BC6" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---021\u8F6F\u4EF6\u8BBE\u8BA1\u539F\u5219\u4E0E\u5206\u5C42", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---021\u8F6F\u4EF6\u8BBE\u8BA1\u539F\u5219\u4E0E\u5206\u5C42" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---022\u6280\u672F\u586B\u8865\u4E0E\u5D29\u6E83\u9884\u9632", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---022\u6280\u672F\u586B\u8865\u4E0E\u5D29\u6E83\u9884\u9632" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---023\u7CFB\u7EDF\u91CD\u6784", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---023\u7CFB\u7EDF\u91CD\u6784" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---03\u5FAE\u524D\u7AEF\u5B9E\u73B0\u65B9\u5F0F\u5BF9\u6BD4", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---03\u5FAE\u524D\u7AEF\u5B9E\u73B0\u65B9\u5F0F\u5BF9\u6BD4" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---031\u6280\u672F\u9009\u578B-\u786E\u5B9A\u6280\u672F\u6808", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---031\u6280\u672F\u9009\u578B-\u786E\u5B9A\u6280\u672F\u6808" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---032\u7ED8\u5236\u9879\u76EE\u67B6\u6784\u56FE", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---032\u7ED8\u5236\u9879\u76EE\u67B6\u6784\u56FE" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---033vue2 - \u65B0\u80FD\u6E90\u5B50\u9875\u9762", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---033vue2 - \u65B0\u80FD\u6E90\u5B50\u9875\u9762" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---034vue3 - \u9996\u9875,\u9009\u8F66\u9875\u9762", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---034vue3 - \u9996\u9875,\u9009\u8F66\u9875\u9762" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---035react15-\u8D44\u8BAF,\u89C6\u9891,\u89C6\u9891\u8BE6\u60C5", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---035react15-\u8D44\u8BAF,\u89C6\u9891,\u89C6\u9891\u8BE6\u60C5" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---035react16 - \u8D44\u8BAF\u89C6\u9891\u89C6\u9891\u8BE6\u60C5\u9875\u9762", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---035react16 - \u8D44\u8BAF\u89C6\u9891\u89C6\u9891\u8BE6\u60C5\u9875\u9762" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---036 react16 - \u65B0\u8F66\u6392\u884C\u767B\u5F55", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---036 react16 - \u65B0\u8F66\u6392\u884C\u767B\u5F55" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---037 \u540E\u7AEF\u670D\u52A1", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---037 \u540E\u7AEF\u670D\u52A1" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---038 \u8BF7\u6C42\u6570\u636E", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---038 \u8BF7\u6C42\u6570\u636E" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---039 \u5B50\u5E94\u7528\u63A5\u5165\u5FAE\u524D\u7AEF-vue2\uFF0Cvue3", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---039 \u5B50\u5E94\u7528\u63A5\u5165\u5FAE\u524D\u7AEF-vue2\uFF0Cvue3" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---040 \u5B50\u5E94\u7528\u63A5\u5165\u5FAE\u524D\u7AEF-react15,react17", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---040 \u5B50\u5E94\u7528\u63A5\u5165\u5FAE\u524D\u7AEF-react15,react17" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---041 \u6846\u67B6\u521D\u5EFA\uFF08\u4E2D\u592E\u63A7\u5236\u5668\uFF0C \u5B50\u5E94\u7528\u6CE8\u518C\uFF09", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---041 \u6846\u67B6\u521D\u5EFA\uFF08\u4E2D\u592E\u63A7\u5236\u5668\uFF0C \u5B50\u5E94\u7528\u6CE8\u518C\uFF09" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---042 \u6846\u67B6\u521D\u5EFA\uFF08\u8DEF\u7531\u62E6\u622A,\u83B7\u53D6\u9996\u4E2A\u5B50\u5E94\u7528\uFF09", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---042 \u6846\u67B6\u521D\u5EFA\uFF08\u8DEF\u7531\u62E6\u622A,\u83B7\u53D6\u9996\u4E2A\u5B50\u5E94\u7528\uFF09" },
        { text: "[\u5FAE\u524D\u7AEF\u5B9E\u6218]---043 \u6846\u67B6\u521D\u5EFA\uFF08\u4E3B\u5FAE\u5E94\u7528\u751F\u547D\u5468\u671F\uFF09", link: "/docs/fe/micro-fe-demo/[\u5FAE\u524D\u7AEF\u5B9E\u6218]---043 \u6846\u67B6\u521D\u5EFA\uFF08\u4E3B\u5FAE\u5E94\u7528\u751F\u547D\u5468\u671F\uFF09" }
      ]
    }
  ],
  "docs/be-koa/": setSidebar("/docs/be-koa/"),
  "docs/be/node-demo/": setSidebar("/docs/be/node-demo/"),
  "docs/be/node-tools/": setSidebar("/docs/be/node-tools/"),
  //  '/other/': [
  //   {
  //    text: '案例',
  //    collapsed: true,
  //   //  link: '/other/code-abbr'
  //    items:setSidebar('/other/')
  //   }
  //  ]
  "docs/ops-docker/": setSidebar("/docs/ops-docker/"),
  // 'docs/ops-k8s/':  setSidebar('/docs/ops-k8s/'),
  "docs/other/": setSidebar("/docs/other/")
  // '/fe/': [{
  //   text: '案例',
  //   // collapsed: true,
  //   link: 'docs/fe/api-examples'
  // }],
  // '/fe/':  [{
  //   text: '案例',
  //   collapsed: true,
  //   items:setSidebar('/fe/')
  // }]  
};

// .vitepress/config.mjs
var config_default = defineConfig({
  // base: "/myBlog/", // 部署github.io需要打开这个设置,现在不用了
  title: "\u5C0F\u674E\u79D1\u6280\u7684\u535A\u5BA2-\u6587\u6863\u7AD9",
  description: "\u4E00\u4E2AVitePress\u535A\u5BA2",
  head: [
    ["link", { rel: "icon", href: "logo.svg" }]
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: "/logo.svg",
    // 设置logo
    // siteTitle: false, // 隐藏标题
    //中文配置
    langMenuLabel: "\u591A\u8BED\u8A00",
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    darkModeSwitchLabel: "\u4E3B\u9898",
    lightModeSwitchTitle: "\u5207\u6362\u5230\u6D45\u8272\u6A21\u5F0F",
    darkModeSwitchTitle: "\u5207\u6362\u5230\u6DF1\u8272\u6A21\u5F0F",
    outline: {
      label: "\u76EE\u5F55",
      level: "deep"
      // `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
    },
    //导航栏
    nav: nav_default,
    //侧边栏
    sidebar: sidebar_default,
    lastUpdated: {
      text: "\u66F4\u65B0\u65F6\u95F4",
      formatOptions: { dateStyle: "short", timeStyle: "short" }
    },
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    // 设置搜索框样式
    search: {
      provider: "local",
      //配置中文提示
      options: {
        translations: {
          button: {
            buttonText: "\u641C\u7D22",
            buttonAriaLabel: "\u641C\u7D22"
          },
          modal: {
            searchBoxPlaceholder: "\u641C\u7D22\u6587\u6863",
            resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u6761\u4EF6",
            closeButtonAriaLabel: "\u5173\u95ED\u641C\u7D22",
            noResultsText: "\u6CA1\u6709\u627E\u5230\u7ED3\u679C",
            footer: {
              selectText: "\u9009\u62E9",
              closeText: "\u5173\u95ED",
              navigateText: "\u5207\u6362"
            }
          }
        }
      }
    },
    //文档页脚
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    },
    footer: {
      copyright: `Copyright \xA9 2025 - ${(/* @__PURE__ */ new Date()).getFullYear()} dL-hx`
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/dL-hx" },
      {
        icon: {
          svg: `<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>`
        },
        link: "https://space.bilibili.com/344263208"
      },
      {
        icon: {
          svg: `<svg t="1741495433539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1904" width="200" height="200"><path d="M0 0h1024v1024H0z" fill="#FF6633" p-id="1905"></path><path d="M698.9824 42.3936c-158.8736-32.5632-289.536 31.2832-324.9152 48.5888-94.72 46.2848-147.712 108.288-174.4896 140.288-25.9584 31.0272-82.7392 105.9328-108.288 215.8592-21.6576 93.1328-10.752 167.7824-6.0416 194.2528 11.4688 64.3072 33.28 186.88 150.4256 275.2 132.5056 99.8912 293.4784 85.5552 342.9888 80.9472 107.264-10.0352 289.4848-57.2928 300.8512-145.7152 5.1712-39.936-24.4224-89.4464-66.2016-102.5024-65.6384-20.5312-108.3392 63.5392-228.6592 80.9472-8.5504 1.2288-126.5664 16.6912-216.6272-48.5888-105.8816-76.6976-98.9696-211.3024-96.256-264.3968 1.536-30.5664 5.5808-93.5424 48.128-161.8944 14.7968-23.7568 60.3136-94.5664 156.4672-134.912 25.2928-10.5984 76.8512-31.5904 144.4352-26.9824 70.0416 4.7616 120.9856 34.5088 144.4352 48.5888 75.8272 45.4144 86.528 90.0608 120.3712 86.3232 35.8912-3.9424 69.9904-59.2896 66.2016-107.9296-7.424-93.7984-155.5968-158.1056-252.8256-178.0736z" fill="#FFFFFF" p-id="1906"></path></svg>`
        },
        link: "https://blog.csdn.net/qq_35812380"
      }
    ]
  },
  markdown: {
    //显示行数
    lineNumbers: true,
    //中文配置
    container: {
      tipLabel: "\u63D0\u793A",
      warningLabel: "\u8B66\u544A",
      noteLabel: "\u6CE8\u610F",
      dangerLabel: "\u5371\u9669",
      detailsLabel: "\u8BE6\u60C5",
      infoLabel: "\u4FE1\u606F"
    }
  },
  ignoreDeadLinks: true
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcubWpzIiwgIi52aXRlcHJlc3MvbmF2Lm1qcyIsICIudml0ZXByZXNzL2dlbl9zaWRlYmFyLm1qcyIsICIudml0ZXByZXNzL3NpZGViYXIubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVub3ZvXFxcXERlc2t0b3BcXFxcbXlCbG9nXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEZXNrdG9wXFxcXG15QmxvZ1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0xlbm92by9EZXNrdG9wL215QmxvZy8udml0ZXByZXNzL2NvbmZpZy5tanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlcHJlc3MnXHJcblxyXG5pbXBvcnQgbmF2ICBmcm9tICcuL25hdi5tanMnXHJcbmltcG9ydCBzaWRlYmFyICBmcm9tICcuL3NpZGViYXIubWpzJ1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlcHJlc3MuZGV2L3JlZmVyZW5jZS9zaXRlLWNvbmZpZ1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIC8vIGJhc2U6IFwiL215QmxvZy9cIiwgLy8gXHU5MEU4XHU3RjcyZ2l0aHViLmlvXHU5NzAwXHU4OTgxXHU2MjUzXHU1RjAwXHU4RkQ5XHU0RTJBXHU4QkJFXHU3RjZFLFx1NzNCMFx1NTcyOFx1NEUwRFx1NzUyOFx1NEU4NlxyXG4gIHRpdGxlOiBcIlx1NUMwRlx1Njc0RVx1NzlEMVx1NjI4MFx1NzY4NFx1NTM1QVx1NUJBMi1cdTY1ODdcdTY4NjNcdTdBRDlcIixcclxuICBkZXNjcmlwdGlvbjogXCJcdTRFMDBcdTRFMkFWaXRlUHJlc3NcdTUzNUFcdTVCQTJcIixcclxuICBoZWFkOiBbXHJcbiAgICBbXCJsaW5rXCIsIHsgcmVsOiBcImljb25cIiwgaHJlZjogXCJsb2dvLnN2Z1wiIH1dLFxyXG4gIF0sXHJcblxyXG4gIFxyXG4gIC8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2UvZGVmYXVsdC10aGVtZS1jb25maWdcclxuICB0aGVtZUNvbmZpZzoge1xyXG4gICAgbG9nbzogJy9sb2dvLnN2ZycsIC8vIFx1OEJCRVx1N0Y2RWxvZ29cclxuICAgIC8vIHNpdGVUaXRsZTogZmFsc2UsIC8vIFx1OTY5MFx1ODVDRlx1NjgwN1x1OTg5OFxyXG4gICAgLy9cdTRFMkRcdTY1ODdcdTkxNERcdTdGNkVcclxuICAgIGxhbmdNZW51TGFiZWw6IFwiXHU1OTFBXHU4QkVEXHU4QTAwXCIsIFxyXG4gICAgcmV0dXJuVG9Ub3BMYWJlbDogXCJcdThGRDRcdTU2REVcdTk4NzZcdTkwRThcIixcclxuICAgIHNpZGViYXJNZW51TGFiZWw6IFwiXHU4M0RDXHU1MzU1XCIsXHJcbiAgICBkYXJrTW9kZVN3aXRjaExhYmVsOiBcIlx1NEUzQlx1OTg5OFwiLFxyXG4gICAgbGlnaHRNb2RlU3dpdGNoVGl0bGU6IFwiXHU1MjA3XHU2MzYyXHU1MjMwXHU2RDQ1XHU4MjcyXHU2QTIxXHU1RjBGXCIsXHJcbiAgICBkYXJrTW9kZVN3aXRjaFRpdGxlOiBcIlx1NTIwN1x1NjM2Mlx1NTIzMFx1NkRGMVx1ODI3Mlx1NkEyMVx1NUYwRlwiLFxyXG4gICAgb3V0bGluZTp7XHJcbiAgICAgIGxhYmVsOidcdTc2RUVcdTVGNTUnLFxyXG4gICAgICBsZXZlbDogJ2RlZXAnLCAvLyBgJ2RlZXAnYCBcdTRFMEUgYFsyLCA2XWAgXHU3NkY4XHU1NDBDXHVGRjBDXHU1QzA2XHU2NjNFXHU3OTNBXHU0RUNFIGA8aDI+YCBcdTUyMzAgYDxoNj5gIFx1NzY4NFx1NjI0MFx1NjcwOVx1NjgwN1x1OTg5OFx1MzAwMlxyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLy9cdTVCRkNcdTgyMkFcdTY4MEZcclxuICAgIG5hdjogbmF2ICxcclxuICAgIC8vXHU0RkE3XHU4RkI5XHU2ODBGXHJcbiAgICBzaWRlYmFyOiBzaWRlYmFyLFxyXG4gICAgXHJcbiAgICBsYXN0VXBkYXRlZDoge1xyXG4gICAgICB0ZXh0OiAnXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0JyxcclxuICAgICAgZm9ybWF0T3B0aW9uczogeyBkYXRlU3R5bGU6ICdzaG9ydCcsICB0aW1lU3R5bGU6ICdzaG9ydCcgfVxyXG4gICAgfSxcclxuICAgIC8vIHNpZGViYXI6IHsgXCIvZnJvbnQtZW5kL3JlYWN0XCI6IHNldF9zaWRlYmFyKFwiZnJvbnQtZW5kL3JlYWN0XCIpIH0sXHJcbiAgICBcclxuICAgIC8vIFx1OEJCRVx1N0Y2RVx1NjQxQ1x1N0QyMlx1Njg0Nlx1NjgzN1x1NUYwRlxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgIHByb3ZpZGVyOiAnbG9jYWwnLFxyXG4gICAgICAvL1x1OTE0RFx1N0Y2RVx1NEUyRFx1NjU4N1x1NjNEMFx1NzkzQVxyXG4gICAgICBvcHRpb25zOntcclxuICAgICAgICB0cmFuc2xhdGlvbnM6IHtcclxuICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICBidXR0b25UZXh0OiAnXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAgICAgYnV0dG9uQXJpYUxhYmVsOiAnXHU2NDFDXHU3RDIyJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1vZGFsOiB7XHJcbiAgICAgICAgICAgIHNlYXJjaEJveFBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcclxuICAgICAgICAgICAgcmVzZXRCdXR0b25UaXRsZTogJ1x1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNicsXHJcbiAgICAgICAgICAgIGNsb3NlQnV0dG9uQXJpYUxhYmVsOiAnXHU1MTczXHU5NUVEXHU2NDFDXHU3RDIyJyxcclxuICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogJ1x1NkNBMVx1NjcwOVx1NjI3RVx1NTIzMFx1N0VEM1x1Njc5QycsXHJcbiAgICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICAgIHNlbGVjdFRleHQ6ICdcdTkwMDlcdTYyRTknLFxyXG4gICAgICAgICAgICAgIGNsb3NlVGV4dDogJ1x1NTE3M1x1OTVFRCcsXHJcbiAgICAgICAgICAgICAgbmF2aWdhdGVUZXh0OiAnXHU1MjA3XHU2MzYyJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICAvL1x1NjU4N1x1Njg2M1x1OTg3NVx1ODExQVxyXG4gICAgZG9jRm9vdGVyOiB7XHJcbiAgICAgIHByZXY6IFwiXHU0RTBBXHU0RTAwXHU3QkM3XCIsXHJcbiAgICAgIG5leHQ6IFwiXHU0RTBCXHU0RTAwXHU3QkM3XCIsXHJcbiAgICB9LFxyXG5cclxuICAgIGZvb3Rlcjoge1xyXG4gICAgICBjb3B5cmlnaHQ6IGBDb3B5cmlnaHQgXHUwMEE5IDIwMjUgLSAke25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gZEwtaHhgXHJcbiAgICB9LFxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgeyBpY29uOiAnZ2l0aHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kTC1oeCcgfSxcclxuICAgICAgeyBcclxuICAgICAgICBpY29uOiAge1xyXG4gICAgICAgICAgc3ZnOiBgPHN2ZyB0PVwiMTY3NjAyNTUxMzQ2MFwiIGNsYXNzPVwiaWNvblwiIHZpZXdCb3g9XCIwIDAgMTEyOSAxMDI0XCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBwLWlkPVwiMjc0NVwiIHdpZHRoPVwiMjAwXCIgaGVpZ2h0PVwiMjAwXCI+PHBhdGggZD1cIk0yMzQuOTA5IDkuNjU2YTgwLjQ2OCA4MC40NjggMCAwIDEgNjguMzk4IDAgMTY3LjM3NCAxNjcuMzc0IDAgMCAxIDQxLjg0MyAzMC41NzhsMTYwLjkzNyAxNDAuODJoMTE1LjA3bDE2MC45MzYtMTQwLjgyYTE2OC45ODMgMTY4Ljk4MyAwIDAgMSA0MS44NDMtMzAuNTc4QTgwLjQ2OCA4MC40NjggMCAwIDEgOTMwLjk2IDc2LjQ0NWE4MC40NjggODAuNDY4IDAgMCAxLTE3LjcwMyA1My45MTQgNDQ5LjgxOCA0NDkuODE4IDAgMCAxLTM1LjQwNiAzMi4xODcgMjMyLjU1MyAyMzIuNTUzIDAgMCAxLTIyLjUzMSAxOC41MDhoMTAwLjU4NWExNzAuNTkzIDE3MC41OTMgMCAwIDEgMTE4LjI4OSA1My4xMDkgMTcxLjM5NyAxNzEuMzk3IDAgMCAxIDUzLjkxNCAxMTguMjg4djQ2Mi42OTNhMzI1Ljg5NyAzMjUuODk3IDAgMCAxLTQuMDI0IDcwLjAwNyAxNzguNjQgMTc4LjY0IDAgMCAxLTgwLjQ2OCAxMTIuNjU2IDE3My4wMDcgMTczLjAwNyAwIDAgMS05Mi41MzkgMjUuNzVoLTczOC43YTM0MS4xODYgMzQxLjE4NiAwIDAgMS03Mi40MjEtNC4wMjRBMTc3LjgzNSAxNzcuODM1IDAgMCAxIDI4LjkxIDkzOS4wNjVhMTcyLjIwMiAxNzIuMjAyIDAgMCAxLTI3LjM2LTkyLjUzOVYzODguNjYyYTM2MC40OTggMzYwLjQ5OCAwIDAgMSAwLTY2Ljc4OUExNzcuMDMgMTc3LjAzIDAgMCAxIDE2Mi40ODcgMTc4LjY0aDEwNS40MTRjLTE2Ljg5OS0xMi4wNy0zMS4zODMtMjYuNTU1LTQ2LjY3Mi0zOS40M2E4MC40NjggODAuNDY4IDAgMCAxLTI1Ljc1LTY1Ljk4NCA4MC40NjggODAuNDY4IDAgMCAxIDM5LjQzLTYzLjU3TTIxNi40IDMyMS44NzNhODAuNDY4IDgwLjQ2OCAwIDAgMC02My41NyA1Ny45MzcgMTA4LjYzMiAxMDguNjMyIDAgMCAwIDAgMzAuNTc4djM4MC42MTVhODAuNDY4IDgwLjQ2OCAwIDAgMCA1NS41MjMgODAuNDY5IDEwNi4yMTggMTA2LjIxOCAwIDAgMCAzNC42MDEgNS42MzJoNjU0LjIwOGE4MC40NjggODAuNDY4IDAgMCAwIDc2LjQ0NC00Ny40NzYgMTEyLjY1NiAxMTIuNjU2IDAgMCAwIDguMDQ3LTUzLjEwOXYtMzU0LjA2YTEzNS4xODcgMTM1LjE4NyAwIDAgMCAwLTM4LjYyNSA4MC40NjggODAuNDY4IDAgMCAwLTUyLjMwNC01NC43MTkgMTI5LjU1NCAxMjkuNTU0IDAgMCAwLTQ5Ljg5LTcuMjQySDI1NC4yMmEyNjguNzY0IDI2OC43NjQgMCAwIDAtMzcuODIgMHogbTAgMFwiIGZpbGw9XCIjMjBCMEUzXCIgcC1pZD1cIjI3NDZcIj48L3BhdGg+PHBhdGggZD1cIk0zNDguMzY5IDQ0Ny40MDRhODAuNDY4IDgwLjQ2OCAwIDAgMSA1NS41MjMgMTguNTA3IDgwLjQ2OCA4MC40NjggMCAwIDEgMjguMTY0IDU5LjU0N3Y4MC40NjhhODAuNDY4IDgwLjQ2OCAwIDAgMS0xNi4wOTQgNTEuNSA4MC40NjggODAuNDY4IDAgMCAxLTEzMS45NjgtOS42NTYgMTA0LjYwOSAxMDQuNjA5IDAgMCAxLTEwLjQ2LTU0LjcxOXYtODAuNDY4YTgwLjQ2OCA4MC40NjggMCAwIDEgNzAuMDA3LTY3LjU5M3ogbTQxNi4wMiAwYTgwLjQ2OCA4MC40NjggMCAwIDEgODYuMTAyIDc1LjY0djgwLjQ2OGE5NC4xNDggOTQuMTQ4IDAgMCAxLTEyLjA3IDUzLjExIDgwLjQ2OCA4MC40NjggMCAwIDEtMTMyLjc3MyAwIDk1Ljc1NyA5NS43NTcgMCAwIDEtMTIuODc1LTU3LjEzM1Y1MTkuMDJhODAuNDY4IDgwLjQ2OCAwIDAgMSA3MC4wMDctNzAuODEyeiBtMCAwXCIgZmlsbD1cIiMyMEIwRTNcIiBwLWlkPVwiMjc0N1wiPjwvcGF0aD48L3N2Zz5gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9zcGFjZS5iaWxpYmlsaS5jb20vMzQ0MjYzMjA4JyBcclxuICAgICAgfSxcclxuICAgICAgXHJcbiAgICAgIHsgXHJcbiAgICAgICAgaWNvbjogIHtcclxuICAgICAgICAgIHN2ZzogYDxzdmcgdD1cIjE3NDE0OTU0MzM1MzlcIiBjbGFzcz1cImljb25cIiB2aWV3Qm94PVwiMCAwIDEwMjQgMTAyNFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgcC1pZD1cIjE5MDRcIiB3aWR0aD1cIjIwMFwiIGhlaWdodD1cIjIwMFwiPjxwYXRoIGQ9XCJNMCAwaDEwMjR2MTAyNEgwelwiIGZpbGw9XCIjRkY2NjMzXCIgcC1pZD1cIjE5MDVcIj48L3BhdGg+PHBhdGggZD1cIk02OTguOTgyNCA0Mi4zOTM2Yy0xNTguODczNi0zMi41NjMyLTI4OS41MzYgMzEuMjgzMi0zMjQuOTE1MiA0OC41ODg4LTk0LjcyIDQ2LjI4NDgtMTQ3LjcxMiAxMDguMjg4LTE3NC40ODk2IDE0MC4yODgtMjUuOTU4NCAzMS4wMjcyLTgyLjczOTIgMTA1LjkzMjgtMTA4LjI4OCAyMTUuODU5Mi0yMS42NTc2IDkzLjEzMjgtMTAuNzUyIDE2Ny43ODI0LTYuMDQxNiAxOTQuMjUyOCAxMS40Njg4IDY0LjMwNzIgMzMuMjggMTg2Ljg4IDE1MC40MjU2IDI3NS4yIDEzMi41MDU2IDk5Ljg5MTIgMjkzLjQ3ODQgODUuNTU1MiAzNDIuOTg4OCA4MC45NDcyIDEwNy4yNjQtMTAuMDM1MiAyODkuNDg0OC01Ny4yOTI4IDMwMC44NTEyLTE0NS43MTUyIDUuMTcxMi0zOS45MzYtMjQuNDIyNC04OS40NDY0LTY2LjIwMTYtMTAyLjUwMjQtNjUuNjM4NC0yMC41MzEyLTEwOC4zMzkyIDYzLjUzOTItMjI4LjY1OTIgODAuOTQ3Mi04LjU1MDQgMS4yMjg4LTEyNi41NjY0IDE2LjY5MTItMjE2LjYyNzItNDguNTg4OC0xMDUuODgxNi03Ni42OTc2LTk4Ljk2OTYtMjExLjMwMjQtOTYuMjU2LTI2NC4zOTY4IDEuNTM2LTMwLjU2NjQgNS41ODA4LTkzLjU0MjQgNDguMTI4LTE2MS44OTQ0IDE0Ljc5NjgtMjMuNzU2OCA2MC4zMTM2LTk0LjU2NjQgMTU2LjQ2NzItMTM0LjkxMiAyNS4yOTI4LTEwLjU5ODQgNzYuODUxMi0zMS41OTA0IDE0NC40MzUyLTI2Ljk4MjQgNzAuMDQxNiA0Ljc2MTYgMTIwLjk4NTYgMzQuNTA4OCAxNDQuNDM1MiA0OC41ODg4IDc1LjgyNzIgNDUuNDE0NCA4Ni41MjggOTAuMDYwOCAxMjAuMzcxMiA4Ni4zMjMyIDM1Ljg5MTItMy45NDI0IDY5Ljk5MDQtNTkuMjg5NiA2Ni4yMDE2LTEwNy45Mjk2LTcuNDI0LTkzLjc5ODQtMTU1LjU5NjgtMTU4LjEwNTYtMjUyLjgyNTYtMTc4LjA3MzZ6XCIgZmlsbD1cIiNGRkZGRkZcIiBwLWlkPVwiMTkwNlwiPjwvcGF0aD48L3N2Zz5gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaW5rOiAnaHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM1ODEyMzgwJyBcclxuICAgICAgfSxcclxuICAgIF1cclxuICB9LFxyXG4gIG1hcmtkb3duOiB7XHJcbiAgICAvL1x1NjYzRVx1NzkzQVx1ODg0Q1x1NjU3MFxyXG4gICAgbGluZU51bWJlcnM6IHRydWUsXHJcbiAgICAvL1x1NEUyRFx1NjU4N1x1OTE0RFx1N0Y2RVxyXG4gICAgY29udGFpbmVyOntcclxuICAgICAgdGlwTGFiZWw6IFwiXHU2M0QwXHU3OTNBXCIsXHJcbiAgICAgIHdhcm5pbmdMYWJlbDogXCJcdThCNjZcdTU0NEFcIixcclxuICAgICAgbm90ZUxhYmVsOiBcIlx1NkNFOFx1NjEwRlwiLFxyXG4gICAgICBkYW5nZXJMYWJlbDogXCJcdTUzNzFcdTk2NjlcIixcclxuICAgICAgZGV0YWlsc0xhYmVsOiBcIlx1OEJFNlx1NjBDNVwiLFxyXG4gICAgICBpbmZvTGFiZWw6IFwiXHU0RkUxXHU2MDZGXCIsXHJcbiAgICB9XHJcbiAgICBcclxuICB9LFxyXG4gIGlnbm9yZURlYWRMaW5rczogdHJ1ZSxcclxufSlcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRGVza3RvcFxcXFxteUJsb2dcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVub3ZvXFxcXERlc2t0b3BcXFxcbXlCbG9nXFxcXC52aXRlcHJlc3NcXFxcbmF2Lm1qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvTGVub3ZvL0Rlc2t0b3AvbXlCbG9nLy52aXRlcHJlc3MvbmF2Lm1qc1wiOy8vIFx1ODAwM1x1ODY1MVx1NTIzMFx1NTQwRVx1NjcxRlx1OEJFNVx1OTE0RFx1N0Y2RVx1NTE4NVx1NUJCOVx1NTNFRlx1ODBGRFx1NEYxQVx1NjcwOVx1NTkyN1x1OTFDRlx1NTE4NVx1NUJCOVx1RkYwQ1x1NTZFMFx1NkI2NFx1NUVGQVx1OEJBRVx1NjJDNlx1NTIwNlx1NTFGQVx1NTNCQlx1NTM1NVx1NzJFQ1x1N0JBMVx1NzQwNlx1MzAwMlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHsgdGV4dDogXCJcdTRFM0JcdTk4NzVcIiwgbGluazogXCIvXCIgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlwiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiQ1NTXHU3NkY4XHU1MTczXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJDU1NcdTU3RkFcdTc4NDBcIiwgbGluazogXCIvZG9jcy9mZS1jc3MvY3NzLWJhc2UvQ1NTIFx1NTdGQVx1Nzg0MFwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQ1NTXHU1RTAzXHU1QzQwXCIsIGxpbms6IFwiL2RvY3MvZmUtY3NzL2Nzcy1sYXlvdXQvRmxleFx1N0VDRlx1NTE3OFx1N0I0OVx1NTIwNlx1NUUwM1x1NUM0MFwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiQ1NTXHU3Mjc5XHU2NTQ4XCIsIGxpbms6IFwiL2RvY3MvZmUtY3NzL2Nzcy1lZmZlY3QvXHU2NTg3XHU1QjU3XHU2RTEwXHU1M0Q4XCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJUYWlsd2luZENTU1wiLCBsaW5rOiBcIi9kb2NzL2ZlLWNzcy9jc3MtdGFpbHdpbmQvVGFpbHdpbmRDU1NcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkpTXHU3NkY4XHU1MTczXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJFQ01BU2NyaXB0IFx1NjVCMFx1NzI3OVx1NjAyN1wiLCBsaW5rOiBcIi9kb2NzL2ZlLWpzL2VjbWFzY3JpcHQtZmVhdHVyZXMvZWNtYXNjcmlwdFx1NjVCMFx1NzI3OVx1NjAyN1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiSmF2YVNjcmlwdCBcdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcIiwgbGluazogXCIvZG9jcy9mZS1qcy9qcy1wZXJmb3JtYW5jZS9qc1x1NjAyN1x1ODBGRFx1NEYxOFx1NTMxNlwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiVHlwZVNjcmlwdCBcdThCRURcdThBMDBcIiwgbGluazogXCIvZG9jcy9mZS1qcy90eXBlc2NyaXB0L3R5cGVzY3JpcHRcdThCRURcdThBMDBcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIkRPTVx1NEU4Qlx1NEVGNlwiLCBsaW5rOiBcIi9kb2NzL2ZlLWpzL2RvbS1ldmVudHMvXHU0RThCXHU0RUY2XHU1OUQ0XHU2MjU4XHU0RTBFXHU2RTMyXHU2N0QzXHU2MDI3XHU4MEZEXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJQYXJ0IDEgXHUwMEI3IFx1NkEyMVx1NTc1N1x1NEUwMFwiLCBsaW5rOiBcIi9kb2NzL2ZlLWpzL21vZHVsZXMvXHU2QTIxXHU1NzU3XHU0RTAwXCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJKU1x1OEZEQlx1OTYzNlwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1MUZEXHU2NTcwXHU1RjBGXHU3RjE2XHU3QTBCXHU4MzAzXHU1RjBGXCIsIGxpbms6IFwiL2RvY3MvZmUtanMvZnVuY3Rpb25hbC1wcm9ncmFtbWluZy9cdTUxRkRcdTY1NzBcdTVGMEZcdTdGMTZcdTdBMEJcdTgzMDNcdTVGMEZcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NUYwMlx1NkI2NVx1N0YxNlx1N0EwQlwiLCBsaW5rOiBcIi9kb2NzL2ZlLWpzL2FzeW5jLXByb2dyYW1taW5nL1x1NUYwMlx1NkI2NVx1N0YxNlx1N0EwQlwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiUHJvbWlzZSBcdTZFOTBcdTc4MDFcIiwgbGluazogXCIvZG9jcy9mZS1qcy9wcm9taXNlLXNvdXJjZS9Qcm9taXNlIFx1NkU5MFx1NzgwMVwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiUGFydCAyIFx1MDBCNyBcdTZBMjFcdTU3NTdcdTRFOENcIiwgbGluazogXCIvZG9jcy9mZS1qcy9tb2R1bGVzL1x1NkEyMVx1NTc1N1x1NEU4Q1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlx1NUMwRlx1N0VDNFx1NEVGNlwiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiUmVhY3RcdTVDMEZcdTdFQzRcdTRFRjZcIiwgbGluazogXCIvZG9jcy9mZS1zbWFsbC1jb21wb25lbnRzL3JlYWN0L1JlYWN0MTgtXHU1MjE3XHU4ODY4XHU2NTcwXHU2MzZFXHU1QjlFXHU3M0IwXHU3NTI4XHU2MjM3XHU1MjIwXHU5NjY0XHUzMDAxXHU2Mjc5XHU5MUNGXHU1MjIwXHU5NjY0XCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJWdWVcdTVDMEZcdTdFQzRcdTRFRjZcIiwgbGluazogXCIvZG9jcy9mZS1zbWFsbC1jb21wb25lbnRzL3Z1ZS9WdWUzLS0tXHU4REVGXHU3NTMxXHU0RjE4XHU1MzE2XHVGRjA4XHU1MjM3XHU2NUIwXHU2NUY2XHU1MDE5XHVGRjBDXHU1NzI4XHU1RjUzXHU1MjREXHU4REVGXHU3NTMxXHVGRjA5XCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG5cclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiUmVhY3RcdTY1NzBcdTYzNkVcdTZENDFcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcIlJlZHV4XCIsIGxpbms6IFwiL2RvY3MvZmUtcmVkdXgvMS4gcmVkdXggXHU1QjY2XHU0RTYwXHU4RkRCXHU5NjM2LS0tUmVkdXhcdTY4MzhcdTVGQzNcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIk1vYnhcIiwgbGluazogXCIvZG9jcy9mZS1tb2J4L21vYnhcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIkhvb2tzLmZvcm1pa1wiLCBsaW5rOiBcIi9kb2NzL2hvb2tzLmZvcm1pay8wLVJlYWN0SG9va1x1NjI4MFx1NURFN1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1MjREXHU3QUVGXHU3RUM0XHU0RUY2XHU1MzE2XCIsXHJcbiAgICAgICAgbGluazogXCIvZG9jcy9mZS1jb21wb25lbnRzL1x1NTNEN1x1NjNBN1x1N0VDNFx1NEVGNlx1NEUwRVx1OTc1RVx1NTNEN1x1NjNBN1x1N0VDNFx1NEVGNlx1NzY4NFx1OTAwOVx1NzUyOFx1NjgwN1x1NTFDNlwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7IHRleHQ6IFwiTmV4dGpzXCIsIGxpbms6IFwiL2RvY3MvZmUvbmV4dGpzXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlR5cGVzY3JpcHRcIiwgbGluazogXCIvZG9jcy9mZS10cy8wLVx1NTk4Mlx1NEY1NVx1NUI2Nlx1NEU2MFRTXCIgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1MjREXHU3QUVGXHU2RDRCXHU4QkQ1XCIsXHJcbiAgICAgICAgbGluazogXCIvZG9jcy9mZS90ZXN0L1wiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcIixcclxuICAgICAgICBsaW5rOiBcIi9kb2NzL2ZlLWRhdGUtdmlzaXQvRDNqc1x1NEY3Rlx1NzUyOFwiLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTYwMjdcdTgwRkRcdTRGMThcdTUzMTZcIixcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgeyB0ZXh0OiBcIkNTU1x1MzAwMUpTXHU3Njg0XHU1MkEwXHU4RjdEXHU0RTBFXHU2MjY3XHU4ODRDXCIsIGxpbms6IFwiL2RvY3MvZmUtcGVyZm9yLW9wdC9DU1NcdTMwMDFKU1x1NzY4NFx1NTJBMFx1OEY3RFx1NEUwRVx1NjI2N1x1ODg0Q1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2MUQyXHU1MkEwXHU4RjdEXHU0RTBFXHU5ODg0XHU1MkEwXHU4RjdEXCIsIGxpbms6IFwiL2RvY3MvZmUtcGVyZm9yLW9wdC9cdTYxRDJcdTUyQTBcdThGN0RcdTRFMEVcdTk4ODRcdTUyQTBcdThGN0RcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NkQ0Rlx1ODlDOFx1NTY2OFx1NUI1OFx1NTBBOFwiLCBsaW5rOiBcIi9kb2NzL2ZlLXBlcmZvci1vcHQvXHU2RDRGXHU4OUM4XHU1NjY4XHU1QjU4XHU1MEE4XCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTZENEZcdTg5QzhcdTU2NjhcdTdGMTNcdTVCNThcIiwgbGluazogXCIvZG9jcy9mZS1wZXJmb3Itb3B0L1x1NkQ0Rlx1ODlDOFx1NTY2OFx1N0YxM1x1NUI1OFwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1NkZFXHU3MjQ3XHU3NkY4XHU1MTczXHU3Njg0XHU0RjE4XHU1MzE2XCIsIGxpbms6IFwiL2RvY3MvZmUtcGVyZm9yLW9wdC9cdTU2RkVcdTcyNDdcdTc2RjhcdTUxNzNcdTc2ODRcdTRGMThcdTUzMTZcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1OTFDRFx1N0VEOFx1NEUwRVx1NTZERVx1NkQ0MVwiLCBsaW5rOiBcIi9kb2NzL2ZlLXBlcmZvci1vcHQvXHU5MUNEXHU3RUQ4XHU0RTBFXHU1NkRFXHU2RDQxXCIgfSxcclxuICAgICAgICAgIHsgdGV4dDogXCJcdThENDRcdTZFOTBcdTU0MDhcdTVFNzZcdTRFMEVcdTUzOEJcdTdGMjlcIiwgbGluazogXCIvZG9jcy9mZS1wZXJmb3Itb3B0L1x1OEQ0NFx1NkU5MFx1NTQwOFx1NUU3Nlx1NEUwRVx1NTM4Qlx1N0YyOVwiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MUVBXHU1QjlBXHU0RTQ5XHU1RjAwXHU1M0QxXHU2NzBEXHU1MkExXCIsIGxpbms6IFwiL2RvY3MvZmUtcGVyZm9yLW9wdC9cdTgxRUFcdTVCOUFcdTRFNDlcdTVGMDBcdTUzRDFcdTY3MERcdTUyQTFcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIndlYnBhY2stLS0tLS0tXHU4REVGXHU1Rjg0XHU0RjE4XHU1MzE2YWxpYXNcIiwgbGluazogXCIvZG9jcy9mZS1wZXJmb3Itb3B0L3dlYnBhY2stLS0tLS0tXHU4REVGXHU1Rjg0XHU0RjE4XHU1MzE2YWxpYXNcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTZGRVx1NjgwN1x1NEYxOFx1NTMxNi0tLS0tLS1JY29uTW9vbiBcdTU2RkVcdTY4MDdcdTUyMzZcdTRGNUNcIiwgbGluazogXCIvZG9jcy9mZS1wZXJmb3Itb3B0L1x1NTZGRVx1NjgwN1x1NEYxOFx1NTMxNi0tLS0tLS1JY29uTW9vbiBcdTU2RkVcdTY4MDdcdTUyMzZcdTRGNUNcIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NUYwMFx1NTNEMVx1OEZDN1x1N0EwQlx1NEUyRFx1OTBBM1x1NEU5Qlx1NTMwNVx1NUU5NFx1OEJFNVx1NjUzRVx1NTIzMGRldkRlcGVuZGVuY2llcyxkZXBlbmRlbmNpZXNcIiwgbGluazogXCIvZG9jcy9mZS1wZXJmb3Itb3B0L1x1NUYwMFx1NTNEMVx1OEZDN1x1N0EwQlx1NEUyRFx1OTBBM1x1NEU5Qlx1NTMwNVx1NUU5NFx1OEJFNVx1NjUzRVx1NTIzMGRldkRlcGVuZGVuY2llcyxkZXBlbmRlbmNpZXNcIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NUMwRlx1N0EwQlx1NUU4Rlx1NUYwMFx1NTNEMVwiLFxyXG4gICAgICAgIGxpbms6IFwiL2RvY3MvZmUtc21hbGwtY29kZS9cdTVDMEZcdTdBMEJcdTVFOEZcdTVGMDBcdTUzRDFcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiXHU1RkFFXHU1MjREXHU3QUVGXCIsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIHsgdGV4dDogXCJcdTVGQUVcdTUyNERcdTdBRUZcdTU3RkFcdTc4NDBcIiwgbGluazogXCIvZG9jcy9mZS9taWNyby1mZS1iYXNlL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XCIsIGxpbms6IFwiL2RvY3MvZmUvbWljcm8tZmUtZGVtby9cIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTU0MEVcdTdBRUZcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIk5vZGVqc1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiTm9kZWpzXHU1MTY1XHU5NUU4XCIsIGxpbms6IFwiL2RvY3MvYmUvbm9kZS1kZW1vL1wiIH0sXHJcbiAgICAgICAgICB7IHRleHQ6IFwiTm9kZWpzXHU1QzBGXHU1REU1XHU1MTc3XCIsIGxpbms6IFwiL2RvY3MvYmUvbm9kZS10b29scy9cIiB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NUU5M1wiLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICB7IHRleHQ6IFwiTXlzcWxcIiwgbGluazogXCIvZG9jcy9iZS1teXNxbC9cIiB9LFxyXG4gICAgICAgICAgeyB0ZXh0OiBcIk1vbmdvZGJcIiwgbGluazogXCIvZG9jcy9iZS1tb25nb2RiL1wiIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSxcclxuICAgICAgeyB0ZXh0OiBcIktvYVwiLCBsaW5rOiBcIi9kb2NzL2JlLWtvYS9Lb2EgXHU1MTY1XHU5NUU4XCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0ZXh0OiBcIlx1OEZEMFx1N0VGNFwiLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAgeyB0ZXh0OiBcIkRvY2tlclwiLCBsaW5rOiBcIi9kb2NzL29wcy1kb2NrZXIvRG9ja2VyXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIks4c1wiLCBsaW5rOiBcIi9kb2NzL29wcy1rOHMvXCIgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7IHRleHQ6IFwiXHU2MjQwXHU2NzA5XHU5ODc5XHU3NkVFXCIsIGxpbms6IFwiL2FsbC1wYWdlc1wiIH0sXHJcbiAge1xyXG4gICAgdGV4dDogXCJcdTUxNzZcdTRFRDZcIixcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHsgdGV4dDogXCJcdTRFRTNcdTc4MDFcdTkwMUFcdTc1MjhcdTdGMjlcdTUxOTlcdTg4NjhcIiwgbGluazogXCIvZG9jcy9vdGhlci9cdTRFRTNcdTc4MDFcdTkwMUFcdTc1MjhcdTdGMjlcdTUxOTlcdTg4NjgvXCIgfSxcclxuICAgICAgeyB0ZXh0OiBcIlx1NTI0RFx1N0FFRldlYlx1N0NGQlx1N0VERlx1NjdCNlx1Njc4NFx1OEJCRVx1OEJBMVwiLCBsaW5rOiBcIi9kb2NzL290aGVyL1x1NTI0RFx1N0FFRldlYlx1N0NGQlx1N0VERlx1NjdCNlx1Njc4NFx1OEJCRVx1OEJBMS9cIiB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTY0MkRcdTVFRkFcdTVFNzZcdTkwRThcdTdGNzJcdTgxRUFcdTVERjFcdTc2ODRcdTUzNUFcdTVCQTJcdTdGNTFcdTdBRDlcIixcclxuICAgICAgICBsaW5rOiBcIi9kb2NzL290aGVyL1x1NTk4Mlx1NEY1NVx1NjQyRFx1NUVGQVx1NUU3Nlx1OTBFOFx1N0Y3Mlx1ODFFQVx1NURGMVx1NzY4NFx1NTM1QVx1NUJBMlx1N0Y1MVx1N0FEOS9cIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiQW5hY29uZGFcdTVFMzhcdTc1MjhcdTU0N0RcdTRFRTRcIixcclxuICAgICAgICBsaW5rOiBcIi9kb2NzL290aGVyL0FuYWNvbmRhXHU1RTM4XHU3NTI4XHU1NDdEXHU0RUU0XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlx1OTc2Mlx1OEJENVx1NjI0Qlx1NTE5OVx1OTg5OFwiLFxyXG4gICAgICAgIGxpbms6IFwiL2RvY3Mvb3RoZXIvXHU1MjREXHU3QUVGXHU5NzYyXHU4QkQ1XHU2MjRCXHU1MTk5XHU5ODk4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlx1OTc2Mlx1OEJENVx1OTg5OFwiLFxyXG4gICAgICAgIGxpbms6IFwiL2RvY3Mvb3RoZXIvXHU1MjREXHU3QUVGXHU5NzYyXHU4QkQ1XHU5ODk4XCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcInJlYWN0XHU1RTM4XHU4OUMxXHU5NzYyXHU4QkQ1XHU5ODk4XCIsXHJcbiAgICAgICAgbGluazogXCIvZG9jcy9vdGhlci9yZWFjdFx1NUUzOFx1ODlDMVx1OTc2Mlx1OEJENVx1OTg5OFwiLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEZXNrdG9wXFxcXG15QmxvZ1xcXFwudml0ZXByZXNzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxMZW5vdm9cXFxcRGVza3RvcFxcXFxteUJsb2dcXFxcLnZpdGVwcmVzc1xcXFxnZW5fc2lkZWJhci5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0xlbm92by9EZXNrdG9wL215QmxvZy8udml0ZXByZXNzL2dlbl9zaWRlYmFyLm1qc1wiOy8vXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwc2lkZWJhclx1ODExQVx1NjcyQ1xyXG4gXHJcbmltcG9ydCBmcyBmcm9tICdmcydcclxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcclxuIFxyXG4vL1x1ODNCN1x1NTNENlx1NUY1M1x1NTI0RFx1NzZFRVx1NUY1NVxyXG5jb25zdCBESVJfUEFUSD1wYXRoLnJlc29sdmUoKVxyXG4vL1x1NzY3RFx1NTQwRFx1NTM1NVx1RkYwQ1x1NjM5Mlx1OTY2NFx1NEUwRFx1OTcwMFx1ODk4MVx1NzY4NFx1NjU4N1x1NEVGNlxyXG5jb25zdCBXSElURV9MSVNUPVtcclxuICAgICdpbmRleC5tZCcsXHJcbiAgICAnUkVBRE1FLm1kJyxcclxuICAgICcudml0ZXByZXNzJyxcclxuICAgICdub2RlX21vZHVsZXMnLFxyXG4gICAgJ2Fzc2V0cycsXHJcbiAgICAnbWVkaWEnLFxyXG4gICAgJ3B1YmxpYycsXHJcbiAgICAncGFja2FnZS5qc29uJyxcclxuICAgICdwYWNrYWdlLWxvY2suanNvbicsXHJcbiBcclxuXVxyXG4vL1x1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NEUzQVx1NjU4N1x1NEVGNlx1NTkzOVxyXG5jb25zdCBpc0RpcmVjdG9yeT0ocGF0aCk9PmZzLmxzdGF0U3luYyhwYXRoKS5pc0RpcmVjdG9yeSgpXHJcbiBcclxuLy8gXHU2M0QwXHU1M0Q2XHU2NTcwXHU1QjU3XHU5MEU4XHU1MjA2XHU4RkRCXHU4ODRDXHU2MzkyXHU1RThGXHU3Njg0XHU2NUI5XHU2Q0Q1XHJcbmZ1bmN0aW9uIGV4dHJhY3ROdW1iZXIodGV4dCkge1xyXG4gICAgY29uc3QgbnVtUGFydCA9IHRleHQuc3BsaXQoJy0nKVswXTtcclxuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KG51bVBhcnQsIDEwKTtcclxuICAgIHJldHVybiBpc05hTihudW0pID8gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIgOiBudW07XHJcbn1cclxuLy9cdTUzRDZcdTVERUVcdTUwM0NcclxuY29uc3QgaW50ZXJzZWN0aW9ucz0oYXJyMSxhcnIyKT0+QXJyYXkuZnJvbShuZXcgU2V0KGFycjEuZmlsdGVyKGl0ZW09PiFuZXcgU2V0KGFycjIpLmhhcyhpdGVtKSkpKVxyXG4vL1x1NjI4QVx1NjVCOVx1NkNENVx1NUJGQ1x1NTFGQVx1NUU3Nlx1NEY3Rlx1NzUyOFxyXG5mdW5jdGlvbiBnZXRMaXN0KHBhcm1hcyxwYXRoMSxwYXRobmFtZSl7XHJcbiAgICBjb25zdCByZXM9W11cclxuICAgIC8vXHU5MDREXHU1Mzg2XHU2NTg3XHU0RUY2XHJcbiAgICBmb3IgKGxldCBmaWxlIGluIHBhcm1hcyl7XHJcbiAgICAgICAgLy9cdTYyRkNcdTYzQTVcdTY1ODdcdTRFRjZcdThERUZcdTVGODRcclxuICAgICAgICBjb25zdCBkaXI9cGF0aC5qb2luKHBhdGgxLHBhcm1hc1tmaWxlXSlcclxuICAgICAgICBjb25zdCBpc0Rpcj1pc0RpcmVjdG9yeShkaXIpXHJcbiAgICAgICAgaWYgKGlzRGlyKXtcclxuICAgICAgICAgICAgY29uc3QgZmlsZXM9ZnMucmVhZGRpclN5bmMoZGlyKVxyXG4gICAgICAgICAgICByZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OnBhcm1hc1tmaWxlXSxcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IGdldExpc3QoZmlsZXMsZGlyLGAke3BhdGhuYW1lfS8ke3Bhcm1hc1tmaWxlXX1gKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjb25zdCBuYW1lPXBhdGguYmFzZW5hbWUocGFybWFzW2ZpbGVdKVxyXG4gICAgICAgICAgICAvL1x1NjM5Mlx1OTY2NFx1OTc1RW1kXHU2NTg3XHU0RUY2XHJcbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeD1wYXRoLmV4dG5hbWUocGFybWFzW2ZpbGVdKVxyXG4gICAgICAgICAgICBpZiAoc3VmZml4IT09Jy5tZCcpe1xyXG4gICAgICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgbGluaz1gJHtwYXRobmFtZX0ke25hbWV9YFxyXG4gICAgICAgICAgICBsaW5rPWxpbmsucmVwbGFjZShcIi5tZFwiLFwiXCIpXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRleHQ6bmFtZS5yZXBsYWNlKFwiLm1kXCIsXCJcIiksXHJcbiAgICAgICAgICAgICAgICBsaW5rOmxpbmtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIC8vXHU3NkVFXHU1RjU1XHU2MzkyXHU1RThGXHJcbiAgICBmdW5jdGlvbiBzb3J0QnlOdW1iZXIoYXJyKSB7XHJcbiAgICAgICAgcmV0dXJuIGFyci5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFOdW0gPSBleHRyYWN0TnVtYmVyKGEudGV4dCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGJOdW0gPSBleHRyYWN0TnVtYmVyKGIudGV4dCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhTnVtIC0gYk51bTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHJlc1NvcnQgPSBzb3J0QnlOdW1iZXIocmVzKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHJlc1NvcnRcclxuICAgIFxyXG59XHJcbmV4cG9ydCBjb25zdCBzZXRTaWRlYmFyPShwYXRobmFtZSk9PntcclxuICAgIC8vXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU3NkVFXHU1RjU1XHJcbiAgICBjb25zdCBkaXJQYXRoPXBhdGguam9pbihESVJfUEFUSCxwYXRobmFtZSlcclxuICAgIC8vXHU4M0I3XHU1M0Q2XHU1RjUzXHU1MjREXHU3NkVFXHU1RjU1XHU0RTBCXHU3Njg0XHU2MjQwXHU2NzA5XHU2NTg3XHU0RUY2XHJcbiAgICBjb25zdCBmaWxlcz1mcy5yZWFkZGlyU3luYyhkaXJQYXRoKVxyXG4gICAgLy9cdThGQzdcdTZFRTRcdTc2N0RcdTU0MERcdTUzNTVcclxuICAgIGNvbnN0IGl0ZW1zPWludGVyc2VjdGlvbnMoZmlsZXMsV0hJVEVfTElTVClcclxuICAgIC8vIGNvbnNvbGUubG9nKGdldExpc3QoaXRlbXMsZGlyUGF0aCxwYXRobmFtZSkpXHJcbiAgICAvL1x1OEZENFx1NTZERVx1NzZFRVx1NUY1NVxyXG4gICAgcmV0dXJuIGdldExpc3QoaXRlbXMsZGlyUGF0aCxwYXRobmFtZSlcclxufSIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTGVub3ZvXFxcXERlc2t0b3BcXFxcbXlCbG9nXFxcXC52aXRlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXExlbm92b1xcXFxEZXNrdG9wXFxcXG15QmxvZ1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXIubWpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9MZW5vdm8vRGVza3RvcC9teUJsb2cvLnZpdGVwcmVzcy9zaWRlYmFyLm1qc1wiOy8qIFxyXG5cdTgwMDNcdTg2NTFcdTUyMzBcdTU0MEVcdTY3MUZcdThCRTVcdTkxNERcdTdGNkVcdTUxODVcdTVCQjlcdTUzRUZcdTgwRkRcdTRGMUFcdTY3MDlcdTU5MjdcdTkxQ0ZcdTUxODVcdTVCQjlcdUZGMENcdTU2RTBcdTZCNjRcdTVFRkFcdThCQUVcdTYyQzZcdTUyMDZcdTUxRkFcdTUzQkJcdTUzNTVcdTcyRUNcdTdCQTFcdTc0MDZcdTMwMDJcclxuXHJcblx1NEUzQVx1ODlFM1x1NTFCM1x1NjU4N1x1N0FFMFx1NTE5OVx1NUI4Q1x1NTQwRVx1OTcwMFx1ODk4MVx1NTcyOHNpZGViYXJcdTRFMkRcdTkxQ0RcdTY1QjBcdTZERkJcdTUyQTBcdTk0RkVcdTYzQTVcdTk1RUVcdTk4OThcdUZGMENcdTZERkJcdTUyQTBcdTRFODZcdTRFMDBcdTRFMkFcdTgxRUFcdTUyQThcdTVGMTVcdTUxNjVcdTc2ODRcdTUxRkRcdTY1NzBcdTMwMDJcclxuXHJcblx1NTNFRlx1NEVFNVx1NjVCOVx1NEZCRlx1NUZFQlx1NjM3N1x1NzY4NFx1ODFFQVx1NTJBOFx1NUYxNVx1NTE2NVx1NjU4N1x1N0FFMFx1NEZBN1x1OEZCOVx1NjgwRlx1MzAwMlxyXG5cclxuKi9cclxuaW1wb3J0IHsgc2V0U2lkZWJhciB9IGZyb20gXCIuL2dlbl9zaWRlYmFyLm1qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgJy8nOiBbe1xyXG4gICAgdGV4dDogJ1x1Njg0OFx1NEY4QicsXHJcbiAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICBpdGVtczpbXHJcbiAgICAgIHsgdGV4dDogJ01hcmtkb3duXHU2ODQ4XHU0RjhCJywgbGluazogJy9tYXJrZG93bi1leGFtcGxlcycgfSxcclxuICAgICAgeyB0ZXh0OiAnUnVudGltZSBBUEkgRXhhbXBsZXMnLCBsaW5rOiAnL2FwaS1leGFtcGxlcycgfVxyXG4gICAgXVxyXG4gIH1cclxuICBdLFxyXG5cclxuICAnZG9jcy9mZS1jc3MvY3NzLWJhc2UvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtY3NzL2Nzcy1iYXNlLycpLFxyXG4gICdkb2NzL2ZlLWNzcy9jc3MtbGF5b3V0Lyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLWNzcy9jc3MtbGF5b3V0LycpLFxyXG4gICdkb2NzL2ZlLWNzcy9jc3MtZWZmZWN0Lyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLWNzcy9jc3MtZWZmZWN0LycpLFxyXG4gICdkb2NzL2ZlLWNzcy9jc3MtdGFpbHdpbmQvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtY3NzL2Nzcy10YWlsd2luZC8nKSxcclxuICAnZG9jcy9mZS1qcy9lY21hc2NyaXB0LWZlYXR1cmVzLyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLWpzL2VjbWFzY3JpcHQtZmVhdHVyZXMvJyksXHJcbiAgJ2RvY3MvZmUtanMvanMtcGVyZm9ybWFuY2UvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtanMvanMtcGVyZm9ybWFuY2UvJyksXHJcbiAgJ2RvY3MvZmUtanMvdHlwZXNjcmlwdC8nOiBzZXRTaWRlYmFyKCcvZG9jcy9mZS1qcy90eXBlc2NyaXB0LycpLFxyXG4gICdkb2NzL2ZlLWpzL2Z1bmN0aW9uYWwtcHJvZ3JhbW1pbmcvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtanMvZnVuY3Rpb25hbC1wcm9ncmFtbWluZy8nKSxcclxuICAnZG9jcy9mZS1qcy9hc3luYy1wcm9ncmFtbWluZy8nOiBzZXRTaWRlYmFyKCcvZG9jcy9mZS1qcy9hc3luYy1wcm9ncmFtbWluZy8nKSxcclxuICAnZG9jcy9mZS1qcy9tb2R1bGVzLyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLWpzL21vZHVsZXMvJyksXHJcbiAgJ2RvY3MvZmUtanMvcHJvbWlzZS1zb3VyY2UvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtanMvcHJvbWlzZS1zb3VyY2UvJyksXHJcbiAgJ2RvY3MvZmUtanMvZG9tLWV2ZW50cy8nOiBzZXRTaWRlYmFyKCcvZG9jcy9mZS1qcy9kb20tZXZlbnRzLycpLFxyXG4gICdkb2NzL2ZlLXJlZHV4Lyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLXJlZHV4LycpLFxyXG4gICdkb2NzL2ZlLW1vYngvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtbW9ieC8nKSxcclxuICAnZG9jcy9ob29rcy5mb3JtaWsvJzogc2V0U2lkZWJhcignL2RvY3MvaG9va3MuZm9ybWlrLycpLFxyXG4gIFxyXG4gICdkb2NzL2ZlLWNvbXBvbmVudHMvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtY29tcG9uZW50cy8nKSxcclxuICAnZG9jcy9mZS1kYXRlLXZpc2l0Lyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLWRhdGUtdmlzaXQvJyksXHJcbiAgJ2RvY3MvZmUtc21hbGwtY29tcG9uZW50cy9yZWFjdCc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLXNtYWxsLWNvbXBvbmVudHMvcmVhY3QvJyksXHJcbiAgJ2RvY3MvZmUtc21hbGwtY29tcG9uZW50cy92dWUnOiBzZXRTaWRlYmFyKCcvZG9jcy9mZS1zbWFsbC1jb21wb25lbnRzL3Z1ZS8nKSxcclxuICBcclxuICAnZG9jcy9mZS1wZXJmb3Itb3B0Lyc6IHNldFNpZGViYXIoJy9kb2NzL2ZlLXBlcmZvci1vcHQvJyksXHJcbiAgJ2RvY3MvZmUtdHMvJzogc2V0U2lkZWJhcignL2RvY3MvZmUtdHMvJyksXHJcbiAgJ2RvY3MvZmUvdGVzdC8nOiBzZXRTaWRlYmFyKCcvZG9jcy9mZS90ZXN0LycpLFxyXG4gICdkb2NzL2ZlL21pY3JvLWZlLWJhc2UvJzogc2V0U2lkZWJhcignL2RvY3MvZmUvbWljcm8tZmUtYmFzZS8nKSxcclxuICAnZG9jcy9mZS9taWNyby1mZS1kZW1vLyc6IFtcclxuICAgIHtcclxuICAgICAgdGV4dDogJ1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOCcsXHJcbiAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMVx1NUJGQ1x1NUI2NicsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDFcdTVCRkNcdTVCNjYnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMlx1NjdCNlx1Njc4NFx1NTdGQVx1Nzg0MFx1NzdFNVx1OEJDNicsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDJcdTY3QjZcdTY3ODRcdTU3RkFcdTc4NDBcdTc3RTVcdThCQzYnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMjFcdThGNkZcdTRFRjZcdThCQkVcdThCQTFcdTUzOUZcdTUyMTlcdTRFMEVcdTUyMDZcdTVDNDInLCBsaW5rOiAnL2RvY3MvZmUvbWljcm8tZmUtZGVtby9bXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAyMVx1OEY2Rlx1NEVGNlx1OEJCRVx1OEJBMVx1NTM5Rlx1NTIxOVx1NEUwRVx1NTIwNlx1NUM0MicgfSxcclxuICAgICAgICB7IHRleHQ6ICdbXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAyMlx1NjI4MFx1NjcyRlx1NTg2Qlx1ODg2NVx1NEUwRVx1NUQyOVx1NkU4M1x1OTg4NFx1OTYzMicsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDIyXHU2MjgwXHU2NzJGXHU1ODZCXHU4ODY1XHU0RTBFXHU1RDI5XHU2RTgzXHU5ODg0XHU5NjMyJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDIzXHU3Q0ZCXHU3RURGXHU5MUNEXHU2Nzg0JywgbGluazogJy9kb2NzL2ZlL21pY3JvLWZlLWRlbW8vW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMjNcdTdDRkJcdTdFREZcdTkxQ0RcdTY3ODQnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wM1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NzNCMFx1NjVCOVx1NUYwRlx1NUJGOVx1NkJENCcsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDNcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTczQjBcdTY1QjlcdTVGMEZcdTVCRjlcdTZCRDQnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzFcdTYyODBcdTY3MkZcdTkwMDlcdTU3OEItXHU3ODZFXHU1QjlBXHU2MjgwXHU2NzJGXHU2ODA4JywgbGluazogJy9kb2NzL2ZlL21pY3JvLWZlLWRlbW8vW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzFcdTYyODBcdTY3MkZcdTkwMDlcdTU3OEItXHU3ODZFXHU1QjlBXHU2MjgwXHU2NzJGXHU2ODA4JyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDMyXHU3RUQ4XHU1MjM2XHU5ODc5XHU3NkVFXHU2N0I2XHU2Nzg0XHU1NkZFJywgbGluazogJy9kb2NzL2ZlL21pY3JvLWZlLWRlbW8vW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzJcdTdFRDhcdTUyMzZcdTk4NzlcdTc2RUVcdTY3QjZcdTY3ODRcdTU2RkUnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzN2dWUyIC0gXHU2NUIwXHU4MEZEXHU2RTkwXHU1QjUwXHU5ODc1XHU5NzYyJywgbGluazogJy9kb2NzL2ZlL21pY3JvLWZlLWRlbW8vW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzN2dWUyIC0gXHU2NUIwXHU4MEZEXHU2RTkwXHU1QjUwXHU5ODc1XHU5NzYyJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDM0dnVlMyAtIFx1OTk5Nlx1OTg3NSxcdTkwMDlcdThGNjZcdTk4NzVcdTk3NjInLCBsaW5rOiAnL2RvY3MvZmUvbWljcm8tZmUtZGVtby9bXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAzNHZ1ZTMgLSBcdTk5OTZcdTk4NzUsXHU5MDA5XHU4RjY2XHU5ODc1XHU5NzYyJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDM1cmVhY3QxNS1cdThENDRcdThCQUYsXHU4OUM2XHU5ODkxLFx1ODlDNlx1OTg5MVx1OEJFNlx1NjBDNScsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDM1cmVhY3QxNS1cdThENDRcdThCQUYsXHU4OUM2XHU5ODkxLFx1ODlDNlx1OTg5MVx1OEJFNlx1NjBDNScgfSxcclxuICAgICAgICB7IHRleHQ6ICdbXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAzNXJlYWN0MTYgLSBcdThENDRcdThCQUZcdTg5QzZcdTk4OTFcdTg5QzZcdTk4OTFcdThCRTZcdTYwQzVcdTk4NzVcdTk3NjInLCBsaW5rOiAnL2RvY3MvZmUvbWljcm8tZmUtZGVtby9bXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAzNXJlYWN0MTYgLSBcdThENDRcdThCQUZcdTg5QzZcdTk4OTFcdTg5QzZcdTk4OTFcdThCRTZcdTYwQzVcdTk4NzVcdTk3NjInIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzYgcmVhY3QxNiAtIFx1NjVCMFx1OEY2Nlx1NjM5Mlx1ODg0Q1x1NzY3Qlx1NUY1NScsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDM2IHJlYWN0MTYgLSBcdTY1QjBcdThGNjZcdTYzOTJcdTg4NENcdTc2N0JcdTVGNTUnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzcgXHU1NDBFXHU3QUVGXHU2NzBEXHU1MkExJywgbGluazogJy9kb2NzL2ZlL21pY3JvLWZlLWRlbW8vW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wMzcgXHU1NDBFXHU3QUVGXHU2NzBEXHU1MkExJyB9LFxyXG4gICAgICAgIHsgdGV4dDogJ1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDM4IFx1OEJGN1x1NkM0Mlx1NjU3MFx1NjM2RScsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDM4IFx1OEJGN1x1NkM0Mlx1NjU3MFx1NjM2RScgfSxcclxuICAgICAgICB7IHRleHQ6ICdbXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAzOSBcdTVCNTBcdTVFOTRcdTc1MjhcdTYzQTVcdTUxNjVcdTVGQUVcdTUyNERcdTdBRUYtdnVlMlx1RkYwQ3Z1ZTMnLCBsaW5rOiAnL2RvY3MvZmUvbWljcm8tZmUtZGVtby9bXHU1RkFFXHU1MjREXHU3QUVGXHU1QjlFXHU2MjE4XS0tLTAzOSBcdTVCNTBcdTVFOTRcdTc1MjhcdTYzQTVcdTUxNjVcdTVGQUVcdTUyNERcdTdBRUYtdnVlMlx1RkYwQ3Z1ZTMnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wNDAgXHU1QjUwXHU1RTk0XHU3NTI4XHU2M0E1XHU1MTY1XHU1RkFFXHU1MjREXHU3QUVGLXJlYWN0MTUscmVhY3QxNycsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDQwIFx1NUI1MFx1NUU5NFx1NzUyOFx1NjNBNVx1NTE2NVx1NUZBRVx1NTI0RFx1N0FFRi1yZWFjdDE1LHJlYWN0MTcnIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wNDEgXHU2ODQ2XHU2N0I2XHU1MjFEXHU1RUZBXHVGRjA4XHU0RTJEXHU1OTJFXHU2M0E3XHU1MjM2XHU1NjY4XHVGRjBDIFx1NUI1MFx1NUU5NFx1NzUyOFx1NkNFOFx1NTE4Q1x1RkYwOScsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDQxIFx1Njg0Nlx1NjdCNlx1NTIxRFx1NUVGQVx1RkYwOFx1NEUyRFx1NTkyRVx1NjNBN1x1NTIzNlx1NTY2OFx1RkYwQyBcdTVCNTBcdTVFOTRcdTc1MjhcdTZDRThcdTUxOENcdUZGMDknIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wNDIgXHU2ODQ2XHU2N0I2XHU1MjFEXHU1RUZBXHVGRjA4XHU4REVGXHU3NTMxXHU2MkU2XHU2MjJBLFx1ODNCN1x1NTNENlx1OTk5Nlx1NEUyQVx1NUI1MFx1NUU5NFx1NzUyOFx1RkYwOScsIGxpbms6ICcvZG9jcy9mZS9taWNyby1mZS1kZW1vL1tcdTVGQUVcdTUyNERcdTdBRUZcdTVCOUVcdTYyMThdLS0tMDQyIFx1Njg0Nlx1NjdCNlx1NTIxRFx1NUVGQVx1RkYwOFx1OERFRlx1NzUzMVx1NjJFNlx1NjIyQSxcdTgzQjdcdTUzRDZcdTk5OTZcdTRFMkFcdTVCNTBcdTVFOTRcdTc1MjhcdUZGMDknIH0sXHJcbiAgICAgICAgeyB0ZXh0OiAnW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wNDMgXHU2ODQ2XHU2N0I2XHU1MjFEXHU1RUZBXHVGRjA4XHU0RTNCXHU1RkFFXHU1RTk0XHU3NTI4XHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXHVGRjA5JywgbGluazogJy9kb2NzL2ZlL21pY3JvLWZlLWRlbW8vW1x1NUZBRVx1NTI0RFx1N0FFRlx1NUI5RVx1NjIxOF0tLS0wNDMgXHU2ODQ2XHU2N0I2XHU1MjFEXHU1RUZBXHVGRjA4XHU0RTNCXHU1RkFFXHU1RTk0XHU3NTI4XHU3NTFGXHU1NDdEXHU1NDY4XHU2NzFGXHVGRjA5JyB9LFxyXG4gICAgICBdXHJcbiAgICB9LFxyXG4gIF0sXHJcblxyXG4gIFxyXG4gICdkb2NzL2JlLWtvYS8nOiBzZXRTaWRlYmFyKCcvZG9jcy9iZS1rb2EvJyksXHJcbiAgJ2RvY3MvYmUvbm9kZS1kZW1vLyc6IHNldFNpZGViYXIoJy9kb2NzL2JlL25vZGUtZGVtby8nKSxcclxuICAnZG9jcy9iZS9ub2RlLXRvb2xzLyc6IHNldFNpZGViYXIoJy9kb2NzL2JlL25vZGUtdG9vbHMvJyksXHJcblxyXG4gIC8vICAnL290aGVyLyc6IFtcclxuICAvLyAgIHtcclxuICAvLyAgICB0ZXh0OiAnXHU2ODQ4XHU0RjhCJyxcclxuICAvLyAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgLy8gICAvLyAgbGluazogJy9vdGhlci9jb2RlLWFiYnInXHJcbiAgLy8gICAgaXRlbXM6c2V0U2lkZWJhcignL290aGVyLycpXHJcbiAgLy8gICB9XHJcbiAgLy8gIF1cclxuXHJcbiAgJ2RvY3Mvb3BzLWRvY2tlci8nOiAgc2V0U2lkZWJhcignL2RvY3Mvb3BzLWRvY2tlci8nKSxcclxuICAvLyAnZG9jcy9vcHMtazhzLyc6ICBzZXRTaWRlYmFyKCcvZG9jcy9vcHMtazhzLycpLFxyXG4gICdkb2NzL290aGVyLyc6ICBzZXRTaWRlYmFyKCcvZG9jcy9vdGhlci8nKVxyXG5cclxuXHJcbiAgLy8gJy9mZS8nOiBbe1xyXG4gIC8vICAgdGV4dDogJ1x1Njg0OFx1NEY4QicsXHJcbiAgLy8gICAvLyBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgLy8gICBsaW5rOiAnZG9jcy9mZS9hcGktZXhhbXBsZXMnXHJcbiAgLy8gfV0sXHJcbiAgLy8gJy9mZS8nOiAgW3tcclxuICAvLyAgIHRleHQ6ICdcdTY4NDhcdTRGOEInLFxyXG4gIC8vICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gIC8vICAgaXRlbXM6c2V0U2lkZWJhcignL2ZlLycpXHJcbiAgLy8gfV0gIFxyXG59XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVQsU0FBUyxvQkFBb0I7OztBQ0U5VSxJQUFPLGNBQVE7QUFBQSxFQUNiLEVBQUUsTUFBTSxnQkFBTSxNQUFNLElBQUk7QUFBQSxFQUN4QjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0w7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxVQUNMLEVBQUUsTUFBTSxtQkFBUyxNQUFNLHlDQUErQjtBQUFBLFVBQ3RELEVBQUUsTUFBTSxtQkFBUyxNQUFNLG1FQUFxQztBQUFBLFVBQzVELEVBQUUsTUFBTSxtQkFBUyxNQUFNLG1EQUErQjtBQUFBLFVBQ3RELEVBQUUsTUFBTSxlQUFlLE1BQU0sd0NBQXdDO0FBQUEsUUFDdkU7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLGlDQUFrQixNQUFNLCtEQUFnRDtBQUFBLFVBQ2hGLEVBQUUsTUFBTSx1Q0FBbUIsTUFBTSx3REFBb0M7QUFBQSxVQUNyRSxFQUFFLE1BQU0sMkJBQWlCLE1BQU0sZ0RBQXNDO0FBQUEsVUFDckUsRUFBRSxNQUFNLG1CQUFTLE1BQU0sZ0ZBQW1DO0FBQUEsVUFDMUQsRUFBRSxNQUFNLGtDQUFnQixNQUFNLHlDQUEwQjtBQUFBLFFBQzFEO0FBQUEsTUFDRjtBQUFBLE1BQ0E7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
