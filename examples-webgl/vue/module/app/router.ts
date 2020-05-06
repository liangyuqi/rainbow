import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Main = {template: '<div>main</div>'};

/**
 * 基于rainbow
 */
const Rainbow = {
  template: `
    <template>
      <router-view></router-view>
    </template>
  `,
};

// @ts-ignore
const Mesh = () => import('./components/mesh/mesh.vue');

// @ts-ignore
const Bar = () => import('./charts/bar/bar.vue');

/**
 * 基于原生webgl
 */

const WebGL = {
  template: `
    <template>
      <router-view></router-view>
    </template>
  `,
};
// @ts-ignore
const Point = () => import('./webgl/point/point.vue');

// @ts-ignore
const MultiPoint = () => import('./webgl/multipoint/multipoint.vue');
// @ts-ignore
const Triangles = () => import('./webgl/triangles/triangles.vue');

// @ts-ignore
const Arrow = () => import('./webgl/arrow/arrow.vue');

// @ts-ignore
const Cube = () => import('./webgl/cube/cube.vue');

// @ts-ignore
const QuickStart = () => import('./webgl/quick-start/index.vue');

export const routes = [
  {
    path: '/',
    exact: true,
    meta: {desc: 'main'},
    component: Main,
    redirect: '/rainbow/mesh',
  },

  //  {
  //    path: '/bar',
  //    meta: {desc: '柱状图'},
  //    component: Bar,
  //  },

  {
    path: '/webgl',
    component: WebGL,
    meta: {desc: '一、基于原生WebGL', level: 0},
    children: [
      {
        path: 'quick-start',
        meta: {desc: '快速开始', level: 1},
        component: QuickStart,
      },
      {
        path: 'point',
        meta: {desc: '单点', level: 1},
        component: Point,
      },
      {
        path: 'multipoint',
        meta: {desc: '多点', level: 1},
        component: MultiPoint,
      },
      {
        path: 'triangles',
        meta: {desc: '三角形', level: 1},
        component: Triangles,
      },

      {
        path: 'arrow',
        meta: {desc: '箭头', level: 1},
        component: Arrow,
      },
      {
        path: 'cube',
        meta: {desc: '立方体', level: 1},
        component: Cube,
      },
    ],
  },
  {
    path: '/rainbow',
    component: Rainbow,
    meta: {desc: '二、基于Rainbow', level: 0},
    children: [
      {
        path: 'mesh',
        meta: {desc: '矩形', level: 1},
        component: Mesh,
      },
    ],
  },
];

export default new VueRouter({
  routes,
  linkActiveClass: 'link-active',
});
