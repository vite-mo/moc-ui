/// <reference types="vitest" />
import { defineConfig, Plugin, UserConfig } from "vite";
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

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue() as Plugin,
    // 添加JSX插件
    vueJsx() as Plugin,

    UnoCss() as Plugin[],
  ],
  build: {
    rollupOptions,
    minify: "terser",
    sourcemap: true, // 输出单独 source文件
    // brotliSize: true, // 生成压缩大小报告
    reportCompressedSize: true,
    lib: {
      entry: "./src/packages/index.ts",
      name: "MoUI",
      fileName: "mo-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
    outDir: "./dist",
  },
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: 'happy-dom',
    // environment: "jsdom",
    transformMode: {
        web: [/.[tj]sx$/],
    }
  },
});
