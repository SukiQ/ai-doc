# Hooks 与 MCP

## Hooks

在 `.claude/settings.json` 中配置事件回调：

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Edit|Write",
      "command": "npx prettier --write \"$CLAUDE_FILE_PATH\" 2>/dev/null || true"
    }],
    "Stop": [{
      "command": "osascript -e 'display notification \"完成\" with title \"Claude Code\"'"
    }]
  }
}
```

### 关键事件

| 事件 | 触发时机 |
|------|---------|
| `PreToolUse` | 工具执行前 |
| `PostToolUse` | 工具执行后 |
| `Stop` | 响应完成 |
| `UserPromptSubmit` | 用户提交提示 |

### 退出码

`0` 继续 | `2` 阻止 | 其他 非阻塞错误

## MCP 服务器

在 settings.json 中添加外部工具连接：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxx" }
    }
  }
}
```

工具命名：`mcp__服务器名__工具名`（如 `mcp__github__list_issues`）

敏感凭证放 `settings.local.json`，不提交 Git。
