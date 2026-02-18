#!/usr/bin/env python3
import fitz

pdf_path = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
pdf = fitz.open(pdf_path)

# 提取第44-60页的文本内容（回调类型相关）
with open(
    "/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams/callback_content.txt",
    "w",
    encoding="utf-8",
) as f:
    for page_num in range(43, min(60, len(pdf))):
        page = pdf[page_num]
        text = page.get_text()
        f.write(f"=== 第 {page_num + 1} 页 ===\n\n")
        f.write(text)
        f.write("\n\n")

pdf.close()
print("已提取回调相关文本内容到 callback_content.txt")
