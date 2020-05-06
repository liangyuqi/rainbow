import Vue from 'vue';
import Component from 'vue-class-component';
import {initShaders} from '@/webgl/initShaders';
import {initCanvas} from '@/utils/webgl';

// 顶点着色器程序
// const VSHADER_SOURCE =
//   'void main(){ \n' +
//   ' gl_Position = vec4(1.0,0.0,0.0,1);\n' +
//   ' gl_PointSize = 20;\n' +
//   '}\n';

// 顶点着色器程序
// const VSHADER_SOURCE =
//   'void main(){ ' +
//   ' gl_Position = vec4(1.0,0.0,0.0,1);' +
//   ' gl_PointSize = 20;' +
//   '}';

// 顶点着色器程序
const VSHADER_SOURCE = `
        void main(){
         gl_Position = vec4(0.5,0.5,0.0,1);
          gl_PointSize = 10.0;
        }`;

// 片元着色器程序
const FSHADER_SOURCE = `
        void main(){
           gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        }`;

@Component
export default class App extends Vue {
  gl;
  canvas;
  // 声明周期钩子
  mounted() {
    this.canvas = initCanvas();

    if (this.canvas) {
      this.gl = this.canvas.getContext('webgl');
      // 不支持WebGL的浏览器将打印一个错误，并结束代码运行
      if (!this.gl) {
        console.error('浏览器不支持WebGL');
        return;
      }

      //   初始化着色器
      if (!initShaders(this.gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error('初始化着色器失败');
        return;
      }

      // 指定一个覆盖（清空）this.canvas的颜色
      this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

      // 清除this.canvas
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      // 将1个点绘制出来
      this.gl.drawArrays(this.gl.POINTS, 0, 1);
    }
  }
}
