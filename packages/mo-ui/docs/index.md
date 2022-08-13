# 🔨 Mo-UI 是什么?

一个 Mini 版的组件库，基于 Vite 栈。

## Features

- ⚡️ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- 🦾 TypeScript, of course
- 🗂 File based routing
- ⚙️ Unit Testing with Vitest
- 😃 Eslint + Prittier
- 🎨 UnoCSS - the instant on-demand atomic CSS engine
- 🌍 I18n ready
- 🚘 CI/CD with GithubActions

## Install

```bash
npm i mo-ui
```

## Quick Start

```js
import Vue from "vue";
import MoUI from "mo-ui";

const App = {
  template: `<mo-button>按钮</mo-button>`,
};

createApp(App).use(MoUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.
