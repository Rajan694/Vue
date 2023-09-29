import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";
const pinia = createPinia();
createApp(App).use(pinia).use(bootstrap).use(router).mount("#app");
