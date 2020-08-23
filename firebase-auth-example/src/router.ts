import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "./pages/IndexPage.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      name: "home",
      redirect: "/",
    },
    {
      path: "/",
      name: "index",
      component: IndexPage,
    },
  ],
});
