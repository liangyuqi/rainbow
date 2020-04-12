(window["webpackJsonprainbow"] = window["webpackJsonprainbow"] || []).push([[2],{

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.scss?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.ts":
/*!*************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _webgl_initShaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/webgl/initShaders */ \"./examples-webgl/webgl/initShaders.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n// import '~/lib/webgl-utils.js';\nvar VERTEXRS = [0.0, 0.5, -0.5, -0.5, 0.5, -0.5];\n// 顶点着色器程序\nvar VSHADER_SOURCE = \"\\n        attribute vec4 a_Position;\\n        uniform vec4 u_Translation;\\n        void main(){\\n          gl_Position = a_Position + u_Translation;\\n        }\";\n// 片元着色器程序\nvar FSHADER_SOURCE = \"\\n        void main(){\\n           gl_FragColor = vec4(1.0,0.0,0.0,1.0);\\n        }\";\n// 声明xyz三个方向上平移的距离\nvar Tx = 0.3, Ty = 0.3, Tz = 0;\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App() {\n        return _super !== null && _super.apply(this, arguments) || this;\n    }\n    // 初始化数据\n    // 声明周期钩子\n    App.prototype.mounted = function () {\n        var canvas = document.getElementById('canvas');\n        canvas.style.transitionProperty = 'transform';\n        canvas.style.userSelect = 'none';\n        canvas.width = document.getElementById('main-canvas').clientWidth;\n        canvas.height = document.getElementById('main-canvas').clientHeight;\n        canvas.style.position = 'absolute';\n        canvas.style.top = '0';\n        canvas.style.left = '0';\n        canvas.style.zIndex = '1';\n        if (canvas) {\n            // getWebGLContext();\n            var gl = canvas.getContext('webgl') ||\n                canvas.getContext('experimental-webgl');\n            // 不支持WebGL的浏览器将打印一个错误，并结束代码运行\n            if (!gl) {\n                console.error('浏览器不支持WebGL');\n                return;\n            }\n            // 初始化着色器\n            if (!Object(_webgl_initShaders__WEBPACK_IMPORTED_MODULE_2__[\"initShaders\"])(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {\n                console.error('初始化着色器失败');\n                return;\n            }\n            // 设置顶点位置\n            var n = this.initVertexBuffers(gl);\n            if (n === undefined || n < 0) {\n                console.error('无法获取顶点相关的信息');\n                return;\n            }\n            // 获取uniform变量的存储位置\n            // @ts-ignore\n            var u_Translation = gl.getUniformLocation(gl.program, 'u_Translation');\n            if (u_Translation === null || u_Translation < 0) {\n                console.log('无法获取变量的存储位置');\n                return;\n            }\n            // 给uniform变量赋值\n            // gl.uniform4f(u_Translation, Tx, Ty, Tz, 0.0);\n            // 指定一个覆盖（清空）canvas的rgba颜色 ，本质是setColor,他把 背景色存到了 webgl system中的glCOLOR_BUFFER_BIT，得手动render一下\n            gl.clearColor(0.0, 0.0, 0.5, 1.0);\n            // 清除canvas，会清除全部，再使用背景色 填充\n            gl.clear(gl.COLOR_BUFFER_BIT);\n            // 将三个点绘制出来\n            gl.drawArrays(gl.TRIANGLES, 0, n);\n        }\n    };\n    App.prototype.initVertexBuffers = function (gl) {\n        var vertices = new Float32Array(VERTEXRS);\n        var n = 3; // 绘制点的个数\n        // 创建缓冲区对象\n        var vertexBuffer = gl.createBuffer();\n        if (!vertexBuffer) {\n            console.error('创建缓冲区对象失败');\n            return -1;\n        }\n        // 将缓冲区对象绑定到目标\n        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);\n        // 向缓冲区对象中写入数据\n        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);\n        // 获取attribute变量的存储位置\n        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');\n        if (a_Position < 0) {\n            console.error('无法获取变量的存储位置');\n            return;\n        }\n        // 将缓冲区对象分配给a_Position变量\n        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);\n        // 链接a_Position变量与分配给它的缓冲区对象\n        gl.enableVertexAttribArray(a_Position);\n        return n;\n    };\n    App = __decorate([\n        vue_class_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ], App);\n    return App;\n}(vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.ts?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.vue":
/*!**************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triangles.vue?vue&type=template&id=983b962c&scoped=true& */ \"./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&\");\n/* harmony import */ var _triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triangles.vue?vue&type=script&lang=ts& */ \"./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& */ \"./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"983b962c\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"examples-webgl/vue/module/app/components/triangles/triangles.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.vue?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./triangles.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.vue?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./triangles.vue?vue&type=template&id=983b962c&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.vue?");

/***/ }),

/***/ "./examples-webgl/webgl/createProgram.ts":
/*!***********************************************!*\
  !*** ./examples-webgl/webgl/createProgram.ts ***!
  \***********************************************/
