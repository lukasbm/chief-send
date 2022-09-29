import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/upload",
    },
    {
      path: "/upload",
      name: "upload",
      component: () => import("../views/UploadView.vue"),
    },
    {
      path: "/public",
      name: "public",
      component: () => import("../views/PublicView.vue"),
    },
    {
      path: "/download/:id",
      name: "download",
      component: () => import("../views/DownloadView.vue"),
    },
  ],
});

export default router;
