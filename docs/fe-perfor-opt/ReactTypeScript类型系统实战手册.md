# React + TypeScript 类型系统实战手册（P6 进阶版）

> 从模块隔离的底层原理，到两条实战路线（轻量版 / 中大型版），再到大型项目的完整类型体系——每个环节都有可运行的代码。
> 本手册的定位：**给足 P6 所需的知识框架与实战闭环，并明确指出框架之外需要真实项目历练的部分**（见第五部分）。

---

## 新人怎么用这份手册（三遍读法）

**可以当入门资料，但读法有讲究**——直接从头到尾啃会累，建议分三遍：

- **第一遍（1~2 天，建立体感）**：只读基础篇的一~六章 + 场景篇 A 的 A5，边读边在自己项目里敲代码，不求全懂，目标只有一个：给 props 定义类型、看懂类型报错；
- **第二遍（1 周，实战闭环）**：跟着场景篇 A 从 A1 走到 A8，把附录"实战练习"的 7 个动手任务做一遍——每个任务都有验收标准，做完你就具备独立开发轻量 TS 项目的类型能力；
- **第三遍（遇到问题再回来查）**：体系篇的分层、约束、演进策略，等你参与多人项目或代码 review 时再精读，那时每一条都会"扎心"地对应上你踩过的坑。

---

## 思维导图：全书知识地图（ASCII 版，任何编辑器都不碎）

```
                            ┌────────────────────────────┐
                            │    React + TS 类型系统      │
                            └──────────────┬─────────────┘
                                           │
    ┌──────────────────┬───────────────────┼────────────────────┬──────────────────┐
    │                  │                   │                    │                  │
    ▼                  ▼                   ▼                    ▼                  ▼
┌─────────┐     ┌──────────────┐   ┌────────────────┐   ┌───────────────┐   ┌────────────┐
│ ① 基础篇 │     │ ② 场景篇 A    │   │ ③ 场景篇 B      │   │ ④ 体系篇       │   │ ⑤ 附录      │
│ 原理与原则│     │ 轻量项目      │   │ 中大型项目      │   │ 类型系统设计    │   │ 练习与路线   │
└────┬────┘     └──────┬───────┘   └───────┬────────┘   └───────┬───────┘   └─────┬──────┘
     │                 │                   │                    │                 │
     │                 │                   │                    │                 ├─ 三遍读法
     │                 │                   │                    │                 ├─ 七个动手任务
     │                 │                   │                    │                 └─ 自查清单
     │                 │                   │                    │
     │                 │                   │                    ├─ 分层组织
     │                 │                   │                    ├─ 全局约束 strict
     │                 │                   │                    ├─ 统一出口与命名
     │                 │                   │                    └─ 演进策略
     │                 │                   │
     │                 │                   ├─ OpenAPI 类型生成
     │                 │                   │    ├─ 前端养文档
     │                 │                   │    ├─ 别名层
     │                 │                   │    └─ 验证闭环
     │                 │                   ├─ 领域模型三层
     │                 │                   │    ├─ DTO 层（生成）
     │                 │                   │    ├─ 领域模型层（手写）
     │                 │                   │    └─ 视图模型层（派生）
     │                 │                   ├─ TanStack Query
     │                 │                   │    ├─ queryKeys 工厂
     │                 │                   │    └─ invalidateQueries
     │                 │                   └─ useCrud<T> 泛型骨架
     │                 │
     │                 ├─ 类型来源：抓包 → json2ts → 人工修订
     │                 │              └─ 类型守卫 / zod 兜底
     │                 ├─ 请求层：RequestState 联合
     │                 │              └─ useRequest 骨架（防竞态）
     │                 └─ 页面实战：登录(zustand) / 用户管理(antd CRUD)
     │                              └─ ECharts 图表 / 系统设置
     │
     ├─ 模块隔离
     │    ├─ import/export 即模块
     │    ├─ export{} 强制模块化
     │    └─ 全局声明合并的坑
     ├─ Hooks 类型五原则
     │    ├─ 让推导干活
     │    ├─ 联合类型替代布尔堆
     │    ├─ 泛型 Hook
     │    ├─ 框架现成事件类型
     │    └─ 关掉 any 逃生门
     └─ 标注取舍
          ├─ 不用标：推导足够
          └─ 必须标：null / 外部数据 / useRef
```

---

## 全书结构

**基础篇** —— 原理与核心原则
1. 模块隔离：TS 模块的底层规则
2. export{} 能不能省略
3. 在 React 项目中的体现
4. Hooks 类型设计的五个核心原则
5. 不用标注的地方 vs 必须标注的地方
6. 五个高频实战场景

**场景篇 A：轻量项目**（zustand + 自定义 Hook，后端无文档）
- A1. 类型从哪来：抓包建型完整实操
- A2. 轻量版类型分层与目录结构
- A3. 请求封装与 useRequest 骨架
- A4. 登录模块
- A5. 用户管理页（antd Table 增删改查 + 表单）
- A6. 图表页（ECharts 基础运用）
- A7. 系统设置页
- A8. 轻量方案的边界与升级信号

**场景篇 B：中大型项目**（zustand + TanStack Query + OpenAPI）
- B1. 后端不给 Swagger 怎么办：自己养一份 OpenAPI 文档
- B2. 领域模型的确立与实现：三层模型
- B3. API 层 + 自定义 Hooks 层
- B4. 用户管理与 CRUD 表单（数据层升级，组件层复用）
- B5. 图表页
- B6. 复杂 CRUD 页：泛型骨架
- B7. zustand 与 TanStack Query 的边界
- B8. 两条路线对比与选型

**体系篇：大型项目的类型系统设计**
- C1. 如何提升类型设计能力
- C2. 完整类型系统的构建
- C3. 落地检验标准

**第五部分：P6 补强指南——从"知识框架"到"职级认证"**
- D1. P6 能力画像：手册覆盖了什么、还差什么
- D2. 高频深度追问自测（原理层）
- D3. 三个月真实历练清单
- D4. 把手册变成面试故事

**附录**
- 新人入门指南（三遍读法）
- 思维导图：全书知识地图
- 实战练习：基础任务 1~7
- 进阶任务：8~13（类型体操 / 测试 / 性能 / 工程化 / CLI 脚手架 / 部署闭环）
- 终极任务：14（自我理解导图，P6 检验）
- 自查清单
- 学习路径建议

---

# 第一部分 基础篇

## 一、模块隔离：TS 模块的底层规则

TypeScript 沿用 ES Module 规范：**一个文件只要包含顶层的 `import` 或 `export`，就被视为模块（module）；否则被视为全局脚本（script）**。

| | 模块文件 | 全局脚本文件 |
|---|---|---|
| 作用域 | 文件独立作用域 | 全局作用域 |
| 顶层声明 | 仅文件内可见，需 import/export 通信 | 进入全局，所有文件共享 |
| 同名变量/类型 | 不冲突 | 直接冲突报错，或发生意外的声明合并 |
| 依赖关系 | 显式可追踪 | 隐式、难排查 |

**模块隔离的价值**：避免命名冲突、避免类型声明被意外合并、让依赖关系显式可追踪。这是大型 TS 项目能安全组织代码的基础。

## 二、export{} 能不能省略

结论：**对需要模块隔离、但本身没有东西要导出的文件，不能省略**。

### 1. 把文件强制标记为模块

类型声明文件（`.d.ts`）或纯类型文件，若没有任何 import/export，会被当作全局脚本，其声明会污染全局。写一行 `export {}` 即可让它变成模块：

```ts
// utils.d.ts —— 无 import/export，会被当作全局脚本
// interface Window { myProp: string }  // ❌ 直接污染全局

// 加上空导出后变为模块，声明需显式 import 才可见
export {};
declare module 'my-lib' {
  interface Options { timeout?: number }
}
```

### 2. 避免全局声明合并的副作用

给 `Window`、`Array` 等扩展声明时，若文件被当作全局脚本，合并会自动对所有代码生效；加上 `export {}` 后合并行为变为可控、可审查。

- ✅ **可以省略**：文件本来就有具名的 import/export，或确实希望它作为全局声明脚本（如 `global.d.ts`）。
- ❌ **不能省略**：文件没有任何 import/export，又不希望声明进入全局——省略会导致全局污染和命名冲突。

> 补充：开启 `isolatedModules` 时，纯类型导出建议用 `export type`；`export {}` 作为值层面的空导出，在任何模块策略下都合法且安全。

## 三、在 React 项目中的体现

- **每个组件天然就是模块**：组件文件都有 `import` 或 `export default`。反而是"没有 import/export 的文件"容易踩坑。
- **类型声明文件是重灾区**：`global.d.ts`、`env.d.ts`、扩展第三方库类型的文件，本质上是"全局脚本"。想让声明只在需要时生效，加 `export {}` 把它变成模块。
- **跨文件共享类型**：`export interface Props`、`export type Xxx` 让依赖关系一眼能查。

## 四、Hooks 类型设计的五个核心原则

很多人在 React 项目里用 TS 只停留在"给 props 标个类型"。让 TS 真正发挥作用，核心是：**让类型替你锁住逻辑，而不是事后补注释**。

### 1. 少写标注，让推导干活

```tsx
// ✅ 推导出 number，无需 useState<number>
const [count, setCount] = useState(0);

// ✅ 需要标注的场景：初值是 null/空结构
const [user, setUser] = useState<User | null>(null);
const inputRef = useRef<HTMLInputElement>(null);
```

类型报错了不硬用 `as` 糊弄——报错往往说明数据结构设计有问题。

### 2. 用联合类型替代一堆布尔值（收益最大的一条）

```tsx
type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

const [state, setState] = useState<RequestState<User[]>>({ status: 'idle' });

// 渲染时：TS 保证你先判断 status 才能拿 data
if (state.status === 'success') {
  return <List items={state.data} />; // 这里 data 一定存在
}
```

### 3. 自定义 Hook 用泛型，写一次复用一串

```tsx
function useFetch<T>(url: string) {
  const [state, setState] = useState<RequestState<T>>({ status: 'idle' });
  // ...请求逻辑，setState 的参数类型全程受约束
  return state;
}

const { status, data } = useFetch<User[]>('/api/users'); // data 自动是 User[]
```

### 4. 事件和 reducer 用框架现成的类型

