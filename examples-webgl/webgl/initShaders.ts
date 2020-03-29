import {createProgram} from './createProgram';

/**
 * Create a program object and make current
 * 首先调用createProgram()函数创建一个连接好的程序对象，然后告诉WebGL系统来使用这个程序对象，最后将程序悐设为gl对象的program属性。
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return true, if the program object was created and successfully made current
 */
export function initShaders(gl, vshader, fshader) {
  let program = createProgram(gl, vshader, fshader);
  if (!program) {
    console.error('无法创建程序对象');
    return false;
  }

  gl.useProgram(program);
  gl.program = program;

  return true;
}
