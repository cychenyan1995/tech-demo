import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const router = new Router({
  // mode: "history",
  routes: [
    {
      name: "imageLoad",
      path: "/imageLoad",
      component: () => import("./../components/imageLazy/ImageLoad.vue"),
    },
    {
      name: "imageLazy",
      path: "/imageLazy",
      component: () => import("./../components/imageLazy/imagePlugin.vue"),
    },
  ],
});

export default router;
