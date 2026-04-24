# 命令、记忆、技能

## 自定义斜杠命令

`.claude/commands/` 下创建 `.md` 文件即成为自定义命令：

```
.claude/commands/
├── fix-lint.md      → /fix-lint
├── add-test.md      → /add-test
```

支持 `$ARGUMENTS` 占位符接收参数：

```markdown
<!-- .claude/commands/add-test.md -->
为 $ARGUMENTS 编写完整单元测试。使用 Jest，覆盖正常/边界/异常。
```

使用：`/add-test src/services/user.ts`

## 记忆系统

层级：`~/.claude/CLAUDE.md` > 项目 `CLAUDE.md` > `CLAUDE.local.md` > 子目录 `CLAUDE.md`

Claude 会自动记忆你的纠正和偏好。`/memory` 查看编辑。

## .claude/ 目录结构

```
.claude/
├── settings.json          # 团队共享设置
├── settings.local.json    # 个人设置
├── commands/              # 自定义命令
└── agents/                # 自定义子代理
```
