import type { App, Plugin } from "vue";
const files = import.meta.globEager("./**/index.ts");
const components = {};
for (const key in files) {
  let newKey = key.replace(/^\.\/(.+)\/index\.ts$/, (_, $1, $2) => {
    return $1;
  });
  components[newKey] = (files[key] as any).default as Plugin;
}

// 导出单独组件

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    Object.keys(components).forEach((item) => {
      app.use(components[item]);
    });
  },
};
