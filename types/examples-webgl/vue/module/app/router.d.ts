import VueRouter from 'vue-router';
export declare const routes: ({
    path: string;
    exact: boolean;
    meta: {
        desc: string;
        level?: undefined;
    };
    component: {
        template: string;
    };
    redirect: string;
    children?: undefined;
} | {
    path: string;
    component: {
        template: string;
    };
    meta: {
        desc: string;
        level: number;
    };
    children: {
        path: string;
        meta: {
            desc: string;
            level: number;
        };
        component: () => Promise<typeof import("./webgl/quick-start/index.vue")>;
    }[];
    exact?: undefined;
    redirect?: undefined;
})[];
declare const _default: VueRouter;
export default _default;
