# YTC Trader 学习系统 - 技术升级方案

## 📋 项目概述

将当前的静态HTML学习系统升级为完整的SaaS平台，支持多用户、进度跟踪、内容管理等。

---

## 🎯 核心功能需求

### 1. 用户系统
- 用户注册/登录（邮箱/微信/第三方登录）
- 用户角色管理（管理员/讲师/学员）
- 个人资料管理
- 学习偏好设置

### 2. 课程管理
- 课程CRUD（创建/读取/更新/删除）
- 章节管理
- 知识点管理
- 图片/视频资源管理
- PDF内容提取和编辑
- 课程发布/下架

### 3. 学习进度跟踪
- 章节完成状态
- 知识点学习记录
- 练习答题记录
- 学习时长统计
- 学习证书生成

### 4. 互动功能
- 知识点评论/问答
- 学习笔记
- 练习成绩统计
- 学习报告导出

### 5. 数据分析
- 用户学习进度统计
- 热门课程分析
- 薄弱知识点分析
- 学习效果评估

---

## 🏗️ 推荐技术栈

### 方案A：现代化全栈方案（推荐）

**前端框架**
- **Next.js 14** (React) - 服务端渲染，SEO友好
- **TypeScript** - 类型安全
- **Tailwind CSS** - 快速UI开发
- **shadcn/ui** - 高质量组件库
- **Zustand** - 轻量级状态管理

**后端框架**
- **Node.js + Express** 或 **NestJS**
- **TypeScript**
- **JWT** - 用户认证
- **Multer** - 文件上传（PDF/图片）

**数据库**
- **PostgreSQL** - 主数据库（用户、课程、进度）
- **Redis** - 缓存和会话管理
- **MinIO/S3** - 对象存储（图片、视频、PDF）

**内容管理**
- **Strapi** 或 **Payload CMS** - 无头CMS，管理课程内容
- **PDF提取服务** - PyMuPDF API

**部署**
- **Docker** - 容器化部署
- **Nginx** - 反向代理
- **PM2** - 进程管理
- **阿里云/腾讯云** - 云服务器

---

### 方案B：Python全栈方案

**前端框架**
- **Next.js 14** (React)
- **TypeScript**
- **Tailwind CSS + shadcn/ui**

**后端框架**
- **FastAPI** - 高性能Python API
- **Pydantic** - 数据验证
- **SQLAlchemy** - ORM

**数据库**
- **PostgreSQL** - 主数据库
- **Redis** - 缓存
- **MinIO/S3** - 对象存储

**优势**
- Python生态强大（PDF处理、数据分析）
- FastAPI性能优秀，自动生成API文档
- 异步支持，高并发处理

---

## 📊 数据库设计

### 用户表 (users)
```sql
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255),
    username VARCHAR(100) UNIQUE,
    role VARCHAR(20) DEFAULT 'student', -- admin, instructor, student
    avatar_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW(),
    last_login_at TIMESTAMP,
    is_active BOOLEAN DEFAULT true
);
```