```tsx
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setKeyword(e.target.value);
};

// useReducer：Action 定义成联合，switch 之后 TS 自动收窄
type Action =
  | { type: 'add'; payload: string }
  | { type: 'remove'; id: number };
```

### 5. 关掉 any 的逃生门

- tsconfig 开 `strict: true`；
- `any` 能换 `unknown` 的换 `unknown`——后者逼你先收窄再使用；
- 第三方库没类型时补声明文件，而不是到处 `as any`。

## 五、不用标注的地方 vs 必须标注的地方

核心原则：**类型标注是给"边界"用的，内部能推就让 TS 自己推**。

### 这些地方不用标，标了反而是噪音

```tsx
// 1. 变量从字面量初始化
const count = 0;          // 别写 const count: number = 0

// 2. 简单函数的返回值
function createUser(id: string, age: number) {
  return { id, age }; // 自动推导
}

// 3. 回调参数——上下文已经告诉你了
users.map((u) => u.name);   // u 自动是 User
onChange={(e) => setKeyword(e.target.value)}  // JSX 里同理

// 4. props 透传原生组件，用 ComponentProps 反向取
type MyButtonProps = React.ComponentProps<'button'> & { variant?: 'primary' | 'ghost' };
```

### 这些地方必须标，漏了会出事

```tsx
// 1. useState 初值是 null、空数组、空对象——最经典的坑
const [list, setList] = useState([]);            // ❌ 推导成 never[]
const [list, setList] = useState<Item[]>([]);    // ✅

// 2. JSON.parse、接口响应等"外部数据"——返回的 any 别直接当真
const data: unknown = JSON.parse(text);
const user = userSchema.parse(data); // zod 校验通过才拿到 User

// 3. useRef 的两种形态要分清
const ref = useRef<HTMLDivElement>(null);              // DOM 引用
const timer = useRef<ReturnType<typeof setTimeout>>(); // 存非 DOM 值
```

> **重点**：类型标注只是**声明**，运行时不会帮你检查。后端字段可能缺失、可能是 null——"写了类型就以为安全了"是 TS 滥用里最伤的一类。

## 六、五个高频实战场景

```tsx
// 场景 1：as const 锁死合法取值
const ALIGN = ['left', 'center', 'right'] as const;
type Align = (typeof ALIGN)[number]; // 'left' | 'center' | 'right'
interface Column { align?: Align }   // 传 'top' 直接编译报错

// 场景 2：自定义 Hook 返回元组，避免解构错位
function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  return [on, toggle] as const;
}

// 场景 3：keyof 约束表单字段名
function useField<T extends object>(form: T, field: keyof T) {
  return { value: form[field], onChange: (v: T[keyof T]) => { /* ... */ } };
}

// 场景 4：Context 的 null 检查别跳过
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme 必须在 Provider 内使用');
  return ctx; // 之后自动收窄为 Theme
}

// 场景 5：事件处理器的 props 类型精确化
interface Props {
  onSelect: (id: string) => void;
  onHover?: React.MouseEventHandler<HTMLDivElement>;
}
```

---

# 第二部分 场景篇 A：轻量项目

> **技术栈**：React + TS + antd + zustand + axios/fetch
> **前提假设**：后端没有 Swagger，团队规模小，不想引入重运行时依赖。
> **页面覆盖**：登录模块、用户管理（Table 增删改查 + 表单）、系统设置。

## A1. 类型从哪来：抓包建型完整实操

没有 OpenAPI 文档，类型就靠抓包 + 校验兜底，五步走：

### 第 1 步：抓包拿真实响应样本

F12 的 Network 面板、curl 或 Postman 调一次接口，把返回 JSON 存下来：

```json
{ "code": 0, "data": [{ "id": "u1", "name": "张三", "is_enabled": 1, "created_at": "2026-01-15 10:00:00" }], "total": 1 }
```

### 第 2 步：从 JSON 生成类型草稿

- VSCode 插件 **Paste JSON as Types / json2ts**：复制 JSON，粘贴即得 interface；
- 在线工具 **quicktype.io**：粘贴 JSON 出 TS 类型。

### 第 3 步：人工修订（最关键的一步）

生成的只是"这份样本的形状"，必须人工审：

- 后端说"这个字段可能有"→ 补 `?`；"永远不是 null"→ 保持必填；
- 枚举值改成**字面量联合**：`is_enabled: 1 | 0`、`status: 'active' | 'disabled'`，别留 `number`/`string` 宽类型；
- 时间是时间戳还是字符串、时区是什么，确认清楚。

### 第 4 步：zod 把校验和类型绑在一起

手写类型没有生成器保证同步，用 zod 兜底：

```ts
import { z } from 'zod';

export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  is_enabled: z.union([z.literal(0), z.literal(1)]),
  created_at: z.string(),
});

// 从 schema 推导类型：手写 interface 的活儿也省了，类型和校验永远一致
export type UserDTO = z.infer<typeof userSchema>;

// 请求封装里统一校验
export async function apiGet<T>(url: string, schema: z.ZodType<T>): Promise<T> {
  const res = await fetch(url);
  const json = await res.json();
  return schema.parse(json); // 字段缺失/类型不对，运行时立刻抛错并带详情
}
```

### 第 5 步：纳入维护流程

手写类型最大的风险是"接口变了类型没变"。约定：接口变更时前端同步更新 schema，code review 里 schema 与调用代码的改动必须同 PR 提交。

### 补充：没有 zod 的项目，运行时校验怎么兜底

很多轻量项目不想引 zod，这完全没问题——**校验本身可以不依赖库**，用类型守卫函数手写。核心思路不变：外部数据不可信，只是把 `schema.parse` 换成自定义守卫：

```ts
// src/types/user.ts —— 手写类型守卫：校验通过返回 true，同时告诉 TS "这是 UserDTO"
export function isUserDTO(value: unknown): value is UserDTO {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    (v.is_enabled === 0 || v.is_enabled === 1) &&
    typeof v.created_at === 'string'
  );
}

// 数组版本
export function isUserDTOList(value: unknown): value is UserDTO[] {
  return Array.isArray(value) && value.every(isUserDTO);
}
```

请求封装里接入守卫（和 zod 版本二选一）：

```ts
// src/api/client.ts
export async function apiGet<T>(url: string, guard: (v: unknown) => v is T): Promise<T> {
  const res = await fetch(url);
  const json: unknown = await res.json();
  if (!guard(json)) {
    throw new Error(`接口返回结构与预期不符: ${url}`);
  }
  return json; // 守卫通过后，TS 知道这里就是 T
}

// 调用处
const list = await apiGet('/users', isPagedUserDTO);
```

和 zod 的取舍：

| | zod | 手写类型守卫 |
|---|---|---|
| 依赖 | 一个库 | 零依赖 |
| 报错信息 | 精确到字段路径 | 只有 true/false，需自己拼上下文 |
| 维护成本 | schema 即文档 | 字段多时手写冗长 |
| 适合 | 接口多、字段复杂 | 接口少、字段简单的轻量项目 |

**约定**：守卫函数和 DTO 类型放同一文件，接口变更时同步改；守卫失败必须抛错并带上接口地址，方便排查。

## A2. 轻量版类型分层与目录结构

```
src/
├── types/            # DTO（zod schema + 推导类型）、通用工具类型
│   └── user.ts
├── api/              # 请求封装（fetch/axios 包装，统一挂 zod 校验）
│   └── client.ts
├── domain/           # 领域模型 + DTO→领域模型 的转换函数
│   └── user.ts
├── hooks/            # 自定义 Hook（useRequest、useUserList……）
├── stores/           # zustand（只放客户端状态）
├── pages/            # 页面：Login、UserManagement、Settings
└── components/       # 通用组件
```

### types/ 和 domain/ 怎么分？——类型归位的判断规则

这是新人最容易含糊的地方。一句话原则：**types/ 放"数据的传输形状"，domain/ 放"业务的内在含义"**。

| 问题 | types/（DTO 及杂项） | domain/（领域模型） |
|---|---|---|
| 这个类型描述什么？ | 接口返回/请求长什么样 | 业务里这是个什么东西 |
| 谁决定它的结构？ | **后端契约**（字段名、枚举值都是后端定的） | **业务设计**（跟后端字段名无关） |
| 后端改字段名，它变不变？ | 变（这就是它的职责） | 不变（改动只发生在转换函数里） |
| 典型内容 | `UserDTO`、zod schema、类型守卫、`Paged<T>`、`Nullable<T>` | `User`、`UserStatus`、`toUser()` 转换函数、业务状态机类型 |
| 命名特征 | 带 DTO 后缀，或名字跟接口文档一致 | 用业务词汇，不带传输痕迹（`createdAt` 而不是 `created_at`） |

**三问定位法**（拿不准时依次问自己）：

1. 这个类型是"接口返回的形状"还是"业务概念"？前者 → `types/`，后者 → `domain/`；
2. 后端改一个字段名，要不要动它？要动 → `types/`；不用动（因为转换函数替你挡了）→ `domain/`；
3. 它有没有"业务规则"附在上面（比如"用户只有 active/disabled 两种状态"）？有规则 → `domain/`，纯结构 → `types/`。

对照例子，同一个用户实体在两处的样子：

```ts
// src/types/user.ts —— 描述"传输形状"，跟着后端走
export const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  is_enabled: z.union([z.literal(0), z.literal(1)]),  // 后端用 0/1
  created_at: z.string(),                              // 后端返回字符串
});
export type UserDTO = z.infer<typeof userSchema>;

// 通用分页结构也是"传输约定"，放 types/
export interface Paged<T> { list: T[]; total: number }
```

```ts
// src/domain/user.ts —— 描述"业务含义"，跟着产品走
export type UserStatus = 'active' | 'disabled';  // 业务词汇，不是 0/1

export interface User {
  id: string;
  name: string;
  status: UserStatus;
  createdAt: Date;      // 业务里就是"时间"，Date 是业务决定
}

// 转换函数是两个世界的唯一桥梁，放 domain/（它属于业务规则）
export function toUser(dto: UserDTO): User { /* ... */ }
```

**另外两类常见类型的归属**：

