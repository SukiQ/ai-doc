# 案例：全栈应用

Next.js 14 + TypeScript + Prisma + PostgreSQL，Vibe Coding 实录。

## 步骤

```
> 用 Next.js 14 App Router + Tailwind 初始化项目，数据库用 Prisma + PostgreSQL

> 设计 Prisma schema：User(id,email,name,passwordHash), Todo(id,title,completed,priority,dueDate,userId)

> 实现 NextAuth 认证：邮箱密码 + GitHub OAuth，JWT session

> 实现 Todo CRUD API：GET/POST/PUT/DELETE /api/todos，需认证，只操作自己的数据

> 前端页面：/login、/register、/dashboard（拖拽排序、筛选）、/dashboard/new、/dashboard/[id]，用 shadcn/ui

> 为 API 写集成测试，配置 Vercel 部署
```

## 时间

传统 24-36 小时 → Vibe Coding 3-4 小时

## 心得

- 每步给出具体技术要求和约束
- 指定成熟方案（shadcn/ui、NextAuth）减少 AI 猜测
- 每步完成后运行测试确认
