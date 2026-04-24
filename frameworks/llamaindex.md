# LlamaIndex 速查

专注 RAG 的框架：`数据源 → 切分 → 索引 → 查询 → 答案`

## 核心流程

```python
from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

docs = SimpleDirectoryReader("./data").load_data()
index = VectorStoreIndex.from_documents(docs)
query_engine = index.as_query_engine()
response = query_engine.query("问题")
```

## 关键配置

### 切分

```python
SentenceSplitter(chunk_size=1024, chunk_overlap=200)
```

### 向量库

- **开发**：Chroma（本地）
- **生产**：Pinecone / Weaviate

### 高级查询

- **子问题分解**：`SubQuestionQueryEngine`
- **混合检索**：向量 + BM25 关键词
- **重排序**：`SentenceTransformerRerank`

## 选型

知识库/文档问答 → LlamaIndex | Agent/工具链 → LangChain
