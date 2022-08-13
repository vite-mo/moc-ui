import Theme from 'vitepress/dist/client/theme-default'
// import Button from '../../../src/button'
import MoUI from '../../../src/packages'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'


export default {
  ...Theme,
  enhanceApp({ app }) {
    // app.component(Button.name, Button)
    app.use(MoUI)
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}