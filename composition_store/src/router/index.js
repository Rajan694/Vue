import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AboutDetail from "../components/AboutDetail.vue";
import TempComp from "../components/TempComp.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",

    component: AboutView,
  },
  {
    path: "/aboutdetails/:id",
    name: "AboutDetail",
    component: AboutDetail,
  },
  {
    path: "/temp",
    name: "TempComp",
    component: TempComp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
