import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NotFound from "../views/NotFound.vue";
import HttpReq from "../views/HttpReq.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/about/:name",
    name: "about",
    component: AboutView,
  },
  {
    path: "/httpreq",
    name: "httpreq",
    component: HttpReq,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
