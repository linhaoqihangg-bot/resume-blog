export const profile = {
  name: "詹幸霖",
  role: "开发实习候选人",
  email: "2979265391@qq.com",
  gpa: "3.6",
  location: "中国",
  summary:
    "关注 Web 工程、后端服务、桌面工具与 AI 医学影像应用，正在把课程训练、项目实践和工程习惯沉淀成可持续迭代的作品集。",
  highlights: [
    "绩点 3.6，具备稳定学习投入和课程基础",
    "已发布后端 API、全栈运营台、桌面工具和 AI 医学影像平台等项目源码",
    "重视可维护代码、自动化构建和清晰的问题拆解",
  ],
  skills: [
    {
      title: "前端基础",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "Astro"],
    },
    {
      title: "后端与数据",
      items: ["Python", "FastAPI", "SQL", "数据处理", "接口设计"],
    },
    {
      title: "工程工具",
      items: ["Git", "GitHub Actions", "pnpm", "Markdown", "静态部署"],
    },
  ],
  projects: [
    {
      name: "套利监控与风控运营台",
      status: "已发布到 GitHub",
      summary:
        "面向交易系统运维场景构建全栈运营台，用于展示套利机会、交易执行、风控状态、订单历史和人工复核流程。",
      stack: [
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Redis",
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Docker Compose",
        "pytest",
      ],
      outcome:
        "实现机会监控、执行视图、风险状态、订单历史、watchlist、设置页、人工复核与恢复流程；完成后端模块语法检查和前端 Vite 生产构建，公开仓库已排除真实交易凭据、本地数据库和构建产物。",
      githubUrl: "https://github.com/linhaoqihangg-bot/arbitrage-ops-console",
    },
    {
      name: "FastAPI PostgreSQL 权限认证后端",
      status: "已发布到 GitHub",
      summary:
        "基于 FastAPI 构建异步后端 API，使用 PostgreSQL 存储用户与 refresh token，覆盖注册、登录、JWT 鉴权、当前用户查询、密码重置、账号删除、数据库迁移和健康检查。",
      stack: [
        "Python 3.14",
        "FastAPI",
        "PostgreSQL",
        "SQLAlchemy Async",
        "Alembic",
        "JWT",
        "Docker",
        "pytest",
        "GitHub Actions",
      ],
      outcome:
        "完成 Docker Compose 本地数据库、Alembic 迁移、认证接口测试与 CI 检查；本地验证 42 个测试通过，覆盖率 100%。",
      githubUrl: "https://github.com/linhaoqihangg-bot/internship-fastapi-api",
    },
    {
      name: "Stock Island 股票行情桌面工具",
      status: "已发布到 GitHub",
      summary:
        "使用 Python 标准库和 Tkinter 实现 Windows 灵动岛风格行情面板，配置股票代码后自动拉取并展示实时行情。",
      stack: [
        "Python",
        "Tkinter",
        "urllib",
        "Sina Finance API",
        "JSON Config",
        "Windows Desktop",
      ],
      outcome:
        "实现股票代码标准化、行情拉取、多编码解析、涨跌幅/区间/成交额计算、可拖拽置顶 UI、右键刷新/展开/退出和数据源 provider 扩展点；本地通过 py_compile 验证。",
      githubUrl: "https://github.com/linhaoqihangg-bot/stock-island-desktop",
    },
    {
      name: "基层 MRI 影像智能增强平台",
      status: "已发布到 GitHub",
      summary:
        "面向互联网+参赛和基层医疗场景，构建 MRI 图像上传、增强、分割入口、指标面板和报告预览的演示平台。",
      stack: [
        "Python",
        "FastAPI",
        "Streamlit",
        "OpenCV",
        "NumPy",
        "Pandas",
        "Pillow",
        "MONAI",
        "TorchScript/ONNX",
        "REST API",
      ],
      outcome:
        "实现 MRI 图像上传、模拟去噪/超分/增强、原图与增强图对比、病灶 mask 模拟、MONAI BraTS 四模态分割入口、PSNR/SNR/病灶概率指标、报告预览和 JSON/CSV 导出；本地完成 Python 模块编译验证，公开仓库保留源码并排除模型权重、vendor、临时图像和商业计划书导出物。",
      githubUrl: "https://github.com/linhaoqihangg-bot/mri-enhancement-platform",
    },
  ],
  education: {
    school: "学校待补充",
    major: "专业待补充",
    degree: "学历待补充",
    period: "时间待补充",
  },
  blogTopics: ["项目复盘", "Web 工程", "后端接口", "学习笔记"],
} as const;
