# 从 setInterval 到 requestAnimationFrame：一次动画循环的进化

> 关键词：requestAnimationFrame、setInterval、动画循环、重排重绘、前端性能
> 配套 Demo：[raf-vs-setinterval.html](./assets/raf-vs-setinterval.html)（可直接浏览器打开）

---

## 一、问题从哪来

书里讲“飞入动画”时给了两段思路：

- **CSS 派**：`.fly { transition: 2s; transform: translate(300px,0,0); }`，点一下加类名就飞过去。
- **JS 派**：想自己一帧一帧控制位置，比如 `div.style.left = offsetLeft + 5 + 'px'`。

JS 派最容易写成的样子是这样的：

```js
// ❌ 老写法：用定时器硬怼动画
setInterval(() => {
  div.style.left = div.offsetLeft + 5 + 'px';
}, 16);
```

能动，但问题一堆。而更现代的写法是：

```js
// ✅ 新写法：把更新逻辑交给浏览器的帧节奏
function tick() {
  div.style.left = div.offsetLeft + 5 + 'px';
  requestAnimationFrame(tick);   // 自己调自己，续上下一帧
}
requestAnimationFrame(tick);
```

看起来只是“换了个 API 名字”，差别其实在**调度哲学**上。

---

## 二、核心区别：时间驱动 vs 帧驱动

| 维度 | setInterval | requestAnimationFrame |
| :--- | :--- | :--- |
| 谁决定什么时候跑 | 你定死一个间隔（如 16ms） | 浏览器在**下一次重绘前**回调你 |
| 跟不上刷新率怎么办 | 回调照样堆积，越拖越卡 | 自动对齐屏幕刷新率，不掉帧逻辑 |
| 标签页切到后台 | 定时器照跑，白烧 CPU | **自动暂停**，切回来再续 |
| 和渲染的关系 | 可能在渲染中途插进去，触发多次强制布局 | 统一在绘制前批量执行，利于合成 |
| 刹车方式 | `clearInterval(id)` | `cancelAnimationFrame(id)` |

一句话总结：**setInterval 关心“过了多少毫秒”，rAF 关心“屏幕什么时候准备画下一帧”。**

动画是给人眼看的，跟着屏幕节奏走，自然更顺、更省。

---

## 三、一个完整的 rAF 动画：启动 / 停止 / 重置

下面这段是最小可用骨架，Demo 里的赛道 A 就是它的增强版（加了加速度让起步更柔和）。

```js
const box = document.getElementById('box');
let rafId = null;   // 句柄：既是“是否正在跑”的标志，也是取消用的钥匙
let pos = 0;

function tick() {
  pos += 6;                     // 1. 算状态

  const max = box.parentElement.clientWidth - box.clientWidth;
  if (pos >= max) {             // 2. 边界：到了就收尾，不再续帧
    pos = max;
    box.style.left = pos + 'px';
    rafId = null;
    return;
  }

  box.style.left = pos + 'px';  // 3. 写 DOM（一次/帧）
  rafId = requestAnimationFrame(tick);  // 4. 申请下一帧
}

function start() {
  if (rafId !== null) return;   // 🔑 防重复启动，这是新手最常踩的坑
  rafId = requestAnimationFrame(tick);
}

function stop() {
  if (rafId === null) return;
  cancelAnimationFrame(rafId);  // 🔑 精准取消“还没发生的下一帧”
  rafId = null;
}

function reset() {
  stop();                       // 重置前先停
  pos = 0;
  box.style.left = '0px';
}
```

### 三个必须养成的习惯

1. **永远存 `rafId`**。它既是“运行状态”的开关，又是取消动画的唯一凭证。
2. **启动前判重**。`start()` 被连点三次，绝不能开出三条并行循环——那样速度会翻倍还停不下来。
3. **结束条件里要把 `rafId = null`**。否则你不知道它到底是“跑完了”还是“还在跑”。

---

## 四、和 setInterval 的“翻车现场”对照

同一个逻辑换成 `setInterval`：

```js
let timerId = null;
function start() {
  if (timerId !== null) return;
  timerId = setInterval(() => {
    pos += 6;
    if (pos >= max) {
      clearInterval(timerId);
      timerId = null;
    }
    box.style.left = pos + 'px';
  }, 16);
}
function stop() { clearInterval(timerId); timerId = null; }
```

代码长得几乎一样，但运行时行为不同：

