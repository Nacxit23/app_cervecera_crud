import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/*",
      name: "Home",
      component: () => import("@/views/Home/Home.vue"),
      children: [
        {
          path: "/nuevo",
          name: "Register",
          component: () => import("@/views/Register/Register.vue"),
        },
      ],
    },
  ],
});

export default router;
