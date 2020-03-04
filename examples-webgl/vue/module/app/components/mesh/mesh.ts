import Vue from 'vue';
import Component from 'vue-class-component';
import {Rainbow} from '../../../../../../src/rainbow';

@Component
export default class App extends Vue {
  // 初始化数据
  rainbow!: Rainbow;
  canvas!: HTMLCanvasElement;
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
      this.rainbow.viewport.setBackgroundColor([255, 102, 102, 255]);
      this.rainbow.render();
    }
  }
}
