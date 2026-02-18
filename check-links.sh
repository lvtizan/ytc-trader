#!/bin/bash

# YTC Trader 链接完整性检查脚本
# 用于验证所有HTML文件中的链接是否有效

echo "========================================="
echo "YTC Trader 链接完整性检查"
echo "========================================="
echo ""

BASE_DIR="/Users/yiming/Downloads/YTC系列书籍/ytc-trader"
cd "$BASE_DIR" || exit 1

# 创建临时报告文件
REPORT_FILE="$BASE_DIR/link-check-report.txt"
echo "链接检查报告 - $(date)" > "$REPORT_FILE"
echo "=========================================" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# 统计变量
TOTAL_LINKS=0
BROKEN_LINKS=0
VALID_LINKS=0
IGNORED_LINKS=0

# 需要检查的HTML文件
HTML_FILES=(
    "index-new.html"
    "stage1-new.html"
    "stage2-new.html"
    "stage3-new.html"
    "stage4-new.html"
)

echo "开始检查所有HTML文件中的链接..."
echo "" >> "$REPORT_FILE"

for file in "${HTML_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ 文件不存在: $file" | tee -a "$REPORT_FILE"
        continue
    fi

    echo "📄 检查文件: $file" | tee -a "$REPORT_FILE"
    echo "" >> "$REPORT_FILE"

    # 提取所有href链接
    links=$(grep -o 'href="[^"]*"' "$file" | sed 's/href="//;s/"$//' | grep -v '^#' | grep -v '^http')

    while IFS= read -r link; do
        if [ -z "$link" ]; then
            continue
        fi

        TOTAL_LINKS=$((TOTAL_LINKS + 1))

        # 跳过锚点和外部链接
        if [[ $link == ^#* ]] || [[ $link == http* ]] || [[ $link == mailto* ]]; then
            IGNORED_LINKS=$((IGNORED_LINKS + 1))
            continue
        fi

        # 检查链接目标是否存在
        if [ -f "$link" ]; then
            echo "  ✅ $link" >> "$REPORT_FILE"
            VALID_LINKS=$((VALID_LINKS + 1))
        else
            echo "  ❌ 断链: $link" | tee -a "$REPORT_FILE"
            BROKEN_LINKS=$((BROKEN_LINKS + 1))
        fi
    done <<< "$links"

    echo "" >> "$REPORT_FILE"
done

# 生成总结报告
echo "" | tee -a "$REPORT_FILE"
echo "=========================================" | tee -a "$REPORT_FILE"
echo "检查总结" | tee -a "$REPORT_FILE"
echo "=========================================" | tee -a "$REPORT_FILE"
echo "总链接数: $TOTAL_LINKS" | tee -a "$REPORT_FILE"
echo "有效链接: $VALID_LINKS" | tee -a "$REPORT_FILE"
echo "断链数量: $BROKEN_LINKS" | tee -a "$REPORT_FILE"
echo "忽略链接: $IGNORED_LINKS" | tee -a "$REPORT_FILE"
echo "" | tee -a "$REPORT_FILE"

if [ $BROKEN_LINKS -eq 0 ]; then
    echo "✅ 所有链接检查通过！" | tee -a "$REPORT_FILE"
    exit 0
else
    echo "❌ 发现 $BROKEN_LINKS 个断链，需要修复！" | tee -a "$REPORT_FILE"
    exit 1
fi
