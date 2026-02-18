// YTC Trader - 主要JavaScript文件

// 学习数据
const learningData = {
    stages: [
        {
            id: 1,
            title: "市场分析与趋势识别",
            weeks: "第1-4周",
            topics: [
                "上升趋势的完整结构（HH+HL）",
                "回调的分类与识别",
                "多时间周期分析",
                "选股系统建立"
            ]
        },
        {
            id: 2,
            title: "三大核心交易策略",
            weeks: "第5-11周",
            topics: [
                "PB策略：回调买入",
                "CPB策略：复杂回调",
                "STS策略：结构性交易",
                "策略组合使用"
            ]
        },
        {
            id: 3,
            title: "风险管理流程",
            weeks: "第12-15周",
            topics: [
                "仓位规模管理",
                "止损设置技巧",
                "盈亏比优化",
                "组合风险管理"
            ]
        },
        {
            id: 4,
            title: "交易心理与持续改进",
            weeks: "第16-19周",
            topics: [
                "交易心理的5大敌人",
                "交易纪律检查清单",
                "情绪管理技巧",
                "复盘机制与改进"
            ]
        },
        {
            id: 5,
            title: "系统整合与验收",
            weeks: "第20周",
            topics: [
                "系统整合",
                "最终验收",
                "实盘准备"
            ]
        }
    ],
    tools: [
        { id: "checklist", title: "选股检查清单", icon: "✅" },
        { id: "trading-plan", title: "交易计划模板", icon: "📝" },
        { id: "daily-review", title: "每日复盘模板", icon: "📊" },
        { id: "weekly-review", title: "每周复盘模板", icon: "📈" },
        { id: "position-calculator", title: "仓位计算器", icon: "💰" },
        { id: "risk-management", title: "风险管理手册", icon: "📋" }
    ]
};

// 学习进度数据
let progressData = {
    completedChapters: [],
    completedWeeks: 0,
    completedTrades: 0,
    lastUpdate: null
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();
    renderTimeline();
    updateProgressDisplay();
    setupSearch();
});

// 加载进度
function loadProgress() {
    const saved = localStorage.getItem('ytc-progress');
    if (saved) {
        progressData = JSON.parse(saved);
    }
}

// 保存进度
function saveProgress() {
    progressData.lastUpdate = new Date().toISOString();
    localStorage.setItem('ytc-progress', JSON.stringify(progressData));
}

// 渲染时间线
function renderTimeline() {
    const container = document.getElementById('timeline-items');
    if (!container) return;

    container.innerHTML = learningData.stages.map(stage => {
        const isCompleted = progressData.completedChapters.includes(stage.id);
        return `
            <div class="timeline-item ${isCompleted ? 'completed' : ''}">
                <input type="checkbox"
                       class="timeline-checkbox"
                       ${isCompleted ? 'checked' : ''}
                       onchange="toggleChapter(${stage.id})">
                <div class="timeline-content">
                    <div class="timeline-title">${stage.title}</div>
                    <div class="timeline-date">${stage.weeks}</div>
                </div>
            </div>
        `;
    }).join('');
}

// 切换章节完成状态
function toggleChapter(stageId) {
    const index = progressData.completedChapters.indexOf(stageId);
    if (index > -1) {
        progressData.completedChapters.splice(index, 1);
    } else {
        progressData.completedChapters.push(stageId);
    }
    saveProgress();
    updateProgressDisplay();
    renderTimeline();
}

// 更新进度显示
function updateProgressDisplay() {
    const totalStages = learningData.stages.length;
    const completed = progressData.completedChapters.length;
    const percentage = Math.round((completed / totalStages) * 100);

    // 更新进度圆环
    const circle = document.querySelector('.progress-circle');
    const percentageText = document.getElementById('overall-progress');
    if (circle && percentageText) {
        circle.style.background = `conic-gradient(var(--success-color) ${percentage}%, var(--border-color) ${percentage}%)`;
        percentageText.textContent = `${percentage}%`;
    }

    // 更新统计
    document.getElementById('completed-chapters').textContent = `${completed}/${totalStages}`;
    document.getElementById('completed-weeks').textContent = `${progressData.completedWeeks}/20`;
    document.getElementById('completed-trades').textContent = `${progressData.completedTrades}/50`;
}

// 更新进度
function updateProgress() {
    const weeks = prompt('请输入已完成的学习周数（0-20）：', progressData.completedWeeks);
    if (weeks !== null) {
        const weekNum = parseInt(weeks);
        if (weekNum >= 0 && weekNum <= 20) {
            progressData.completedWeeks = weekNum;
        }
    }

    const trades = prompt('请输入已完成的模拟交易笔数：', progressData.completedTrades);
    if (trades !== null) {
        const tradeNum = parseInt(trades);
        if (tradeNum >= 0) {
            progressData.completedTrades = tradeNum;
        }
    }

    saveProgress();
    updateProgressDisplay();
    alert('进度已更新！');
}

// 导出进度
function exportProgress() {
    const data = {
        ...progressData,
        exportDate: new Date().toISOString(),
        learningProgress: {
            percentage: Math.round((progressData.completedChapters.length / learningData.stages.length) * 100),
            stages: progressData.completedChapters
        }
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ytc-trader-progress-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// 设置搜索功能
function setupSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// 执行搜索
function performSearch() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const resultsContainer = document.getElementById('search-results');

    if (!query) {
        resultsContainer.innerHTML = '<p class="search-hint">请输入搜索关键词...</p>';
        return;
    }

    const results = [];

    // 搜索阶段内容
    learningData.stages.forEach(stage => {
        stage.topics.forEach(topic => {
            if (topic.toLowerCase().includes(query)) {
                results.push({
                    type: 'stage',
                    stageId: stage.id,
                    title: stage.title,
                    excerpt: topic,
                    link: `stage${stage.id}.html`
                });
            }
        });

        // 搜索阶段标题
        if (stage.title.toLowerCase().includes(query)) {
            results.push({
                type: 'stage',
                stageId: stage.id,
                title: stage.title,
                excerpt: stage.weeks,
                link: `stage${stage.id}.html`
            });
        }
    });

    // 搜索工具
    learningData.tools.forEach(tool => {
        if (tool.title.toLowerCase().includes(query)) {
            results.push({
                type: 'tool',
                title: tool.title,
                excerpt: '实用工具和模板',
                link: `tools/${tool.id}.html`
            });
        }
    });

    // 显示结果
    if (results.length === 0) {
        resultsContainer.innerHTML = '<p class="search-hint">未找到相关内容，请尝试其他关键词...</p>';
    } else {
        resultsContainer.innerHTML = results.map(result => `
            <div class="search-result-item">
                <div class="search-result-title">${result.title}</div>
                <div class="search-result-excerpt">${result.excerpt}</div>
                <a href="${result.link}" class="search-result-link">查看详情 →</a>
            </div>
        `).join('');
    }
}

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// 导航栏高亮
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
