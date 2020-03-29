/**
 * Create the linked program object
 * 通过调用loadShader()函数，创建顶点着色器和片元着色器的着色器对象。loadShader()函数返回的着色器对象已经制定过源码并已经成功编译了。
 * createProgram()函数自己负责创建程序对象，然后将前面撞见的顶点着色器和片元着色器分配给程序对象。
 * 接着，该函数连接程序对象，并检查是否连接成功。如果连接成功，就返回程序对象。
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */

import {loadShader} from './loadShader';

export function createProgram(gl, vshader, fshader) {
  // 创建着色器对象
  let vertexShader = loadShader(gl, gl.VERTEX_SHADER, vshader);
  let fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fshader);
  if (!vertexShader || !fragmentShader) {
    return null;
  }

  // 创建程序对象
  let program = gl.createProgram();
  if (!program) {
    return null;
  }

  // 为程序对象分配顶点着色器和片元着色器
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);

  // 连接着色器
  gl.linkProgram(program);

  // 检查连接
  let linked = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (!linked) {
    let error = gl.getProgramInfoLog(program);
    console.error('无法连接程序对象: ' + error);
    gl.deleteProgram(program);
    gl.deleteShader(fragmentShader);
    gl.deleteShader(vertexShader);
    return null;
  }
  return program;
}
