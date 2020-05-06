import Vue from 'vue';
import Component from 'vue-class-component';
import {initShaders} from '@/webgl/initShaders';
import {initCanvas} from '@/utils/webgl';

// 顶点着色器程序
const VSHADER_SOURCE = `
        attribute vec4 a_Position;
        void main(){
          gl_Position = a_Position;
          gl_PointSize = 5.0;
        }`;

// 片元着色器程序
const FSHADER_SOURCE = `
        void main(){
           gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        }`;

@Component
export default class App extends Vue {
  // 初始化数据
  g_points: Array<any> = []; // 声明一个可以存储点的信息的数组
  a_Position;
  gl;
  canvas;
  // 声明周期钩子
  mounted() {
    this.canvas = initCanvas();

    if (this.canvas) {
      this.gl = this.canvas.getContext('webgl2');
      // 不支持WebGL的浏览器将打印一个错误，并结束代码运行
      if (!this.gl) {
        console.error('浏览器不支持WebGL');
        return;
      }

      // 初始化着色器
      if (!initShaders(this.gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error('初始化着色器失败');
        return;
      }
      // 设置顶点位置
      // 获取attribute变量的存储位置
      let program = this.gl.createProgram();
      this.a_Position = this.gl.getAttribLocation(program!, 'a_Position');

      if (this.a_Position < 0) {
        console.error('无法获取变量的存储位置');
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

  addPoint(e: MouseEvent) {
    let x = e.offsetX;
    let y = e.offsetY;
    x = (x - this.canvas.width / 2) / (this.canvas.width / 2); // 计算出x轴WebGL的浮点数
    y = (this.canvas.height / 2 - y) / (this.canvas.height / 2); // 计算出y轴WebGL的浮点数

    this.g_points.push({x, y});
    // this.g_points.push(x);
    // this.g_points.push(y); // 将数据存入数组

    // 清除this.canvas
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.g_points.forEach((point) => {
      // 循环添加点
      // 将点的位置传递到变量中a_position
      this.gl.vertexAttrib3f(this.a_Position, point.x, point.y, 0.0);
      // 绘制点
      this.gl.drawArrays(this.gl.POINTS, 0, 1);
    });

    // 使用顶点缓冲区对象和类型化数组
    // 设置顶点位置
    // let n = this.initVertexBuffers(this.gl);
    // 将n个点绘制出来
    // this.gl.drawArrays(this.gl.POINTS, 0, n);
  }

  initVertexBuffers(gl) {
    let vertices = new Float32Array(this.g_points);
    // console.log(vertices);
    let n = this.g_points.length / 2; // 绘制点的个数

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
