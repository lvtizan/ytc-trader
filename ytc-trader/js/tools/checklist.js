// YTC Trader - 选股检查清单JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initDateInput();
    initChecklistItems();
    loadHistory();
});

// 初始化日期输入
function initDateInput() {
    const dateInput = document.getElementById('check-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.value = today;
    }
}

// 初始化检查清单项目
function initChecklistItems() {
    const sections = document.querySelectorAll('.checklist-section');

    sections.forEach(section => {
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                updateSectionProgress(section);
                updateOverallProgress();
                updateDecision();
            });
        });
    });
}

// 更新部分进度
function updateSectionProgress(section) {
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    const checked = section.querySelectorAll('input[type="checkbox"]:checked');
    const percentage = Math.round((checked.length / checkboxes.length) * 100);

    if (percentage === 100) {
        section.classList.add('completed');
    } else {
        section.classList.remove('completed');
    }
}

// 更新总体进度
function updateOverallProgress() {
    const allCheckboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
    const percentage = Math.round((checked.length / allCheckboxes.length) * 100);

    const progressValue = document.getElementById('completion-rate');
    if (progressValue) {
        progressValue.textContent = `${percentage}%`;
    }
}

// 更新决策
function updateDecision() {
    const allCheckboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    const checked = document.querySelectorAll('.checklist-item input[type="checkbox"]:checked');
    const percentage = Math.round((checked.length / allCheckboxes.length) * 100);

    const decisionStatus = document.getElementById('decision-status');
    const decisionMessage = document.getElementById('decision-message');

    if (percentage === 100) {
        // 全部选中，批准入场
        decisionStatus.innerHTML = '<span class="status-approved">✅ 符合入场条件</span>';
        decisionMessage.textContent = '所有条件均已满足，可以考虑入场交易。请确保风险控制在2%以内，盈亏比≥2:1。';
    } else if (percentage >= 75) {
        // 大部分选中，警告
        decisionStatus.innerHTML = '<span class="status-pending">⚠️ 需要谨慎考虑</span>';
        decisionMessage.textContent = `还有${allCheckboxes.length - checked.length}项未满足，建议等待所有条件满足后再入场。`;
    } else {
        // 低于75%，不批准
        decisionStatus.innerHTML = '<span class="status-rejected">❌ 不符合入场条件</span>';
        decisionMessage.textContent = `仅满足${checked.length}/${allCheckboxes.length}个条件，不建议入场交易。请等待更好的机会。`;
    }
}

// 重置清单
function resetChecklist() {
    if (confirm('确定要重置当前检查清单吗？所有进度将会丢失。')) {
        document.getElementById('stock-checklist').reset();
        initDateInput();

        // 移除所有完成状态
        document.querySelectorAll('.checklist-section').forEach(section => {
            section.classList.remove('completed');
        });

        // 重置决策显示
        document.getElementById('decision-status').innerHTML = '<span class="status-pending">⏳ 等待检查完成...</span>';
        document.getElementById('decision-message').textContent = '请完成以上所有检查项，系统将自动给出决策建议。';

        // 重置进度
        document.getElementById('completion-rate').textContent = '0%';
    }
}

// 保存检查清单
function saveChecklist() {
    const checklistData = collectChecklistData();

    if (!checklistData.stockCode && !checklistData.stockName) {
        alert('请至少填写股票代码或股票名称');
        return;
    }

    // 保存到localStorage
    let history = JSON.parse(localStorage.getItem('stock-checklist-history') || '[]');
    checklistData.id = Date.now();
    history.unshift(checklistData);
    localStorage.setItem('stock-checklist-history', JSON.stringify(history));

    // 重新加载历史记录
    loadHistory();

    alert('检查清单已保存！');
}

