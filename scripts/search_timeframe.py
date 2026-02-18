#!/usr/bin/env python3
import fitz

# 搜索卷二中关于多时间周期的内容
pdf_path = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
pdf = fitz.open(pdf_path)

keywords = ["时间周期", "时间框架", "Timeframe", "多时间", "月线", "周线", "日线"]
found_pages = []

for page_num in range(len(pdf)):
    page = pdf[page_num]
    text = page.get_text()
    for keyword in keywords:
        if keyword in text:
            found_pages.append(page_num + 1)
            break

print(f"卷二中找到多时间周期相关页面: {found_pages[:20]}")

# 查看这些页面的图片
print("\n相关页面的图片:")
for page_num in found_pages[:20]:
    page = pdf[page_num - 1]
    image_list = page.get_images()
    if image_list:
        print(f"第{page_num}页: {len(image_list)}张图片")

pdf.close()
