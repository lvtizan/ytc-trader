# Skill: 创建标准化的二级页面

## 描述
创建符合YTC Trader设计规范的新学习页面，确保样式和结构统一。

## 使用场景
- 需要创建新的知识点页面
- 需要创建新的策略页面
- 需要创建新的工具页面

## 模板结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[页面标题] - YTC Trader</title>
    <link rel="stylesheet" href="../css/modern-premium.css">
    <style>
        body {
            background: linear-gradient(to bottom, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%);
            min-height: 100vh;
        }
        .hero-section {
            text-align: center;
            padding: 60px 20px;
            background: radial-gradient(ellipse at top, rgba(99, 102, 241, 0.15) 0%, transparent 50%);
        }
        .hero-badge {
            display: inline-block;
            padding: 8px 16px;
            background: rgba(99, 102, 241, 0.2);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 20px;
            color: #a5b4fc;
            font-size: 0.875rem;
            margin-bottom: 24px;
        }
        .hero-title {
            font-size: 3rem;
            font-weight: 800;
            background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 16px;
        }
        .hero-subtitle {
            color: var(--text-secondary);
            font-size: 1.25rem;
            max-width: 700px;
            margin: 0 auto;
        }
        .content-section {
            max-width: 900px;
            margin: 0 auto;
            padding: 40px 20px;
        }
        .card {
            background: rgba(30, 41, 59, 0.5);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 16px;
            padding: 32px;
            margin-bottom: 24px;
            position: relative;
            overflow: hidden;
        }
        .card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #6366f1 0%, #06b6d4 100%);
        }
        .card-header {
            display: flex;
            align-items: center;
            gap: 16px;
            margin-bottom: 20px;
        }
        .card-icon {
            font-size: 2.5rem;
        }
        .card-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--text-primary);
        }
        .card-content {
            color: var(--text-secondary);
            line-height: 1.8;
        }
        .back-link {
            display: inline-block;
            margin: 20px;
            padding: 12px 24px;
            background: rgba(99, 102, 241, 0.2);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 12px;
            color: #a5b4fc;
            text-decoration: none;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <a href="../[返回页面].html" class="back-link">← 返回</a>

    <div class="hero-section">
        <span class="hero-badge">[阶段/模块信息]</span>
        <h1 class="hero-title">[页面标题]</h1>
        <p class="hero-subtitle">[页面描述]</p>
    </div>

    <div class="content-section">
        <div class="card">
            <div class="card-header">
                <div class="card-icon">[emoji图标]</div>
                <h2 class="card-title">[章节标题]</h2>
            </div>
            <div class="card-content">
                [内容]
            </div>
        </div>
    </div>
</body>
</html>
```

## 关键设计原则

### 1. 背景样式
```css
background: linear-gradient(to bottom, #0a0a0f 0%, #0f172a 50%, #0a0a0f 100%);
```
❌ 不要使用纯白色背景
❌ 不要使用浅色背景

### 2. 卡片样式
```css
background: rgba(30, 41, 59, 0.5);
backdrop-filter: blur(10px);
border: 1px solid rgba(99, 102, 241, 0.2);
```
使用半透明背景 + 玻璃拟态效果

### 3. 标题渐变
```css
background: linear-gradient(135deg, #6366f1 0%, #06b6d4 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

### 4. 高对比度
- 主要文字：var(--text-primary) 白色系
- 次要文字：var(--text-secondary) 浅灰色
- 强调色：#a5b4fc 紫色系

## 文件命名规范

### learn/ 目录
- 知识点页面：使用描述性英文名称
- 示例：`trend-identification.html`
- 示例：`callback-types.html`

### tools/ 目录
- 工具页面：使用功能性英文名称
- 示例：`checklist.html`
- 示例：`position-calculator.html`

## 创建后必做

创建新页面后，必须：
1. ✅ 在父级页面添加链接
2. ✅ 运行链接检查脚本
3. ✅ 确保断链为0
4. ✅ 验证设计一致性

## 常用Emoji图标

交易相关：
- 📊 图表/分析
- 🎯 目标/策略
- 💰 资金/仓位
- 🛡️ 风险/保护
- 📈 趋势/上涨
- 📉 下跌/回调
- ⚠️ 警告/注意
- ✅ 正确/通过
- ❌ 错误/失败
- 💡 提示/建议
- 🔍 搜索/查找
- 📏 测量/工具

心理相关：
- 🧠 大脑/思维
- 😨 恐惧/贪婪
- 💪 纪律/坚持
- 🔄 复盘/改进
