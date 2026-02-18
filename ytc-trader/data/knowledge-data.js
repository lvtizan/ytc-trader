// YTC知识点数据 - 用于动态生成页面

const knowledgePoints = [
    // ========== 阶段一：市场分析与趋势识别 ==========
    {
        id: 1,
        stage: 1,
        category: "1.1 上升趋势的完整结构",
        title: "HH+HL结构：上升趋势的核心定义",
        subtitle: "掌握上升趋势的识别方法，建立市场结构分析基础",
        file: "hh-hl-structure",
        pdf: { chapter: "第3章 - 市场结构", pages: "p.45-60" },
        objectives: [
            "理解摆动高点和摆动低点的定义",
            "掌握HH（更高的高点）的识别方法",
            "掌握HL（更高的低点）的识别方法",
            "能够独立识别上升趋势的完整结构",
            "完成至少5个股票的HH+HL结构标记练习"
        ],
        status: "completed"
    },
    {
        id: 2,
        stage: 1,
        category: "1.1 上升趋势的完整结构",
        title: "上升趋势识别",
        subtitle: "在实际图表中准确识别上升趋势",
        file: "trend-identification",
        pdf: { chapter: "第3章 - 趋势识别", pages: "" },
        objectives: [
            "掌握上升趋势的确认标准",
            "学习识别趋势的强弱",
            "理解趋势的生命周期",
            "能在不同时间周期上识别趋势",
            "完成10个股票的趋势识别练习"
        ],
        status: "pending"
    },
    {
        id: 3,
        stage: 1,
        category: "1.1 上升趋势的完整结构",
        title: "多时间周期分析",
        subtitle: "通过多时间周期分析提升趋势判断准确性",
        file: "mtf-analysis",
        pdf: { chapter: "第4章 - 多时间周期分析", pages: "" },
        objectives: [
            "理解主要结构（周线）的作用",
            "理解中级结构（日线）的作用",
            "理解小型结构（4H）的作用",
            "掌握"周线看趋势，日线找位置，4H定入场"的原则",
            "完成多时间周期分析练习"
        ],
        status: "pending"
    },
    {
        id: 4,
        stage: 1,
        category: "1.2 回调的分类与识别",
        title: "回调的类型",
        subtitle: "识别浅回调、中等回调、深度回调",
        file: "callback-types",
        pdf: { chapter: "第5章 - 回调分析", pages: "" },
        objectives: [
            "理解回调的定义和作用",
            "掌握浅回调（<33%）的特征",
            "掌握中等回调（33-50%）的特征",
            "掌握深度回调（50-66%）的特征",
            "能在实际图表中识别回调类型"
        ],
        status: "pending"
    },
    {
        id: 5,
        stage: 1,
        category: "1.2 回调的分类与识别",
        title: "斐波那契回调位",
        subtitle: "利用斐波那契比率找到关键支撑位",
        file: "fibonacci-retracement",
        pdf: { chapter: "第5章 - 斐波那契", pages: "" },
        objectives: [
            "理解斐波那契数列和比率",
            "掌握关键斐波那契比率（38.2%, 50%, 61.8%）",
            "学会在图表上绘制斐波那契回调线",
            "理解斐波那契回调位的交易意义",
            "完成斐波那契分析练习"
        ],
        status: "pending"
    },
    {
        id: 6,
        stage: 1,
        category: "1.2 回调的分类与识别",
        title: "回调时的成交量特征",
        subtitle: "通过成交量判断回调的健康程度",
        file: "volume-in-callback",
        pdf: { chapter: "第6章 - 成交量分析", pages: "" },
        objectives: [
            "理解成交量在趋势中的作用",
            "识别健康回调的成交量特征",
            "识别不健康回调的成交量特征",
            "结合成交量判断入场时机",
            "分析回调时的成交量变化"
        ],
        status: "pending"
    },
    {
        id: 7,
        stage: 1,
        category: "1.3 支撑与阻力",
        title: "结构性支撑阻力",
        subtitle: "识别前期高点和低点形成的支撑阻力位",
        file: "structural-support-resistance",
        pdf: { chapter: "第7章 - 支撑阻力", pages: "" },
        objectives: [
            "理解支撑和阻力的定义",
            "掌握"前期高点转为支撑"的原理",
            "掌握"前期低点转为阻力"的原理",
            "学会在图表上标记关键支撑阻力位",
            "利用支撑阻力位制定交易计划"
        ],
        status: "pending"
    },
    {
        id: 8,
        stage: 1,
        category: "1.3 支撑与阻力",
        title: "动态支撑阻力",
        subtitle: "利用移动平均线作为动态支撑阻力",
        file: "dynamic-support-resistance",
        pdf: { chapter: "第7章 - 移动平均线", pages: "" },
        objectives: [
            "理解移动平均线的原理",
            "掌握20日、50日、200日均线的应用",
            "学会判断价格与均线的关系",
            "利用均线判断趋势强度",
            "结合均线和其他指标分析"
        ],
        status: "pending"
    },
    {
        id: 9,
        stage: 1,
        category: "1.4 选股系统",
        title: "趋势过滤器",
        subtitle: "建立第一道选股防线：趋势过滤",
        file: "trend-filter",
        pdf: { chapter: "第8章 - 市场环境分析", pages: "" },
        objectives: [
            "理解趋势过滤的重要性",
            "掌握周线趋势判断方法",
            "掌握日线趋势判断方法",
            "学会判断价格与均线的关系",
            "建立个人趋势过滤器清单"
        ],
        status: "pending"
    },
    {
        id: 10,
        stage: 1,
        category: "1.4 选股系统",
        title: "选股5步流程",
        subtitle: "系统化的选股方法，确保找到高概率机会",
        file: "stock-screening-process",
        pdf: { chapter: "第9章 - 交易准备", pages: "" },
        objectives: [
            "掌握选股的5个步骤",
            "理解每一步的目的和作用",
            "学会执行完整的选股流程",
            "建立个人选股检查清单",
            "每天应用选股流程"
        ],
        status: "pending"
    },

    // ========== 阶段二：三大核心交易策略 ==========
    {
        id: 11,
        stage: 2,
        category: "2.1 PB策略",
        title: "PB策略：回调买入",
        subtitle: "在上升趋势的回调中寻找买入机会",
        file: "pb-strategy",
        pdf: { chapter: "第4章 - 回调交易", pages: "" },
        objectives: [
            "理解PB策略的定义和原理",
            "掌握PB策略的识别要素",
            "学会执行PB策略",
            "完成PB策略模拟交易",
            "建立PB策略交易清单"
        ],
        status: "pending"
    },
    {
        id: 12,
        stage: 2,
        category: "2.1 PB策略",
        title: "PB策略识别",
        subtitle: "识别高概率的PB入场机会",
        file: "pb-identification",
        pdf: { chapter: "第4章 - 入场设置", pages: "" },
        objectives: [
            "掌握PB策略的5个识别要素",
            "学会判断入场时机",
            "理解不同市场的PB策略应用",
            "完成PB策略识别练习",
            "建立PB策略识别清单"
        ],
        status: "pending"
    },
    {
        id: 13,
        stage: 2,
        category: "2.1 PB策略",
        title: "PB策略执行",
        subtitle: "从识别到执行的完整流程",
        file: "pb-execution",
        pdf: { chapter: "第4章 - 执行", pages: "" },
        objectives: [
            "掌握PB策略的6个执行步骤",
            "学会制定交易计划",
            "掌握止损设置方法",
            "掌握目标设置方法",
            "完成PB策略实战"
        ],
        status: "pending"
    },
    {
        id: 14,
        stage: 2,
        category: "2.2 CPB策略",
        title: "复杂回调特征",
        subtitle: "识别并应对复杂回调形态",
        file: "complex-callback",
        pdf: { chapter: "第5章 - 复杂回调", pages: "" },
        objectives: [
            "理解复杂回调的定义",
            "掌握复杂回调的特征",
            "学会识别复杂回调",
            "理解复杂回调的入场时机",
            "完成复杂回调分析练习"
        ],
        status: "pending"
    },
    {
        id: 15,
        stage: 2,
        category: "2.2 CPB策略",
        title: "CPB vs PB",
        subtitle: "对比两种策略，选择合适时机使用",
        file: "cpb-vs-pb",
        pdf: { chapter: "第5章 - 策略对比", pages: "" },
        objectives: [
            "理解CPB和PB的区别",
            "掌握CPB和PB的适用场景",
            "学会根据市场情况选择策略",
            "完成CPB和PB对比分析",
            "建立策略选择决策树"
        ],
        status: "pending"
    },
    {
        id: 16,
        stage: 2,
        category: "2.3 STS策略",
        title: "结构突破交易",
        subtitle: "在横盘整理后的突破中寻找机会",
        file: "sts-strategy",
        pdf: { chapter: "第6章 - 结构性交易", pages: "" },
        objectives: [
            "理解STS策略的定义",
            "掌握横盘整理的识别",
            "学会判断突破的有效性",
            "理解STS策略的风险",
            "完成STS策略分析练习"
        ],
        status: "pending"
    },
    {
        id: 17,
        stage: 2,
        category: "2.3 STS策略",
        title: "STS入场时机",
        subtitle: "激进vs保守的两种入场方式",
        file: "sts-entry",
        pdf: { chapter: "第6章 - 入场", pages: "" },
        objectives: [
            "掌握突破确认入场法",
            "掌握回踩确认入场法",
            "理解两种入场方式的优缺点",
            "学会根据个人风格选择",
            "完成STS策略实战"
        ],
        status: "pending"
    },

    // ========== 阶段三：风险管理流程 ==========
    {
        id: 18,
        stage: 3,
        category: "3.1 仓位管理",
        title: "2%规则",
        subtitle: "单笔交易风险控制的核心原则",
        file: "two-percent-rule",
        pdf: { chapter: "第3章 - 资金管理", pages: "" },
        objectives: [
            "理解2%规则的重要性",
            "掌握仓位规模计算公式",
            "学会根据止损距离调整仓位",
            "理解2%规则对长期交易的意义",
            "建立个人仓位管理规则"
        ],
        status: "pending"
    },
    {
        id: 19,
        stage: 3,
        category: "3.1 仓位管理",
        title: "凯利公式",
        subtitle: "科学计算最优仓位规模",
        file: "kelly-formula",
        pdf: { chapter: "第3章 - 仓位规模", pages: "" },
        objectives: [
            "理解凯利公式的原理",
            "掌握凯利公式的计算方法",
            "理解凯利公式的应用限制",
            "学会调整凯利公式参数",
            "计算个人最优仓位"
        ],
        status: "pending"
    },
    {
        id: 20,
        stage: 3,
        category: "3.2 止损策略",
        title: "结构性止损",
        subtitle: "基于市场结构设置止损",
        file: "structural-stop",
        pdf: { chapter: "第4章 - 止损设置", pages: "" },
        objectives: [
            "理解结构性止损的原理",
            "掌握支撑位下方止损设置",
            "掌握前期低点下方止损设置",
            "掌握趋势线下方止损设置",
            "建立个人止损规则"
        ],
        status: "pending"
    },
    {
        id: 21,
        stage: 3,
        category: "3.2 止损策略",
        title: "波动率止损",
        subtitle: "利用ATR设置动态止损",
        file: "volatility-stop",
        pdf: { chapter: "第4章 - ATR止损", pages: "" },
        objectives: [
            "理解ATR指标的定义",
            "掌握ATR止损的计算方法",
            "学会根据市场波动调整止损",
            "理解ATR止损的优缺点",
            "完成ATR止损设置练习"
        ],
        status: "pending"
    },
    {
        id: 22,
        stage: 3,
        category: "3.2 止损策略",
        title: "时间止损",
        subtitle: "用时间控制风险",
        file: "time-stop",
        pdf: { chapter: "第4章 - 时间管理", pages: "" },
        objectives: [
            "理解时间止损的原理",
            "掌握时间止损的设置规则",
            "学会判断趋势是否减弱",
            "理解时间在交易中的作用",
            "建立个人时间止损规则"
        ],
        status: "pending"
    },
    {
        id: 23,
        stage: 3,
        category: "3.3 盈亏比管理",
        title: "盈亏比计算",
        subtitle: "计算和管理交易的风险回报比",
        file: "reward-risk-ratio",
        pdf: { chapter: "第5章 - 盈亏比", pages: "" },
        objectives: [
            "理解盈亏比的公式",
            "掌握盈亏比的计算方法",
            "理解盈亏比vs胜率的关系",
            "学会设置目标位",
            "建立个人盈亏比规则"
        ],
        status: "pending"
    },
    {
        id: 24,
        stage: 3,
        category: "3.3 盈亏比管理",
        title: "分批止盈",
        subtitle: "通过分批止盈优化利润",
        file: "partial-exit",
        pdf: { chapter: "第5章 - 出场策略", pages: "" },
        objectives: [
            "理解分批止盈的优势",
            "掌握50%-30%-20%分配方案",
            "学会设置不同的目标位",
            "理解分批止盈对心理的影响",
            "建立个人分批止盈规则"
        ],
        status: "pending"
    },
    {
        id: 25,
        stage: 3,
        category: "3.3 盈亏比管理",
        title: "追踪止损",
        subtitle: "保护已实现的利润",
        file: "trailing-stop",
        pdf: { chapter: "第5章 - 追踪止损", pages: "" },
        objectives: [
            "理解追踪止损的原理",
            "掌握追踪止损的启动时机",
            "学会调整追踪止损位置",
            "理解追踪止损的优缺点",
            "建立个人追踪止损规则"
        ],
        status: "pending"
    },
    {
        id: 26,
        stage: 3,
        category: "3.4 组合管理",
        title: "相关性管理",
        subtitle: "避免过度集中风险",
        file: "correlation-management",
        pdf: { chapter: "第6章 - 投资组合", pages: "" },
        objectives: [
            "理解相关性的概念",
            "掌握相关性判断方法",
            "学会分散投资组合",
            "理解最大持仓数量限制",
            "建立个人组合管理规则"
        ],
        status: "pending"
    },
    {
        id: 27,
        stage: 3,
        category: "3.4 组合管理",
        title: "回撤控制",
        subtitle: "控制最大回撤保护资金",
        file: "drawdown-control",
        pdf: { chapter: "第6章 - 风险控制", pages: "" },
        objectives: [
            "理解回撤的定义",
            "掌握单笔、日、月回撤限制",
            "学会计算回撤百分比",
            "理解回撤对交易的影响",
            "建立个人回撤控制规则"
        ],
        status: "pending"
    },

    // ========== 阶段四：交易心理与持续改进 ==========
    {
        id: 28,
        stage: 4,
        category: "4.1 交易心理的敌人",
        title: "过度交易",
        subtitle: "识别并克服频繁交易的冲动",
        file: "overtrading",
        pdf: { chapter: "第2章 - 心理陷阱", pages: "" },
        objectives: [
            "理解过度交易的表现",
            "识别过度交易的原因",
            "掌握设置交易次数上限",
            "学会执行交易计划",
            "建立个人交易频率规则"
        ],
        status: "pending"
    },
    {
        id: 29,
        stage: 4,
        category: "4.1 交易心理的敌人",
        title: "持有亏损单",
        subtitle: "克服持有亏损单的心理",
        file: "holding-losers",
        pdf: { chapter: "第2章 - 损失厌恶", pages: "" },
        objectives: [
            "理解损失厌恶的心理机制",
            "识别持有亏损单的原因",
            "掌握止损执行技巧",
            "学会接受小亏损",
            "建立个人止损纪律"
        ],
        status: "pending"
    },
    {
        id: 30,
        stage: 4,
        category: "4.1 交易心理的敌人",
        title: "过早止盈",
        subtitle: "克服过早止盈的恐惧",
        file: "early-exit",
        pdf: { chapter: "第3章 - 利润回吐恐惧", pages: "" },
        objectives: [
            "理解利润回吐恐惧",
            "识别过早止盈的原因",
            "掌握分批止盈策略",
            "学会让利润奔跑",
            "建立个人出场规则"
        ],
        status: "pending"
    },
    {
        id: 31,
        stage: 4,
        category: "4.1 交易心理的敌人",
        title: "复仇交易",
        subtitle: "避免亏损后的报复性交易",
        file: "revenge-trading",
        pdf: { chapter: "第4章 - 情绪化交易", pages: "" },
        objectives: [
            "理解复仇交易的表现",
            "识别复仇交易的触发点",
            "掌握连续亏损后的应对",
            "学会暂停交易恢复心态",
            "建立个人情绪管理规则"
        ],
        status: "pending"
    },
    {
        id: 32,
        stage: 4,
        category: "4.1 交易心理的敌人",
        title: "FOMO（错失恐惧）",
        subtitle: "克服害怕错失机会的心理",
        file: "fomo",
        pdf: { chapter: "第5章 - 错失恐惧", pages: "" },
        objectives: [
            "理解FOMO的心理机制",
            "识别FOMO的触发点",
            "学会坚持自己的系统",
            "理解等待的价值",
            "建立个人交易纪律"
        ],
        status: "pending"
    },
    {
        id: 33,
        stage: 4,
        category: "4.2 情绪管理",
        title: "压力识别",
        subtitle: "识别交易压力的生理信号",
        file: "stress-recognition",
        pdf: { chapter: "附著五 - 第1章", pages: "" },
        objectives: [
            "识别压力的生理信号",
            "识别压力的心理信号",
            "理解压力对交易的影响",
            "学会自我监控",
            "建立个人压力识别清单"
        ],
        status: "pending"
    },
    {
        id: 34,
        stage: 4,
        category: "4.2 情绪管理",
        title: "压力应对4步骤",
        subtitle: "系统化的压力应对方法",
        file: "stress-management",
        pdf: { chapter: "附著五 - 第2章", pages: "" },
        objectives: [
            "掌握压力应对4步骤",
            "学会识别情绪信号",
            "掌握暂停交易的时机",
            "学会分析原因并做决定",
            "建立个人应对流程"
        ],
        status: "pending"
    },
    {
        id: 35,
        stage: 4,
        category: "4.2 情绪管理",
        title: "正念练习",
        subtitle: "通过正念提升交易表现",
        file: "mindfulness",
        pdf: { chapter: "附著五 - 第3章", pages: "" },
        objectives: [
            "理解正念的定义",
            "掌握深呼吸练习",
            "掌握冥想练习",
            "学会专注当下",
            "建立个人正念练习习惯"
        ],
        status: "pending"
    },
    {
        id: 36,
        stage: 4,
        category: "4.3 交易纪律",
        title: "执行检查清单",
        subtitle: "入场前的5个问题",
        file: "execution-checklist",
        pdf: { chapter: "卷五 - 第4章", pages: "" },
        objectives: [
            "掌握入场前5问",
            "理解每个问题的重要性",
            "学会执行检查清单",
            "坚持按检查清单交易",
            "建立个人检查清单"
        ],
        status: "pending"
    },
    {
        id: 37,
        stage: 4,
        category: "4.3 交易纪律",
        title: "纪律评分系统",
        subtitle: "量化并提升交易纪律",
        file: "discipline-scoring",
        pdf: { chapter: "卷五 - 第5章", pages: "" },
        objectives: [
            "理解纪律评分的重要性",
            "掌握评分维度",
            "学会计算纪律分数",
            "理解评分与交易表现的关系",
            "建立个人评分系统"
        ],
        status: "pending"
    },
    {
        id: 38,
        stage: 4,
        category: "4.4 复盘机制",
        title: "每日复盘",
        subtitle: "每日交易总结和改进",
        file: "daily-review",
        pdf: { chapter: "卷五 - 第6章", pages: "" },
        objectives: [
            "掌握每日复盘要素",
            "学会记录今日交易",
            "学会分析最好和最差交易",
            "学会记录情绪状态",
            "建立个人每日复盘模板"
        ],
        status: "pending"
    },
    {
        id: 39,
        stage: 4,
        category: "4.4 复盘机制",
        title: "每周复盘",
        subtitle: "每周绩效评估和改进",
        file: "weekly-review",
        pdf: { chapter: "卷五 - 第7章", pages: "" },
        objectives: [
            "掌握每周复盘要素",
            "学会统计交易数据",
            "学会分析策略表现",
            "学会制定下周计划",
            "建立个人每周复盘模板"
        ],
        status: "pending"
    },
    {
        id: 40,
        stage: 4,
        category: "4.4 复盘机制",
        title: "每月复盘",
        subtitle: "每月深度总结和系统优化",
        file: "monthly-review",
        pdf: { chapter: "卷五 - 第8章", pages: "" },
        objectives: [
            "掌握每月复盘要素",
            "学会评估系统表现",
            "学会优化交易系统",
            "学会设定下月目标",
            "建立个人每月复盘模板"
        ],
        status: "pending"
    },
    {
        id: 41,
        stage: 4,
        category: "4.4 复盘机制",
        title: "PDCA改进循环",
        subtitle: "持续改进交易系统",
        file: "pdca-cycle",
        pdf: { chapter: "卷五 - 第9章", pages: "" },
        objectives: [
            "理解PDCA循环的原理",
            "掌握Plan（计划）阶段",
            "掌握Do（执行）阶段",
            "掌握Check（检查）阶段",
            "掌握Act（改进）阶段"
        ],
        status: "pending"
    },
    {
        id: 42,
        stage: 4,
        category: "补充：出场策略",
        title: "主动出场",
        subtitle: "在达到目标位时主动出场",
        file: "active-exit",
        pdf: { chapter: "09 进阶篇 附著三", pages: "" },
        objectives: [
            "理解主动出场的定义",
            "掌握出场信号识别",
            "学会设置出场位",
            "理解出场时机的选择",
            "建立个人出场规则"
        ],
        status: "pending"
    },
    {
        id: 43,
        stage: 4,
        category: "补充：常见问题",
        title: "常见问题解答",
        subtitle: "YTC交易中的常见问题",
        file: "common-qa",
        pdf: { chapter: "12/13 进阶篇 YTC常见问题", pages: "" },
        objectives: [
            "理解常见交易问题",
            "掌握提高胜率的方法",
            "掌握优化盈亏比的方法",
            "掌握控制情绪的方法",
            "建立完整交易系统"
        ],
        status: "pending"
    }
];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = knowledgePoints;
}
