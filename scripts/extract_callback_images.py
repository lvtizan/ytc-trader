#!/usr/bin/env python3
import os

import fitz

# 切换到图片目录
os.chdir("/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams")

# 打开PDF
pdf_path = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
pdf = fitz.open(pdf_path)

# 提取第44-60页的图片（回调类型相关）
callback_images = []
for page_num in range(43, min(60, len(pdf))):
    page = pdf[page_num]
    image_list = page.get_images()
    for img_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = pdf.extract_image(xref)
        image_bytes = base_image["image"]

        # 保存图片
        filename = f"callback_page_{page_num + 1}_img_{img_index}.png"
        filepath = os.path.join(os.getcwd(), filename)
        with open(filepath, "wb") as img_file:
            img_file.write(image_bytes)
        callback_images.append(filename)
        print(f"已提取: {filename}")

pdf.close()
print(f"\n总共提取了 {len(callback_images)} 张回调相关图片")
