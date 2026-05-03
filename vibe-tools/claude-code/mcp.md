# MCP

<!-- @author 花小琪 -->

MCP（Model Context Protocol）用于把 Claude Code 连接到外部工具、服务和数据源，例如 GitHub、数据库、知识库、浏览器自动化工具等。

## MCP 是什么

可以把 MCP 理解为 Claude Code 的“插件协议”。

它解决两个问题：

1. **让 Claude 访问外部系统**：不仅能读本地代码，还能调用远程工具
2. **统一接入方式**：不同服务都通过一致的协议暴露能力

接入后，Claude Code 会把这些能力显示为可调用工具。

## MCP 能做什么

常见场景包括：

- 读取 GitHub Issue、Pull Request、评论
- 查询数据库或内部 API
- 连接文档系统、知识库、工单系统
- 调用浏览器自动化或测试工具
- 接入团队自定义服务

## 配置方式

在 `.claude/settings.json` 或 `.claude/settings.local.json` 中添加 `mcpServers`：

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxxxx"
      }
    }
  }
}
```

说明：

- `settings.json`：团队共享配置
- `settings.local.json`：个人本地配置，适合放密钥
- `command`：启动 MCP Server 的命令
- `args`：启动参数
- `env`：环境变量

## 推荐做法

### 凭证放本地

Token、密码、API Key 放到 `settings.local.json`，不要提交到 Git。

### 团队只共享结构

团队仓库里只提交通用的 MCP 配置结构，不提交个人凭证。

### 先接高价值服务

优先接入最常用的系统，例如：

- GitHub
- 文档平台
- 工单系统
- 数据查询服务

## Claude Code 中如何使用

MCP Server 启动成功后，Claude Code 会自动把它暴露为工具。

工具名通常类似：

```text
mcp__github__list_issues
mcp__github__get_pull_request
```

你不一定需要手动记住工具名，直接告诉 Claude 你的目标即可，例如：

- “查看这个仓库最近打开的 PR”
- “读取 GitHub 上这个 issue 的评论”
- “查一下内部知识库里关于支付回调的文档”

## 对接 SonarQube MCP

如果团队已经有 SonarQube MCP Server，或你准备接入一个 SonarQube 适配的 MCP Server，可以按下面方式配置。

### 准备信息

通常需要：

- SonarQube 服务地址
- 可访问项目数据的 Token
- SonarQube MCP Server 的启动命令

### 配置示例

建议把敏感信息写入 `.claude/settings.local.json`：

```json
{
  "mcpServers": {
    "sonarqube": {
      "command": "你的-sonarqube-mcp-server-启动命令",
      "args": [],
      "env": {
        "SONARQUBE_URL": "https://sonarqube.example.com",
        "SONARQUBE_TOKEN": "sqp_xxxxx"
      }
    }
  }
}
```

说明：

- `command`：启动 SonarQube MCP Server 的命令
- `args`：不同 Server 实现需要的参数
- `SONARQUBE_URL`：SonarQube 地址
- `SONARQUBE_TOKEN`：访问 SonarQube API 的令牌

### 推荐接入方式

团队仓库可共享一个不带密钥的模板：

```json
{
  "mcpServers": {
    "sonarqube": {
      "command": "你的-sonarqube-mcp-server-启动命令",
      "args": []
    }
  }
}
```

每个开发者再在 `settings.local.json` 中补充自己的 `SONARQUBE_URL` 和 `SONARQUBE_TOKEN`。

### 接入后能做什么

接入成功后，可以让 Claude 帮你：

- 查询项目 Quality Gate 状态
- 查看 Bug、Vulnerability、Code Smell
- 按项目或分支读取扫描结果
- 辅助定位新引入的问题
- 汇总某次改动后的代码质量风险

例如可以直接提：

- “查一下这个项目当前的 SonarQube Quality Gate”
- “列出最近扫描里的高优先级问题”
- “帮我汇总这个分支新增的 Code Smell”

### 常见注意点

- Token 至少要有读取项目分析结果的权限
- 如果 Claude 看不到 SonarQube 工具，先检查 MCP Server 是否正常启动
- 如果能连上 Server 但查不到项目，通常是权限、项目 key 或 URL 配置问题
- 不同 SonarQube MCP Server 的启动参数可能不同，优先按对应实现的说明配置

## 与 Hooks 的区别

MCP 和 Hooks 经常一起出现，但用途不同：

| 能力 | 作用 |
|------|------|
| Hooks | 在特定事件触发本地命令 |
| MCP | 给 Claude 提供外部工具和数据能力 |

简单说：

- **Hooks** 更像自动化触发器
- **MCP** 更像工具扩展层

## 典型使用场景

### GitHub 协作

让 Claude 直接读取 PR、Issue、Review Comment，减少人工复制粘贴。

### 内部文档检索

把知识库接进来后，Claude 可以直接基于团队文档回答问题。

### 数据与运维查询

连接数据库、监控、日志平台，让 Claude 帮你定位问题和汇总信息。

## 常见问题

### 为什么配置了但看不到工具

常见原因：

- MCP Server 启动失败
- 本地命令不存在
- 环境变量没配好
- 凭证无效
- 配置文件写错位置

### 什么时候用 settings.json，什么时候用 settings.local.json

- **共享给团队**：用 `settings.json`
- **只在自己机器生效**：用 `settings.local.json`

## 最佳实践

- 先从 1~2 个高频 MCP 开始，不要一次接太多
- 把敏感信息全部放本地配置
- 给团队沉淀统一的 MCP 接入模板
- 优先接入能减少重复复制粘贴的系统
