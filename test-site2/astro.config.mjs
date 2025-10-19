// @ts-check

import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import Sonda from "sonda/astro";

import showTailwindcssBreakpoint from "astro-show-tailwindcss-breakpoint";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [yaml(), tailwindcss()],
    build: {
      sourcemap: true,
    },
  },
  site: "https://example.com",
  integrations: [
    mdx(),
    sitemap(),
    Sonda(),
    showTailwindcssBreakpoint(),
  ],
});