### 课程表 (courses)
```sql
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title VARCHAR(255) NOT NULL,
    description TEXT,
    cover_image VARCHAR(500),
    difficulty VARCHAR(20), -- beginner, intermediate, advanced
    duration INTEGER, -- 预计学习时长（分钟）
    is_published BOOLEAN DEFAULT false,
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### 章节表 (chapters)
```sql
CREATE TABLE chapters (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    sort_order INTEGER DEFAULT 0,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 知识点表 (knowledge_points)
```sql
CREATE TABLE knowledge_points (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chapter_id UUID REFERENCES chapters(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT, -- HTML内容
    pdf_source VARCHAR(500), -- PDF来源
    images JSONB, -- 图片数组 [{"url": "...", "caption": "..."}]
    pdf_extracts JSONB, -- PDF提取内容
    practice_questions JSONB, -- 练习题
    sort_order INTEGER DEFAULT 0,
    estimated_time INTEGER, -- 预计学习时长（分钟）
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 学习进度表 (learning_progress)
```sql
CREATE TABLE learning_progress (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    knowledge_point_id UUID REFERENCES knowledge_points(id) ON DELETE CASCADE,
    is_completed BOOLEAN DEFAULT false,
    score INTEGER, -- 练习得分
    practice_attempts INTEGER DEFAULT 0,
    time_spent INTEGER DEFAULT 0, -- 学习时长（秒）
    last_accessed_at TIMESTAMP,
    completed_at TIMESTAMP,
    UNIQUE(user_id, knowledge_point_id)
);
```

### 练习记录表 (practice_records)
```sql
CREATE TABLE practice_records (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    knowledge_point_id UUID REFERENCES knowledge_points(id),
    question_id INTEGER NOT NULL,
    user_answer BOOLEAN,
    is_correct BOOLEAN,
    attempted_at TIMESTAMP DEFAULT NOW()
);
```

### 笔记表 (notes)
```sql
CREATE TABLE notes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    knowledge_point_id UUID REFERENCES knowledge_points(id),
    content TEXT NOT NULL,
    highlighted_text TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

---

## 🗂️ 项目目录结构

```
ytc-trader-platform/
├── frontend/                 # Next.js 前端
│   ├── app/                 # App Router
│   │   ├── (auth)/         # 认证相关页面
│   │   │   ├── login/
│   │   │   └── register/
│   │   ├── (dashboard)/    # 主应用
│   │   │   ├── courses/    # 课程列表
│   │   │   ├── learn/      # 学习页面
│   │   │   └── profile/    # 个人中心
│   │   └── admin/          # 管理后台
│   │       ├── courses/    # 课程管理
│   │       ├── users/      # 用户管理
│   │       └── analytics/  # 数据分析
│   ├── components/         # 共享组件
│   ├── lib/               # 工具函数
│   └── public/            # 静态资源
│
├── backend/                # Node.js/Python 后端
│   ├── src/
│   │   ├── routes/        # API路由
│   │   ├── controllers/   # 控制器
│   │   ├── services/      # 业务逻辑
│   │   ├── models/        # 数据模型
│   │   ├── middleware/    # 中间件
│   │   └── utils/         # 工具函数
│   ├── uploads/           # 上传文件临时目录
│   └── tests/             # 测试文件
│
├── pdf-service/           # PDF处理服务（Python）
│   ├── extract_images.py  # 图片提取
│   ├── extract_text.py    # 文本提取
│   └── app.py            # FastAPI服务
│
├── cms/                   # 内容管理系统（可选）
│   └── strapi/           # Strapi CMS
│
├── docker-compose.yml     # Docker编排
├── nginx.conf            # Nginx配置
└── README.md             # 项目文档
```

---

## 🔐 安全考虑

1. **认证授权**
   - JWT Token认证
   - Refresh Token机制
   - RBAC权限控制（管理员/讲师/学员）

2. **数据安全**
   - 密码bcrypt加密
   - SQL注入防护（参数化查询）
   - XSS防护（内容转义）
   - CSRF Token

3. **文件上传**
   - 文件类型验证
   - 文件大小限制
   - 病毒扫描
   - 对象存储隔离

4. **API安全**
   - Rate Limiting
   - CORS配置
   - API版本控制
   - 请求日志

---

## 📱 核心API设计

### 认证相关
- `POST /api/auth/register` - 用户注册
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/logout` - 用户登出
- `POST /api/auth/refresh` - 刷新Token
- `GET /api/auth/me` - 获取当前用户信息

### 课程相关
- `GET /api/courses` - 获取课程列表
- `GET /api/courses/:id` - 获取课程详情
- `POST /api/courses` - 创建课程（管理员）
- `PUT /api/courses/:id` - 更新课程（管理员）
- `DELETE /api/courses/:id` - 删除课程（管理员）

### 学习进度
- `GET /api/progress` - 获取学习进度
- `POST /api/progress/:knowledgePointId` - 更新知识点进度
- `GET /api/progress/stats` - 获取学习统计

### 练习相关
- `POST /api/practice/submit` - 提交练习答案
- `GET /api/practice/history` - 获取练习历史

### 内容管理
- `POST /api/admin/pdf/upload` - 上传PDF
- `POST /api/admin/pdf/extract` - 提取PDF内容和图片
- `POST /api/admin/knowledge-points` - 创建知识点
- `PUT /api/admin/knowledge-points/:id` - 更新知识点

---

## 🚀 开发阶段规划

### Phase 1: 基础架构（2-3周）
- [ ] 搭建前端框架（Next.js）
- [ ] 搭建后端API（FastAPI/Express）
- [ ] 数据库设计和迁移
- [ ] 用户认证系统
- [ ] 基础UI组件库

### Phase 2: 内容管理（2-3周）
- [ ] 课程CRUD功能
- [ ] 章节管理
- [ ] 知识点管理
- [ ] PDF上传和提取
- [ ] 图片管理
- [ ] 富文本编辑器

### Phase 3: 学习功能（2-3周）
- [ ] 课程展示页面
- [ ] 知识点学习页面
- [ ] 练习系统
- [ ] 进度跟踪
- [ ] 学习统计

### Phase 4: 高级功能（2-3周）
- [ ] 用户仪表板
- [ ] 学习报告
- [ ] 笔记功能
- [ ] 评论问答
- [ ] 证书生成

### Phase 5: 管理后台（2周）
- [ ] 用户管理
- [ ] 课程管理
- [ ] 数据分析
- [ ] 系统设置

### Phase 6: 测试和优化（1-2周）
- [ ] 单元测试
- [ ] 集成测试
- [ ] 性能优化
- [ ] 安全审计
- [ ] 部署上线

---

## 💰 成本估算

### 开发成本
- 开发人员：2-3个月 × 2人 = 4-6人月
- 如果外包：约 ¥8-15万

### 服务器成本（月度）
- 云服务器（2核4G）：¥100-200/月
- 数据库（RDS）：¥200-500/月
- 对象存储（OSS）：¥50-200/月（按量）
- CDN流量：¥100-300/月
- **总计：约 ¥500-1200/月**

### 第三方服务
- 邮件服务（SendCloud/阿里云）：¥100-300/月
- 短信验证码：¥0.04-0.06/条
- 监控告警：免费-¥200/月

---

## 🎁 下一步行动

### 立即可做：
1. **选择技术栈** - 确定使用哪个方案
2. **购买域名和服务器** - 提前准备
3. **设计数据库** - 细化表结构
4. **创建项目仓库** - Git管理

### 需要决策：
1. **是否需要CMS？** - 管理员是否需要可视化内容管理
2. **支付方式？** - 是否需要在线支付
3. **移动端？** - 是否需要APP或小程序
4. **开放注册？** - 还是邀请制/付费制

---

## 📞 需要你的反馈

请告诉我：
1. 你倾向于哪个技术栈方案？（Node.js 还是 Python）
2. 预算范围是多少？（自己开发 vs 外包）
3. 预期上线时间？
4. 目标用户规模？（预计多少人使用）
5. 是否需要我立即开始搭建项目框架？
