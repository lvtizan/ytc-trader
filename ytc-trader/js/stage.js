// YTC Trader - 阶段页面JavaScript

// 阶段页面进度跟踪
document.addEventListener('DOMContentLoaded', function() {
    initPracticeCheckboxes();
    initChecklistProgress();
    updatePageProgress();
});

// 初始化练习复选框
function initPracticeCheckboxes() {
    const checkboxes = document.querySelectorAll('.practice-item input[type="checkbox"]');
    const stageId = getStageId();

    checkboxes.forEach((checkbox, index) => {
        const key = `stage${stageId}-practice-${index}`;
        const saved = localStorage.getItem(key);

        if (saved === 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', function() {
            localStorage.setItem(key, this.checked);
            updatePageProgress();
        });
    });
}

// 初始化选股清单进度
function initChecklistProgress() {
    const checklistItems = document.querySelectorAll('.checklist-items input[type="checkbox"]');

    checklistItems.forEach((item, index) => {
        const key = `stage1-checklist-${index}`;
        const saved = localStorage.getItem(key);

        if (saved === 'true') {
            item.checked = true;
        }

        item.addEventListener('change', function() {
            localStorage.setItem(key, this.checked);
        });
    });
}

// 获取当前阶段ID
function getStageId() {
    const path = window.location.pathname;
    const match = path.match(/stage(\d)\.html/);
    return match ? match[1] : '1';
}

// 更新页面进度
function updatePageProgress() {
    const totalItems = document.querySelectorAll('.practice-item input[type="checkbox"]').length;
    const completedItems = document.querySelectorAll('.practice-item input[type="checkbox"]:checked').length;
    const percentage = totalItems > 0 ? Math.round((completedItems / totalItems) * 100) : 0;

    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');

    if (progressFill && progressText) {
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `学习进度：${percentage}%`;
    }
}

// 平滑滚动到锚点
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

// 高亮当前节的关键概念
function highlightCurrentSection() {
    const sections = document.querySelectorAll('.content-section');
    const conceptLinks = document.querySelectorAll('.concept-list a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        conceptLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === `#${current}`) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
}

// 打印功能
function printPage() {
    window.print();
}

// 重置进度
function resetProgress() {
    if (confirm('确定要重置本阶段的学习进度吗？')) {
        const stageId = getStageId();
        const checkboxes = document.querySelectorAll('.practice-item input[type="checkbox"]');

        checkboxes.forEach((checkbox, index) => {
            const key = `stage${stageId}-practice-${index}`;
            localStorage.removeItem(key);
            checkbox.checked = false;
        });

        updatePageProgress();
    }
}
