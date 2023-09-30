import { createApp } from "vue";
import { createPinia } from "pinia";
import "bootstrap/dist/css/bootstrap.css";
import { bootstrap } from "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.vue";
import router from "./router";

createApp(App).use(createPinia()).use(router).use(bootstrap).mount("#app");
