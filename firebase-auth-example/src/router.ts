import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "./pages/IndexPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "index",
      component: IndexPage,
    },
  ],
});
