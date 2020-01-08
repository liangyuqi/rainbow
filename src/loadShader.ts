/**
 * 创建着色器对象
 * loadShader()函数首先创建了一个着色器对象，然后为改着色器对象指定源代码，并进行编译，接着检查编译是否成功，如果编译成功，没有出错，就返回着色器对象。
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */
export function loadShader(gl, type, source) {
    // 创建着色器对象
    var shader = gl.createShader(type);
    if (shader == null) {
        console.error('无法创建着色器');
        return null;
    }

    // 设置着色器源代码
    gl.shaderSource(shader, source);

    // 编译着色器
    gl.compileShader(shader);

    // 检查着色器的编译状态
    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (!compiled) {
        var error = gl.getShaderInfoLog(shader);
        console.error('Failed to compile shader: ' + error);
        gl.deleteShader(shader);
        return null;
    }

    return shader;

}