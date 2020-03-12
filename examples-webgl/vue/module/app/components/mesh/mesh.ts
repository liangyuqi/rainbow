import Vue from 'vue';
import Component from 'vue-class-component';
import {Rainbow} from '../../../../../../src/rainbow';
import {Generator} from '../../../../../../src/render/generator';
import {RectMesh} from '../../../../../../src/graph/mesh';

@Component
export default class App extends Vue {
  // 初始化数据
  rainbow!: Rainbow;
  canvas!: HTMLCanvasElement;
  scr!: import('/Users/bytedance/Desktop/github/rainbow/src/search/searcher').Searcher;
  tf!: import('/Users/bytedance/Desktop/github/rainbow/src/render/texture').TextureFactroy;
  vp!: import('/Users/bytedance/Desktop/github/rainbow/src/viewport/index').Viewport;
  isDragging!: boolean;
  dragLastPoint!: any[];
  // 声明周期钩子
  mounted() {
    this.canvas = document.getElementById('canvas') as HTMLCanvasElement;
    this.canvas.style.transitionProperty = 'transform';
    this.canvas.style.userSelect = 'none';
    this.canvas.width = document.getElementById('main-canvas')!.clientWidth;
    this.canvas.height = document.getElementById('main-canvas')!.clientHeight;
    this.canvas.style.position = 'absolute';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.zIndex = '1';

    if (this.canvas) {
      this.rainbow = new Rainbow(this.canvas);
      this.rainbow.isDebug = false;
      this.scr = this.rainbow.searcher;
      this.tf = this.rainbow.textureFactroy;
      this.vp = this.rainbow.viewport;
      this.isDragging = false;
      this.dragLastPoint = [];
      this.rainbow.viewport.setBackgroundColor([255, 102, 102, 255]);

      const g = new Generator(this.rainbow, new RectMesh());
      for (let i = 0; i < 10; i++) {
        let obj = g.instance().show();
        obj.size = [100 + i * 100, 100 + i * 100];
        obj.borderWidth = 0.5;
        obj.backgroundColor = [180, 180, 180, 255];
        obj.borderColor = [255, 255, 255, 255];
        obj.translation = [200, 200];
        //  obj.outViewportStatus = OutViewportStatus.NONE;
      }

      this.initEvent();
      this.rainbow.render();
    }
  }

  initEvent() {
    // 鼠标缩放回调
    const _wheelHandler = evt => {
      if (evt.preventDefault) {
        evt.preventDefault();
      }
      evt.returnValue = false;
      const mx = evt.offsetX;
      const my = evt.offsetY;
      let d = -evt.wheelDeltaY / -1000;
      let transferData = this.vp.changeCoordinateFromScreen(mx, my);
      this.vp.scaleOrigin(d + this.vp.scale, transferData[0], transferData[1]);
    };

    // 开始视口拖动
    const _dragStart = evt => {
      this.isDragging = true;
      this.dragLastPoint = [evt.x, evt.y];
    };

    // 视口拖动
    const _drag = evt => {
      if (!this.isDragging) return;
      const dx = evt.x - this.dragLastPoint[0];
      const dy = evt.y - this.dragLastPoint[1];
      this.vp.translate(dx, -dy);
      this.dragLastPoint = [evt.x, evt.y];
    };

    // 视口拖动结束
    const _dragEnd = evt => {
      this.isDragging = false;
      this.dragLastPoint = [];
    };

    this.canvas.addEventListener('mousewheel', _wheelHandler);
    this.canvas.addEventListener('mousedown', _dragStart);
    this.canvas.addEventListener('mousemove', _drag);
    this.canvas.addEventListener('mouseup', _dragEnd);

    // this.canvas.addEventListener('click', _clickHandler);
    // this.canvas.addEventListener('mousemove', _move2Handler);
  }
}