- **视图模型**（`UserTableRow extends User`，组件里派生的行数据）：不放 types/ 也不放 domain/，**就近放组件文件里**——它只服务于一个组件，全局共享反而制造耦合；
- **通用工具类型**（`Nullable<T>`、`DeepPartial<T>` 这种跟业务无关的类型积木）：放 `types/utils.ts`，任何业务都能引用。

**一眼判断放错没放错的土办法**：打开这个类型定义，如果里面出现了 `is_enabled`、`created_at` 这类后端口味的字段名，它就该在 `types/`；如果看到的是 `status: UserStatus`、`createdAt: Date` 这类业务口味的，它就该在 `domain/`。混着来（比如 domain 里的 User 出现 `is_enabled`），说明转换层没做干净。

## A3. 请求封装与 useRequest 骨架

### 通用请求 Hook：把"怎么请求"留给调用方，类型由泛型钉死

```tsx
// src/hooks/useRequest.ts
import { useCallback, useEffect, useRef, useState } from 'react';

type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

function useRequest<T>(fetcher: () => Promise<T>, options: { manual?: boolean } = {}) {
  const [state, setState] = useState<RequestState<T>>({ status: 'idle' });
  const seqRef = useRef(0); // 防竞态：慢的旧响应不能覆盖新的

  const run = useCallback(async () => {
    const seq = ++seqRef.current;
    setState({ status: 'loading' });
    try {
      const data = await fetcher();
      if (seq === seqRef.current) setState({ status: 'success', data });
    } catch (error) {
      if (seq === seqRef.current) setState({ status: 'error', error: error as Error });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetcher]);

  useEffect(() => {
    if (!options.manual) run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run]);

  return { state, reload: run } as const;
}
```

**三个类型设计关键点**：

- `fetcher: () => Promise<T>`——请求函数的类型错误在 Hook 边界就被拦下；
- `RequestState<T>` 联合——loading/error 时没有 data，"渲染 data 但 data 未定义"的代码写不出来；
- `as const` 返回——解构出来的类型是字面量精确类型，不被宽化。

### 带参数的列表 Hook：参数类型即文档

```tsx
interface UserListParams { page: number; pageSize: number; keyword?: string }
interface Paged<T> { list: T[]; total: number }

export function useUserList(params: UserListParams) {
  const fetcher = useMemo(
    () => () => apiGet<Paged<UserDTO>>(`/users?${toQuery(params)}`, pagedUserSchema).then(r => ({
      list: r.list.map(toUser),   // 转换层收口，出口即领域模型
      total: r.total,
    })),
    [params],
  );
  const { state, reload } = useRequest<Paged<User>>(fetcher);
  return { state, reload } as const;
}
```

### mutation 型 Hook：提交参数和返回值分开约束

```tsx
export function useCreateUser() {
  const [state, setState] = useState<RequestState<User>>({ status: 'idle' });

  const submit = useCallback(async (body: CreateUserDTO) => {
    setState({ status: 'loading' });
    try {
      const data = toUser(await apiPost<UserDTO>('/users', body));
      setState({ status: 'success', data });
      return data;
    } catch (error) {
      setState({ status: 'error', error: error as Error });
      throw error; // 抛出让调用方能 catch
    }
  }, []);

  return { state, submit } as const;
}
```

### 轻量版的团队约定

- 请求 Hook 统一返回 `{ state, ... } as const`，渲染层用 `state.status` 收窄；
- Hook 入参用 interface 显式声明（哪怕只有一个参数），参数即文档；
- 同一接口的类型只能有一份定义，跨组件复用时从 `types/` 取。

## A4. 登录模块（zustand）

zustand 只放**客户端状态**：登录信息、主题、全局 UI 状态。

```ts
// src/stores/auth.ts
interface AuthState {
  user: User | null;
  accessToken: string | null;
  login: (params: LoginParams) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  user: null,
  accessToken: null,
  login: async (params) => {
    const res = await apiPost<LoginResponse>('/auth/login', loginResponseSchema);
    set({ user: toUser(res.user), accessToken: res.access_token });
  },
  logout: () => set({ user: null, accessToken: null }),
}));
```

登录页表单 + 路由守卫：

```tsx
// src/pages/Login.tsx
interface LoginFormValues { username: string; password: string }

const [form] = useForm<LoginFormValues>(); // antd Form 泛型，onFinish 参数自动是 LoginFormValues

const handleFinish = async (values: LoginFormValues) => {
  await login(values); // 字段拼错、少填，编译期就报错
};

// 路由守卫
function RequireAuth({ children }: { children: ReactNode }) {
  const token = useAuthStore((s) => s.accessToken);
  return token ? <>{children}</> : <Navigate to="/login" replace />;
}
```

## A5. 用户管理页（antd Table 增删改查 + 表单）

### 领域模型先行（转换层统一收口）

```ts
// src/domain/user.ts
export interface User {
  id: string;
  name: string;
  status: 'active' | 'disabled';
  createdAt: Date;
}

// DTO → 领域模型：唯一的"翻译"点
export function toUser(dto: UserDTO): User {
  return {
    id: dto.id,
    name: dto.name,
    status: dto.is_enabled === 1 ? 'active' : 'disabled',
    createdAt: new Date(dto.created_at),
  };
}
```

> 领域模型怎么"确立"？靠和产品/后端对齐**实体的不变式**（哪些字段一定有、状态机怎么流转），写进 interface 和注释；DTO 的偶然结构（枚举是 0/1、snake_case 字段名）不许渗入业务代码。

### 表格与行选择

```tsx
interface UserTableRow extends User { key: string }

const columns: ColumnsType<UserTableRow> = [
  { title: '姓名', dataIndex: 'name' },
  { title: '状态', dataIndex: 'status',
    render: (status: User['status']) => status === 'active' ? '启用' : '禁用' },
  { title: '操作', render: (_, record) => (
    <Button onClick={() => onEdit(record)}>编辑</Button> // record 自动是 UserTableRow
  )},
];

const rowSelection: RowSelection<UserTableRow> = {
  onChange: (_, selectedRows) => setSelectedIds(selectedRows.map((r) => r.id)),
};
```

### 页面组装

```tsx
// src/pages/UserManagement.tsx
export function UserManagement() {
  const [params, setParams] = useState<UserListParams>({ page: 1, pageSize: 10 });
  const { state, reload } = useUserList(params);
  const createUser = useCreateUser();
  const deleteUser = useDeleteUser();

  if (state.status === 'loading') return <Spin />;
  if (state.status === 'error') return <ErrorBlock retry={reload} />;

  return (
    <UserTable
      dataSource={state.data.list}       // 状态收窄后 data 一定存在
      onDelete={(id) => deleteUser.submit(id).then(() => message.success('已删除'))}
      onSearch={(q) => setParams((p) => ({ ...p, keyword: q, page: 1 }))}
    />
  );
}
```

### 增删改查表单（Modal + Form）

```tsx
interface UserFormValues { name: string; status: 'active' | 'disabled' }

const handleSubmit = async (values: UserFormValues) => {
  await saveUser({ ...editingUser, ...values }); // 联合类型保证 status 合法
};
```

## A6. 图表页：ECharts 基础运用

图表是管理后台绕不开的一块。ECharts 的 TS 运用，核心是**数据建模（上一节那套）+ 配置类型化（EChartsOption）+ 正确的生命周期管理**。

### 1. 安装与最小可运行示例

```bash
npm i echarts
```

```tsx
// 一个最小图表组件：init → setOption → resize → dispose，四步生命周期
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

function LineChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const chart = echarts.init(containerRef.current);       // 1. 初始化

    chart.setOption({                                        // 2. 配置
      xAxis: { type: 'category', data: ['周一', '周二', '周三'] },
      yAxis: { type: 'value' },
      series: [{ type: 'line', data: [120, 200, 150] }],
    });

    const handleResize = () => chart.resize();               // 3. 容器变化时自适应
    window.addEventListener('resize', handleResize);
    return () => {                                           // 4. 卸载时销毁，防内存泄漏
      window.removeEventListener('resize', handleResize);
      chart.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: '100%', height: 320 }} />;
}
```

**类型亮点**：`setOption` 的参数类型是 `EChartsOption`，`type: 'line'` 写成 `'lin'` 直接编译报错；`series` 里写不存在的配置项也会被红线拦下——这就是配置类型化的价值。

### 2. 封装一个类型化的通用 Chart 组件

生命周期逻辑每个图表都要写一遍，抽成 Hook 收口：

```tsx
// src/components/Chart.tsx
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import type { EChartsOption } from 'echarts';

export function Chart({ option, onReady }: { option: EChartsOption; onReady?: (chart: echarts.ECharts) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    chartRef.current = echarts.init(containerRef.current);
    onReady?.(chartRef.current);

    // ResizeObserver 比 window.resize 更准：容器变化（侧边栏折叠）也能感知
    const ro = new ResizeObserver(() => chartRef.current?.resize());
    ro.observe(containerRef.current);
    return () => {
      ro.disconnect();
      chartRef.current?.dispose();
      chartRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // option 更新时增量刷新
  useEffect(() => {
    chartRef.current?.setOption(option);
  }, [option]);

  return <div ref={containerRef} style={{ width: '100%', height: 320 }} />;
}
```

### 3. 三种常用图的类型化写法

```tsx
// 柱状图：series 用字面量类型，type 写错直接报错
const barOption: EChartsOption = {
  xAxis: { type: 'category', data: ['北京', '上海', '广州'] },
  yAxis: { type: 'value' },
  series: [{ type: 'bar', data: [88, 92, 76], barWidth: '40%' }],
};

// 饼图：data 是 { name, value } 数组，字段名拼错编译期报错
const pieOption: EChartsOption = {
  series: [{
    type: 'pie',
    radius: '60%',
    data: [
      { name: '启用', value: 66 },
      { name: '禁用', value: 34 },
    ],
  }],
};

// 折线多序列：用元组类型约束多组数据
interface DailyActiveSeries { date: string; active: number; newUsers: number }

const lineOption = (series: DailyActiveSeries[]): EChartsOption => ({
  tooltip: { trigger: 'axis' },
  xAxis: { type: 'category', data: series.map((s) => s.date) },
  yAxis: { type: 'value' },
  series: [
    { type: 'line', name: '活跃用户', data: series.map((s) => s.active) },
    { type: 'line', name: '新增用户', data: series.map((s) => s.newUsers) },
  ],
});
```

