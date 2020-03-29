(window["webpackJsonprainbow"] = window["webpackJsonprainbow"] || []).push([[1],{

/***/ "./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& */ \"./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); \n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.scss?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.ts":
/*!*****************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ \"./node_modules/vue-class-component/dist/vue-class-component.esm.js\");\n/* harmony import */ var _webgl_initShaders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/webgl/initShaders */ \"./examples-webgl/webgl/initShaders.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n// 顶点着色器程序\nvar VSHADER_SOURCE = \"\\n        attribute vec4 a_Position;\\n        void main(){\\n          gl_Position = a_Position;\\n          gl_PointSize = 10.0;\\n        }\";\n// 片元着色器程序\nvar FSHADER_SOURCE = \"\\n        void main(){\\n           gl_FragColor = vec4(1.0,0.0,0.0,1.0);\\n        }\";\nvar App = /** @class */ (function (_super) {\n    __extends(App, _super);\n    function App() {\n        var _this = _super !== null && _super.apply(this, arguments) || this;\n        // 初始化数据\n        _this.g_points = []; // 声明一个可以存储点的信息的数组\n        return _this;\n    }\n    // 声明周期钩子\n    App.prototype.mounted = function () {\n        this.canvas = document.getElementById('canvas');\n        this.canvas.style.transitionProperty = 'transform';\n        this.canvas.style.userSelect = 'none';\n        this.canvas.width = document.getElementById('main-canvas').clientWidth;\n        this.canvas.height = document.getElementById('main-canvas').clientHeight;\n        this.canvas.style.position = 'absolute';\n        this.canvas.style.top = '0';\n        this.canvas.style.left = '0';\n        this.canvas.style.zIndex = '1';\n        if (this.canvas) {\n            this.gl = this.canvas.getContext('webgl');\n            // 不支持WebGL的浏览器将打印一个错误，并结束代码运行\n            if (!this.gl) {\n                console.error('浏览器不支持WebGL');\n                return;\n            }\n            // 初始化着色器\n            if (!Object(_webgl_initShaders__WEBPACK_IMPORTED_MODULE_2__[\"initShaders\"])(this.gl, VSHADER_SOURCE, FSHADER_SOURCE)) {\n                console.error('初始化着色器失败');\n                return;\n            }\n            // 设置顶点位置\n            // 获取attribute变量的存储位置\n            var program = this.gl.createProgram();\n            this.a_Position = this.gl.getAttribLocation(program, 'a_Position');\n            if (this.a_Position < 0) {\n                console.error('无法获取变量的存储位置');\n                return;\n            }\n            // 指定一个覆盖（清空）this.canvas的颜色\n            this.gl.clearColor(0.0, 0.0, 0.0, 1.0);\n            // 清除this.canvas\n            this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n            // 将三个点绘制出来\n            this.gl.drawArrays(this.gl.POINTS, 0, 1);\n        }\n    };\n    App.prototype.addPoint = function (e) {\n        var _this = this;\n        var x = e.offsetX;\n        var y = e.offsetY;\n        x = (x - this.canvas.width / 2) / (this.canvas.width / 2); // 计算出x轴WebGL的浮点数\n        y = (this.canvas.height / 2 - y) / (this.canvas.height / 2); // 计算出y轴WebGL的浮点数\n        this.g_points.push({ x: x, y: y }); // 将数据存入数组\n        // 清除this.canvas\n        this.gl.clear(this.gl.COLOR_BUFFER_BIT);\n        this.g_points.forEach(function (point) {\n            // 循环添加点\n            // 将点的位置传递到变量中a_position\n            _this.gl.vertexAttrib3f(_this.a_Position, point.x, point.y, 0.0);\n            // 绘制点\n            _this.gl.drawArrays(_this.gl.POINTS, 0, 1);\n        });\n    };\n    App = __decorate([\n        vue_class_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ], App);\n    return App;\n}(vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.ts?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.vue":
/*!******************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.vue?vue&type=template&id=3b8c1518&scoped=true& */ \"./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&\");\n/* harmony import */ var _point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.vue?vue&type=script&lang=ts& */ \"./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& */ \"./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\n  _point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"3b8c1518\",\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"examples-webgl/vue/module/app/components/point/point.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.vue?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=script&lang=ts& */ \"./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.vue?");

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=template&id=3b8c1518&scoped=true& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.vue?");

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.scss?./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& */ \"./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.scss?./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _point_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.ts */ \"./examples-webgl/vue/module/app/components/point/point.ts\");\n// @ts-ignore\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_point_ts__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.vue?./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"canvas\",\n    {\n      attrs: { id: \"canvas\", height: \"400\", width: \"400\" },\n      on: { click: _vm.addPoint }\n    },\n    [_vm._v(\"\\n    你的浏览器不支持WebGL，请更换新的浏览器\\n\")]\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://rainbow/./examples-webgl/vue/module/app/components/point/point.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ })

}]);