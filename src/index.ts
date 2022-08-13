import { createApp } from "vue/dist/vue.esm-browser";
import "uno.css";
import MoUI from "./packages";

createApp({
  template: `
           <div>
              <mo-button color="blue">蓝色按钮</mo-button>
              <mo-button color="green">绿色按钮</mo-button>
              <mo-button color="gray">灰色按钮</mo-button>
              <mo-button color="yellow">黄色按钮</mo-button>
              <mo-button color="red">红色按钮</mo-button>
           </div>
       <div>
           <mo-button color="blue" round plain icon="search" ></mo-button>
           <mo-button color="green" round plain icon="edit" ></mo-button>
           <mo-button color="gray" round plain icon="check" ></mo-button>
           <mo-button color="yellow" round plain icon="message" ></mo-button>
           <mo-button color="red" round plain icon="delete" ></mo-button>
       </div>
          `,
})
  .use(MoUI)
  .mount("#app");
