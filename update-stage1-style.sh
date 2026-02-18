# 更新阶段一页面样式的脚本

echo "开始更新阶段一的三级页面样式..."

# 阶段一的三级页面列表
stage1_pages=(
    "hh-hl-structure.html"
    "high-low-identification.html"
    "trendline-drawing.html"
    "callback-types.html"
    "callback-area-identification.html"
    "callback-depth-measurement.html"
    "trend-identification.html"
    "timeframe-selection.html"
    "stock-selection-criteria.html"
    "screening-conditions.html"
)

for page in "${stage1_pages[@]}"; do
    if [ -f "learn/$page" ]; then
        echo "处理: $page"

        # 检查是否已有tech-glow
        if ! grep -q "tech-glow" "learn/$page"; then
            # 在<body>后添加光晕层
            sed -i.bak 's|<body>|<body>\n        <!-- 科技光晕背景层 -->\n        <div class="tech-glow"></div>\n|' "learn/$page"
            echo "  ✅ 已添加光晕层"
        else
            echo "  ⏭️  已有光晕层"
        fi

        # 替换背景样式（如果有var(--bg-deep)）
        if grep -q "var(--bg-deep)" "learn/$page"; then
            sed -i.bak 's|background: var(--bg-deep);|background: linear-gradient(to bottom, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%);|g' "learn/$page"
            echo "  ✅ 已更新背景样式"
        fi
    fi
done

echo ""
echo "阶段一页面样式更新完成！"
