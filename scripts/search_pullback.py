#!/usr/bin/env python3
import fitz

pdf_path = "/Users/yiming/Downloads/YTC系列书籍/03 进阶篇 YTC卷三：交易策略.pdf"
pdf = fitz.open(pdf_path)

# 搜索包含回调类型关键词的页面
keywords = ["Pullback", "简单回调", "复杂回调", "CPB", "Shallow", "Deep"]
found_pages = []

for page_num in range(len(pdf)):
    page = pdf[page_num]
    text = page.get_text()
    for keyword in keywords:
        if keyword in text:
            found_pages.append((page_num + 1, keyword))
            break

print(f"在卷三中找到包含回调关键词的页面:")
for page, kw in found_pages[:30]:
    print(f"第{page}页: {kw}")

# 查看第1-100页哪些页有图片
print("\n第1-100页的图片分布:")
for page_num in range(0, min(100, len(pdf))):
    page = pdf[page_num]
    image_list = page.get_images()
    if image_list:
        print(f"第{page_num + 1}页: {len(image_list)}张图片")

pdf.close()