### 4. 和数据层接上：完整图表页

图表数据是服务端状态，用场景 A 的 useRequest 请求；配置是纯前端逻辑，单独建模：

```tsx
// src/pages/Dashboard.tsx
interface DailyActiveSeries { date: string; active: number; newUsers: number }

export function useDailyActive(range: string) {
  const fetcher = useMemo(
    () => () => apiGet<{ data: DailyActiveSeries[] }>(
      `/stats/dau?range=${range}`,
      isDailyActiveList, // 手写守卫或 zod schema
    ).then((r) => r.data),
    [range],
  );
  const { state } = useRequest(fetcher);
  return state;
}

export function Dashboard() {
  const dailyActive = useDailyActive('30d');

  if (dailyActive.status !== 'success') return <Spin />;

  return (
    <Chart option={lineOption(dailyActive.data)} />
    // data 经守卫校验后一定是 DailyActiveSeries[]，图表配置零断言
  );
}
```

### 5. 关键细节回顾

- **数据与配置分离**：`DailyActiveSeries`（数据形状）和 `EChartsOption`（图表配置）分开建模，前者跟接口走，后者跟 UI 走；
- **生命周期四步不能省**：init、setOption、resize、dispose——漏 dispose 会内存泄漏，漏 resize 会图表错位；
- **用 ResizeObserver** 而不是 window.resize：侧边栏折叠这类"容器变了但窗口没变"的场景只有它能感知；
- **配置生成器函数**（如 `lineOption(series)`）返回类型标 `EChartsOption`，配置拼装错误在函数边界就被拦下。

## A7. 系统设置页：表单类型的层级建模

```ts
// 设置项天然是嵌套结构，按分组建模而不是一个大 interface
interface SystemSettings {
  general:      { siteName: string; timezone: string };
  security:     { passwordExpireDays: number; mfaEnabled: boolean };
  notification: { email: boolean; webhookUrl?: string };
}
```

## A8. 轻量方案的边界与升级信号

出现以下信号，就该升级到场景篇 B 了：

- 缓存失效逻辑越写越多（改了用户，要手动刷新三四个页面）；
- 重复的 loading/error 处理散落在每个 Hook 里；
- 后端开始拆微服务，接口数量和变更频率上来了；
- 团队超过 3 个人，需要契约保证前后端对齐。

---

# 第三部分 场景篇 B：中大型项目

> **技术栈**：场景 A 的基础上 + TanStack Query + OpenAPI 类型生成。
> **变化**：数据层从"手写缓存管理"升级为"声明式服务端状态管理"，接口类型从"手写 schema"升级为"契约驱动生成"。

## B1. 后端不给 Swagger 怎么办：自己养一份 OpenAPI 文档

现实中后端经常不维护 Swagger。**OpenAPI 文档可以由前端主导建立**，两条路：

### 路线 1：从抓包样本手写 openapi.yaml

先用场景 A 的抓包方法拿样本，然后写一份精简的 OpenAPI 描述文件：

```yaml
# openapi.yaml（只写你项目用到的接口，从最小的开始）
openapi: 3.0.0
paths:
  /users:
    get:
      parameters:
        - name: page
          in: query
          schema: { type: integer }
      responses:
        '200':
          content:
            application/json:
              schema:
                type: object
                properties:
                  code: { type: number }
                  total: { type: number }
                  data:
                    type: array
                    items: { $ref: '#/components/schemas/User' }
components:
  schemas:
    User:
      type: object
      required: [id, name, is_enabled, created_at]
      properties:
        id: { type: string }
        name: { type: string }
        is_enabled: { type: number, enum: [0, 1] }
        created_at: { type: string }
```

> 小技巧：`components.schemas` 里的实体部分可以直接把 zod schema 对应翻译过来，两者保持同构。

### 路线 2：工具辅助生成

- Postman / Apifox 等接口平台支持从请求示例导出 OpenAPI；
- 后端如果连文档都不写，把"接口上线前提供 OpenAPI 片段"写进团队协作规范，哪怕后端只维护 schema 定义这一小块。

### 生成与使用

```bash
npx openapi-typescript ./openapi.yaml -o src/types/api.generated.ts
```

生成的文件结构（示意）：

```ts
export interface paths {
  '/users': {
    get: {
      responses: {
        200: { content: { 'application/json': { code: number; data: User[]; total: number } } };
      };
    };
  };
}
export interface components {
  schemas: {
    User: { id: string; name: string; is_enabled: number; created_at: string };
    CreateUserInput: { name: string };
  };
}
```

建立别名层（业务里不写深层取值）：

```ts
// src/types/api.ts
import type { components, paths } from './api.generated';

export type UserDTO = components['schemas']['User'];
export type CreateUserDTO = components['schemas']['CreateUserInput'];

export interface PagedResponse<T> { code: number; data: T[]; total: number }

// 按路径 + 方法精确取响应类型，后端改了字段这里自动跟着变
export type PathResponse<P extends keyof paths, M extends keyof paths[P]> =
  paths[P][M] extends { responses: { 200: { content: { 'application/json': infer R } } } }
    ? R
    : never;

export type UserListResponse = PathResponse<'/users', 'get'>;
```

**验证闭环**：让后端加一个字段重新生成，编辑器里立刻能看到新字段；删一个字段，所有用到它的地方编译报错。**这个闭环跑通了，类型系统才算真正接上了后端。**

## B2. 领域模型的确立与实现：三层模型

大型项目类型混乱的根源：把"后端返回的 DTO"直接当业务模型用。正确做法分三层：

| 层 | 类型 | 来源 | 举例 |
|---|---|---|---|
| DTO 层 | `UserDTO` | OpenAPI 生成 | `is_enabled: 1 \| 0`、时间戳是 string |
| 领域模型 | `User` | 手写，贴业务语义 | `status: 'active' \| 'disabled'`、`createdAt: Date` |
| 视图模型 | `UserTableRow` | 组件内派生 | 额外加 `key`、格式化后的字段 |

领域模型实现同场景 A 的 `toUser`（见 A5），区别是 DTO 来源从 zod 换成了生成器。

## B3. API 层 + 自定义 Hooks 层

### query key 统一登记

```ts
// src/api/queryKeys.ts
export const queryKeys = {
  users: (params: UserListParams) => ['users', params] as const,
  user: (id: string) => ['users', 'detail', id] as const,
  stats: (range: string) => ['stats', range] as const,
};
```

### 数据 Hook：数据获取、缓存、类型全部收口

```tsx
// src/hooks/useUsers.ts
export function useUsers(params: UserListParams) {
  return useQuery({
    queryKey: queryKeys.users(params),
    queryFn: async () => {
      const res = await apiGet<UserListResponse>(`/users?${qs(params)}`);
      return { list: res.data.map(toUser), total: res.total }; // 出口就是领域模型
    },
  });
}

export function useDeleteUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiDelete(`/users/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }), // 精确失效所有 users 相关缓存
  });
}
```

自定义 Hook 的类型约束设计原则与场景 A 完全一致（fetcher 泛型钉死、RequestState 地基、as const 返回），只是缓存和重试交给 react-query，Hook 里不再手写。

## B4. 用户管理与 CRUD 表单

组件层与场景 A 完全一样（`ColumnsType`、`RowSelection`、`useForm<FormValues>`）——**这就是分层的好处：数据层换实现，组件层零改动**。

页面组件的差别：

```tsx
export function UserManagement() {
  const [params, setParams] = useState<UserListParams>({ page: 1, pageSize: 10 });
  const { data, isLoading } = useUsers(params); // react-query 接管 loading/缓存/重试
  const deleteUser = useDeleteUser();

  return (
    <UserTable
      loading={isLoading}
      dataSource={data?.list ?? []}
      onDelete={(id) => deleteUser.mutateAsync(id).then(() => message.success('已删除'))}
      onSearch={(q) => setParams((p) => ({ ...p, keyword: q, page: 1 }))}
    />
  );
}
```

## B5. 图表页：数据与配置分开建模

```tsx
// 图表数据是服务端状态 → react-query；配置是纯前端 → 类型化的 Option
interface DailyActiveSeries { date: string; count: number }

export function useDailyActive(range: string) {
  return useQuery({
    queryKey: queryKeys.stats(range),
    queryFn: async () => {
      const res = await apiGet<{ data: DailyActiveSeries[] }>(`/stats/dau?range=${range}`);
      return res.data;
    },
  });
}

function ActiveChart({ series }: { series: DailyActiveSeries[] }) {
  const option: EChartsOption = {   // EChartsOption 有官方类型，写错字段直接红线
    xAxis: { type: 'category', data: series.map((s) => s.date) },
    yAxis: { type: 'value' },
    series: [{ type: 'line', data: series.map((s) => s.count) }],
  };
  return <ReactECharts option={option} />;
}
```

## B6. 复杂 CRUD 页：泛型骨架

筛选 + 分页 + 多选 + 批量操作，一个泛型 Hook 收口类型：

```tsx
// 通用列表 Hook：任何资源只要满足 { id: string } 就获得完整 CRUD 类型
function useCrud<T extends { id: string }>(resource: string) {
  const qc = useQueryClient();
  const list = useQuery({ queryKey: [resource], queryFn: () => apiGet<T[]>(`/${resource}`) });
  const create = useMutation({ mutationFn: (body: Omit<T, 'id'>) => apiPost(`/${resource}`, body) });
  const update = useMutation({ mutationFn: (body: T) => apiPut(`/${resource}/${body.id}`, body) });
  const remove = useMutation({
    mutationFn: (ids: string[]) => apiDelete(`/${resource}`, { ids }),
    onSuccess: () => qc.invalidateQueries({ queryKey: [resource] }),
  });
  return { list, create, update, remove };
}

