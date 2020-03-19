import VueRouter from 'vue-router';
export declare const routes: ({
    path: string;
    exact: boolean;
    meta: {
        desc: string;
    };
    component: {
        template: string;
    };
    redirect: string;
} | {
    path: string;
    meta: {
        desc: string;
    };
    component: () => Promise<typeof import("./components/mesh/mesh.vue")>;
    exact?: undefined;
    redirect?: undefined;
} | {
    path: string;
    meta: {
        desc: string;
    };
    component: () => Promise<typeof import("./components/point/point.vue")>;
    exact?: undefined;
    redirect?: undefined;
} | {
    path: string;
    meta: {
        desc: string;
    };
    component: () => Promise<typeof import("./components/triangles/triangles.vue")>;
    exact?: undefined;
    redirect?: undefined;
})[];
declare const _default: VueRouter;
export default _default;
