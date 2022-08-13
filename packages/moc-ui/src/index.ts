import { createApp } from "vue/dist/vue.esm-browser";
import "uno.css";
import MoUI from "./packages";

createApp({
  template: `
           <div>
              <mocbutton color="blue">蓝色按钮</mocbutton>
              <mocbutton color="green">绿色按钮</mocbutton>
              <mocbutton color="gray">灰色按钮</mocbutton>
              <mocbutton color="yellow">黄色按钮</mocbutton>
              <mocbutton color="red">红色按钮</mocbutton>
           </div>
       <div>
           <mocbutton color="blue" round plain icon="search" ></mocbutton>
           <mocbutton color="green" round plain icon="edit" ></mocbutton>
           <mocbutton color="gray" round plain icon="check" ></mocbutton>
           <mocbutton color="yellow" round plain icon="message" ></mocbutton>
           <mocbutton color="red" round plain icon="delete" ></mocbutton>
       </div>
          `,
})
  .use(MoUI)
  .mount("#app");
