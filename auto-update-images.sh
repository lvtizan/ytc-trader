#!/bin/bash

# 自动图片更新脚本
# 当你将图片放到 images/diagrams/ 后运行此脚本

DIAGRAMS_DIR="images/diagrams"
KNOWLEDGE_FILE="learn/hh-hl-structure-complete.html"

echo "=== 自动更新图片脚本 ==="
echo ""
echo "正在检查 $DIAGRAMS_DIR 目录..."

if [ ! -d "$DIAGRAMS_DIR" ]; then
    echo "❌ 目录不存在: $DIAGRAMS_DIR"
    echo "请先将提取的图片保存到该目录"
    exit 1
fi

# 统计图片数量
image_count=$(ls -1 "$DIAGRAMS_DIR"/*.png 2>/dev/null | wc -l)
echo "✅ 找到 $image_count 张图片"
echo ""

# 列出所有图片
echo "📋 图片列表："
ls -1 "$DIAGRAMS_DIR"/*.png
echo ""

# 询问是否更新
read -p "是否更新网页引用？(y/n): " update_choice

if [ "$update_choice" = "y" ] || [ "$update_choice" = "Y" ]; then
    echo "✅ 准备更新网页..."
    echo "注意：需要手动更新HTML中的图片路径"
    echo ""
    echo "示例："
    echo "  <div class=\"diagram-placeholder\">"
    echo "    <img src=\"../images/diagrams/hh-hl-basic.png\" alt=\"HH+HL结构\">"
    echo "  </div>"
else
    echo "已取消"
fi
