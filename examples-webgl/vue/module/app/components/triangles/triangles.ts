import Vue from 'vue';
import Component from 'vue-class-component';
import {initShaders} from '@/webgl/initShaders';

const VERTEXRS = [0.0, 0.5, -0.5, -0.5, 0.5, -0.5];

// 顶点着色器程序
const VSHADER_SOURCE = `
        attribute vec4 a_Position;
        uniform vec4 u_Translation;
        void main(){
          gl_Position = a_Position + u_Translation;
        }`;

// 片元着色器程序
const FSHADER_SOURCE = `
        void main(){
           gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        }`;

// 声明xyz三个方向上平移的距离
const Tx = 0.3,
  Ty = 0.3,
  Tz = 0;

@Component
export default class App extends Vue {
  // 初始化数据

  // 声明周期钩子
  mounted() {
    let canvas = document.getElementById('canvas') as HTMLCanvasElement;
    canvas.style.transitionProperty = 'transform';
    canvas.style.userSelect = 'none';
    canvas.width = document.getElementById('main-canvas')!.clientWidth;
    canvas.height = document.getElementById('main-canvas')!.clientHeight;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '1';

    if (canvas) {
      let gl =
        canvas.getContext('webgl') ||
        (canvas.getContext('experimental-webgl') as WebGLRenderingContext);
      // 不支持WebGL的浏览器将打印一个错误，并结束代码运行
      if (!gl) {
        console.error('浏览器不支持WebGL');
        return;
      }

      // 初始化着色器
      if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error('初始化着色器失败');
        return;
      }

      // 设置顶点位置
      let n = this.initVertexBuffers(gl);
      if (n === undefined || n < 0) {
        console.error('无法获取顶点相关的信息');
        return;
      }

      // 获取uniform变量的存储位置
      // @ts-ignore
      let u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');
      if (u_Translation === null || u_Translation < 0) {
        console.log('无法获取变量的存储位置');
        return;
      }

      // 给uniform变量赋值
      // gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);

      // 指定一个覆盖（清空）canvas的颜色 ，本质是setColor,他把 背景色存到了 webgl system中的glCOLOR_BUFFER_BIT，得手动render一下
      gl.clearColor(0.0, 0.0, 0.5, 1.0);

      // 清除canvas，会清除全部，再使用背景色 填充
      gl.clear(gl.COLOR_BUFFER_BIT);

      // 将三个点绘制出来
      gl.drawArrays(gl.TRIANGLES, 0, n);
    }
  }

  initVertexBuffers(gl) {
    let vertices = new Float32Array(VERTEXRS);
    let n = 3; // 绘制点的个数

    // 创建缓冲区对象
    let vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      console.error('创建缓冲区对象失败');
      return -1;
    }

    // 将缓冲区对象绑定到目标
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    // 向缓冲区对象中写入数据
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // 获取attribute变量的存储位置
    let a_Position = gl.getAttribLocation(gl.program, 'a_Position');

    if (a_Position < 0) {
      console.error('无法获取变量的存储位置');
      return;
    }

    // 将缓冲区对象分配给a_Position变量
    gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);

    // 链接a_Position变量与分配给它的缓冲区对象
    gl.enableVertexAttribArray(a_Position);

    return n;
  }
}
