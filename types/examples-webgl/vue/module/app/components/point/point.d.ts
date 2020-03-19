import Vue from 'vue';
export default class App extends Vue {
    g_points: Array<any>;
    a_Position: any;
    gl: any;
    canvas: any;
    mounted(): void;
    addPoint(e: MouseEvent): void;
}
