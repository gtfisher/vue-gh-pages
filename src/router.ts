import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Analytics from 'vue-analytics';
import Home from './views/Home.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: false,
      title: 'DemoHome'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      auth: false,
      title: 'About'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
  },
  {
    path: '/more',
    name: 'More',
    meta: {
      auth: false,
      title: 'More'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "more" */ './views/More.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

Vue.use(Analytics, {
  id: 'UA-171520444-1',
  router
});

export default router;
