# 🚀 PDF图片提取 - 详细操作指南

## 📖 方法一：使用macOS预览应用（推荐，5分钟）

### 步骤详解：

**1. 打开PDF（2种方法）**
```
方法A：在Finder中双击PDF文件
方法B：右键 → 打开方式 → 预览
```

**2. 定位到HH+HL章节（2分钟）**
```
滚动条 → 第2章或第3章
大约第23-40页
查找包含以下内容的页面：
- "higher high" 或 "更高高点"
- "higher low" 或 "更高低点"
- HH+HL 图表或示意图
```

**3. 截取图表（3分钟）**
```
快捷键：⌘ + ⇧ + 4 (Command + Shift + 4)
含义：截取整个窗口

技巧：
✅ 先放大PDF到150%-200%
✅ 确保图表完整显示
✅ 一次截取一个完整图表
✅ 桌面会生成"快照"文件
```

**4. 整理文件（3分钟）**
```
生成的文件名类似：快照 1.png
建议重命名为：
- hh-hl-basic.png (基础结构图)
- high-point-mark.png (高点标注)
- low-point-mark.png (低点标注)
- trend-structure.png (完整趋势)

保存到：/Users/yiming/Downloads/YTC系列书籍/ytc-trader/images/diagrams/
```

---

## 🌐 方法二：使用在线工具（2分钟）

### 推荐工具对比：

| 工具 | 速度 | 质量 | 操作难度 | 推荐度 |
|------|------|------|----------|--------|
| iLovePDF | ⚡⚡⚡ | ⭐⭐⭐⭐ | 简单 | ⭐⭐⭐⭐⭐ |
| PDF24 | ⚡⚡⚡ | ⭐⭐⭐⭐⭐ | 简单 | ⭐⭐⭐⭐ |
| SmallPDF | ⚡⚡ | ⭐⭐⭐⭐ | 简单 | ⭐⭐⭐⭐ |
| PDF Candy | ⚡⚡ | ⭐⭐⭐ | 中等 | ⭐⭐⭐ |

### iLovePDF 使用步骤：
```
1. 访问：https://www.ilovepdf.com/extract-pdf-images/
2. 点击 "Select File" 或拖放PDF
3. 等待上传完成（约1分钟）
4. 点击 "Extract Images" 按钮
5. 等待处理（约30秒）
6. 点击 "Download" 下载ZIP文件
7. 解压ZIP得到所有图片
8. 筛选HH+HL相关图片
```

**优点：**
- ✅ 一次性提取所有图片
- ✅ 图片质量最高
- ✅ 自动编号（image_1, image_2...）
- ✅ 无需安装任何软件

---

## 🐍 方法三：Python脚本（需要安装）

### 快速安装：
```bash
# 打开终端
pip3 install PyMuPDF

# 验证安装
python3 -c "import fitz; print('安装成功')"
```

### 运行提取：
```bash
cd /Users/yiming/Downloads/YTC系列书籍/ytc-trader
python3 scripts/extract-pdf-images.py
```

**自动提取：**
- 扫描PDF每一页
- 提取所有嵌入图片
- 保存为page_1_img_1.png格式
- 显示详细进度

---

## 📋 检查清单

### 提取完成后检查：
- [ ] 提取了5-8张HH+HL相关图片
- [ ] 图片清晰可见
- [ ] 文件名有意义（如hh-hl-basic.png）
- [ ] 保存到正确目录（images/diagrams/）
- [ ] 图片格式为PNG或JPG

### 需要的图片清单：
- [ ] hh-hl-basic.png - HH+HL基础结构图
- [ ] high-point-mark.png - 高点标注示例
- [ ] low-point-mark.png - 低点标注示例
- [ ] hh-hl-annotated.png - 标注版本的HH+HL
- [ ] trend-line.png - 趋势线示例
- [ ] real-example.png - 实盘案例

---

## 🎯 推荐流程（总计10分钟）

### 最优方案：在线工具 + 筛选重命名

**时间分配：**
- 选择工具：30秒
- 上传PDF：1分钟
- 提取图片：30秒
- 下载ZIP：30秒
- 筛选图片：2分钟
- 重命名：3分钟
- 移动文件：2分钟

**总计：约10分钟完成**

---

## 💡 关键提示

### 提高效率：
1. **优先提取**：先提取所有图片，再慢慢筛选
2. **批量重命名**：使用Finder的重命名功能（按Return）
3. **预览优化**：在Quick Look中按空格预览所有图片
4. **拖拽移动**：直接拖拽到目标文件夹

### 质量控制：
- ✅ 选择PNG格式输出（质量最佳）
- ✅ 提取时选择最大分辨率
- ✅ 避免压缩或格式转换

---

## 🚀 准备开始了吗？

**选择你的方法：**
- A. 使用macOS预览（手动控制）
- B. 使用在线工具iLovePDF（推荐）
- C. 使用Python脚本（自动化）

**告诉我你的选择，我会根据你的方法调整后续步骤！**
