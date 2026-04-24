# 案例：办公自动化

## 文件整理

```
> Python 脚本 organize_downloads.py：扫描 ~/Downloads，按扩展名分类，支持 dry-run
```

## 周报生成

```bash
claude -p "基于本周 git log 生成周报，Markdown 格式" > weekly-report.md
```

## 会议纪要

```
> 整理以下会议文本：主题、讨论要点、关键决策、行动项（负责人+截止日期）
```

## 数据格式转换

```
> Python 脚本 convert_report.py：Excel→JSON，日期转 ISO，金额去逗号，空值转 null
```

## 效率

| 场景 | 传统 | Vibe Coding |
|------|------|-------------|
| 文件整理脚本 | 1-2h | 5min |
| 周报 | 30min | 1min |
| 格式转换 | 2-3h | 5min |
