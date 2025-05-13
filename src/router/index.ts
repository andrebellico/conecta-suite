import Finish from "@/views/Finish.vue";
import PlansView from "@/views/PlansView.vue";
import Resume from "@/views/Resume.vue";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: PlansView,
  },
  {
    path: "/resume/:planId",
    name: "resume",
    component: Resume,
    props: true
  },
  {
    path: "resume/:planId/finish",
    name: "finish",
    component: Finish,
  }
];

const router = new VueRouter({
  routes,
});

export default router;
