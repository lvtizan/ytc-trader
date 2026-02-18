#!/usr/bin/env python3
import os

import fitz

os.chdir("/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams")

pdf_path = "/Users/yiming/Downloads/YTC系列书籍/03 进阶篇 YTC卷三：交易策略.pdf"
pdf = fitz.open(pdf_path)

# 提取第13-60页的图片（回调类型策略相关）
pullback_images = []
for page_num in range(12, min(60, len(pdf))):
    page = pdf[page_num]
    image_list = page.get_images()
    for img_index, img in enumerate(image_list, start=1):
        xref = img[0]
        base_image = pdf.extract_image(xref)
        image_bytes = base_image["image"]

        filename = f"pullback_page_{page_num + 1}_img_{img_index}.png"
        filepath = os.path.join(os.getcwd(), filename)
        with open(filepath, "wb") as img_file:
            img_file.write(image_bytes)
        pullback_images.append(filename)
        print(f"已提取: {filename}")

pdf.close()
print(f"\n总共提取了 {len(pullback_images)} 张回调策略图片")
