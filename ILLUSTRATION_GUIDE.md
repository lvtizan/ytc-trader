# 图例实现指南

## 📋 方法一：从YTC PDF提取图表

### 工具准备
我需要使用工具从PDF提取图片。由于PDF文件存在，我可以：

1. **读取PDF文件内容**（如果有PDF读取工具）
2. **创建图例占位符**，标注需要从哪本书提取
3. **创建提取清单**供你手动添加

### 知识点与PDF对应关系

| 知识点 | 对应PDF文件 | 需要的图表 | 页码参考 |
|--------|------------|----------|---------|
| HH+HL结构 | 02 进阶篇 YTC卷二：市场和市场分析.pdf | 上升趋势结构图、高低点标注 | 第2-3章 |
| 高点低点识别 | 02 进阶篇 YTC卷二：市场和市场分析.pdf | 高点低点示意图 | 第2章 |
| 趋势线绘制 | 02 进阶篇 YTC卷二：市场和市场分析.pdf | 趋势线绘制示例 | 第3章 |
| 回调类型 | 03 进阶篇 YTC卷三：交易策略.pdf | PB/CPB示意图 | 第5-6章 |
| 回调区域 | 03 进阶篇 YTC卷三：交易策略.pdf | 回调区域图 | 第6章 |
| 回调深度 | 03 进阶篇 YTC卷三：交易策略.pdf | 斐波那契回测 | 第6章 |
| 多周期分析 | 02 进阶篇 YTC卷二：市场和市场分析.pdf | 多周期对比图 | 第4章 |

---

## 🌐 方法二：网络搜索案例图表

### 搜索关键词清单

我已经为每个知识点准备了搜索关键词：

#### 1. HH+HL结构
```
关键词：
- "higher high higher low structure chart"
- "uptrend HH HL forex example"
- "swing high swing low trading"
- "bullish trend structure higher highs"
```

#### 2. 回调类型
```
关键词：
- "pullback vs complex pullback chart"
- "shallow vs deep pullback trading"
- "trading pullback types examples"
- "PB CPB pattern chart"
```

#### 3. 斐波那契回测
```
关键词：
- "Fibonacci retracement levels chart"
- "38.2 50 61.8 Fibonacci example"
- "Fibonacci pullback trading"
- "golden ratio trading chart"
```

#### 4. 多周期分析
```
关键词：
- "multiple timeframe analysis chart"
- "MTFA trading example daily weekly"
- "timeframe alignment forex"
- "higher timeframe analysis chart"
```

---

## 🎯 实现方案

### 方案A：创建图例占位系统（推荐）

我创建一个图例框架，包含：

1. **占位符图片**（灰色背景+文字说明）
2. **图片来源标注**（"来自YTC卷二第X章"或"搜索：关键词"）
3. **图片说明文字**
4. **添加按钮**（供你后续添加真实图片）

### 方案B：使用在线图表API

可以集成：
- TradingView图表嵌入
- 公开的图表图片URL
- 教学网站图表链接

### 方案C：创建ASCII示意图

使用文字和符号创建简单图表：
```
上升趋势示例：
     /\
    /  \
   /    \
  /      \
 /        \
```

---

## 🚀 我的建议实施步骤

### 第一步：创建图例框架（现在做）
1. ✅ 创建 illustration.css 样式文件
2. ✅ 创建 images/ 目录结构
3. ⏳ 为每个知识点页面添加图例区块
4. ⏳ 添加占位符和说明

### 第二步：标注来源（现在做）
1. ⏳ 标注每个图表需要的PDF位置
2. ⏳ 提供搜索关键词
3. ⏳ 创建提取清单

### 第三步：你手动添加（后续）
1. 从PDF截图保存到 images/diagrams/
2. 从网络下载案例到 images/examples/
3. 更新HTML中的图片路径

---

## 📊 具体实施

让我现在为第一个知识点（HH+HL结构）创建完整的图例框架，然后你可以：
1. 查看图例需求
2. 从PDF截图或从网上下载
3. 替换占位符为真实图片

准备开始吗？
