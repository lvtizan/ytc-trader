with open('trader-growth-path.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 替换新手期的链接
content = content.replace(
    '<li>学习基础知识</li>',
    '<li><a href="phase-1-beginner.html" style="color: #94a3b8; text-decoration: none;">学习基础知识 →</a></li>'
)
content = content.replace(
    '<li>建立市场认知</li>',
    '<li><a href="phase-1-beginner.html" style="color: #94a3b8; text-decoration: none;">建立市场认知 →</a></li>'
)
content = content.replace(
    '<li>小资金实盘验证</li>',
    '<li><a href="phase-1-beginner.html" style="color: #94a3b8; text-decoration: none;">小资金实盘验证 →</a></li>'
)
content = content.replace(
    '<li>培养交易纪律</li>',
    '<li><a href="phase-1-beginner.html" style="color: #94a3b8; text-decoration: none;">培养交易纪律 →</a></li>'
)
content = content.replace(
    '<li>目标:控制亏损</li>',
    '<li><a href="phase-1-beginner.html" style="color: #94a3b8; text-decoration: none;">目标:控制亏损 →</a></li>'
)

# 替换成长期的链接
content = content.replace(
    '<li>逐步增加资金</li>',
    '<li><a href="phase-2-growth.html" style="color: #94a3b8; text-decoration: none;">逐步增加资金 →</a></li>'
)
content = content.replace(
    '<li>找到适合策略</li>',
    '<li><a href="phase-2-growth.html" style="color: #94a3b8; text-decoration: none;">找到适合策略 →</a></li>'
)
content = content.replace(
    '<li>建立交易系统</li>',
    '<li><a href="phase-2-growth.html" style="color: #94a3b8; text-decoration: none;">建立交易系统 →</a></li>'
)
content = content.replace(
    '<li>记录交易日志</li>',
    '<li><a href="phase-2-growth.html" style="color: #94a3b8; text-decoration: none;">记录交易日志 →</a></li>'
)
content = content.replace(
    '<li>目标:小幅盈利</li>',
    '<li><a href="phase-2-growth.html" style="color: #94a3b8; text-decoration: none;">目标:小幅盈利 →</a></li>'
)

# 替换成熟期的链接
content = content.replace(
    '<li>稳定盈利能力</li>',
    '<li><a href="phase-3-mature.html" style="color: #94a3b8; text-decoration: none;">稳定盈利能力 →</a></li>'
)
content = content.replace(
    '<li>风险控制精通</li>',
    '<li><a href="phase-3-mature.html" style="color: #94a3b8; text-decoration: none;">风险控制精通 →</a></li>'
)
content = content.replace(
    '<li>心理素质稳定</li>',
    '<li><a href="phase-3-mature.html" style="color: #94a3b8; text-decoration: none;">心理素质稳定 →</a></li>'
)
content = content.replace(
    '<li>持续优化系统</li>',
    '<li><a href="phase-3-mature.html" style="color: #94a3b8; text-decoration: none;">持续优化系统 →</a></li>'
)
content = content.replace(
    '<li>目标:稳定收益</li>',
    '<li><a href="phase-3-mature.html" style="color: #94a3b8; text-decoration: none;">目标:稳定收益 →</a></li>'
)

# 替换专业期的链接
content = content.replace(
    '<li>交易如呼吸</li>',
    '<li><a href="phase-4-professional.html" style="color: #94a3b8; text-decoration: none;">交易如呼吸 →</a></li>'
)
content = content.replace(
    '<li>系统化运作</li>',
    '<li><a href="phase-4-professional.html" style="color: #94a3b8; text-decoration: none;">系统化运作 →</a></li>'
)
content = content.replace(
    '<li>资金管理专业</li>',
    '<li><a href="phase-4-professional.html" style="color: #94a3b8; text-decoration: none;">资金管理专业 →</a></li>'
)
content = content.replace(
    '<li>心态平和稳定</li>',
    '<li><a href="phase-4-professional.html" style="color: #94a3b8; text-decoration: none;">心态平和稳定 →</a></li>'
)
content = content.replace(
    '<li>目标:持续复利</li>',
    '<li><a href="phase-4-professional.html" style="color: #94a3b8; text-decoration: none;">目标:持续复利 →</a></li>'
)

with open('trader-growth-path.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("✓ 已添加阶段链接")
