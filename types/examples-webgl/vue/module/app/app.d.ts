import Vue from 'vue';
export default class App extends Vue {
    robotTotals: number;
    distance: number;
    version: string;
    routes: ({
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
    jsonView: {};
    hasLive2d: boolean;
    files: string[];
    currentIndex: number;
    mounted(): void;
    addLive2d(): void;
    deleteLive2d(): void;
}
