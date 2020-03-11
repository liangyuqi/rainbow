/**
 * 创建program
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */

export function createProgram(gl, vertexShader, fragmentShader) {
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
