# 案例：数据分析自动化

Vibe Coding 实录：CSV → 清洗 → 分析 → 图表 → 报告。

## 步骤

```
> 读取 data/sales_2024.csv，告诉我数据结构和质量问题

> 清洗：去重、中位数填缺失、过滤负金额、标准化日期、类别统一小写

> 分析：月度趋势(折线图)、类别占比(饼图)、Top 10 产品(柱状图)，matplotlib 保存 PNG

> 生成 Markdown 分析报告：关键发现 + 趋势 + 建议

> 整合为 analyze.py：接受 CSV 路径参数，支持 dry-run，自动生成图表和报告
```

## 时间

传统 6-10 小时 → Vibe Coding 30 分钟

## 批量用法

```bash
for f in data/*.csv; do
  python analyze.py "$f" --output "reports/$(basename $f .csv)/"
done
```
