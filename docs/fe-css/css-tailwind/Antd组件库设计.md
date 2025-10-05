# Antd组件库设计

## 开发过组件库吗， 请说明设计与开发思路？

### 架构设计

### 1. 业务架构
- 分层
    - rc-xxx, 基础组件， unstyled component 组件
    - 只具备功能交互不具备 UI表现
    - 样式体系， theming
    - 基础组件
    - 复合组件， Search, Input + Select, IconButton ，Icon + Button
    - 业务组件， 业务组件是有业务含义的

- 解耦
    - 对每个组件都定义样式， ts 类型， 基础操作，工具方法

-响应式设计
    - 媒体查询 media query, ResizeObserver, Grid.


### 状态管理
- 全局状态， 基础配置， 国际化配置， 主题配置，
  `React ----> Context, useSyncExternalStore`,
  `Vue   ----> vue demi`
- 局部状态， 设计在组件内部
    - 表单场景 （受控与非受控，  状态是否和表单值双向奔赴）
    -  input value={(v)=>setV} 受控组件
    - 非受控 
    - input defaultvalue={v}

### 样式体系与主题设计
- Color Tokens: 颜色色值系统， （antd, arco | mantineUI| mui| shadcn/ui(tailwindcss)）

- 样式模块化方案: CSS-IN-JS(弊端： 运行时候性能消耗， ssr 不好【emotion, styled-components】)，  module css

- 样式优先级与覆盖： 控制样式优先级

### 模块化
- 可复用性，对于props,events的设计非常重要，为什么input ,textarea 都需要value, onChange 成对
- 公共方法: 颜色计算函数， 格式化处理，本地化，工具函数处理---@ant-design/utils


### 开发流程

#### 本地开发
二次开发， antd 来做二次开发

#### 组件库开发流程
> mantinue ui 
+ `https://mantine.dev/`
+ `https://github.com/mantinedev/mantine`

1. 工程架构： monorepo, core + components + hooks + utils + shared

2. Typescript

3. 流程化，规范化， 自动化,
    + 1.  script(如何定义 ci cd的源头)，
    + 2. eslint9, stylelint, spellcheck,commitlint
    + 3. 颜色值的生成，自动构建，增量构建， 构建缓存

4. 构建打包：rollup，esbuild,swc
5. 测试，单元测试，vitest, jest + react-testing-library




