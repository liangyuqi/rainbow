import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// @ts-ignore
const Triangles = () => import('./components/triangles/triangles.vue');
// @ts-ignore
const Point = () => import('./components/point/point.vue');

// @ts-ignore
const Mesh = () => import('./components/mesh/mesh.vue');

// @ts-ignore
const Bar = () => import('./charts/bar/bar.vue');

// const Triangles = resolve => require('./components/triangles/triangles.vue')

// const Main = {template: '<div>main</div>'};

export const routes = [
  // {
  //   path: '/',
  //   exact: true,
  //   meta: {desc: 'main'},
  //   component: Main,
  //   redirect: '/mesh',
  // },
  {
    path: '/mesh',
    meta: {desc: '矩形'},
    component: Mesh,
  },
  {
    path: '/point',
    meta: {desc: '点'},
    component: Point,
  },
  {
    path: '/triangles',
    meta: {desc: '三角形'},
    component: Triangles,
  },
  {
    path: '/bar',
    meta: {desc: '柱状图'},
    component: Bar,
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'link-active',
});
