#!/usr/bin/env python3
import os

import fitz

os.chdir("/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams")

pdf_path = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
pdf = fitz.open(pdf_path)

# 提取多时间周期相关页面的图片
timeframe_pages = [16, 29, 31, 49, 51, 52, 54, 55, 57, 58, 62, 63, 64, 65]
timeframe_images = []

for page_num in timeframe_pages:
    page = pdf[page_num - 1]
    image_list = page.get_images()
    for img_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = pdf.extract_image(xref)
        image_bytes = base_image["image"]

        filename = f"timeframe_page_{page_num}_img_{img_index}.png"
        filepath = os.path.join(os.getcwd(), filename)
        with open(filepath, "wb") as img_file:
            img_file.write(image_bytes)
        timeframe_images.append(filename)
        print(f"已提取: {filename}")

pdf.close()
print(f"\n总共提取了 {len(timeframe_images)} 张多时间周期相关图片")
