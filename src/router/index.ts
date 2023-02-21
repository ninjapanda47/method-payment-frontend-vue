// Composables
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "/upload",
        name: "Upload",
        component: () => import("@/views/Upload.vue"),
      },
      {
        path: "/batch/:batchId",
        name: "Batch",
        component: () => import("@/views/Batch.vue"),
      },
      {
        path: "/reports",
        name: "Reports",
        component: () => import("@/views/Reports.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
