# ๐จ Moc-UI ๆฏไปไน?

ไธไธช Mini ็็็ปไปถๅบ๏ผๅบไบ Vite ๆ ใ

## Features

- โก๏ธ Vue 3, Vite 2, pnpm, ESBuild - born with fastness
- ๐ฆพ TypeScript, of course
- ๐ File based routing
- โ๏ธ Unit Testing with Vitest
- ๐ Eslint + Prittier
- ๐จ UnoCSS - the instant on-demand atomic CSS engine
- ๐ I18n ready
- ๐ CI/CD with GithubActions

## Install

```bash
npm i moc-ui
```

## Quick Start

```js
import Vue from "vue";
import MoUI from "moc-ui";

const App = {
  template: `<moc-button>ๆ้ฎ</moc-button>`,
};

createApp(App).use(MoUI).mount("#app");
```

## Browser Support

Modern browsers and Internet Explorer 10+.
