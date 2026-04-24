# Anthropic API 速查

## 核心 API

```python
import anthropic
client = anthropic.Anthropic(api_key="sk-ant-xxxxx")

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,  # 必须指定
    system="系统提示",  # 独立参数，不在 messages 中
    messages=[{"role": "user", "content": "问题"}]
)
```

## Tool Use

```python
tools = [{"name": "fn", "input_schema": {"type": "object", "properties": {...}}}]
# 判断 stop_reason == "tool_use" → 执行工具 → 传入 tool_result 继续对话
```

## 流式

```python
with client.messages.stream(model="...", max_tokens=1024, messages=[...]) as stream:
    for text in stream.text_stream: print(text, end="")
```

## Prompt Caching

```python
system=[{"type": "text", "text": "长提示...", "cache_control": {"type": "ephemeral"}}]
```

节省 90% 成本。

## 与 OpenAI 差异

| 维度 | OpenAI | Anthropic |
|------|--------|-----------|
| 系统提示 | messages 中 system 角色 | 独立 `system` 参数 |
| 响应 | `choices[0].message.content` | `content[0].text` |
| 工具 | `tool_calls` 字段 | `content` 中 `tool_use` block |
| max_tokens | 可选 | **必须指定** |
| 流式 | `stream=True` | `client.messages.stream()` |
