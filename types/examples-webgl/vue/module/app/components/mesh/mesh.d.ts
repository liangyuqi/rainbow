import Vue from 'vue';
import { Rainbow } from '../../../../../../src/rainbow';
export default class App extends Vue {
    rainbow: Rainbow;
    canvas: HTMLCanvasElement;
    scr: import('/Users/bytedance/Desktop/github/rainbow/src/search/searcher').Searcher;
    tf: import('/Users/bytedance/Desktop/github/rainbow/src/render/texture').TextureFactroy;
    vp: import('/Users/bytedance/Desktop/github/rainbow/src/viewport/index').Viewport;
    isDragging: boolean;
    dragLastPoint: any[];
    mounted(): void;
    initEvent(): void;
}
