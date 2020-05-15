import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: 'empty' },
    component: () => import("../views/Login.vue")
  },
  {
    path: "/categories",
    name: "Categories",
    meta: { layout: 'main' },
    component: () => import("../views/Categories.vue")
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
