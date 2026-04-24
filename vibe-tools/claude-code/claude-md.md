# CLAUDE.md 编写

CLAUDE.md 是 Claude Code 理解你项目的核心。写得越好，AI 输出越准。

## 层级

```
~/.claude/CLAUDE.md          # 全局偏好（所有项目）
项目根/CLAUDE.md              # 团队共享（提交 Git）
项目根/CLAUDE.local.md        # 个人配置（Git 忽略）
子目录/CLAUDE.md              # 目录级上下文
```
## 编写准则

- 对 CALUDE.md 进行版本控制
- 定期回顾和精简 CALUDE.md
- 越重要的规则写在越前方

::: danger
CLAUDE.md 一般不要超过 500 行
:::


## 五要素模板

```markdown
# 项目名称

## 技术栈
React 18 + TypeScript + Vite
Tailwind CSS + shadcn/ui
React Query + Zustand
Vitest + Playwright

## 项目结构
src/components/ — UI 组件
  ui/ — shadcn 基础组件
  features/ — 业务组件
src/hooks/ — 自定义 hooks
src/services/ — API 调用层
src/stores/ — Zustand 状态

## 编码规范
- 函数式组件 + hooks，不用 class
- Server Components 优先，交互用 Client Components
- Zod 做输入验证，所有 API 响应类型化
- 错误用 AppError 类，统一错误处理中间件
- 不用 any，用 unknown + 类型守卫

## 常用命令
pnpm dev — 开发
pnpm test — 测试
pnpm test:e2e — E2E 测试
pnpm lint — 检查
pnpm build — 构建

## 注意事项
- 所有 API 调用走 src/services/，不直接用 fetch
- 数据库迁移用 prisma migrate dev，不手动改 SQL
- 环境变量在 .env.local
- /api/admin/* 路由需要 admin 角色
```

## 编写技巧

| 要素 | 要写什么 | 不要写什么 |
|------|---------|-----------|
| 技术栈 | 具体框架+版本 | "前端框架" |
| 项目结构 | 目录用途 | 完整文件列表 |
| 编码规范 | 具体的 do/don't | "写好代码" |
| 常用命令 | 完整可执行命令 | "跑测试" |
| 注意事项 | 容易踩的坑、特殊约束 | 显而易见的事 |

## 常见反模式

```
❌ "这是一个 Web 项目，用 React 写的"（太模糊）
❌ 完整复制 package.json（冗余，AI 能自己读）
❌ 写 200 行注意事项（太长会被截断，抓重点）
❌ 和 .editorconfig / eslint 配置重复
```

## 维护

- 用 `/init` 生成骨架，手动补充业务约束
- 用 `/memory` 快速编辑
- 技术栈变更后及时更新
- 保持精炼，确保 AI 能在上下文窗口内完整加载
