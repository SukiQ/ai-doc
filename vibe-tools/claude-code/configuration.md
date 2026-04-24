# 配置

## 配置优先级

```
CLI 参数 > 托管配置 > .claude/settings.local.json > .claude/settings.json > ~/.claude/settings.json
```

## CLAUDE.md 层级

```
~/.claude/CLAUDE.md          # 全局
项目根/CLAUDE.md              # 团队共享（提交 Git）
项目根/CLAUDE.local.md        # 个人（Git 忽略）
子目录/CLAUDE.md              # 目录级
```

## CLAUDE.md 要点

写什么：技术栈、项目结构、编码规范、常用命令、注意事项。

用 `/init` 自动生成骨架，`/memory` 快速编辑。

## settings.json 关键字段

```json
{
  "permissions": {
    "allow": ["Bash(npm test*)", "Read", "Glob", "Grep"],
    "deny": ["Bash(rm -rf *)", "Bash(sudo *)"]
  },
  "env": { "NODE_ENV": "development" },
  "mcpServers": { ... }
}
```

## 环境变量

| 变量 | 用途 |
|------|------|
| `ANTHROPIC_API_KEY` | API 密钥 |
| `CLAUDE_CODE_MODEL` | 默认模型 |

## .claudeignore

同 `.gitignore` 语法，排除不需要 AI 扫描的目录。
