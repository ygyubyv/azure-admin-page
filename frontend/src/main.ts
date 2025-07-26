import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { FontAwesomeIcon } from "./plugins/fontAwesome.ts";
import { myMSALObj } from "@/azure/msalConfig.ts";

import App from "./App.vue";
import router from "./router";

(async () => {
  await myMSALObj.initialize();

  const app = createApp(App);
  const pinia = createPinia();

  app.component("font-awesome-icon", FontAwesomeIcon);

  app.use(pinia);
  app.use(router);

  app.mount("#app");
})();
