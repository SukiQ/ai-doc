# 案例：AI Agent 应用

用 Vibe Coding 构建编程助手 Agent。

## 架构

```
用户请求 → Agent 控制器 → 工具层（代码搜索/文件编辑/命令执行/Git）→ LLM 推理 → 输出
```

## 核心实现

```
> TypeScript 实现-Agent 框架：ReAct 循环 + 工具注册/调用 + 流式输出 + Anthropic API

> 实现-Agent 工具：search_code, read_file, write_file, run_command, list_files, git_diff

> Agent 主循环：接收消息→LLM→判断 tool_use→执行工具→返回结果→重复直到最终回答，限制最大步骤

> CLI 界面：彩色输出、代码高亮、工具调用可视化、/help /clear /model 命令
```

## 核心循环

```typescript
for (let step = 0; step < MAX_STEPS; step++) {
  const response = await callLLM(messages);
  if (response.stopReason === "tool_use") {
    const result = await executeTool(response.toolCall);
    messages.push(result);
  } else return response.content;
}
```