// 具体业务一行接入：T 的约束保证 Omit<T,'id'>、body.id 都是合法的
const orderCrud = useCrud<Order>('orders');
```

## B7. zustand 与 TanStack Query 的边界

- **服务端状态**（用户列表、统计数据）→ react-query：缓存、重试、失效都是它的强项；
- **客户端状态**（登录信息、主题、全局 UI）→ zustand：轻量、可持久化。

**别把 react-query 已管的数据再塞进 store**——同一份数据两处存放，必然出现不同步。这条边界要写进团队规范。

## B8. 两条路线对比与选型

| | 场景 A：轻量版 | 场景 B：中大型版 |
|---|---|---|
| 数据层 | 自定义 Hook + 手写缓存 | TanStack Query |
| 类型来源 | 抓包 + zod | OpenAPI 生成（前端养文档） |
| 缓存失效 | 手动管理 | `invalidateQueries` 声明式 |
| 团队规模 | 1~3 人 | 3 人以上 |
| 升级成本 | 组件层零改动（分层的红利） | — |

两方案的分界不是"项目大不大"，而是**缓存复杂度和接口变更频率**。

---

# 第四部分 体系篇：大型项目的类型系统设计

## C1. 如何提升类型设计能力

类型设计不是背语法，而是"把业务翻译成类型"的建模能力。刻意练习：

### 1. 先写状态图，再写类型

动手前先问：这个数据有几种**合法**状态？哪些字段在哪些状态下一定存在？

```
请求状态：idle → loading → success / error
          （success 才有 data，error 才有 error）
→ 直接映射成可辨识联合，而不是 data?: T + error?: Error + isLoading
```

建模能力的第一步：**让"不可能的状态"在类型上不可表示**。

### 2. 练习"从 any 开始收窄"

拿一段 `any` 满天飞的旧代码，逐个替换为精确类型——这是最快理解类型收窄、联合类型、泛型约束关系的练习。

### 3. 读好源码，学类型设计范式

- **react**：`ReactNode`、`ComponentProps` 的定义——看它如何用联合类型覆盖"所有可渲染的东西"；
- **zod**：`parse` 如何用泛型把校验结果的类型"传"出去；
- **io-ts** 等函数式风格库：看高阶类型组合。

### 4. 掌握常用类型工具，但克制使用

必须熟：`Partial`、`Pick`、`Omit`、`Record`、`ReturnType`、`Parameters`、`keyof`、`typeof`、`as const`。
进阶才碰：`infer`、条件类型、模板字符串类型。**能组合已有工具解决的，不手写复杂条件类型**——团队代码里可读性优先。

### 5. 让类型暴露设计问题

函数需要大量断言才能通过类型检查，通常说明接口边界设计有问题。把类型报错当重构信号，而不是用 `as` 灭火。

## C2. 完整类型系统的构建

单文件的类型技巧只是砖，大型项目要的是**分层、统一、可演进**。

### 1. 分层组织：类型的"户口"要清楚

见场景 A/B 的目录结构。原则：**领域模型只定义一份**，接口层、组件层都引用它；禁止同一个实体在多个目录各写一份。

### 2. 接口层类型与后端契约对齐

- 每个接口的请求参数和响应都定义类型，字段、可选性、可空性如实反映后端；
- 有 OpenAPI 文档走生成器；没有就前端养文档（见 B1）；
- 响应字段进业务代码前先校验（zod），**外部数据永远不可信**。

### 3. 全局约束：让坏类型写不进去

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true
  }
}
```

ESLint（`@typescript-eslint`）：

- `no-explicit-any`：禁止显式 any，逃生门用 `// eslint-disable` 显式声明并留注释；
- `no-unnecessary-type-assertion`：清理无意义断言；
- `consistent-type-imports`：纯类型导入用 `import type`。

### 4. 类型统一出口与命名规范

- 共享类型统一从 `types/` 出口（`export type`），调用方 `import type { User } from '@/types'`；
- 命名约定：实体用名词（`User`）、状态用联合（`RequestState`）、Props 用 `XxxProps`、工具类型用形容词（`Nullable<T>`、`DeepPartial<T>`）；
- 杜绝同名不同义：同一个 `Order` 类型在全项目只能指同一结构。

### 5. 用声明合并做"有边界的扩展"

- 模块补充声明放独立 `.d.ts`，`declare module 'xxx'` 精确指向目标库；
- 扩展文件加 `export {}` 控制生效范围（呼应第二章）；
- 集中登记，禁止散落在业务代码里随手 `declare global`。

### 6. 类型系统的演进策略

- **存量代码**：新代码严格类型，老代码按目录灰度开启 `strict`；
- **接口变更**：类型变更跟着接口版本走，用工具类型组合（`Omit` + 新字段）让旧调用方在编译期暴露需要改的地方；
- **文档化**：领域类型的设计决策写进注释或 wiki，类型即文档。

## C3. 落地检验标准

- 新人拿到一个接口响应，能否不看后端文档就写出正确的调用代码？
- 修改一个实体字段，能否只靠编译错误就找出所有受影响的代码？
- 全项目搜 `any` 和 `as`，结果是否集中在极少数显式声明的逃生门里？

三个都是"是"，类型系统就立住了。

---

# 第五部分 P6 补强指南——从"知识框架"到"职级认证"

> 这一部分回答一个诚实的问题：学完并做完前面 14 个任务，离 P6 还差什么。结论先行：**手册给足的是"P6 的知识框架与实战闭环"，P6 的"职级认证"需要真实项目把它盖出来**。下面是补齐差距的具体路径。

## D1. P6 能力画像：手册覆盖了什么、还差什么

| 维度 | 手册已覆盖（做完 14 个任务） | P6 还需要真实项目补 |
|---|---|---|
| 类型与架构 | 类型建模、三层模型、双路线落地 | 复杂业务域的建模实战、跨系统类型契约 |
| 质量保障 | 测试入门（Hook/守卫/组件） | 测试策略制定、覆盖率管理、单测文化推动 |
| 性能 | 测量习惯、memo/分割/缓存 | 完整的线上排查案例（内存泄漏、LCP、长任务） |
| 工程化 | lint/门禁/strict 灰度 | CI/CD 全流程、Monorepo、发布策略 |
| 交付 | nginx/Docker/Vercel 闭环 | 生产环境的灰度发布、回滚演练、监控告警 |
| 影响力 | RFC 骨架（任务框架内） | 真实推动过的方案、带过的人、评审中拍过的板 |

> 判断标准很简单：**手册里的每一项你都"做过练习"，P6 要求其中至少三项你"扛过责任"**。

## D2. 高频深度追问自测（原理层）

P6 面试的"为什么"会追问到原理层。以下 8 题按能答出几层自测，答不出就按方向补：

1. **React 调度**：Fiber 架构下 setState 为什么是"异步"的？并发渲染（concurrent features）对 Hooks 的使用约束（如 useTransition）意味着什么？——方向：渲染中断与恢复、优先级 lanes；
2. **tree-shaking**：为什么有的库摇不动？`sideEffects` 字段如何影响摇树？——方向：ESM 静态分析 vs CommonJS、副作用标注、babel 转译破坏摇树的场景；
3. **内存泄漏排查**：ECharts/定时器/闭包导致的泄漏，完整排查链路是什么？——方向：Performance 录制 → Memory heap snapshot 对比 → 保留树（retained size）定位引用链；
4. **首屏性能**：LCP 优化清单？——方向：资源优先级、代码分割与预加载、SSR/SSG、指标归因（CrUX vs 实验室）；
5. **类型的运行时消失**：TS 编译后类型去哪了？为什么装饰器元数据（emitDecoratorMetadata）需要额外插件？——方向：类型擦除、reflect-metadata 的补位原理；
6. **Monorepo**：依赖提升（hoisting）导致什么问题？幽灵依赖怎么治？——方向：pnpm 的符号链接结构、workspace 协议、包边界收紧；
7. **微前端的类型与样式隔离**：子应用的类型怎么共享？样式冲突怎么隔离？——方向：Module Federation 的类型分发、Shadow DOM 或 CSS Modules/命名空间；
8. **SSR/RSC 的类型贯穿**：服务端组件为什么不能有 onClick？序列化边界对类型的约束是什么？——方向：React Server Components 的序列化契约、server-only 包模式。

**用法**：每题先自己讲 2 分钟，再对照方向补漏。能过 6 题说明原理层达标，能被追问三层的有 4 题就是 P6 水准。

## D3. 三个月真实历练清单

框架已搭好，用三个月把"做过练习"升级成"扛过责任"：

- **第 1 个月：成为 owner**——主动认领一个完整模块（包括历史烂摊子），一周内把手册的类型分层和契约方案在这个模块落地；目标是"这个模块的类型问题只找我"；
- **第 2 个月：扛一次事故**——主动参与或复盘一次线上问题（性能、内存、兼容性都行），产出一份带根因分析的复盘文档；同时把 lint 门禁/CI 检查在一个真实仓库推动落地；
- **第 3 个月：留下影响**——把类型契约或工程化经验输出成一次团队分享或 wiki 文档；带一个新人走一遍本手册的基础 7 任务；把整个流程（从需求到部署）独立走完一轮。

三个月后自评：D1 表格里"需要真实项目补"的列，至少三项从"没做过"变成"做过且能讲"。

## D4. 把手册变成面试故事

面试不讲知识清单，讲项目故事。手册的内容可以这样转译：

- **STAR 映射**：任务 2（布尔堆重构）→ "发现线上一个渲染矛盾 bug，我把它归因到状态模型缺陷，重构为联合类型后，同类 bug 此后编译期拦截"；
- **讲对比不罗列**：任务 7（迁移演练）的"组件层零改动"是天然的架构叙事——证明你设计时留了扩展点；
- **主动亮边界**：被问到不会的原理题（D2），坦诚边界 + 给出排查思路，比硬编强——P6 面试官考的正是判断力而非背诵；
- **差异化定位**：绝大多数候选人讲"我做过多少页面"，你能讲"我如何让整个团队的类型契约防住一类事故"——这就是 P6 和 P5 的叙事差。

---

# 附录

## 实战练习：七个动手任务（新人按顺序做）

> 全部任务基于同一个小项目（用户管理后台），做完 1~5 就是一个完整可运行的轻量 TS 项目。每个任务都有细化步骤、参考答案和验收标准——先自己写，写不出来再看答案，做完对照验收自查。

### 任务 1：环境与热身（对应基础篇）

**目标**：搭好环境，体会"推导"和"标注"的边界。

**步骤**：

