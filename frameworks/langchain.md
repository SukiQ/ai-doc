# LangChain 速查

## 核心概念

Chain（串联组件）| Agent（自主调用工具）| Tool（外部工具）| Memory（对话历史）

## 关键模式

### LCEL 管道

```python
chain = prompt | llm | output_parser
result = chain.invoke({"question": "..."})
```

### Agent + Tool

```python
from langchain.agents import create_tool_calling_agent, AgentExecutor

@tool
def search_code(query: str) -> str: ...

agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools)
```

### RAG

```python
from langchain.chains import create_retrieval_chain

vectorstore = Chroma.from_documents(chunks, embeddings)
rag_chain = create_retrieval_chain(vectorstore.as_retriever(), qa_chain)
result = rag_chain.invoke({"input": "问题"})
```

## 与 LlamaIndex 对比

| 维度 | LangChain | LlamaIndex |
|------|-----------|------------|
| 定位 | 通用 LLM 框架 | 专注 RAG |
| 强项 | Agent、工具链 | 数据索引、检索策略 |
| 选型 | 构建智能体 | 构建知识库 |
