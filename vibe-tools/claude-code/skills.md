# 选择 Skills

<!-- @author 花小琪 -->

Skills 是 Claude Code 的扩展能力包，可通过 `/skill-name` 斜杠命令一键调用。

## 什么是 Skills

Skill 本质是一个预配置的 Prompt 模板 + 工具权限组合。安装后以斜杠命令的形式存在，输入 `/` 即可看到可用列表。

## 内置 Skills

Claude Code 自带一批常用 Skills：

| Skill | 用途 |
|-------|------|
| `/init` | 生成 CLAUDE.md 项目文档 |
| `/review` | 代码审查 |
| `/security-review` | 安全审查 |
| `/simplify` | 精简重构代码 |
| `/frontend-design` | 生成高质量前端界面 |

## 查找与安装

使用 `/find-skills` 搜索社区和官方提供的 Skills：

```
> /find-skills flutter 动画
```

安装方式：在 Claude Code 中运行安装命令，或手动将 Skill 文件放入 `.claude/skills/` 目录。

## 如何选择

1. **按场景选** — 做前端用 `frontend-design`，做 Flutter 用 `flutter-*` 系列
2. **按频率选** — 高频操作优先安装，如 `review`、`simplify`
3. **按团队选** — 团队统一安装同一批 Skills，保持协作一致性
4. **少即是多** — 只装常用的，过多 Skills 会干扰 `/` 补全体检

## 自定义 Skill

在 `.claude/commands/` 下创建 `.md` 文件即是一个自定义 Skill：

```markdown
<!-- .claude/commands/check-i18n.md -->
检查 src/ 下所有中文硬编码，列出文件和行号。
```

使用：`/check-i18n`

## 最佳实践

- **团队共享**：将 Skill 文件提交到 Git，团队统一使用
- **命名规范**：用动词开头，如 `add-test`、`fix-lint`、`check-types`
- **参数化**：用 `$ARGUMENTS` 占位符接收动态参数
- **持续迭代**：根据使用反馈不断优化 Skill 的 Prompt 内容