- **后台标签页**：rAF 停下来歇着；`setInterval` 的回调还在事件循环里排队，切回来时一堆回调集中爆发，方块“瞬移”一段。
- **长任务阻塞**：JS 主线被别的任务卡住时，rAF 会丢帧但节奏不乱；`setInterval` 的回调可能积压后连续执行多次。
- **高刷屏（120Hz/144Hz）**：rAF 会跟着更高帧率跑，动画更细腻；固定 16ms 的 `setInterval` 反而可能和刷新不同步。

> 想亲自验证？打开配套 Demo，点「一起起飞」，把标签页切后台几秒再切回来看两条赛道的位置差。

---

## 五、再进一步：让动画有“手感”

真实世界的运动不是匀速的。把“每帧 +6”换成**渐近速度**，就有惯性了：

```js
let speed = 0;
function tick() {
  speed += (7 - speed) * 0.12;  // 每帧向目标速度 7 靠近一点
  pos += speed;
  if (pos >= max) { /* 收尾 */ return; }
  box.style.left = pos + 'px';
  requestAnimationFrame(tick);
}
```

这种每帧基于“当前状态”递推的写法，天然适合 rAF，也是游戏循环（game loop）的基本形态：`state = update(state)` → `render()` → 下一帧。

---

## 六、什么时候其实不用 rAF

| 场景 | 推荐方案 | 理由 |
| :--- | :--- | :--- |
| 简单的位移 / 渐变 / 显隐 | **CSS transition / animation** | 声明式、浏览器可走 GPU 合成、代码最少 |
| 跟手拖拽、滚动联动、 canvas 逐帧绘制、物理模拟 | **requestAnimationFrame** | 需要每帧读状态、算逻辑 |
| 倒计时、轮询接口、定时任务 | **setInterval / setTimeout** | 它们本来就不是动画 API，别混用 |

一个实用的判断句：**如果动画中途要“读状态再决定下一步”，用 rAF；如果只是“从 A 到 B”，交给 CSS。**

---

## 七、要点速记

- rAF 的循环 = `更新状态 → 写 DOM → requestAnimationFrame(自己)` 的递归。
- 启动要判重，停止用 `cancelAnimationFrame`，重置先停再归零。
- 它赢在**跟着浏览器走**：帧同步、后台休眠、批量渲染。
- `setInterval` 做动画不是“错”，是“不在节奏上”。
- 能用 CSS 解决的动画就别写 JS，需要精细控制时才请出 rAF。

---

## 附：配套 Demo 使用说明

打开 `./assets/raf-vs-setinterval.html`：

1. **▶ 一起起飞**：两条赛道同时启动，观察起步的平滑度和右侧实时位置/速度。
2. **⏹ 一起停下**：立刻刹住，对比两种“刹车” API 的调用。
3. **↺ 一起重置**：停掉并回到起点。
4. **进阶玩法**：起飞后切到后台标签页几秒再切回，看赛道 B 是否发生“瞬移跳跃”。

```text
目录结构
├── raf-vs-setinterval.html        # 可运行的对照 Demo
└── requestAnimationFrame动画循环.md   # 本文
```


