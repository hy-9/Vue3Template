import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import MainOut from "@/views/system/MainOut.vue";

const systemRoutes = [
  {
    path: "/",
    name: "system",
    redirect: "/view",
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...systemRoutes,
    {
      path: "/view",
      component: MainOut,
      name: "view",
      redirect: "/home",
      children: [
        {
          path: "/home",
          name: "home",
          component: Home,
          meta: {
            keepAlive: true,
          },
        },
        {
          path: "/chart",
          name: "chart",
          component: () => import("../views/Chart.vue"),
        },
      ],
    },
  ],
});

export default router;
