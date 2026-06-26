# 詹幸霖的个人简历博客

基于 Astro、TypeScript、Tailwind CSS、MDX 和 GitHub Pages 的静态个人站点。

## 本地开发

```bash
pnpm install
pnpm dev
```

## 构建检查

```bash
pnpm astro check
pnpm build
```

## GitHub Pages

仓库名按 `resume-blog` 设计，`astro.config.mjs` 中已配置 `base: "/resume-blog"`。

推送到 `main` 分支后，GitHub Actions 会自动构建并发布到：

```text
https://<你的 GitHub 用户名>.github.io/resume-blog/
```

首次发布前，请在仓库 Settings -> Pages 中选择 GitHub Actions 作为 Source。
