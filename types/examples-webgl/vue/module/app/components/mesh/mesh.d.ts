import Vue from 'vue';
import { Rainbow } from '../../../../../../src/rainbow';
import { ImageTexture } from 'src/render/texture';
export default class App extends Vue {
    rainbow: Rainbow;
    canvas: HTMLCanvasElement;
    scr: import('/Users/bytedance/Desktop/github/rainbow/src/search/searcher').Searcher;
    tf: import('/Users/bytedance/Desktop/github/rainbow/src/render/texture').TextureFactroy;
    vp: import('/Users/bytedance/Desktop/github/rainbow/src/viewport/index').Viewport;
    isDragging: boolean;
    dragLastPoint: any[];
    uvList: ImageTexture[];
    mounted(): void;
    initCanvas(): void;
    /**
     * 画矩形 demo
     */
    drawMesh(): void;
    /**
     * 画抖音 demo
     */
    drawTikTok(): void;
    /**
     * 绑定事件交互
     */
    initEvent(): void;
}