// 导出检查清单
function exportChecklist() {
    const checklistData = collectChecklistData();

    if (!checklistData.stockCode && !checklistData.stockName) {
        alert('请至少填写股票代码或股票名称');
        return;
    }

    // 创建文本报告
    const report = generateChecklistReport(checklistData);

    // 下载文件
    const blob = new Blob([report], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `选股检查清单_${checklistData.stockCode || '未命名'}_${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

// 收集检查清单数据
function collectChecklistData() {
    const sections = document.querySelectorAll('.checklist-section');
    const data = {
        stockCode: document.getElementById('stock-code').value,
        stockName: document.getElementById('stock-name').value,
        checkDate: document.getElementById('check-date').value,
        sections: {},
        overallProgress: 0,
        decision: '',
        timestamp: new Date().toISOString()
    };

    let totalItems = 0;
    let checkedItems = 0;

    sections.forEach(section => {
        const sectionName = section.getAttribute('data-section');
        const checkboxes = section.querySelectorAll('input[type="checkbox"]');
        const checked = section.querySelectorAll('input[type="checkbox"]:checked');

        data.sections[sectionName] = {
            total: checkboxes.length,
            checked: checked.length,
            percentage: Math.round((checked.length / checkboxes.length) * 100),
            notes: document.querySelector(`#${sectionName}-notes`)?.value || ''
        };

        totalItems += checkboxes.length;
        checkedItems += checked.length;
    });

    data.overallProgress = totalItems > 0 ? Math.round((checkedItems / totalItems) * 100) : 0;
    data.decision = data.overallProgress === 100 ? 'approved' : 'rejected';

    return data;
}

// 生成检查清单报告
function generateChecklistReport(data) {
    let report = `YTC波段交易选股检查清单\n`;
    report += `${'='.repeat(50)}\n\n`;
    report += `股票代码：${data.stockCode || '未填写'}\n`;
    report += `股票名称：${data.stockName || '未填写'}\n`;
    report += `检查日期：${data.checkDate}\n`;
    report += `完成度：${data.overallProgress}%\n`;
    report += `决策结果：${data.decision === 'approved' ? '✅ 符合入场条件' : '❌ 不符合入场条件'}\n\n`;

    report += `${'='.repeat(50)}\n`;
    report += `详细检查结果\n`;
    report += `${'='.repeat(50)}\n\n`;

    const sectionNames = {
        market: '市场环境',
        structure: '股票结构',
        callback: '回调位置',
        risk: '风险评估',
        signal: '入场信号'
    };

    for (const [key, value] of Object.entries(data.sections)) {
        const name = sectionNames[key] || key;
        report += `【${name}】\n`;
        report += `完成度：${value.checked}/${value.total} (${value.percentage}%)\n`;
        if (value.notes) {
            report += `备注：${value.notes}\n`;
        }
        report += `\n`;
    }

    report += `${'='.repeat(50)}\n`;
    report += `生成时间：${new Date(data.timestamp).toLocaleString('zh-CN')}\n`;

    return report;
}

// 加载历史记录
function loadHistory() {
    const history = JSON.parse(localStorage.getItem('stock-checklist-history') || '[]');
    const container = document.getElementById('history-list');

    if (history.length === 0) {
        container.innerHTML = '<p class="empty-hint">暂无历史记录，开始你的第一次选股检查吧！</p>';
        return;
    }

    container.innerHTML = history.slice(0, 10).map(item => `
        <div class="history-item">
            <div class="history-header">
                <div class="history-stock">${item.stockCode || '未填写'} ${item.stockName || ''}</div>
                <div class="history-date">${new Date(item.timestamp).toLocaleString('zh-CN')}</div>
            </div>
            <div class="history-details">
                <div class="history-detail-item">
                    <span class="history-detail-label">完成度</span>
                    <span class="history-detail-value">${item.overallProgress}%</span>
                </div>
                <div class="history-detail-item">
                    <span class="history-detail-label">决策结果</span>
                    <span class="history-detail-value ${item.decision}">
                        ${item.decision === 'approved' ? '✅ 符合' : '❌ 不符合'}
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// 删除历史记录项
function deleteHistoryItem(id) {
    if (!confirm('确定要删除这条记录吗？')) return;

    let history = JSON.parse(localStorage.getItem('stock-checklist-history') || '[]');
    history = history.filter(item => item.id !== id);
    localStorage.setItem('stock-checklist-history', JSON.stringify(history));
    loadHistory();
}

// 清空所有历史记录
function clearHistory() {
    if (!confirm('确定要清空所有历史记录吗？此操作不可恢复。')) return;

    localStorage.removeItem('stock-checklist-history');
    loadHistory();
}
