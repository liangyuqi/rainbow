import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Triangles = () => import('./components/triangles/triangles.vue')

const Point = () => import('./components/point/point.vue')

// const Triangles = resolve => require('./components/triangles/triangles.vue')

const Main = { template: '<div>main</div>' }

export default new VueRouter({
    routes: [
        {
            path: '/',
            meta:{desc:'main'},
            component: Main,

        },
        {
            path: '/point',
            meta:{desc:'point'},
            component: Point,

        },
        {
            path: '/triangles',
            meta:{desc:'triangles'},
            component: Triangles,
            // redirect:'/us',
            // children: [
            //     {
            //         name: 'us',
            //         path: '/us',
            //         meta:{desc:'关于我们'},
            //         component: Us
            //     }
            // ]
        },
        // {path: '/setting/address', component: Address,meta:{desc:'地址设置'}},
    ]
}
)