    function initWebGL() {
        var canvas = document.getElementById("glcanvas") as HTMLCanvasElement;
        var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

        //着色器编程
        var VSHADER_SOURCE = `
        attribute vec4 a_Position;
        attribute float a_PointSize;
        void main() {
            gl_Position = a_Position;
            gl_PointSize = a_PointSize;
        }`;

        //动态颜色
        var FSHADER_SOURCE = `
        precision mediump float;
        uniform vec4 vColor;
        void main() {
            gl_FragColor = vColor;
        }`;
        //圆点
        // var FSHADER_SOURCE = `
        // #ifdef GL_ES
        //     precision mediump float;
        // #endif
        // void main() {
        //     float d = distance(gl_PointCoord, vec2(0.5,0.5));
        //         if(d < 0.5){
        //             gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        //         }else{ discard;} 
        // }`;
        var program = gl.createProgram();
        // <!-- 创建顶点着色器 -->
        var vShader = gl.createShader(gl.VERTEX_SHADER);
        // <!-- 创建片元着色器 -->
        var fShader = gl.createShader(gl.FRAGMENT_SHADER);
        // <!-- shader容器与着色器绑定 -->
        gl.shaderSource(vShader, VSHADER_SOURCE);
        gl.shaderSource(fShader, FSHADER_SOURCE);
        // <!-- 将GLSE语言编译成浏览器可用代码 -->
        gl.compileShader(vShader);
        gl.compileShader(fShader);
        // <!-- 将着色器添加到程序上 -->
        gl.attachShader(program, vShader);
        gl.attachShader(program, fShader);
        // <!-- 链接程序，在链接操作执行以后，可以任意修改shader的源代码，对shader重新编译不会影响整个程序，除非重新链接程序 -->
        gl.linkProgram(program);
        // <!-- 加载并使用链接好的程序 -->
        gl.useProgram(program);


        var aPosition = gl.getAttribLocation(program, 'a_Position');
       
        gl.vertexAttrib3f(aPosition, 0.0, 0.5, 0.0);
        // 或
        // var p = new Float32Array([0.5, 0.5, 0.5]);
        // gl.vertexAttrib3fv(aPosition, p);
        var aPointSize = gl.getAttribLocation(program, 'a_PointSize');
        gl.vertexAttrib1f(aPointSize, 10.0);

        //动态设置颜色
        var vColor = gl.getUniformLocation(program, 'vColor');
        // rgba
        gl.uniform4f(vColor, 1.0, 0.0, 0.0, 1.0);
        //或使用Float32Array来传参
        // var color = new Float32Array([1.0, 0.0, 0.0, 1.0]);
        // gl.uniform4fv(vColor,color);
        
        gl.clearColor(0.0,0.0,0.0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0 ,1);
    }

    initWebGL();