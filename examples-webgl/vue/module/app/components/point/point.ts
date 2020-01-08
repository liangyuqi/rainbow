import Vue from 'vue'
import Component from 'vue-class-component'
import { initShaders } from '../../../../../../src/initShaders'


//顶点着色器程序
const VSHADER_SOURCE = `
        attribute vec4 a_Position; 
        void main(){
          gl_Position = a_Position;
          gl_PointSize = 10.0;
        }`

//片元着色器程序
const FSHADER_SOURCE = `
        void main(){
           gl_FragColor = vec4(1.0,0.0,0.0,1.0);
        }`


@Component
export default class App extends Vue {
  // 初始化数据
  g_points: Array<any> = [];//声明一个可以存储点的信息的数组
  a_Position
  gl
  canvas
  // 声明周期钩子
  mounted() {

    this.canvas = document.getElementById("canvas") as HTMLCanvasElement
    this.canvas.style.transitionProperty = 'transform'
    this.canvas.style.userSelect = 'none'
    this.canvas.width = document.getElementById("main-canvas")!.clientWidth
    this.canvas.height = document.getElementById("main-canvas")!.clientHeight
    this.canvas.style.position = 'absolute'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
    this.canvas.style.zIndex = '1'

    if (this.canvas) {
      this.gl = this.canvas.getContext("webgl")
      //不支持WebGL的浏览器将打印一个错误，并结束代码运行
      if (!this.gl) {
        console.error("浏览器不支持WebGL");
        return;
      }

      //初始化着色器
      if (!initShaders(this.gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        console.error("初始化着色器失败");
        return;
      }
      //设置顶点位置
      //获取attribute变量的存储位置
      let program = this.gl.createProgram()
      this.a_Position = this.gl.getAttribLocation(program!, "a_Position");

      if (this.a_Position < 0) {
        console.error("无法获取变量的存储位置");
        return;
      }

      //指定一个覆盖（清空）this.canvas的颜色
      this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

      //清除this.canvas
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);

      //将三个点绘制出来
      this.gl.drawArrays(this.gl.POINTS, 0, 1);

    }

  }

  addPoint(e: MouseEvent) {
    let x = e.offsetX;
    let y = e.offsetY;
    x = (x - this.canvas.width / 2) / (this.canvas.width / 2);//计算出x轴WebGL的浮点数
    y = (this.canvas.height / 2 - y) / (this.canvas.height / 2);//计算出y轴WebGL的浮点数

    this.g_points.push({ x: x, y: y });//将数据存入数组

    //清除this.canvas
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);

    this.g_points.forEach((point) => {
      //循环添加点
      //将点的位置传递到变量中a_position
      this.gl.vertexAttrib3f(this.a_Position, point.x, point.y, 0.0);
      //绘制点
      this.gl.drawArrays(this.gl.POINTS, 0, 1);
    })
  }

}



