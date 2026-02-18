#!/usr/bin/env python3
import fitz

pdf_path = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
pdf = fitz.open(pdf_path)

# 提取多时间周期相关页面的文本
timeframe_pages = [16, 29, 31, 49, 51, 52, 54, 55, 57, 58, 62, 63, 64, 65]

with open(
    "/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams/timeframe_content.txt",
    "w",
    encoding="utf-8",
) as f:
    for page_num in timeframe_pages:
        page = pdf[page_num - 1]
        text = page.get_text()
        f.write(f"=== 第 {page_num} 页 ===\n\n")
        f.write(text)
        f.write("\n\n")

pdf.close()
print("已提取多时间周期文本内容")
