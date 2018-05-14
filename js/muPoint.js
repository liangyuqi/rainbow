$(function() {
    var gl = null;
    var width = 700;
    var height = 500;
    var num = 1;
    initWebGL();
    function initWebGL() {
        var canvas = document.getElementById("glcanvas");
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
        var VSHADER_SOURCE = 
        `
            attribute vec4 a_p;
            attribute float size;
            void main() {
                gl_Position = a_p;
                gl_PointSize = size;
            }
        `;
        var FSHADER_SOURCE =
        `
            #ifdef GL_ES
            precision mediump float;
            #endif
            uniform vec4 color;
            void main(){
                float d = distance(gl_PointCoord, vec2(0.5,0.5));
                if(d < 0.5){
                    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);;
                }else{ discard;}
            }
        `;
        var program = gl.createProgram();
        gl.program = program;
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
        gl.program = program;
        // var data = createPoints(num);
        // setPoints(data.positions, data.num);
        // setSize(data.size, data.num);
        render();
    }
    function setPoints(data, num) {
        var vertexBuffer = gl.createBuffer();
        if(!vertexBuffer) {
            log('创建缓存区失败。');
            return -1;
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
        var a_position = gl.getAttribLocation(gl.program, 'a_p');
        gl.vertexAttribPointer(a_position, 3, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_position);
        gl.clearColor(0.0,0.0,0.0,1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.drawArrays(gl.POINTS, 0 , num);
    }
    function setSize(sizes, n) {
        var sizeBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, sizes, gl.STATIC_DRAW);
        var a_pointsize = gl.getAttribLocation(gl.program, 'size');
        gl.vertexAttribPointer(a_pointsize, 1, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(a_pointsize);
    }  
    function setBackgroundColor (r, g, b, a) {
        var color = BASE.webglColor(r,g,b,a);
        gl.clearColor(color.R, color.G, color.B, color.A);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

    function createPoints(gap) {
        //波动最大幅度 10px;
        var max = 10
        var n = 100;
        var m = 10;
        var arr = [];
        var size = [];
        for(var i = 0; i < n; i++) {
            for(var j = 0; j < m; j++) {
                var deg = (i*7-j*20+gap);                
                // var x = webglX(-(700/2)+i*20);
                // var y = webglY(-(500/2) + j*20);
                var x = webglX(-(width/2)-200+i*((width+500)/n)+j*20);
                var y = webglY(-(height/2)+Math.sin(numToDeg(deg))*(max+j*3) + j*20);
                var z = -1;
                var item = [x, y, z];
                arr = arr.concat(item);
                size.push((4-j/4));
            }
        }
        return {
            positions: new Float32Array(arr),
            size: new Float32Array(size),
            num: m * n
        }
    }
    function render() {
        requestAnimationFrame(render);
        num = num - 1;
        var data = createPoints(num);
        setSize(data.size, data.num);
        setPoints(data.positions, data.num);
    }

    function webglX (num) {
        return num/(width/2);
    };
    function webglY (num) {
        return num/(height /2);
    }
    //角度转弧度
    function numToDeg(num) {
        return  Math.PI*num/ 180;
    };
})