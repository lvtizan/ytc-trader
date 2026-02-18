#!/bin/bash

# 批量修改策略页面为暗黑主题

cd /Users/yiming/Downloads/YTC系列书籍/ytc-trader/learn

# 需要修改的文件列表
files=(
    "pb-simple-pullback.html"
    "pb-deep-pullback.html"
    "pb-strategy.html"
    "cpb-abc.html"
    "cpb-abcde.html"
    "cpb-strategy.html"
    "sts-box-breakout.html"
    "sts-all-time-high.html"
    "sts-strategy.html"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "正在处理: $file"

        # 备份原文件
        cp "$file" "${file}.bak"

        # 使用sed替换样式
        sed -i '' '
            # 替换白色背景为暗色
            s/background: white;/background: rgba(30, 41, 59, 0.8);/g
            s/background: #f8f9fa;/background: rgba(51, 65, 85, 0.6);/g
            s/background: #fafafa;/background: rgba(30, 41, 59, 0.5);/g
            s/background: #fff9e6;/background: rgba(234, 179, 8, 0.15);/g
            s/background: #e8f5e9;/background: rgba(34, 197, 94, 0.15);/g
            s/background: #e3f2fd;/background: rgba(59, 130, 246, 0.15);/g
            s/background: #f3e5f5;/background: rgba(168, 85, 247, 0.15);/g
            s/background: #ffebee;/background: rgba(239, 68, 68, 0.15);/g
            s/background: #fff3e0;/background: rgba(249, 115, 22, 0.15);/g

            # 替换文字颜色
            s/color: #2c3e50;/color: #e2e8f0;/g
            s/color: #555;/color: #cbd5e1;/g
            s/color: #333;/color: #e2e8f0;/g

            # 替换边框颜色
            s/border: 2px solid #e0e0e0;/border: 1px solid rgba(148, 163, 184, 0.2);/g

            # 调整step-card渐变背景
            s/background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);/background: linear-gradient(135deg, rgba(51, 65, 85, 0.8) 0%, rgba(71, 85, 105, 0.8) 100%);/g
            s/background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);/background: linear-gradient(135deg, rgba(34, 211, 238, 0.2) 0%, rgba(251, 146, 60, 0.2) 100%);/g
            s/background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);/background: linear-gradient(135deg, rgba(251, 146, 60, 0.2) 0%, rgba(249, 115, 22, 0.2) 100%);/g
            s/background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%);/background: linear-gradient(135deg, rgba(192, 132, 252, 0.2) 0%, rgba(254, 249, 195, 0.2) 100%);/g

            # 调整SVG背景色
            /<rect.*fill="#fafafa"/s/fill="#fafafa"/fill="rgba(30, 41, 59, 0.3)"/g
            /<rect.*fill="white"/s/fill="white"/fill="rgba(30, 41, 59, 0.8)"/g
        ' "$file"

        echo "✓ 完成: $file"
    else
        echo "✗ 文件不存在: $file"
    fi
done

echo ""
echo "所有文件处理完成!"
