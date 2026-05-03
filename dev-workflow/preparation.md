# 准备阶段

好的开始是成功的一半。在进入编码前，花 10 分钟做好这些准备。

<!-- 开发者：花小琪 -->

## 环境搭建

### 安装 Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

### 认证

```bash
# 方式一：OAuth（推荐，首次运行自动引导）
claude

# 方式二：API Key
export ANTHROPIC_API_KEY=sk-ant-xxxxx
claude
```

### 模型选择

| 模型 | 适用场景 | 成本 |
|------|----------|------|
| Sonnet | 日常开发（推荐） | 中 |
| Opus | 复杂架构/推理 | 高 |
| Haiku | 简单任务/高频调用 | 低 |

## 编写 CLAUDE.md

CLAUDE.md 是 Claude Code 理解项目的核心配置。**写得越好，AI 输出越准。**

### 层级结构

```
~/.claude/CLAUDE.md          # 全局偏好（所有项目生效）
项目根/CLAUDE.md              # 团队共享（提交 Git）
项目根/CLAUDE.local.md        # 个人配置（Git 忽略）
子目录/CLAUDE.md              # 目录级上下文
```

### 快速生成

```bash
claude
> /init
```

`/init` 自动分析项目结构，生成 CLAUDE.md 骨架。

### 手动补充

用 `/memory` 编辑 CLAUDE.md，重点补充：

**必写项：**
- 项目简介和目录结构
- 技术栈（框架、语言版本、关键依赖）
- 常用命令（构建、测试、启动）
- 编码规范（命名、风格、目录约定）

**建议补充：**
- 数据库 schema 或 API 设计
- 部署流程和注意事项
- 已知的技术债或踩过的坑

::: danger
CLAUDE.md 不超过 500 行。越重要的规则写在越前面。
:::

### 示例

```markdown
# 博客系统

## 技术栈
Next.js 14 App Router + TypeScript + Tailwind CSS + Prisma + PostgreSQL

## 常用命令
- 开发: npm run dev
- 构建: npm run build
- 测试: npm run test
- 数据库迁移: npx prisma migrate dev

## 项目结构
src/
├── app/          # 页面和 API 路由
├── components/   # React 组件
├── lib/          # 工具函数
└── types/        # 类型定义

## 编码规范
- 组件用 PascalCase，文件名用 kebab-case
- API 路由统一返回 { data, error } 格式
- 所有数据库操作走 Prisma，禁止原始 SQL
```

## 上下文准备

AI 不知道你的项目背景。在开始编码前，主动提供足够的上下文。

### 新项目

- 明确技术栈和版本要求
- 描述项目目标和核心功能
- 准备参考文档或设计稿链接

**示例对话：**

```
> 我要做一个博客系统。
> 技术栈：Next.js 14 App Router + TypeScript + Tailwind + Prisma + PostgreSQL
> 功能：用户注册登录、文章 CRUD、评论、Markdown 编辑器
> 用 shadcn/ui 做组件库，要求响应式 + 暗色模式
```

### 现有项目

- 让 AI 先阅读项目结构和关键文件
- 指出需要修改的文件位置
- 说明要遵循的现有模式

**示例对话：**

```
> 先阅读 src/app 和 src/components 目录，了解现有的代码风格和组件模式。
> 然后在同样的风格下，新增一个标签管理功能。
```

### 提供参考

如果有设计稿、API 文档或示例代码，直接告诉 AI：

```
> 参考 figma.com/design/xxx 的设计稿实现这个页面
> API 文档在 docs/api.md，按照里面的接口规范实现
```

## 常见准备清单

| 项目类型 | 必须准备 | 建议准备 |
|----------|----------|----------|
| 新项目 | 技术栈、核心功能、CLAUDE.md | 目录结构规划、参考项目 |
| 功能开发 | 相关代码位置、需求描述、验收标准 | 设计稿、API 文档 |
| Bug 修复 | 复现步骤、报错信息、相关代码 | 环境信息、日志 |
| 重构 | 重构目标、现有问题、约束条件 | 测试用例、性能指标 |

准备完成后，进入 [开发阶段](/dev-workflow/development)。
