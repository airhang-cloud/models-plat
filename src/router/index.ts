import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: "/",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
  {
    path: "/",
    name: "MAINENTRY",
    component: () => import("@/views/MainEntry.vue"),
    children: [
      {
        path: "demoone",
        name: "DEMOONE",
        component: () => import("@/views/WorksPreview/demoOne.vue"),
      },
      {
        path: "demotwo",
        name: "DEMOTWO",
        component: () => import("@/views/WorksPreview/demoTwo.vue"),
      },
    ],
    redirect: "/demoone",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
