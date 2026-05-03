# CLAUDE.md 编写

CLAUDE.md 是 Claude Code 理解你项目的核心。写得越好，AI 输出越准。

## 层级

```
~/.claude/CLAUDE.md          # 全局偏好（所有项目）
项目根/CLAUDE.md              # 团队共享（提交 Git）
项目根/CLAUDE.local.md        # 个人配置（Git 忽略）
子目录/CLAUDE.md              # 目录级上下文
```
## 编写准则

- 对 CALUDE.md 进行版本控制
- 定期回顾和精简 CALUDE.md
- 越重要的规则写在越前方

::: danger
CLAUDE.md 一般不要超过 500 行
:::


## 全局 CLAUDE.md

- 关于用户的背景信息、目标以及推理策略
- 高层级的偏好设定
- 一些 Token 节省策略

## 项目 CLAUDE.md

- 项目描述以及项目结构
- 低层级的偏好设定
- 该项目内具备的功能或能力

