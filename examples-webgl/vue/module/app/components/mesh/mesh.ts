import Vue from 'vue';
import Component from 'vue-class-component';
import {Rainbow} from '../../../../../../src/rainbow';
import {Generator} from '../../../../../../src/render/generator';
import {RectMesh} from '../../../../../../src/graph/mesh';
import {
  GetTextureByType,
  PreloadAllImages,
  IMAGE_SOURCE_LIST,
} from '@/utils/resource';
import {ImageEnum} from '@/enum/image';
import {ImageTexture} from 'src/render/texture';
import {initCanvas} from '@/utils/webgl';

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
  uvList!: ImageTexture[];

  mounted() {
    this.canvas = initCanvas();

    if (this.canvas) {
      this.rainbow = new Rainbow(this.canvas);
      this.rainbow.isDebug = false;
      this.scr = this.rainbow.searcher;
      this.tf = this.rainbow.textureFactroy;
      this.vp = this.rainbow.viewport;
      this.isDragging = false;
      this.dragLastPoint = [];
      this.rainbow.viewport.setBackgroundColor([255, 102, 102, 255]);

      PreloadAllImages(IMAGE_SOURCE_LIST, this.tf)
        .then((res: any) => {
          this.uvList = res;
          this.drawTikTok();
          this.drawMesh();
          this.initEvent();
          this.rainbow.render();
        })
        .catch((e) => {
          console.error(e);
        });
    }
  }

  /**
   * 画矩形 demo
   */
  drawMesh() {
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
  }

  /**
   * 画抖音 demo
   */
  drawTikTok() {
    const g = new Generator(this.rainbow, new RectMesh(), 0, 0, 3000);
    let obj = g.instance().show();
    obj.size = [100, 100];
    obj.translation = [800, 800];
    obj.texture = GetTextureByType(ImageEnum.TikTok, this.uvList);
    // obj.borderWidth = 2;
    // obj.borderColor = [255, 255, 255, 255];
    //  obj.outViewportStatus = OutViewportStatus.NONE;
  }

  /**
   * 绑定事件交互
   */
  initEvent() {
    // 鼠标缩放回调
    const _wheelHandler = (evt) => {
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
    const _dragStart = (evt) => {
      this.isDragging = true;
      this.dragLastPoint = [evt.x, evt.y];
    };

    // 视口拖动
    const _drag = (evt) => {
      if (!this.isDragging) return;
      const dx = evt.x - this.dragLastPoint[0];
      const dy = evt.y - this.dragLastPoint[1];
      this.vp.translate(dx, -dy);
      this.dragLastPoint = [evt.x, evt.y];
    };

    // 视口拖动结束
    const _dragEnd = (evt) => {
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