```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>requestAnimationFrame vs setInterval · 对照实验</title>
<style>
  :root { --bg: #0f1420; --card: #1a2133; --line: #2a3448; --txt: #e6ebf5; --sub: #8b97ad; }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 28px 16px 60px;
    font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif;
    background: var(--bg); color: var(--txt);
    max-width: 920px; margin: 0 auto;
  }
  h1 { font-size: 22px; margin: 0 0 6px; }
  .desc { color: var(--sub); font-size: 13px; line-height: 1.7; margin-bottom: 22px; }
  .panel { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 16px; margin-bottom: 18px; }
  .panel h2 { font-size: 15px; margin: 0 0 12px; display: flex; align-items: center; gap: 8px; }
  .tag { font-size: 11px; padding: 2px 8px; border-radius: 20px; font-weight: normal; }
  .t-raf { background: rgba(64,158,255,.15); color: #5cb6ff; }
  .t-int { background: rgba(230,162,60,.15); color: #e6a23c; }
  .track { position: relative; height: 70px; background: #0b0f1a; border-radius: 8px; overflow: hidden; }
  .box {
    position: absolute; top: 12px; left: 0;
    width: 46px; height: 46px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700;
  }
  #boxRaf { background: linear-gradient(135deg, #409eff, #67c23a); }
  #boxInt { background: linear-gradient(135deg, #e6a23c, #f56c6c); }
  .meta { display: flex; gap: 18px; margin-top: 10px; font-size: 12px; color: var(--sub); }
  .meta b { color: var(--txt); font-variant-numeric: tabular-nums; }
  .btns { display: flex; flex-wrap: wrap; gap: 8px; margin: 18px 0; }
  button {
    padding: 9px 18px; border: 1px solid var(--line); border-radius: 8px;
    background: #232c42; color: var(--txt); font-size: 14px; cursor: pointer; transition: .15s;
  }
  button:hover { border-color: #409eff; }
  button.primary { background: #409eff; border-color: #409eff; }
  button.warn { background: #e6a23c; border-color: #e6a23c; color: #1a1a1a; font-weight: 600; }
  button.gray { background: #3a4358; }
  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  @media (max-width: 640px) { .grid { grid-template-columns: 1fr; } }
  .kv { font-size: 12px; line-height: 1.9; color: var(--sub); }
  .kv b { color: #e6ebf5; }
  code { background: #0b0f1a; padding: 1px 6px; border-radius: 4px; font-size: 11px; color: #7ec8ff; }
  .foot { font-size: 12px; color: var(--sub); margin-top: 24px; line-height: 1.8; }
</style>
</head>
<body>

<h1>🎬 requestAnimationFrame vs setInterval</h1>
<p class="desc">
  同一个“方块向右移动”的需求，用两种方式各跑一条赛道。<br>
  打开控制台切到 Performance / 渲染面板，或干脆把标签页切到后台再切回来，差别一眼就懂。
</p>

<div class="btns">
  <button class="primary" id="start">▶ 一起起飞</button>
  <button class="warn" id="stop">⏹ 一起停下</button>
  <button class="gray" id="reset">↺ 一起重置</button>
</div>

<!-- ============ 赛道 A：rAF ============ -->
<div class="panel">
  <h2>赛道 A：requestAnimationFrame <span class="tag t-raf">推荐</span></h2>
  <div class="track"><div class="box" id="boxRaf">rAF</div></div>
  <div class="meta">
    <span>位置：<b id="posRaf">0</b> px</span>
    <span>速度：<b id="spdRaf">0</b></span>
    <span>状态：<b id="stRaf">空闲</b></span>
  </div>
</div>

<!-- ============ 赛道 B：setInterval ============ -->
<div class="panel">
  <h2>赛道 B：setInterval(16ms) <span class="tag t-int">老写法</span></h2>
  <div class="track"><div class="box" id="boxInt">INT</div></div>
  <div class="meta">
    <span>位置：<b id="posInt">0</b> px</span>
    <span>定时器ID：<b id="tidInt">-</b></span>
    <span>状态：<b id="stInt">空闲</b></span>
  </div>
</div>

<!-- ============ 关键差异 ============ -->
<div class="panel">
  <h2>🧠 三种“循环”写法对照</h2>
  <div class="grid">
    <div>
      <div class="kv">
        <b>① rAF 自己调自己（本例赛道 A）</b><br>
        <code>function tick(){ update(); rafId=requestAnimationFrame(tick); }</code><br>
        帧驱动：浏览器说“该画了”才执行。
      </div>
    </div>
    <div>
      <div class="kv">
        <b>② setInterval 定时硬怼（本例赛道 B）</b><br>
        <code>timer=setInterval(()=>update(),16)</code><br>
        时间驱动：16ms 到点就跑，不管画没画完。
      </div>
    </div>
    <div>
      <div class="kv">
        <b>③ CSS transition（声明式）</b><br>
        <code>.box{transition:2s}.fly{transform:translateX(300px)}</code><br>
        只加类名，浏览器自己算中间帧，最省心。
      </div>
    </div>
    <div>
      <div class="kv">
        <b>刹车方式</b><br>
        rAF → <code>cancelAnimationFrame(id)</code><br>
        INT → <code>clearInterval(id)</code><br>
        CSS → 移除类名 / 改 <code>transition: none</code>
      </div>
    </div>
  </div>
</div>

<p class="foot">
  💡 体验技巧：点「一起起飞」后把标签页切到后台挂几秒再切回来。<br>
  赛道 A 会停在离开时的位置（后台不跑），赛道 B 的定时器照样在攒，切回来会“跳帧狂奔”。这就是 rAF 更省资源、更稳的原因。
</p>

<script>
/* ===================== 赛道 A：requestAnimationFrame ===================== */
const boxRaf = document.getElementById('boxRaf');
const posRafEl = document.getElementById('posRaf');
const spdRafEl = document.getElementById('spdRaf');
const stRafEl  = document.getElementById('stRaf');

let rafId = null;
let posRaf = 0;
let speedRaf = 0;      // 用“加速度”起步，手感更真实
const maxPos = () => boxRaf.parentElement.clientWidth - boxRaf.clientWidth;

function tickRaf() {
  // 1. 更新状态（逻辑）
  speedRaf += (7 - speedRaf) * 0.12;   // 渐近目标速度 7
  posRaf += speedRaf;

  // 2. 边界判断：到了就停，不再请求下一帧
  if (posRaf >= maxPos()) {
    posRaf = maxPos();
    flushRaf();
    stRafEl.textContent = '已到达 🎯';
    rafId = null;
    return;
  }
  flushRaf();

  // 3. 关键：把自己交给浏览器，等下一帧再跑
  rafId = requestAnimationFrame(tickRaf);
}

function flushRaf() {
  boxRaf.style.left = posRaf + 'px';
  posRafEl.textContent = Math.round(posRaf);
  spdRafEl.textContent = speedRaf.toFixed(2);
}

function startRaf() {
  if (rafId !== null) return;          // 防重复启动
  if (posRaf >= maxPos()) posRaf = 0;  // 到终点了就从头来
  speedRaf = 0;
  stRafEl.textContent = '飞行中 🚀';
  rafId = requestAnimationFrame(tickRaf);
}

function stopRaf() {
  if (rafId === null) return;
  cancelAnimationFrame(rafId);         // 精准取消“下一帧”
  rafId = null;
  speedRaf = 0;
  stRafEl.textContent = '已暂停 ⏸';
  spdRafEl.textContent = '0.00';
}

function resetRaf() {
  if (rafId !== null) { cancelAnimationFrame(rafId); rafId = null; }
  posRaf = 0; speedRaf = 0;
  flushRaf();
  stRafEl.textContent = '空闲';
}

/* ===================== 赛道 B：setInterval ===================== */
const boxInt = document.getElementById('boxInt');
const posIntEl = document.getElementById('posInt');
const tidIntEl = document.getElementById('tidInt');
const stIntEl  = document.getElementById('stInt');

let timerId = null;
let posInt = 0;
let speedInt = 0;

function flushInt() {
  boxInt.style.left = posInt + 'px';
  posIntEl.textContent = Math.round(posInt);
}

function startInt() {
  if (timerId !== null) return;        // 防重复：多次点击会开出多个定时器
  if (posInt >= maxPos()) posInt = 0;
  speedInt = 0;
  stIntEl.textContent = '飞行中 🚀';

  // 16ms ≈ 60fps，但这是“愿望值”，实际不一定做得到
  timerId = setInterval(() => {
    speedInt += (7 - speedInt) * 0.12;
    posInt += speedInt;
    if (posInt >= maxPos()) {
      posInt = maxPos();
      flushInt();
      stIntEl.textContent = '已到达 🎯';
      clearInterval(timerId);
      timerId = null;
      return;
    }
    flushInt();
  }, 16);
  tidIntEl.textContent = timerId;
}

function stopInt() {
  if (timerId === null) return;
  clearInterval(timerId);
  timerId = null;
  speedInt = 0;
  stIntEl.textContent = '已暂停 ⏸';
  tidIntEl.textContent = '-';
}

function resetInt() {
  if (timerId !== null) { clearInterval(timerId); timerId = null; }
  posInt = 0; speedInt = 0;
  flushInt();
  stIntEl.textContent = '空闲';
  tidIntEl.textContent = '-';
}

/* ===================== 统一按钮 ===================== */
document.getElementById('start').onclick = () => { startRaf(); startInt(); };
document.getElementById('stop').onclick  = () => { stopRaf();  stopInt();  };
document.getElementById('reset').onclick = () => { resetRaf(); resetInt(); };

// 窗口缩放时防止方块越界
window.addEventListener('resize', () => {
  const max = maxPos();
  if (posRaf > max) { posRaf = max; flushRaf(); }
  if (posInt > max) { posInt = max; flushInt(); }
});
</script>

</body>
</html>

```