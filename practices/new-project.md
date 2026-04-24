# 场景：新项目搭建

从零开始，用 Claude Code 搭建完整项目。

## 流程

```
初始化项目 → 生成 CLAUDE.md → 数据模型 → 核心 API → 前端页面 → 测试 → 部署配置
```

## 实战对话

### 1. 初始化

```
> 用 Next.js 14 App Router + TypeScript + Tailwind CSS 初始化项目。
> 数据库用 Prisma + PostgreSQL。安装并配置好 ESLint + Prettier + 热重载。
```

### 2. 生成 CLAUDE.md

```
> /init
```

自动分析项目结构生成配置。手动补充业务约束：

```
> /memory
```

补充：编码规范、常用命令、注意事项。

### 3. 数据模型

```
> 设计 Prisma schema：
> User(id, email, name, passwordHash, role, createdAt)
> Post(id, title, content, published, slug, authorId, createdAt, updatedAt)
> Comment(id, content, postId, authorId, createdAt)
> User 1:N Post, User 1:N Comment, Post 1:N Comment
> 运行 migrate dev
```

### 4. 核心 API

```
> 实现以下 API 路由：
> POST /api/auth/register — 注册（邮箱唯一性校验、密码 bcrypt）
> POST /api/auth/login — 登录（返回 JWT）
> GET /api/posts — 文章列表（分页、搜索）
> POST /api/posts — 创建文章（需认证，自动生成 slug）
> PUT /api/posts/:id — 更新（仅作者）
> DELETE /api/posts/:id — 删除（仅作者）
> 使用项目现有的目录结构和代码风格。
```

### 5. 前端

```
> 实现页面：
> /login — 登录
> /register — 注册
> / — 文章列表（分页、搜索）
> /posts/[slug] — 文章详情（含评论）
> /dashboard — 我的管理面板（创建/编辑/删除文章）
> 用 shadcn/ui，响应式，暗色模式。
```

### 6. 测试 + 部署

```
> 为所有 API 路由写集成测试（supertest + Vitest）。
> 配置 Vercel 部署，设置环境变量。
```

## 关键技巧

| 阶段 | 技巧 |
|------|------|
| 初始化 | 指定完整技术栈，让 AI 一次配好 |
| CLAUDE.md | `/init` 生成骨架后手动补充业务约束 |
| 数据模型 | 一次性描述所有模型和关系 |
| API | 指定路由、请求格式、权限规则、复用现有风格 |
| 前端 | 指定组件库、列出页面和交互要求 |
| 测试 | 要求覆盖正常/异常/权限场景 |

## 注意事项

- 每步完成让 AI 运行测试确认，不要攒到最后
- 指定具体的库和版本，减少 AI 猜测
- 先让 AI 规划方案（`请先列出需要创建的文件`），确认后再执行
- `/compact` 定期压缩上下文，避免 token 爆炸
