#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
YTC Trader - 智能PDF图片提取工具
自动识别PDF中的图表、截图并保存到指定目录
"""

import os
import sys
import subprocess
import time

# macOS截图工具
MAC_SCREENSHOT = "screencapture -x"
MAC_REGION_SCREENSHOT = "screencapture -R"

def get_pdf_page_count(pdf_path):
    """使用mdls获取PDF页数"""
    try:
        result = subprocess.run(
            ['mdls', pdf_path],
            capture_output=True,
            text=True
        )
        if "Num" in result.stdout:
            pages = int(result.stdout.split("Num")[1].strip())
            return pages
    except Exception as e:
        print(f"❌ 无法获取页数: {e}")
        return 0

def open_pdf_at_page(pdf_path, page_num):
    """在预览中打开PDF指定页"""
    try:
        subprocess.run([
            'open', '-a', 'Preview',
            pdf_path
        ])
        print(f"✅ 已打开PDF第{page_num}页")
        time.sleep(1)
    except Exception as e:
        print(f"❌ 无法打开PDF: {e}")

def capture_fullscreen(output_path):
    """全屏截图"""
    try:
        subprocess.run([
            MAC_SCREENSHOT,
            output_path
        ])
        print(f"✅ 已保存全屏截图: {output_path}")
        return True
    except Exception as e:
        print(f"❌ 截图失败: {e}")
        return False

def capture_region(output_path, x, y, width, height):
    """区域截图"""
    try:
        subprocess.run([
            MAC_REGION_SCREENSHOT,
            str(x), str(y), str(width), str(height),
            output_path
        ])
        print(f"✅ 已保存区域截图: {output_path}")
        return True
    except Exception as e:
        print(f"❌ 截图失败: {e}")
        return False

def main():
    pdf_path = "/Users/yiming/Downloads/YTC系列书籍/02 进阶篇 YTC卷二：市场和市场分析.pdf"
    output_dir = "/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams"

    # 创建输出目录
    os.makedirs(output_dir, exist_ok=True)

    print("=" * 60)
    print("🚀 YTC Trader - 智能PDF图片提取工具")
    print("=" * 60)
    print()

    # 获取PDF页数
    total_pages = get_pdf_page_count(pdf_path)
    print(f"📖 PDF文件: {os.path.basename(pdf_path)}")
    print(f"📄 总页数: {total_pages}")
    print()

    print("📍 根据YTC内容，HH+HL结构通常在:")
    print("   - 第2章 (约P23-40页)")
    print("   - 第3章 (约P30-40页)")
    print()

    print("🎯 本工具将帮助你:")
    print("   1. 自动打开PDF到指定页")
    print("   2. 等待你定位图表位置")
    print("   3. 自动截图保存")
    print()

    # 让用户选择页码
    while True:
        try:
            page_input = input(f"请输入起始页码 (1-{total_pages}, 或 q 退出): ")
            if page_input.lower() == 'q':
                print("\n👋 退出工具")
                return

            page_num = int(page_input)
            if 1 <= page_num <= total_pages:
                break
            else:
                print("❌ 页码超出范围，请重新输入")
        except ValueError:
            print("❌ 请输入有效的页码")
            continue

    # 打开PDF到该页
    open_pdf_at_page(pdf_path, page_num)

    print()
    print("=" * 60)
    print("📋 下一步操作:")
    print()
    print("1. 在打开的预览窗口中找到HH+HL图表")
    print("2. 记住图表的大致位置 (用于计算截图区域)")
    print("3. 返回这里，输入截图区域信息")
    print()

    # 获取截图区域信息
    while True:
        print("\n请输入图表位置信息:")

        try:
            x = input("图表左上角X坐标 (如 100, 或按Enter跳过): ")
            if not x:
                print("\n使用全屏截图模式...")
                output_file = f"page_{page_num:03d}_fullscreen.png"
                success = capture_fullscreen(os.path.join(output_dir, output_file))
                if success:
                    print(f"\n✅ 已保存: {output_file}")
                    print(f"📁 位置: {output_dir}")
                    print("\n继续提取下一张图片")
                else:
                    print("\n❌ 截图失败，请重试")
                return

            y = input("图表左上角Y坐标 (如 100): ")
            width = input("图表宽度 (如 800): ")
            height = input("图表高度 (如 500): ")

            output_file = f"page_{page_num:03d}_{width}x{height}.png"

            print(f"\n准备截图: X={x}, Y={y}, W={width}, H={height}")

            success = capture_region(
                os.path.join(output_dir, output_file),
                int(x), int(y), int(width), int(height)
            )

            if success:
                print(f"\n✅ 已保存: {output_file}")

                # 询问是否继续
                continue_choice = input("\n继续提取下一张? (y/n): ")
                if continue_choice.lower() != 'y':
                    break

                # 下一页
                page_num += 1
                if page_num > total_pages:
                    print("\n已到最后一页")
                    break

                open_pdf_at_page(pdf_path, page_num)

            else:
                print("\n❌ 截图失败，请重试")

        except KeyboardInterrupt:
            print("\n\n👋 用户取消")
            return
        except Exception as e:
            print(f"\n❌ 错误: {e}")
            continue_choice = input("是否重试? (y/n): ")
            if continue_choice.lower() != 'y':
                break

if __name__ == "__main__":
    main()
