# CSS、JS 的加载与执行

浏览器在解析 HTML 时，遇到 `<link>`、`<script>` 等外部资源标签会触发下载与执行。理解其阻塞规则是性能优化的基础。

## 1. CSS 的加载与执行

### 1.1 CSS 不会阻塞 DOM 解析，但会阻塞渲染

- CSSOM 构建完成后，浏览器才会把 DOM 与 CSSOM 合并成 Render Tree，进而布局和绘制。
- 如果 CSS 文件很大或下载慢，页面会出现“白屏”。

### 1.2 优化手段

| 手段 | 说明 |
|------|------|
| 内联关键 CSS | 把首屏必须的 CSS 直接写到 `<style>` 中 |
| 异步加载非关键 CSS | 使用 `media="print"` + `onload` 技巧 |
| 压缩 CSS | 去除空格、注释、合并选择器 |
| 使用 CDN / 缓存 | 利用浏览器缓存减少重复下载 |

```html
<!-- 异步加载非关键 CSS -->
<link rel="preload" href="non-critical.css" as="style" onload="this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="non-critical.css"></noscript>
```

## 2. JS 的加载与执行

### 2.1 默认行为：阻塞解析

- `<script>` 默认会阻塞 HTML 解析，下载并执行完才继续。
- 如果 JS 操作了 DOM 或 CSSOM，浏览器会先确保前面的 CSS 已加载（JS 会等待 CSSOM）。

### 2.2 async 与 defer

```html
<!-- async：下载不阻塞解析，但执行会阻塞，且执行顺序不保证 -->
<script src="a.js" async></script>

<!-- defer：下载不阻塞解析，DOM 解析完成后按顺序执行 -->
<script src="b.js" defer></script>
```

| 属性 | 下载是否阻塞 | 执行时机 | 顺序 |
|------|-------------|---------|------|
| 无 | 阻塞 | 立即 | 按出现顺序 |
| async | 不阻塞 | 下载完成后立即执行 | 不保证 |
| defer | 不阻塞 | DOM 解析完成后 | 按出现顺序 |

### 2.3 优化建议

1. 首屏无关的 JS 使用 `defer`。
2. 独立第三方脚本（如统计、广告）使用 `async`。
3. 把 `<script>` 放到 `</body>` 前。
4. 按需拆分 JS，减少单个文件体积。

## 3. 关键渲染路径

```
HTML → DOM
        ↘
         Render Tree → Layout → Paint → Composite
        ↗
CSS  → CSSOM
```

优化目标：缩短关键路径长度、减少关键资源数量、减少关键资源大小。
