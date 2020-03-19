(window["webpackJsonprainbow"] = window["webpackJsonprainbow"] || []).push([[2],{

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.ts":
/*!*************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { initShaders } from '../../../../../../src/initShaders'
//顶点着色器程序
var VSHADER_SOURCE = "\n        attribute vec4 a_Position;\n        uniform vec4 u_Translation;\n        void main(){\n          gl_Position = a_Position + u_Translation;\n        }";
//片元着色器程序
var FSHADER_SOURCE = "\n        void main(){\n           gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n        }";
//声明xyz三个方向上平移的距离
var Tx = 0.3, Ty = 0.3, Tz = 0;
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // 初始化数据
    // 声明周期钩子
    App.prototype.mounted = function () {
        var canvas = document.getElementById('canvas');
        canvas.style.transitionProperty = 'transform';
        canvas.style.userSelect = 'none';
        canvas.width = document.getElementById('main-canvas').clientWidth;
        canvas.height = document.getElementById('main-canvas').clientHeight;
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.zIndex = '1';
        // if (canvas) {
        //   let gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl") as WebGLRenderingContext
        //   //不支持WebGL的浏览器将打印一个错误，并结束代码运行
        //   if (!gl) {
        //     console.error("浏览器不支持WebGL");
        //     return;
        //   }
        //   //初始化着色器
        //   if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        //     console.error("初始化着色器失败");
        //     return;
        //   }
        //   //设置顶点位置
        //   let n = this.initVertexBuffers(gl);
        //   if (n === undefined || n < 0) {
        //     console.error("无法获取顶点相关的信息");
        //     return;
        //   }
        //    //获取uniform变量的存储位置
        //     // @ts-ignore
        //    var u_Translation = gl.getUniformLocation(gl.program,"u_Translation");
        //    if(u_Translation === null || u_Translation < 0){
        //        console.log("无法获取变量的存储位置");
        //        return;
        //    }
        //    //给uniform变量赋值
        //    gl.uniform4f(u_Translation,Tx,Ty,Tz,0.0);
        //   //指定一个覆盖（清空）canvas的颜色
        //   gl.clearColor(0.0, 0.0, 0.0, 1.0);
        //   //清除canvas
        //   gl.clear(gl.COLOR_BUFFER_BIT);
        //   //将三个点绘制出来
        //   gl.drawArrays(gl.TRIANGLES, 0, n);
        // }
    };
    App.prototype.initVertexBuffers = function (gl) {
        var vertices = new Float32Array([0.0, 0.5, -0.5, -0.5, 0.5, -0.5]);
        var n = 3; //绘制点的个数
        //创建缓冲区对象
        var vertexBuffer = gl.createBuffer();
        if (!vertexBuffer) {
            console.error('创建缓冲区对象失败');
            return -1;
        }
        //将缓冲区对象绑定到目标
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        //向缓冲区对象中写入数据
        gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
        //获取attribute变量的存储位置
        var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
        if (a_Position < 0) {
            console.error('无法获取变量的存储位置');
            return;
        }
        //将缓冲区对象分配给a_Position变量
        gl.vertexAttribPointer(a_Position, 2, gl.FLOAT, false, 0, 0);
        //链接a_Position变量与分配给它的缓冲区对象
        gl.enableVertexAttribArray(a_Position);
        return n;
    };
    App = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1__["default"]
    ], App);
    return App;
}(vue__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.vue":
/*!**************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triangles.vue?vue&type=template&id=983b962c&scoped=true& */ "./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&");
/* harmony import */ var _triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triangles.vue?vue&type=script&lang=ts& */ "./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _triangles_scss_vue_type_style_index_0_id_983b962c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& */ "./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "983b962c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "examples-webgl/vue/module/app/components/triangles/triangles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&":
/*!***************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./triangles.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./triangles.vue?vue&type=template&id=983b962c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_triangles_vue_vue_type_template_id_983b962c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/triangles/triangles.scss?vue&type=style&index=0&id=983b962c&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=script&lang=ts& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _triangles_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./triangles.ts */ "./examples-webgl/vue/module/app/components/triangles/triangles.ts");
// @ts-ignore

/* harmony default export */ __webpack_exports__["default"] = (_triangles_ts__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/triangles/triangles.vue?vue&type=template&id=983b962c&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "canvas",
    { attrs: { id: "canvas", height: "400", width: "400" } },
    [_vm._v("\n    你的浏览器不支持WebGL，请更换新的浏览器\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=2.rainbow.js.map