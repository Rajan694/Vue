import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import dateRange from "../views/dateRange.vue";
import tableSort from "../views/tableSort.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/daterange",
      name: "daterange",
      component: dateRange,
    },
    {
      path: "/table",
      name: "table",
      component: tableSort,
    },
  ],
});

export default router;
