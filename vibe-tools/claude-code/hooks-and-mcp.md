# Hooks

<!-- @author 花小琪 -->

## 配置方式

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
