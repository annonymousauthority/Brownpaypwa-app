import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Career from "../views/Career.vue"
import Partnership from "../views/Partnership.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    
  },
  {
    path: "/career",
    name: "Career",
    component: Career
  },
  {
    path: "/partnership",
    name: "Partnership",
    component:Partnership
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
