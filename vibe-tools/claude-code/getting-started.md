# Claude Code 速查

Anthropic 终端 AI 编程代理。理解整个代码库，执行文件编辑、命令运行、Git 操作。

## 启动方式

```bash
claude                      # 交互模式
claude "任务描述"            # 带初始提示
claude -p "查询"             # 非交互模式（管道友好）
claude -c                    # 继续上次对话
claude -r                    # 恢复历史对话
claude --model opus          # 指定模型
claude --max-turns 10        # 限制轮次
claude --allowedTools Read,Glob,Grep  # 限制工具
```

## 认证

```bash
# OAuth（首次运行自动引导）
claude

# API Key
export ANTHROPIC_API_KEY=sk-ant-xxxxx
```

## 模型选择

| 模型 | 适用 |
|------|------|
| Sonnet 4 | 日常开发（推荐） |
| Opus 4 | 复杂推理/架构 |
| Haiku 3.5 | 简单任务/高频调用 |
