import { createApp } from "vue/dist/vue.esm-browser";
import "uno.css";
import MoUI from "./entry";

createApp({
  template: `
           <div>
              <moc-button color="blue">蓝色按钮</moc-button>
              <moc-button color="green">绿色按钮</moc-button>
              <moc-button color="gray">灰色按钮</moc-button>
              <moc-button color="yellow">黄色按钮</moc-button>
              <moc-button color="red">红色按钮</moc-button>
           </div>
       <div>
           <moc-button color="blue" round plain icon="search" ></moc-button>
           <moc-button color="green" round plain icon="edit" ></moc-button>
           <moc-button color="gray" round plain icon="check" ></moc-button>
           <moc-button color="yellow" round plain icon="message" ></moc-button>
           <moc-button color="red" round plain icon="delete" ></moc-button>
       </div>
          `,
})
  .use(MoUI)
  .mount("#app");
