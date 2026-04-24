# OpenAI API 速查

## 核心 API

```python
from openai import OpenAI
client = OpenAI(api_key="sk-xxxxx")

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "系统提示"},
        {"role": "user", "content": "用户消息"}
    ],
    temperature=0.7,
    max_tokens=1000,
    stream=True  # 流式
)
```

## Function Calling

```python
tools = [{"type": "function", "function": {"name": "fn", "parameters": {...}}}]
response = client.chat.completions.create(model="gpt-4o", messages=[...], tools=tools)
```

## Structured Output

```python
response_format={"type": "json_schema", "json_schema": {"name": "...", "schema": {...}}}
```

## 模型价格

| 模型 | 上下文 | 输入价格 |
|------|--------|---------|
| gpt-4o | 128K | $2.50/1M |
| gpt-4o-mini | 128K | $0.15/1M |
| o1 | 200K | $15/1M |

## 要点

- 简单任务用 `gpt-4o-mini`，限制 `max_tokens` 控制成本
- 系统提示放在 messages 开头自动缓存
- 处理 `RateLimitError` 用指数退避重试
