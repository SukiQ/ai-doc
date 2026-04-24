# 案例：REST API 开发

Express + TypeScript + Prisma，Vibe Coding 实录。

## 步骤

```
> 创建 Express + TypeScript 项目，ESLint + Prettier + 热重载 + 错误中间件 + CORS

> Prisma schema：User/Post/Comment/Tag，User 1:N Post, Post M:N Tag

> 认证：POST register/login（JWT），GET /me，认证中间件

> Post CRUD：GET(分页/搜索) / POST / PUT(仅作者) / DELETE(仅作者) / publish

> Comment + Tag API + Zod 请求验证 + 集成测试 + OpenAPI 文档
```

## API 设计规范

```json
// 成功
{"code": 200, "data": {...}, "message": "success"}
// 错误
{"code": 400, "message": "验证失败", "errors": [{"field": "email", "message": "..."}]}
// 分页
{"code": 200, "data": {"items": [...], "total": 100, "page": 1, "pageSize": 20}}
```