/*! exports provided: createProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createProgram\", function() { return createProgram; });\n/* harmony import */ var _loadShader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadShader */ \"./examples-webgl/webgl/loadShader.ts\");\n/**\n * Create the linked program object\n * 通过调用loadShader()函数，创建顶点着色器和片元着色器的着色器对象。loadShader()函数返回的着色器对象已经制定过源码并已经成功编译了。\n * createProgram()函数自己负责创建程序对象，然后将前面撞见的顶点着色器和片元着色器分配给程序对象。\n * 接着，该函数连接程序对象，并检查是否连接成功。如果连接成功，就返回程序对象。\n * @param gl GL context\n * @param vshader a vertex shader program (string)\n * @param fshader a fragment shader program (string)\n * @return created program object, or null if the creation has failed\n */\n\nfunction createProgram(gl, vshader, fshader) {\n    // 创建着色器对象\n    var vertexShader = Object(_loadShader__WEBPACK_IMPORTED_MODULE_0__[\"loadShader\"])(gl, gl.VERTEX_SHADER, vshader);\n    var fragmentShader = Object(_loadShader__WEBPACK_IMPORTED_MODULE_0__[\"loadShader\"])(gl, gl.FRAGMENT_SHADER, fshader);\n    if (!vertexShader || !fragmentShader) {\n        return null;\n    }\n    // 创建程序对象\n    var program = gl.createProgram();\n    if (!program) {\n        return null;\n    }\n    // 为程序对象分配顶点着色器和片元着色器\n    gl.attachShader(program, vertexShader);\n    gl.attachShader(program, fragmentShader);\n    // 连接着色器\n    gl.linkProgram(program);\n    // 检查连接\n    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);\n    if (!linked) {\n        var error = gl.getProgramInfoLog(program);\n        console.error('无法连接程序对象: ' + error);\n        gl.deleteProgram(program);\n        gl.deleteShader(fragmentShader);\n        gl.deleteShader(vertexShader);\n        return null;\n    }\n    return program;\n}\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/webgl/createProgram.ts?");

/***/ }),

/***/ "./examples-webgl/webgl/initShaders.ts":
/*!*********************************************!*\
  !*** ./examples-webgl/webgl/initShaders.ts ***!
  \*********************************************/
/*! exports provided: initShaders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initShaders\", function() { return initShaders; });\n/* harmony import */ var _createProgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createProgram */ \"./examples-webgl/webgl/createProgram.ts\");\n\n/**\n * Create a program object and make current\n * 首先调用createProgram()函数创建一个连接好的程序对象，然后告诉WebGL系统来使用这个程序对象，最后将程序悐设为gl对象的program属性。\n * @param gl GL context\n * @param vshader a vertex shader program (string)\n * @param fshader a fragment shader program (string)\n * @return true, if the program object was created and successfully made current\n */\nfunction initShaders(gl, vshader, fshader) {\n    var program = Object(_createProgram__WEBPACK_IMPORTED_MODULE_0__[\"createProgram\"])(gl, vshader, fshader);\n    if (!program) {\n        console.error('无法创建程序对象');\n        return false;\n    }\n    gl.useProgram(program);\n    gl.program = program;\n    return true;\n}\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/webgl/initShaders.ts?");

/***/ }),

/***/ "./examples-webgl/webgl/loadShader.ts":
/*!********************************************!*\
  !*** ./examples-webgl/webgl/loadShader.ts ***!
  \********************************************/
/*! exports provided: loadShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loadShader\", function() { return loadShader; });\n/**\n * 创建着色器对象\n * loadShader()函数首先创建了一个着色器对象，然后为改着色器对象指定源代码，并进行编译，接着检查编译是否成功，如果编译成功，没有出错，就返回着色器对象。\n * @param gl GL context\n * @param type the type of the shader object to be created\n * @param source shader program (string)\n * @return created shader object, or null if the creation has failed.\n */\nfunction loadShader(gl, type, source) {\n    // 创建着色器对象\n    var shader = gl.createShader(type);\n    if (shader == null) {\n        console.error('无法创建着色器');\n        return null;\n    }\n    // 设置着色器源代码\n    gl.shaderSource(shader, source);\n    // 编译着色器\n    gl.compileShader(shader);\n    // 检查着色器的编译状态\n    var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);\n    if (!compiled) {\n        var error = gl.getShaderInfoLog(shader);\n        console.error('Failed to compile shader: ' + error);\n        gl.deleteShader(shader);\n        return null;\n    }\n    return shader;\n}\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/webgl/loadShader.ts?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.scss?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.scss?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _triangles_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triangles.ts */ \"./examples-webgl/vue/module/app/components/triangles/triangles.ts\");\n// @ts-ignore\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_triangles_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"canvas\",\n    { attrs: { id: \"canvas\", height: \"400\", width: \"400\" } },\n    [_vm._v(\"\\n    你的浏览器不支持WebGL，请更换新的浏览器\\n\")]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/triangles/triangles.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

}]);