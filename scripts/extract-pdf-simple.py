#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
YTC Trader - PDF图片自动提取工具
直接从PDF提取所有高质量图片
"""

import os
import sys

try:
    import fitz  # PyMuPDF
except ImportError:
    print("❌ 错误：需要安装 PyMuPDF")
    print("请运行: pip3 install PyMuPDF")
    sys.exit(1)

def extract_images_from_pdf(pdf_path, output_dir):
    """从PDF提取所有图片"""
    
    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)
    
    # 打开PDF
    print(f"📖 正在打开: {os.path.basename(pdf_path)}")
    try:
        pdf_document = fitz.open(pdf_path)
    except Exception as e:
        print(f"❌ 无法打开PDF: {e}")
        return
    
    total_images = 0
    page_count = len(pdf_document)
    
    print(f"📄 总页数: {page_count}")
    print("开始提取图片...")
    
    # 遍历每一页
    for page_num in range(page_count):
        page = pdf_document[page_num]
        image_list = page.get_images()
        
        # 提取该页的所有图片
        for img_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = pdf_document.extract_image(xref)
            
            # 获取图片数据
            image_bytes = base_image["image"]
            image_format = base_image["ext"]
            
            # 生成文件名: page_1_img_1.png
            image_filename = f"page_{page_num+1}_img_{img_index}.{image_format}"
            image_path = os.path.join(output_dir, image_filename)
            
            # 保存图片
            with open(image_path, "wb") as image_file:
                image_file.write(image_bytes)
            
            total_images += 1
            print(f"  ✓ 提取: {image_filename}")
    
    pdf_document.close()
    
    print(f"\n🎉 提取完成!")
    print(f"📊 总计: {total_images} 张图片")
    print(f"💾 保存位置: {output_dir}")
    
    if total_images > 0:
        print("\n✅ 成功提取图片")
        print("现在可以:")
        print("1. 查看 images/diagrams/ 目录")
        print("2. 告诉我图片数量和文件名")
        print("3. 我会更新网页引用")
    else:
        print("\n⚠️ 未找到图片")
        print("可能原因:")
        print("- PDF中的图片是扫描的,不是嵌入的")
        print("- 或图片格式不被支持")
        print("建议: 使用在线工具 https://www.ilovepdf.com/extract-pdf-images/")

def main():
    # 默认路径
    default_pdf = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
    default_output = "/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams"
    
    pdf_path = default_pdf
    output_dir = default_output
    
    # 检查命令行参数
    if len(sys.argv) > 1:
        pdf_path = sys.argv[1]
    
    if len(sys.argv) > 2:
        output_dir = sys.argv[2]
    
    print("=" * 60)
    print("🚀 YTC Trader - PDF图片自动提取工具")
    print("=" * 60)
    print()
    
    # 检查文件是否存在
    if not os.path.exists(pdf_path):
        print(f"❌ 错误: 文件不存在 - {pdf_path}")
        print("\n用法:")
        print(f"  python3 {sys.argv[0]} [PDF文件路径] [输出目录]")
        print(f"\n示例:")
        print(f"  python3 {sys.argv[0]} ~/Downloads/YTC系列书籍/02进阶篇YTC卷二：市场和市场分析.pdf")
        sys.exit(1)
    
    extract_images_from_pdf(pdf_path, output_dir)
    print("\n✅ 完成!")

if __name__ == "__main__":
    main()
