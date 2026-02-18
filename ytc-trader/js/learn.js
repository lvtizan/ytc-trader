// YTC Trader - 知识点详情页JavaScript

// 更新学习进度
function updateProgress() {
    const objectives = document.querySelectorAll('.objective-card input[type="checkbox"]');
    const completed = document.querySelectorAll('.objective-card input[type="checkbox"]:checked');
    const percentage = Math.round((completed.length / objectives.length) * 100);

    // 更新进度条
    const progressFill = document.querySelector('.concept-progress .progress-fill');
    const progressText = document.querySelector('.concept-progress .progress-text');

    if (progressFill && progressText) {
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}%`;
    }

    // 保存到localStorage
    const conceptId = window.location.pathname.split('/').pop().replace('.html', '');
    const key = `concept-${conceptId}-progress`;
    localStorage.setItem(key, percentage);
}

// 加载保存的进度
function loadProgress() {
    const conceptId = window.location.pathname.split('/').pop().replace('.html', '');
    const key = `concept-${conceptId}-progress`;
    const saved = localStorage.getItem(key);

    if (saved) {
        // 更新进度显示
        const progressFill = document.querySelector('.concept-progress .progress-fill');
        const progressText = document.querySelector('.concept-progress .progress-text');

        if (progressFill && progressText) {
            progressFill.style.width = `${saved}%`;
            progressText.textContent = `${saved}%`;
        }
    }
}

// 检查测验答案
function checkQuiz() {
    const quizItems = document.querySelectorAll('.quiz-item');
    let correct = 0;
    let total = quizItems.length;

    quizItems.forEach(item => {
        const selected = item.querySelector('input[type="radio"]:checked');
        const answerDiv = item.querySelector('.quiz-answer');
        const correctAnswer = answerDiv.dataset.correct;

        // 显示答案
        answerDiv.classList.add('show');

        if (selected) {
            if (selected.value === correctAnswer) {
                correct++;
                selected.parentElement.style.color = 'var(--success-color)';
            } else {
                selected.parentElement.style.color = 'var(--danger-color)';
            }
        } else {
            selected?.parentElement?.parentElement?.querySelector('.quiz-options')?.appendChild(
                Object.assign(document.createElement('p'), {
                    textContent: '请选择一个答案',
                    style: 'color: var(--danger-color); margin-top: 0.5rem;'
                })
            );
        }
    });

    // 显示总体结果
    const score = Math.round((correct / total) * 100);
    const resultDiv = document.createElement('div');
    resultDiv.className = 'quiz-result';
    resultDiv.style.cssText = `
        background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(5, 150, 105, 0.2));
        border: 2px solid var(--success-color);
        border-radius: 12px;
        padding: 2rem;
        margin-top: 2rem;
        text-align: center;
    `;
    resultDiv.innerHTML = `
        <h3>测验结果</h3>
        <p style="font-size: 2rem; font-weight: 700; margin: 1rem 0;">
            ${correct} / ${total} (${score}%)
        </p>
        <p>${score >= 80 ? '🎉 太棒了！你已经掌握了这个知识点。' : '💪 继续努力！建议重新阅读内容后再试一次。'}</p>
    `;

    const quizSection = document.querySelector('.quiz-section');
    const existingResult = quizSection.querySelector('.quiz-result');
    if (existingResult) {
        existingResult.replaceWith(resultDiv);
    } else {
        quizSection.appendChild(resultDiv);
    }
}

// 页面加载时初始化
document.addEventListener('DOMContentLoaded', function() {
    loadProgress();

    // 为实践练习添加保存功能
    const practiceCheckboxes = document.querySelectorAll('.practice-checklist input[type="checkbox"]');
    practiceCheckboxes.forEach((checkbox, index) => {
        const conceptId = window.location.pathname.split('/').pop().replace('.html', '');
        const key = `concept-${conceptId}-practice-${index}`;
        const saved = localStorage.getItem(key);

        if (saved === 'true') {
            checkbox.checked = true;
        }

        checkbox.addEventListener('change', function() {
            localStorage.setItem(key, this.checked);
        });
    });
});

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