1. `npm create vite@latest my-admin -- --template react-ts`，装依赖后确认 `npx tsc --noEmit` 通过；
2. 写一个 `useToggle` Hook：初始值可选，返回 `[当前值, 切换函数]`；
3. 写 `const [list, setList] = useState([])`，然后往里 push 一个对象，观察报错；
4. 在 `vite-env.d.ts` 里给 `window` 加一个 `APP_VERSION` 属性类型。

**参考答案**：

```tsx
// src/hooks/useToggle.ts
import { useState, useCallback } from 'react';

export function useToggle(initial = false) {
  const [on, setOn] = useState(initial);
  const toggle = useCallback(() => setOn((v) => !v), []);
  // as const 返回元组：解构顺序写反，编译期就报错
  return [on, toggle] as const;
}
```

```ts
// 第 3 步：报错原因——推导成 never[]，什么都 push 不进去。
// 修复：显式标注初值类型
const [list, setList] = useState<Item[]>([]);

// 第 4 步：vite-env.d.ts 没有任何 import/export，是"全局脚本"，
// 这正是全局类型补充声明该待的地方（呼应基础篇第二章）
/// <reference types="vite/client" />

interface Window {
  APP_VERSION: string;
}
```

**验收**：`npx tsc --noEmit` 零错误；在别的组件里把 `const [toggle, on] = useToggle()` 顺序写反，会得到类型报错。

**常见踩坑**：把全局类型写在会被 import 的模块文件里却不加 `export {}` 导致意外合并；或给 `Window` 扩展时写成 `declare global` 却同时在模块内（两种写法选一种）。

### 任务 2：布尔堆 → 联合类型重构（对应第四章）

**目标**：体会"非法状态在类型上不可表示"。

**步骤**：

1. 先写出"祖传"版本（三个独立 useState，见下）并渲染它：注意逻辑上可以同时出现 `isLoading && data` 的矛盾渲染；
2. 定义 `RequestState<T>` 联合类型（初值 `idle`）；
3. 改造渲染：用 `switch (state.status)` 收窄，每个分支只处理自己的状态；
4. 尝试在 `loading` 分支里访问 `state.data`，确认编译器报错。

**参考答案**：

```tsx
// 祖传版本（重构前）：四种布尔组合里有一种是"矛盾状态"
// const [isLoading, setIsLoading] = useState(false);
// const [isError, setIsError] = useState(false);
// const [data, setData] = useState<User[] | null>(null);

type RequestState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error };

const [state, setState] = useState<RequestState<User[]>>({ status: 'idle' });

// 渲染：收窄后各分支的数据保证存在
switch (state.status) {
  case 'idle':    return <Empty description="点击查询开始" />;
  case 'loading': return <Spin />;
  case 'success': return <UserTable dataSource={state.data} />; // data 一定存在
  case 'error':   return <ErrorBlock retry={reload} error={state.error} />;
}
```

**验收**：全文件搜不到 `isLoading && data` 这类组合判断；渲染 `state.data` 的代码全部位于 `success` 分支内。

**常见踩坑**：把联合类型写成 `{ status: string; data?: T; error?: Error }`——这等于没改，任何非法组合依然合法。字段必须是"互斥地存在"，靠联合而不是靠可选。

### 任务 3：抓包建型 + 类型守卫（对应 A1）

**目标**：走通"外部数据 → 可信类型"的完整流程。

**步骤**：

1. 选一个真实接口（没有就用 `https://jsonplaceholder.typicode.com/users`），抓一份响应样本；
2. 用 json2ts / quicktype 生成类型草稿；
3. 人工修订：确认可空性、把枚举值改成字面量联合、确认时间格式；
4. 手写类型守卫 `isUserDTO`，接入 `apiGet(url, guard)`；
5. 在请求封装里故意改坏守卫的一个判断，观察运行时报错。

**参考答案**：

```ts
// src/types/user.ts
export interface UserDTO {
  id: string;
  name: string;
  is_enabled: 0 | 1;        // 人工修订：不是 number，是字面量联合
  created_at: string;
}

export interface Paged<T> { data: T[]; total: number }

// 类型守卫：同时完成"运行时校验"和"类型收窄"
export function isUserDTO(value: unknown): value is UserDTO {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    (v.is_enabled === 0 || v.is_enabled === 1) &&
    typeof v.created_at === 'string'
  );
}

export function isPagedUserDTO(value: unknown): value is Paged<UserDTO> {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return Array.isArray(v.data) && v.data.every(isUserDTO) && typeof v.total === 'number';
}
```

```ts
// src/api/client.ts
export async function apiGet<T>(url: string, guard: (v: unknown) => v is T): Promise<T> {
  const res = await fetch(url);
  const json: unknown = await res.json();
  if (!guard(json)) throw new Error(`接口返回结构与预期不符: ${url}`);
  return json;
}
```

**验收**：mock 一个字段类型不对的响应（比如 `is_enabled: "1"`），页面显示带接口地址的报错，而不是白屏。

**常见踩坑**：守卫里用 `as UserDTO` 直接断言返回——那等于没校验，守卫的价值就在逐字段判断。

### 任务 4：useRequest 骨架复刻（对应 A3）

**目标**：内化"请求 Hook 的类型设计"，脱离文档独立复刻。

**步骤**：

1. 合上文档，凭记忆写出 `useRequest<T>`：状态联合、seqRef 防竞态、`as const` 返回；
2. 对照 A3 原文，检查三要素是否齐全；
3. 用它封装 `useUserList(params)`：fetcher 用 `useMemo` 包住（引用稳定），内部调用任务 3 的 `apiGet` + 守卫，出口做 `toUser` 转换；
4. 用两个按钮快速连点切换筛选条件，测试竞态保护。

**参考答案**：见正文 A3（`useRequest` 骨架 + `useUserList`）。自检要点：

- `fetcher` 参数类型是 `() => Promise<T>`，返回类型由泛型钉死；
- 状态更新前先比对 `seq === seqRef.current`，慢的旧响应直接丢弃；
- 返回值 `as const`，调用处 `state.status` 收窄。

**验收**：快速切换筛选三次，页面最终显示最后一次请求的结果；渲染层没有 `data?.list` 之外的断言。

**常见踩坑**：`useEffect` 依赖里直接写 `fetcher()` 调用而非传入函数；忘记在 fetcher 变化时重新请求（漏依赖或没用 useMemo 包住）。

### 任务 5：antd 用户管理页完整闭环（对应 A5）

**目标**：把类型系统落到一个完整的 CRUD 页面。

**步骤**：

1. 定义 `UserTableRow extends User`（视图模型，就近放组件文件）；
2. 写 `columns: ColumnsType<UserTableRow>`，故意把一个 `dataIndex` 拼错，观察是否报错（注意：antd 对 dataIndex 的类型约束较宽松，重点看 `render` 的 record 类型收窄）；
3. 实现行选择 `RowSelection<UserTableRow>`，收集选中 id；
4. 新建/编辑共用一个 Modal + `useForm<UserFormValues>`；
5. 删除走 `useDeleteUser`（mutation 型 Hook），成功后 `reload()`。

**参考答案**：

```tsx
// src/pages/UserManagement.tsx（核心片段）
interface UserTableRow extends User { key: string }   // 视图模型，就近放组件

interface UserFormValues { name: string; status: UserStatus }

function UserManagement() {
  const [params, setParams] = useState<UserListParams>({ page: 1, pageSize: 10 });
  const { state, reload } = useUserList(params);
  const createUser = useCreateUser();
  const [form] = useForm<UserFormValues>();

  const handleSubmit = async (values: UserFormValues) => {
    await createUser.submit(values);   // 参数类型就是 CreateUserDTO 的映射
    reload();
  };

  const columns: ColumnsType<UserTableRow> = [
    { title: '姓名', dataIndex: 'name' },
    { title: '状态', dataIndex: 'status',
      render: (status: UserStatus) => status === 'active' ? '启用' : '禁用' },
  ];

  if (state.status !== 'success') return <Spin />;
  return <UserTable dataSource={state.data.list.map((u) => ({ ...u, key: u.id }))} columns={columns} />;
}
```

**验收**：表单提交参数与 `UserFormValues` 完全一致，全文件无 `as` 断言；`render` 里的 `status` 自动是 `UserStatus`。

**常见踩坑**：把视图模型 `UserTableRow` 放进全局 types/（违反就近原则）；编辑时把整行数据直接当表单值回填（应只回填表单涉及的字段）。

### 任务 6：ECharts 图表页（对应 A6）

**目标**：图表数据建模 + 类型化配置 + 正确生命周期。

**步骤**：

1. 封装通用 `Chart` 组件：init / setOption / ResizeObserver / dispose 四步生命周期；
2. 定义 `DailyActiveSeries` 数据类型，复用任务 3 的守卫模式写 `isDailyActiveList`；
3. 写配置生成器函数 `lineOption(series): EChartsOption`（双序列折线）；
4. 组装 Dashboard 页面：useRequest 请求数据 → 传给 Chart。

**参考答案**：见正文 A6（Chart 组件 + 三种图的类型化写法 + Dashboard 组装）。自检要点：

- `chartRef` 类型是 `useRef<echarts.ECharts | null>(null)`，卸载时 dispose；
- ResizeObserver 感知容器变化（侧边栏折叠也能自适应）；
- 数据映射全用 `.map()`，配置零断言。

**验收**：拖动窗口、折叠侧边栏图表都自适应；卸载页面 console 无 ECharts 警告；`lineOption` 的参数类型错误在函数边界被拦截。

**常见踩坑**：在 `useEffect` 里每次渲染都 `echarts.init`（应只 init 一次，option 更新走 `setOption`）；图表容器初始高度为 0 导致"白图"。

### 任务 7：迁移演练（对应场景篇 B，选做）

**目标**：亲身体验"分层红利"——数据层换实现，组件层零改动。

**步骤**：

1. 安装 `@tanstack/react-query`，在入口包 `QueryClientProvider`；
2. 建 `queryKeys` 工厂（`users: (params) => ['users', params] as const`）；
3. 把 `useUserList` 迁移到 `useQuery`（queryFn 里保留 apiGet + 守卫 + toUser）；
4. 删除逻辑迁移到 `useMutation` + `invalidateQueries`，替代手动 `reload()`。

**参考答案**：见正文 B3（queryKeys 工厂 + useUsers + useDeleteUser）。核心差异：

