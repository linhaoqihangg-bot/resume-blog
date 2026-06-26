export const profile = {
  name: "詹幸霖",
  role: "开发实习候选人",
  email: "2979265391@qq.com",
  gpa: "3.6",
  location: "中国",
  summary:
    "关注 Web 工程、后端服务与数据处理，希望把课程训练、项目实践和工程习惯沉淀成可持续迭代的作品集。",
  highlights: [
    "绩点 3.6，具备稳定学习投入和课程基础",
    "面向开发实习准备项目作品、技术文章和结构化简历",
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
      name: "项目位 01：Web 应用实践",
      status: "待替换为真实项目",
      summary:
        "用于展示一个完整 Web 应用，从需求拆解、页面实现、接口联调到部署上线的过程。",
      stack: ["TypeScript", "Astro", "Tailwind CSS"],
      outcome: "建议补充线上地址、GitHub 仓库和你负责的核心模块。",
    },
    {
      name: "项目位 02：后端接口服务",
      status: "待替换为真实项目",
      summary:
        "用于展示 API 设计、数据库建模、错误处理、鉴权或日志等服务端能力。",
      stack: ["Python", "FastAPI", "SQL"],
      outcome: "建议补充接口文档、关键表结构和性能或稳定性改进。",
    },
    {
      name: "项目位 03：数据处理工具",
      status: "待替换为真实项目",
      summary:
        "用于展示数据清洗、自动化脚本、报表生成或批处理流程的工程化能力。",
      stack: ["Python", "Pandas", "Automation"],
      outcome: "建议补充输入输出样例、处理规模和结果截图。",
    },
    {
      name: "项目位 04：课程或竞赛作品",
      status: "待替换为真实项目",
      summary:
        "用于展示课程设计、算法训练、竞赛项目或团队协作中的具体贡献。",
      stack: ["Git", "Documentation", "Testing"],
      outcome: "建议补充团队角色、实现难点和复盘总结。",
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
