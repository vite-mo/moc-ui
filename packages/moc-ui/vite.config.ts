/// <reference types="vitest" />
import { defineConfig, Plugin,UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import UnoCss from "./config/unocss";
const rollupOptions = {
  external: ["vue"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export const config = {
  plugins: [
    vue(),
    // 添加JSX插件
    vueJsx() as Plugin,

    UnoCss() as Plugin[],
  ],
  build: {
    rollupOptions,
    minify: false, // boolean | 'terser' | 'esbuild'
    sourcemap: true, // 输出单独 source文件
    // brotliSize: true, // 生成压缩大小报告
    reportCompressedSize: true,
    lib: {
      entry: "./src/entry.ts",
      name: "MoUIVite",
      fileName: "moc-ui",
      formats: ["es", "umd", "iife"], // 导出模块类型
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // environment: "jsdom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
};

// https://vitejs.dev/config/
export default defineConfig(config as UserConfig);
