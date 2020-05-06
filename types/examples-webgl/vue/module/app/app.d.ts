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
    jsonView: {};
    hasLive2d: boolean;
    files: string[];
    currentIndex: number;
    mounted(): void;
    addLive2d(): void;
    deleteLive2d(): void;
}
