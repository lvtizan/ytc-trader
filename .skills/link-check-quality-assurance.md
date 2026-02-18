# Skill: 完整链接检查与验证

## 描述
在每次修改YTC Trader项目后，自动执行完整的链接完整性检查和验证流程，确保所有页面和链接都正常工作。

## 使用场景
- 创建新页面后
- 修改链接后
- 交付项目前
- 任何可能影响链接的操作后

## 执行步骤

### 1. 运行链接检查脚本
```bash
cd /Users/yiming/Downloads/YTC系列书籍/ytc-trader
bash check-links-v2.sh
```

### 2. 分析结果
- 如果显示"✅ 所有链接检查通过！" → 转步骤4
- 如果显示断链 → 记录所有断链，转步骤3

### 3. 修复断链
对于每个断链：
- 确定目标文件是否存在
- 如果不存在，创建文件或修正链接路径
- 常见问题：
  - 缺少 `learn/` 前缀
  - 缺少 `tools/` 前缀
  - 文件名拼写错误

### 4. 验证页面列表
确认以下所有文件存在：

**主要页面（5个）：**
- index-new.html
- stage1-new.html
- stage2-new.html
- stage3-new.html
- stage4-new.html

**learn/ 目录（20个）：**
- hh-hl-structure.html
- high-low-identification.html
- trendline-drawing.html
- callback-types.html
- callback-area-identification.html
- callback-depth-measurement.html
- trend-identification.html
- timeframe-selection.html
- stock-selection-criteria.html
- screening-conditions.html
- pb-strategy.html
- cpb-strategy.html
- sts-strategy.html
- position-sizing.html
- stop-loss-techniques.html
- risk-reward-ratio.html
- portfolio-risk-management.html
- psychology-enemies.html
- trading-discipline.html
- emotion-management.html
- review-mechanism.html

**tools/ 目录（7个）：**
- checklist.html
- stock-selection-criteria.html
- trading-plan-template.html
- position-calculator.html
- daily-review.html
- weekly-review.html
- risk-management.html

### 5. 设计一致性检查
确认所有页面：
- 使用深色主题
- 无白色背景块
- 对比度适合阅读
- 玻璃拟态效果一致

### 6. 生成报告
创建或更新测试报告，记录：
- 测试日期
- 测试结果
- 发现的问题
- 修复的措施

## 成功标准
✅ 链接检查：断链数量 = 0
✅ 所有文件存在
✅ 设计统一

## 注意事项
- 每次修改后必须执行此检查
- 不要假设链接正确，必须验证
- 发现问题立即修复，不推迟
