#!/usr/bin/env python3
import fitz

pdf_path = "/Users/yiming/Downloads/YTC系列书籍/03 进阶篇 YTC卷三：交易策略.pdf"
pdf = fitz.open(pdf_path)

# 提取第13-60页的文本内容
with open(
    "/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams/pullback_content.txt",
    "w",
    encoding="utf-8",
) as f:
    for page_num in range(12, min(60, len(pdf))):
        page = pdf[page_num]
        text = page.get_text()
        f.write(f"=== 第 {page_num + 1} 页 ===\n\n")
        f.write(text)
        f.write("\n\n")

pdf.close()
print("已提取回调策略文本内容到 pullback_content.txt")
