import {Rainbow} from 'src/rainbow';
import {ImageTexture} from 'src/render/texture';
import {
  PreloadAllImages,
  IMAGE_SOURCE_LIST,
  IImageSource,
  GetTextureByType,
} from '@/utils/resource';
import {RectMesh} from 'src/graph/mesh';
import {
  Generator,
  TextFieldGenerator,
  TextFieldVerticalAlign,
} from 'src/render/generator';
import {ImageEnum} from '@/enum/image';
import {TextField} from 'src/render/textfield';

export class RainbowCharts {
  rainbow!: Rainbow;
  canvas!: HTMLCanvasElement;
  option!: any;
  scr!: import('/Users/bytedance/Desktop/github/rainbow/src/search/searcher').Searcher;
  tf!: import('/Users/bytedance/Desktop/github/rainbow/src/render/texture').TextureFactroy;
  vp!: import('/Users/bytedance/Desktop/github/rainbow/src/viewport/index').Viewport;
  isDragging!: boolean;
  dragLastPoint!: any[];
  uvList!: ImageTexture[];
  constructor(options: {canvas: HTMLCanvasElement}) {
    this.canvas = options.canvas;
    this.rainbow = new Rainbow(this.canvas);
    this.rainbow.isDebug = false;
    this.scr = this.rainbow.searcher;
    this.tf = this.rainbow.textureFactroy;
    this.vp = this.rainbow.viewport;
    this.isDragging = false;
    this.dragLastPoint = [];
    this.rainbow.viewport.setBackgroundColor([255, 102, 102, 255]);
  }

  setOption(option: any) {
    this.option = option;
    console.log(option);
    option.xAxis.data.forEach((src, index) => {
      IMAGE_SOURCE_LIST.push({zIndex: index, type: src, src: src});
    });

    console.log(IMAGE_SOURCE_LIST);
    PreloadAllImages(IMAGE_SOURCE_LIST, this.tf)
      .then((res: any) => {
        this.uvList = res;
        this.drawBar();
        this.initEvent();
        this.rainbow.render();
      })
      .catch((e) => {
        console.error(e);
      });
  }

  drawBar() {
    let rectMesh: RectMesh = new RectMesh();
    let yVal = this.option.series[0].data;
    this.option.xAxis.data.forEach((xSrc, index) => {
      const g = new Generator(this.rainbow, rectMesh, 0, 0, 3000);
      let obj = g.instance().show();
      obj.size = [100, 100];
      obj.translation = [150 * (index + 1), 50];
      obj.texture = GetTextureByType(xSrc, this.uvList);

      let objBar = g.instance().show();
      let barHeight = yVal[index] * 2;
      objBar.size = [100, barHeight];
      objBar.translation = [150 * (index + 1), (1 / 2) * barHeight + 125];
      objBar.backgroundColor = [255, 0, 123, 200];

      const gText: TextFieldGenerator = new TextFieldGenerator(
        this.rainbow,
        10,
        1,
        TextFieldVerticalAlign.MIDDLE,
        10,
        3000
      );

      let fontSize: number = 16;
      const t: TextField = gText.instance();
      t.show();
      t.text = yVal[index] + '';
      t.fontSize = fontSize;
      t.color = [255, 255, 255, 255];
      t.translation = [150 * (index + 1) - 25, barHeight + 125 + fontSize];
    });
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