```tsx
// 迁移前：手写 loading/竞态/重载
// 迁移后：声明式，缓存与失效交给 react-query
export function useUserList(params: UserListParams) {
  return useQuery({
    queryKey: queryKeys.users(params),
    queryFn: async () => {
      const res = await apiGet<Paged<UserDTO>>(`/users?${toQuery(params)}`, isPagedUserDTO);
      return { list: res.data.map(toUser), total: res.total };
    },
  });
}
```

**验收**：`UserManagement.tsx` 的 props 和 JSX 没有任何改动，只有 Hook 内部实现变了；删除一个用户后，列表自动刷新（不需要手动调 reload）。

**常见踩坑**：把 react-query 已管的数据再塞进 zustand（同一份数据两处存放必然不同步）；queryKey 里的参数对象每次都是新引用导致缓存永远 miss（对象参数要保持引用稳定，或序列化进 key）。

---

## 进阶任务：8~12（通往高级工程师的路）

> 完成基础 7 个任务后再做这一组。这五个任务分别对应高级前端的五个核心方向：深度类型、质量保障、性能、工程化、技术协作。每个任务都建议以"能讲给同事听"为完成标准，不只是跑通代码。

### 任务 8：类型体操进阶——手写工具类型（对应 C1）

**目标**：从"会用工具类型"到"能写工具类型"，理解条件类型和 infer。

**步骤**：

1. 手写 `DeepPartial<T>`：把嵌套对象的所有字段变成可选；
2. 用 `infer` 手写 `MyReturnType<T>` 和 `Unpromise<T>`（取出 Promise 的值类型）；
3. 写一个模板字符串类型的实战：约束路由字符串格式 `/user/${number}` 这类；
4. 思考题：你写的 DeepPartial 对数组和函数正确吗？查一下官方 TypeScript 仓库的 Partial 实现思路。

**参考答案**：

```ts
// 1. DeepPartial：条件类型 + 递归
type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] }
  : T;

interface Settings { general: { siteName: string; tags: string[] } }
const patch: DeepPartial<Settings> = { general: { siteName: 'x' } }; // tags 可省略

// 2. infer 的两个经典用法
type MyReturnType<T> = T extends (...args: never[]) => infer R ? R : never;
type Unpromise<T> = T extends Promise<infer V> ? V : never;

type R = MyReturnType<typeof toUser>;      // User
type V = Unpromise<Promise<UserDTO>>;      // UserDTO

// 3. 模板字符串类型：约束动态路由格式
type UserRoute = `/user/${number}` | `/user/${number}/edit`;
function navigate(route: UserRoute) {}
navigate('/user/123');        // ✅
navigate('/user/abc');        // ❌ 编译报错
navigate('/order/123');       // ❌ 编译报错
```

**验收**：不查资料能写出前两条；能口头说清 `infer` 在条件类型里"占位提取"的作用。

**常见踩坑**：递归 DeepPartial 对数组会退化成索引对象（高级实现要先处理 `Array`/`ReadonlyArray` 分支）；在业务代码里堆砌复杂条件类型——工具类型属于基础设施，写进 `types/utils.ts` 并配注释和测试。

### 任务 9：单元测试入门——给类型密集的代码上保险（对应 C2）

**目标**：掌握 Vitest + Testing Library 基础，理解"类型密集代码恰恰最好测"。

**步骤**：

1. 安装 `vitest`、`@testing-library/react`、`jsdom`，配置 vitest；
2. 给任务 1 的 `useToggle` 写 `renderHook` 测试；
3. 给任务 3 的 `isUserDTO` 守卫写测试：合法、非法、边界（null、缺字段）；
4. 给一个组件写渲染测试：mock 掉请求层，断言不同 `RequestState` 下的渲染输出。

**参考答案**：

```ts
// src/hooks/useToggle.test.tsx
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useToggle } from './useToggle';

describe('useToggle', () => {
  it('默认 false，调用后翻转', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
    act(() => result.current[1]());
    expect(result.current[0]).toBe(true);
  });
});
```

```ts
// src/types/user.test.ts —— 守卫测试是性价比最高的一类测试
describe('isUserDTO', () => {
  it('合法数据通过', () => {
    expect(isUserDTO({ id: '1', name: 'x', is_enabled: 1, created_at: '2026-01-01' })).toBe(true);
  });
  it.each([null, {}, { id: 1 }, { is_enabled: '1' }, { created_at: undefined }])(
    '非法输入 %# 被拒绝',
    (bad) => expect(isUserDTO(bad)).toBe(false),
  );
});
```

**验收**：`npx vitest run` 全绿；守卫测试覆盖了"字段缺失 / 字段类型错 / null"三类情况。

**常见踩坑**：测试里 mock 掉类型又随意 `as any`——测试代码的类型同样要严格，否则测的不是真实契约；只测 happy path 不测边界。

### 任务 10：性能优化实战——先测量，再动手（对应 C1/C2）

**目标**：建立"先测量再优化"的习惯，掌握 React 渲染优化的类型配合。

**步骤**：

1. 用 React DevTools Profiler 录制用户管理页：切换一次筛选，看哪些组件白白重渲染；
2. 给表格行组件加 `React.memo`，注意 `columns`/回调 props 需要引用稳定（`useMemo`/`useCallback`），否则 memo 无效；
3. 大数据量（1000 行）场景：用虚拟列表（`react-window` 或 antd Table 的 `virtual` 属性）；
4. 路由级代码分割：`React.lazy` + `Suspense`，用构建产物分析确认图表库没有进首屏。

**参考答案**：

```tsx
// 2. memo 配合引用稳定——这正是 useCallback/useMemo 的类型化应用场景
const UserRow = React.memo(function UserRow({ user, onEdit }: {
  user: UserTableRow;
  onEdit: (u: UserTableRow) => void;
}) {
  return <tr onClick={() => onEdit(user)}>{/* ... */}</tr>;
});

function UserTable({ users }: { users: UserTableRow[] }) {
  const onEdit = useCallback((u: UserTableRow) => openEdit(u), []);
  const sorted = useMemo(() => [...users].sort(byName), [users]);
  return sorted.map((u) => <UserRow key={u.key} user={u} onEdit={onEdit} />);
}
```

```tsx
// 4. 图表库按路由分割，不进首屏
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
<Suspense fallback={<Spin />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Suspense>
```

**验收**：Profiler 中行组件不再因无关状态更新而重渲染；构建产物中 echarts 只出现在 Dashboard 的 chunk 里。

**常见踩坑**：无脑包 memo（不解决引用不稳定等于白包）；优化前不做 Profiler 记录，优化后无法证明有效。

### 任务 11：工程化落地——让规范长在流程上（对应 C2）

**目标**：把手册里的类型规范从"文档"变成"流程"，这是从个人能力到团队能力的分水岭。

**步骤**：

1. 配置 `@typescript-eslint`：开启 `no-explicit-any`、`consistent-type-imports`；
2. 配置 husky + lint-staged：提交前只对改动文件跑 lint 和 tsc；
3. 实践"strict 灰度迁移"：用 tsconfig 的 `include` 只对 `src/hooks`、`src/domain` 开启严格检查，老目录白名单放行；
4. 在 CI 里加 `tsc --noEmit` 门禁。

**参考答案**：

```jsonc
// package.json（关键片段）
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "tsc --noEmit -p tsconfig.strict.json"]
  }
}
```

```jsonc
// tsconfig.strict.json —— 只对核心目录灰度开启严格检查
{
  "extends": "./tsconfig.json",
  "compilerOptions": { "strict": true, "noImplicitAny": true },
  "include": ["src/hooks/**/*", "src/domain/**/*", "src/types/**/*"]
}
```

**验收**：提交含 `any` 的代码会被 hook 拦下；CI 上全量 tsc 通过；新代码自动落入严格检查范围。

**常见踩坑**：一上来全项目开 strict，几千个报错直接让团队放弃；lint 规则太严没有逃生门通道（正确做法是允许 `eslint-disable` 但必须留注释说明原因）。

### 任务 12：CLI 实战——做一个"插入模板代码"的脚手架（对应 C2）

**目标**：把"复制上一个页面改一改"的重复劳动工具化。手写一个小 CLI，一条命令把 CRUD 页面模板插进项目——这是团队提效最直接的入口。

**步骤**：

1. 用 Node 写一个脚本 `scripts/gen.mjs`：`node scripts/gen page UserManagement` 生成 `src/pages/UserManagement/index.tsx`（内含类型化的 Table + 表单骨架）；
2. 模板里做好类型占位：生成的文件自动带 `XxxRow`、`XxxFormValues`，实体类型从 `@/domain` 引入；
3. 用 `commander` 把命令做正规：支持 `--force` 覆盖、文件存在时拒绝；
4. 注册为 npm script（`"gen": "node scripts/gen.mjs"`），再进一步封装 `plop` 或自带交互式选择（页面类型：CRUD / 详情 / 图表）。

**参考答案**：

```js
// scripts/gen.mjs
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const [type, name, ...rest] = process.argv.slice(2);
const flags = new Set(process.argv.filter((a) => a.startsWith('--')));

if (type !== 'page' || !name) {
  console.error('用法: node scripts/gen.mjs page <Name> [--force]');
  process.exit(1);
}

const dir = join('src/pages', name);
const file = join(dir, 'index.tsx');

if (existsSync(file) && !flags.has('--force')) {
  console.error(`已存在: ${file}（加 --force 覆盖）`);
  process.exit(1);
}

const template = `import { ColumnsType } from 'antd/es/table';
import { useForm } from 'antd/es/form/Form';

// 实体类型从领域层引入，保证和接口对齐
import type { ${name}Entity } from '@/domain/${name.toLowerCase()}';
import { use${name}List, useCreate${name} } from '@/hooks/use${name}';

interface ${name}Row extends ${name}Entity { key: string }
interface ${name}FormValues { name: string }

const columns: ColumnsType<${name}Row> = [
  { title: 'ID', dataIndex: 'id' },
  // TODO: 补充业务列
];

export default function ${name}Page() {
  const { state, reload } = use${name}List({ page: 1, pageSize: 10 });
  const [form] = useForm<${name}FormValues>();

  if (state.status !== 'success') return <Spin />;
  return <Table dataSource={state.data.list} columns={columns} rowKey="id" />;
}
`;

mkdirSync(dir, { recursive: true });
writeFileSync(file, template);
console.log(`已生成: ${file}`);
```

