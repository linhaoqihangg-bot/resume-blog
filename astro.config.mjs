// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";

const site = process.env.SITE_URL ?? "https://linhaoqihangg-bot.github.io";

export default defineConfig({
  site,
  base: "/resume-blog",
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
