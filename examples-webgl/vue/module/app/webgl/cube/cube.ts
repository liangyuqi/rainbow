import Vue from 'vue';
import Component from 'vue-class-component';
import {initShaders} from '@/webgl/initShaders';
import {initCanvas} from '@/utils/webgl';
import * as Matrix4 from '../../../../../../lib/cuon-matrix.js';

// 顶点着色器程序
const VSHADER_SOURCE = `
        attribute vec4 a_Position;
        attribute vec4 a_Color;
        uniform mat4 u_MvpMatrix;
        varying vec4 v_Color;
        void main(){
        gl_Position = u_MvpMatrix * a_Position;
        v_Color = a_Color;
        }`;

// 片元着色器程序
const FSHADER_SOURCE = `
        #ifdef GL_ES
        precision mediump float;
        #endif
        varying vec4 v_Color;
        void main(){
           gl_FragColor = v_Color;
        }`;

@Component
export default class App extends Vue {
  // 初始化数据

  // 声明周期钩子
  mounted() {
    let canvas = initCanvas();

    if (canvas) {
      // getWebGLContext();
      let gl =
        canvas.getContext('webgl2') ||
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
      if (n < 0) {
        console.log('Failed to set the positions of the vertices');
        return;
      }

      // 指定清空<canvas>颜色
      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      // 是否开启 隐藏面消除
      gl.enable(gl.DEPTH_TEST);

      // 获取 u_ViewMatrix 、u_ModelMatrix和 u_ProjMatrix 变量的存储位置
      // @ts-ignore
      let u_MvpMatrix = gl.getUniformLocation(gl.program, 'u_MvpMatrix');
      if (u_MvpMatrix === null || u_MvpMatrix < 0) {
        console.log('Failed to get the storage location of u_MvpMatrix');
        return;
      }

      let mvpMatrix = new Matrix4.Matrix4();
      mvpMatrix.setPerspective(30, 1, 1, 100);
      mvpMatrix.lookAt(3, 3, 7, 0, 0, 0, 0, 1, 0);
      // mvpMatrix.lookAt(10, 10, 10, 0, 0, -1, 0, 1, 0);

      gl.uniformMatrix4fv(u_MvpMatrix, false, mvpMatrix.elements);

      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      // 绘制立方体
      gl.drawElements(gl.TRIANGLES, n, gl.UNSIGNED_BYTE, 0);
    }
  }

  initVertexBuffers(gl) {
    let verticesColors = new Float32Array([
      // 顶点坐标和颜色
      1.0,
      1.0,
      1.0,
      1.0,
      1.0,
      1.0, // v0 白色
      -1.0,
      1.0,
      1.0,
      1.0,
      0.0,
      1.0, // v1 品红色
      -1.0,
      -1.0,
      1.0,
      1.0,
      0.0,
      0.0, // v2 红色
      1.0,
      -1.0,
      1.0,
      1.0,
      1.0,
      0.0, // v3 黄色
      1.0,
      -1.0,
      -1.0,
      0.0,
      1.0,
      0.0, // v4 绿色
      1.0,
      1.0,
      -1.0,
      0.0,
      1.0,
      1.0, // v5 青色
      -1.0,
      1.0,
      -1.0,
      0.0,
      0.0,
      1.0, // v6 蓝色
      -1.0,
      -1.0,
      -1.0,
      0.0,
      0.0,
      0.0, // v7 黑色
    ]);

    // 顶点索引
    let indices = new Uint8Array([
      0,
      1,
      2,
      0,
      2,
      3, // 前
      0,
      3,
      4,
      0,
      4,
      5, // 右
      0,
      5,
      6,
      0,
      6,
      1, // 上
      1,
      6,
      7,
      1,
      7,
      2, // 左
      7,
      4,
      3,
      7,
      3,
      2, // 下
      4,
      7,
      6,
      4,
      6,
      5, // 后
    ]);

    // 创建缓冲区对象
    let vertexColorBuffer = gl.createBuffer();
    let indexBuffer = gl.createBuffer();
    if (!vertexColorBuffer || !indexBuffer) {
      console.log('Failed to create thie buffer object');
      return -1;
    }

    // 将缓冲区对象保存到目标上
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuffer);
    // 向缓存对象写入数据
    gl.bufferData(gl.ARRAY_BUFFER, verticesColors, gl.STATIC_DRAW);

    let FSIZE = verticesColors.BYTES_PER_ELEMENT;

    let a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if (a_Position < 0) {
      console.log('Failed to get the storage location of a_Position');
      return -1;
    }

    gl.vertexAttribPointer(a_Position, 3, gl.FLOAT, false, FSIZE * 6, 0);
    gl.enableVertexAttribArray(a_Position);

    let a_Color = gl.getAttribLocation(gl.program, 'a_Color');
    if (a_Color < 0) {
      console.log('Failed to get the storage location of a_Color');
      return -1;
    }

    gl.vertexAttribPointer(a_Color, 3, gl.FLOAT, false, FSIZE * 6, FSIZE * 3);
    gl.enableVertexAttribArray(a_Color);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    return indices.length;
  }
}