```jsonc
// package.json 注册
{ "scripts": { "gen": "node scripts/gen.mjs" } }
// 使用：npm run gen page OrderManagement
```

**验收**：一条命令生成可编译的页面骨架（`tsc --noEmit` 通过，只有 TODO 待补）；重复执行被拦截，`--force` 可覆盖。

**常见踩坑**：模板字符串里嵌 `${}` 时和模板字面量语法冲突（要转义成 `\${`）；生成器不做类型校验，产出编译不过的代码——生成后自动跑一次 `tsc --noEmit` 或提示手动检查，是脚手架的基本体面。模板升级后老文件要不要更新，是"生成器 vs 模板仓库"两种路线的分界，团队里要先约定。

### 任务 13：完整部署闭环——从 `npm run build` 到公网可访问（对应 C2）

**目标**：前端代码写完只是半成品，这一步把交付走完。提供三条路线，至少亲手走通一条（推荐先 13.3 再 13.1/13.2）。

**步骤**：

**13.1 nginx（自建服务器 / 公司机房的标准姿势）**

1. `npm run build` 产出 `dist/`；
2. 写 nginx 配置：SPA 路由回退、gzip、静态资源缓存、API 反向代理（解决跨域）；
3. `nginx -t` 校验后 reload，访问验证。

**参考答案**：

```nginx
# /etc/nginx/conf.d/admin.conf
server {
  listen 80;
  server_name admin.example.com;
  root /var/www/admin/dist;
  index index.html;

  # SPA 路由回退：刷新 /users/1 不再 404
  location / {
    try_files $uri $uri/ /index.html;
  }

  # 带哈希的静态资源长缓存，index.html 不缓存（保证发版即时生效）
  location /assets/ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
  location = /index.html {
    add_header Cache-Control "no-cache";
  }

  # API 反向代理：前端请求 /api/* 由后端接管，浏览器侧无跨域
  location /api/ {
    proxy_pass http://backend:8080/;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

**13.2 Docker（环境一致性与交付标准化）**

1. 写多阶段构建 Dockerfile：builder 阶段装依赖并构建，runner 阶段只拷贝 dist + nginx，镜像从 1GB 级降到几十 MB；
2. `docker build` 后本机 `docker run` 验证；
3. 进阶：docker-compose 编排前端 + 后端 + 数据库，一条命令拉起整套环境。

**参考答案**：

```dockerfile
# Dockerfile
# ── 阶段一：构建 ──
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ── 阶段二：运行 ──
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
```

```bash
docker build -t admin-web:latest .
docker run -d -p 8080:80 admin-web:latest
# 打开 http://localhost:8080 验证
```

**13.3 Vercel（个人项目 / 快速上线的零运维路线）**

1. 代码推到 GitHub，Vercel 导入仓库，构建设置自动识别 Vite（build: `npm run build`，output: `dist`）；
2. SPA 路由回退用 `vercel.json` 声明；
3. 环境变量（如 `VITE_API_BASE`）在项目设置里配，按 Production/Preview 分环境；
4. 体会它的默认能力：每个 push 自动出 Preview 部署链接（提 PR 就能预览），合并进主分支自动上生产。

**参考答案**：

```json
// vercel.json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

**三条路线怎么选**：

| | nginx | Docker | Vercel |
|---|---|---|---|
| 适合 | 公司自有机房、需精确控制 | 团队标准化交付、环境一致 | 个人项目、快速验证 |
| 运维成本 | 自己管服务器 | 镜像化但需管容器平台 | 近乎零 |
| 团队里常见 | 最普遍 | 与 K8s 配套 | 中小团队/独立开发者 |

**验收（任选一条路线）**：公网或局域网可访问；**部署后直接刷新子路由（如 /users/1）不 404**——这一条能筛掉八成第一次部署的 SPA；API 请求正常返回（代理生效）；index.html 无缓存策略但 assets 有长缓存（F12 Network 确认）。

**常见踩坑**：部署后刷新 404——没配 SPA 回退；改了代码页面没变——index.html 被浏览器/nginx 缓存了；代理配置里 `proxy_pass` 末尾斜杠的路径拼接问题（`/api/` + `http://backend:8080/` 与不带斜杠结果完全不同）；Vercel 上环境变量改了要重新部署才生效。

### 任务 14：终极任务——画出你自己的理解导图（P6 检验）

**目标**：前面 13 个任务是"学进去"，这一个任务是"讲出来"。合上文档，凭自己的理解画出一张类型系统导图——能不能画出结构，就是中大厂 P6 水平最诚实的检验。

**步骤**：

1. 合上文档，白板或纸笔，20 分钟内画出"我如何理解 React + TS 的类型系统"导图：不限结构，但必须有你的主线（什么是最核心的一句话）；
2. 对着一个不熟前端的同事（或想象中的面试官）讲 10 分钟，他至少听懂三点：为什么这么设计、怎么落地、怎么演进；
3. 翻回本文档和你自己的导图对照：漏了什么？多写了什么"背诵但没理解"的内容？**漏的按需补学，多写的删掉**——删得动，才是真理解；
4. 把这张图贴到工位或放进团队 wiki，每季度回头修订一次。

**参考答案（一张 P6 水平的理解导图，ASCII 版）**：

> 注意：参考答案的价值不是"照着抄"，而是对照主线。P6 的图和新人笔记最大的区别在于：**它有一条哲学主线，所有分支都挂在这条线上，而不是知识点的堆砌**。

```
                          ┌────────────────────────────────┐
                          │   类型系统的本质：                │
                          │   把业务不变式翻译成编译期约束     │
                          └────────────────┬───────────────┘
                                           │
        ┌──────────────────┬───────────────┴──────────┬─────────────────────┐
        ▼                  ▼                          ▼                     ▼
┌───────────────┐  ┌───────────────┐        ┌──────────────────┐  ┌──────────────────┐
│ ① 为什么       │  │ ② 怎么建模     │        │ ③ 怎么落地        │  │ ④ 怎么演进        │
│ 类型的价值边界  │  │ 状态决定一切    │        │ 从文件到流程       │  │ 类型是活的        │
└───────┬───────┘  └───────┬───────┘        └────────┬─────────┘  └────────┬─────────┘
        │                  │                         │                     │
        ├─ 类型是声明,      ├─ 核心手法：              ├─ 文件分层：          ├─ strict 灰度开启
        │  不是运行时保护    │  联合类型消灭非法状态     │  types/ = 传输形状    ├─ 坏类型写不进去
        ├─ 编译期报警,      │  泛型复用约束            │  domain/ = 业务含义   │  (lint + 门禁)
        │  代替线上事故      │  收窄让类型流动           │  转换函数 = 唯一桥梁   ├─ 老代码按目录迁移
        ├─ any/unknown      │  as const 锁死合法值     ├─ 流程约束：          │  新代码立即严格
        │  的本质区别        │                         │  生成 > 手写          ├─ 接口变更驱动类型变更
        └─ 类型是文档       │                         │  守卫兜底外部数据      │  类型即文档
                           │                         │  lint/CI 门禁         └─ 每季度回看本图
                           │                         │
                           │                         └─ 交付闭环：
                           │                            build → 部署 → 缓存与回退
                           │
                           └─ 终极判断标准：
                              一个新人能否只看类型就用对接口？
                              改一个字段能否靠编译错误找出全部影响面？
```

**这张图在讲什么（P6 的主线逻辑）**：

- **① 价值边界**：先诚实回答"类型防不了什么"（运行时数据、逻辑错误）——知道边界的人才不会滥断言；
- **② 建模是灵魂**：所有技巧（联合、泛型、收窄、as const）都是同一个思想的表现：让非法状态不可表示；
- **③ 落地靠层次和流程**：个人技巧靠不住，分层（types/domain/视图）+ 流程（生成、守卫、门禁）+ 交付（部署、缓存）才靠得住；
- **④ 演进是常态**：类型系统不是画完的蓝图，是长出来的生态——灰度、迁移、随接口版本演化。

**验收（P6 检验标准）**：

- [ ] 20 分钟内画完，有一条能一句话说清的主线（而不是罗列知识点）；
- [ ] 讲解时每条分支都能配一个自己踩过的真实例子；
- [ ] 能当场回答"这个图上没画到的部分怎么处理"（比如你项目特有的微前端、跨端场景类型怎么放）；
- [ ] 对照本文档时，删得掉 30% 以上的内容（删得掉的才是消化过的）。

**常见踩坑**：把本文档目录原样抄一遍当导图——那是目录，不是理解；导图里全是工具名（zustand/react-query/openapi）而没有设计思想——工具会过时，主线不会。

## 自查清单：善用还是滥用

- [ ] 满屏 `any` 或 `as any`？→ 该定义类型了
- [ ] 类型断言 `as` 出现在业务代码里？→ 大概率是数据结构没设计对，先修结构
- [ ] 同样的 interface 在三个文件各写一份？→ 提到共享的 `types.ts` 统一维护
- [ ] 用 `?` 可选字段解决"数据可能没有"？→ 优先联合类型 `T | undefined` 并在使用处收窄
- [ ] 类型写得比逻辑还长？→ 可能过度设计，先保证代码能跑对，类型跟着重构

## 学习路径建议

1. **先过核心概念**：类型、接口、泛型、联合类型、类型收窄——够用、能看懂报错、能自己定义类型就行；
2. **再看模块机制**：模块隔离、`export {}` 的作用（第一部分）；
3. **按项目形态选场景**：小项目走场景 A（zustand + 自定义 Hook + 抓包建型），团队化后升级场景 B（react-query + OpenAPI 生成）；
4. **最后建体系**：对照第四部分，在自己的项目里把目录分层、约束规则和演进策略落地。

---

## 一句话总结

> **状态设计决定 TS 能帮你多少。** 把"可能的取值"直接翻译成类型（联合类型、泛型、收窄），编辑器就会在你写错的那一刻报警，而不是等测试才发现。
>
> 记住：TS 的类型是编译期的，**它不改变运行时行为**。"提高利用率"的真正含义是让类型设计贴着业务状态走，而不是机械地到处写标注——标注只是表，类型设计才是里。
