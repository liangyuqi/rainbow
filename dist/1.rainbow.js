(window["webpackJsonprainbow"] = window["webpackJsonprainbow"] || []).push([[1],{

/***/ "./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.ts":
/*!*****************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.ts ***!
  \*****************************************************************/
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


//顶点着色器程序
var VSHADER_SOURCE = "\n        attribute vec4 a_Position;\n        void main(){\n          gl_Position = a_Position;\n          gl_PointSize = 10.0;\n        }";
//片元着色器程序
var FSHADER_SOURCE = "\n        void main(){\n           gl_FragColor = vec4(1.0,0.0,0.0,1.0);\n        }";
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 初始化数据
        _this.g_points = []; //声明一个可以存储点的信息的数组
        return _this;
    }
    // 声明周期钩子
    App.prototype.mounted = function () {
        this.canvas = document.getElementById('canvas');
        this.canvas.style.transitionProperty = 'transform';
        this.canvas.style.userSelect = 'none';
        this.canvas.width = document.getElementById('main-canvas').clientWidth;
        this.canvas.height = document.getElementById('main-canvas').clientHeight;
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.zIndex = '1';
        // if (this.canvas) {
        //   this.gl = this.canvas.getContext('webgl');
        //   //不支持WebGL的浏览器将打印一个错误，并结束代码运行
        //   if (!this.gl) {
        //     console.error('浏览器不支持WebGL');
        //     return;
        //   }
        //   //初始化着色器
        //   if (!initShaders(this.gl, VSHADER_SOURCE, FSHADER_SOURCE)) {
        //     console.error('初始化着色器失败');
        //     return;
        //   }
        //   //设置顶点位置
        //   //获取attribute变量的存储位置
        //   let program = this.gl.createProgram();
        //   this.a_Position = this.gl.getAttribLocation(program!, 'a_Position');
        //   if (this.a_Position < 0) {
        //     console.error('无法获取变量的存储位置');
        //     return;
        //   }
        //   //指定一个覆盖（清空）this.canvas的颜色
        //   this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
        //   //清除this.canvas
        //   this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        //   //将三个点绘制出来
        //   this.gl.drawArrays(this.gl.POINTS, 0, 1);
        // }
    };
    App.prototype.addPoint = function (e) {
        var _this = this;
        var x = e.offsetX;
        var y = e.offsetY;
        x = (x - this.canvas.width / 2) / (this.canvas.width / 2); //计算出x轴WebGL的浮点数
        y = (this.canvas.height / 2 - y) / (this.canvas.height / 2); //计算出y轴WebGL的浮点数
        this.g_points.push({ x: x, y: y }); //将数据存入数组
        //清除this.canvas
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.g_points.forEach(function (point) {
            //循环添加点
            //将点的位置传递到变量中a_position
            _this.gl.vertexAttrib3f(_this.a_Position, point.x, point.y, 0.0);
            //绘制点
            _this.gl.drawArrays(_this.gl.POINTS, 0, 1);
        });
    };
    App = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1__["default"]
    ], App);
    return App;
}(vue__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.vue":
/*!******************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.vue?vue&type=template&id=3b8c1518&scoped=true& */ "./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&");
/* harmony import */ var _point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./point.vue?vue&type=script&lang=ts& */ "./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _point_scss_vue_type_style_index_0_id_3b8c1518_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& */ "./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3b8c1518",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "examples-webgl/vue/module/app/components/point/point.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&":
/*!*******************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./point.vue?vue&type=template&id=3b8c1518&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_point_vue_vue_type_template_id_3b8c1518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/point/point.scss?vue&type=style&index=0&id=3b8c1518&lang=scss&scoped=true&");

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

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=script&lang=ts& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point.ts */ "./examples-webgl/vue/module/app/components/point/point.ts");
// @ts-ignore

/* harmony default export */ __webpack_exports__["default"] = (_point_ts__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/point/point.vue?vue&type=template&id=3b8c1518&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    {
      attrs: { id: "canvas", height: "400", width: "400" },
      on: { click: _vm.addPoint }
    },
    [_vm._v("\n    你的浏览器不支持WebGL，请更换新的浏览器\n")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=1.rainbow.js.map