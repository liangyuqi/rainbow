(window["webpackJsonprainbow"] = window["webpackJsonprainbow"] || []).push([[0],{

/***/ "./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/mesh/mesh.ts":
/*!***************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/mesh/mesh.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var vue_class_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-class-component */ "./node_modules/vue-class-component/dist/vue-class-component.esm.js");
/* harmony import */ var _src_rainbow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../src/rainbow */ "./src/rainbow/index.ts");
/* harmony import */ var _src_render_generator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../src/render/generator */ "./src/render/generator.ts");
/* harmony import */ var _src_graph_mesh__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../src/graph/mesh */ "./src/graph/mesh.ts");
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





var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
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
        if (this.canvas) {
            this.rainbow = new _src_rainbow__WEBPACK_IMPORTED_MODULE_2__["Rainbow"](this.canvas);
            this.rainbow.isDebug = false;
            this.scr = this.rainbow.searcher;
            this.tf = this.rainbow.textureFactroy;
            this.vp = this.rainbow.viewport;
            this.isDragging = false;
            this.dragLastPoint = [];
            this.rainbow.viewport.setBackgroundColor([255, 102, 102, 255]);
            var g = new _src_render_generator__WEBPACK_IMPORTED_MODULE_3__["Generator"](this.rainbow, new _src_graph_mesh__WEBPACK_IMPORTED_MODULE_4__["RectMesh"]());
            for (var i = 0; i < 10; i++) {
                var obj = g.instance().show();
                obj.size = [100 + i * 100, 100 + i * 100];
                obj.borderWidth = 0.5;
                obj.backgroundColor = [180, 180, 180, 255];
                obj.borderColor = [255, 255, 255, 255];
                obj.translation = [200, 200];
                //  obj.outViewportStatus = OutViewportStatus.NONE;
            }
            this.initEvent();
            this.rainbow.render();
        }
    };
    App.prototype.initEvent = function () {
        var _this = this;
        // 鼠标缩放回调
        var _wheelHandler = function (evt) {
            if (evt.preventDefault) {
                evt.preventDefault();
            }
            evt.returnValue = false;
            var mx = evt.offsetX;
            var my = evt.offsetY;
            var d = -evt.wheelDeltaY / -1000;
            var transferData = _this.vp.changeCoordinateFromScreen(mx, my);
            _this.vp.scaleOrigin(d + _this.vp.scale, transferData[0], transferData[1]);
        };
        // 开始视口拖动
        var _dragStart = function (evt) {
            _this.isDragging = true;
            _this.dragLastPoint = [evt.x, evt.y];
        };
        // 视口拖动
        var _drag = function (evt) {
            if (!_this.isDragging)
                return;
            var dx = evt.x - _this.dragLastPoint[0];
            var dy = evt.y - _this.dragLastPoint[1];
            _this.vp.translate(dx, -dy);
            _this.dragLastPoint = [evt.x, evt.y];
        };
        // 视口拖动结束
        var _dragEnd = function (evt) {
            _this.isDragging = false;
            _this.dragLastPoint = [];
        };
        this.canvas.addEventListener('mousewheel', _wheelHandler);
        this.canvas.addEventListener('mousedown', _dragStart);
        this.canvas.addEventListener('mousemove', _drag);
        this.canvas.addEventListener('mouseup', _dragEnd);
        // this.canvas.addEventListener('click', _clickHandler);
        // this.canvas.addEventListener('mousemove', _move2Handler);
    };
    App = __decorate([
        vue_class_component__WEBPACK_IMPORTED_MODULE_1__["default"]
    ], App);
    return App;
}(vue__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "./examples-webgl/vue/module/app/components/mesh/mesh.vue":
/*!****************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/mesh/mesh.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mesh_vue_vue_type_template_id_83b4749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh.vue?vue&type=template&id=83b4749c&scoped=true& */ "./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=template&id=83b4749c&scoped=true&");
/* harmony import */ var _mesh_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mesh.vue?vue&type=script&lang=ts& */ "./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport *//* harmony import */ var _mesh_scss_vue_type_style_index_0_id_83b4749c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true& */ "./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mesh_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mesh_vue_vue_type_template_id_83b4749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mesh_vue_vue_type_template_id_83b4749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "83b4749c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "examples-webgl/vue/module/app/components/mesh/mesh.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=script&lang=ts&":
/*!*****************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=script&lang=ts& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_mesh_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/ts-loader??ref--1!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mesh.vue?vue&type=script&lang=ts& */ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=script&lang=ts&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_ts_loader_index_js_ref_1_node_modules_vue_loader_lib_index_js_vue_loader_options_mesh_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=template&id=83b4749c&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=template&id=83b4749c&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mesh_vue_vue_type_template_id_83b4749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mesh.vue?vue&type=template&id=83b4749c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=template&id=83b4749c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mesh_vue_vue_type_template_id_83b4749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_mesh_vue_vue_type_template_id_83b4749c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./lib/gl-matrix.js":
/*!**************************!*\
  !*** ./lib/gl-matrix.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.4.0
 */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMatrixArrayType = setMatrixArrayType;
exports.toRadian = toRadian;
exports.equals = equals;
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

/**
 * Common utilities
 * @module glMatrix
 */

// Configuration Constants
var EPSILON = exports.EPSILON = 0.000001;
var ARRAY_TYPE = exports.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
var RANDOM = exports.RANDOM = Math.random;

/**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */
function setMatrixArrayType(type) {
  exports.ARRAY_TYPE = ARRAY_TYPE = type;
}

var degree = Math.PI / 180;

/**
 * Convert Degree To Radian
 *
 * @param {Number} a Angle in Degrees
 */
function toRadian(a) {
  return a * degree;
}

/**
 * Tests whether or not the arguments have approximately the same value, within an absolute
 * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
 * than or equal to 1.0, and a relative tolerance is used for larger values)
 *
 * @param {Number} a The first number to test.
 * @param {Number} b The second number to test.
 * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
 */
function equals(a, b) {
  return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.fromMat4 = fromMat4;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.rotate = rotate;
exports.scale = scale;
exports.fromTranslation = fromTranslation;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromMat2d = fromMat2d;
exports.fromQuat = fromQuat;
exports.normalFromMat4 = normalFromMat4;
exports.projection = projection;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 3x3 Matrix
 * @module mat3
 */

/**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function fromMat4(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[4];
  out[4] = a[5];
  out[5] = a[6];
  out[6] = a[8];
  out[7] = a[9];
  out[8] = a[10];
  return out;
}

/**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */
function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Create a new mat3 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} A new mat3
 */
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  var out = new glMatrix.ARRAY_TYPE(9);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set the components of a mat3 to the given values
 *
 * @param {mat3} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m10 Component in column 1, row 0 position (index 3)
 * @param {Number} m11 Component in column 1, row 1 position (index 4)
 * @param {Number} m12 Component in column 1, row 2 position (index 5)
 * @param {Number} m20 Component in column 2, row 0 position (index 6)
 * @param {Number} m21 Component in column 2, row 1 position (index 7)
 * @param {Number} m22 Component in column 2, row 2 position (index 8)
 * @returns {mat3} out
 */
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m10;
  out[4] = m11;
  out[5] = m12;
  out[6] = m20;
  out[7] = m21;
  out[8] = m22;
  return out;
}

/**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a12 = a[5];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a01;
    out[5] = a[7];
    out[6] = a02;
    out[7] = a12;
  } else {
    out[0] = a[0];
    out[1] = a[3];
    out[2] = a[6];
    out[3] = a[1];
    out[4] = a[4];
    out[5] = a[7];
    out[6] = a[2];
    out[7] = a[5];
    out[8] = a[8];
  }

  return out;
}

/**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b01 = a22 * a11 - a12 * a21;
  var b11 = -a22 * a10 + a12 * a20;
  var b21 = a21 * a10 - a11 * a20;

  // Calculate the determinant
  var det = a00 * b01 + a01 * b11 + a02 * b21;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = b01 * det;
  out[1] = (-a22 * a01 + a02 * a21) * det;
  out[2] = (a12 * a01 - a02 * a11) * det;
  out[3] = b11 * det;
  out[4] = (a22 * a00 - a02 * a20) * det;
  out[5] = (-a12 * a00 + a02 * a10) * det;
  out[6] = b21 * det;
  out[7] = (-a21 * a00 + a01 * a20) * det;
  out[8] = (a11 * a00 - a01 * a10) * det;
  return out;
}

/**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  out[0] = a11 * a22 - a12 * a21;
  out[1] = a02 * a21 - a01 * a22;
  out[2] = a01 * a12 - a02 * a11;
  out[3] = a12 * a20 - a10 * a22;
  out[4] = a00 * a22 - a02 * a20;
  out[5] = a02 * a10 - a00 * a12;
  out[6] = a10 * a21 - a11 * a20;
  out[7] = a01 * a20 - a00 * a21;
  out[8] = a00 * a11 - a01 * a10;
  return out;
}

/**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}

/**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2];
  var a10 = a[3],
      a11 = a[4],
      a12 = a[5];
  var a20 = a[6],
      a21 = a[7],
      a22 = a[8];

  var b00 = b[0],
      b01 = b[1],
      b02 = b[2];
  var b10 = b[3],
      b11 = b[4],
      b12 = b[5];
  var b20 = b[6],
      b21 = b[7],
      b22 = b[8];

  out[0] = b00 * a00 + b01 * a10 + b02 * a20;
  out[1] = b00 * a01 + b01 * a11 + b02 * a21;
  out[2] = b00 * a02 + b01 * a12 + b02 * a22;

  out[3] = b10 * a00 + b11 * a10 + b12 * a20;
  out[4] = b10 * a01 + b11 * a11 + b12 * a21;
  out[5] = b10 * a02 + b11 * a12 + b12 * a22;

  out[6] = b20 * a00 + b21 * a10 + b22 * a20;
  out[7] = b20 * a01 + b21 * a11 + b22 * a21;
  out[8] = b20 * a02 + b21 * a12 + b22 * a22;
  return out;
}

/**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */
function translate(out, a, v) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      x = v[0],
      y = v[1];

  out[0] = a00;
  out[1] = a01;
  out[2] = a02;

  out[3] = a10;
  out[4] = a11;
  out[5] = a12;

  out[6] = x * a00 + y * a10 + a20;
  out[7] = x * a01 + y * a11 + a21;
  out[8] = x * a02 + y * a12 + a22;
  return out;
}

/**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function rotate(out, a, rad) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a10 = a[3],
      a11 = a[4],
      a12 = a[5],
      a20 = a[6],
      a21 = a[7],
      a22 = a[8],
      s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c * a00 + s * a10;
  out[1] = c * a01 + s * a11;
  out[2] = c * a02 + s * a12;

  out[3] = c * a10 - s * a00;
  out[4] = c * a11 - s * a01;
  out[5] = c * a12 - s * a02;

  out[6] = a20;
  out[7] = a21;
  out[8] = a22;
  return out;
};

/**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1];

  out[0] = x * a[0];
  out[1] = x * a[1];
  out[2] = x * a[2];

  out[3] = y * a[3];
  out[4] = y * a[4];
  out[5] = y * a[5];

  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 1;
  out[5] = 0;
  out[6] = v[0];
  out[7] = v[1];
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);

  out[0] = c;
  out[1] = s;
  out[2] = 0;

  out[3] = -s;
  out[4] = c;
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;

  out[3] = 0;
  out[4] = v[1];
  out[5] = 0;

  out[6] = 0;
  out[7] = 0;
  out[8] = 1;
  return out;
}

/**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/
function fromMat2d(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = 0;

  out[3] = a[2];
  out[4] = a[3];
  out[5] = 0;

  out[6] = a[4];
  out[7] = a[5];
  out[8] = 1;
  return out;
}

/**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[3] = yx - wz;
  out[6] = zx + wy;

  out[1] = yx + wz;
  out[4] = 1 - xx - zz;
  out[7] = zy - wx;

  out[2] = zx - wy;
  out[5] = zy + wx;
  out[8] = 1 - xx - yy;

  return out;
}

/**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/
function normalFromMat4(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

  out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

  out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

  return out;
}

/**
 * Generates a 2D projection matrix with the given bounds
 *
 * @param {mat3} out mat3 frustum matrix will be written into
 * @param {number} width Width of your gl context
 * @param {number} height Height of gl context
 * @returns {mat3} out
 */
function projection(out, width, height) {
  out[0] = 2 / width;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = -2 / height;
  out[5] = 0;
  out[6] = -1;
  out[7] = 1;
  out[8] = 1;
  return out;
}

/**
 * Returns a string representation of a mat3
 *
 * @param {mat3} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
}

/**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
}

/**
 * Adds two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat3} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  return out;
}

/**
 * Adds two mat3's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat3} out the receiving vector
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat3} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat3} a The first matrix.
 * @param {mat3} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7],
      a8 = a[8];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7],
      b8 = b[8];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}

/**
 * Alias for {@link mat3.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link mat3.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = undefined;
exports.create = create;
exports.clone = clone;
exports.length = length;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.hermite = hermite;
exports.bezier = bezier;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformMat3 = transformMat3;
exports.transformQuat = transformQuat;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.angle = angle;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 3 Dimensional Vector
 * @module vec3
 */

/**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  return out;
}

/**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */
function fromValues(x, y, z) {
  var out = new glMatrix.ARRAY_TYPE(3);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  return out;
}

/**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */
function set(out, x, y, z) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  return out;
}

/**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  return out;
}

/**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  return out;
}

/**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  return out;
}

/**
 * Math.ceil the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to ceil
 * @returns {vec3} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  return out;
}

/**
 * Math.floor the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to floor
 * @returns {vec3} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  return out;
}

/**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  return out;
}

/**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  return out;
}

/**
 * Math.round the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to round
 * @returns {vec3} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  return out;
}

/**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  return out;
}

/**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return Math.sqrt(x * x + y * y + z * z);
}

/**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  return x * x + y * y + z * z;
}

/**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  return x * x + y * y + z * z;
}

/**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  return out;
}

/**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  return out;
}

/**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var len = x * x + y * y + z * z;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2];
  var bx = b[0],
      by = b[1],
      bz = b[2];

  out[0] = ay * bz - az * by;
  out[1] = az * bx - ax * bz;
  out[2] = ax * by - ay * bx;
  return out;
}

/**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  return out;
}

/**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function hermite(out, a, b, c, d, t) {
  var factorTimes2 = t * t;
  var factor1 = factorTimes2 * (2 * t - 3) + 1;
  var factor2 = factorTimes2 * (t - 2) + t;
  var factor3 = factorTimes2 * (t - 1);
  var factor4 = factorTimes2 * (3 - 2 * t);

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */
function bezier(out, a, b, c, d, t) {
  var inverseFactor = 1 - t;
  var inverseFactorTimesTwo = inverseFactor * inverseFactor;
  var factorTimes2 = t * t;
  var factor1 = inverseFactorTimesTwo * inverseFactor;
  var factor2 = 3 * t * inverseFactorTimesTwo;
  var factor3 = 3 * factorTimes2 * inverseFactor;
  var factor4 = factorTimes2 * t;

  out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
  out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
  out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */
function random(out, scale) {
  scale = scale || 1.0;

  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  var z = glMatrix.RANDOM() * 2.0 - 1.0;
  var zScale = Math.sqrt(1.0 - z * z) * scale;

  out[0] = Math.cos(r) * zScale;
  out[1] = Math.sin(r) * zScale;
  out[2] = z * scale;
  return out;
}

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var w = m[3] * x + m[7] * y + m[11] * z + m[15];
  w = w || 1.0;
  out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
  out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
  out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
  return out;
}

/**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat3} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2];
  out[0] = x * m[0] + y * m[3] + z * m[6];
  out[1] = x * m[1] + y * m[4] + z * m[7];
  out[2] = x * m[2] + y * m[5] + z * m[8];
  return out;
}

/**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */
function transformQuat(out, a, q) {
  // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations

  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];

  // calculate quat * vec
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  return out;
}

/**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateX(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0];
  r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
  r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateY(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
  r[1] = p[1];
  r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */
function rotateZ(out, a, b, c) {
  var p = [],
      r = [];
  //Translate point to the origin
  p[0] = a[0] - b[0];
  p[1] = a[1] - b[1];
  p[2] = a[2] - b[2];

  //perform rotation
  r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
  r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
  r[2] = p[2];

  //translate to correct position
  out[0] = r[0] + b[0];
  out[1] = r[1] + b[1];
  out[2] = r[2] + b[2];

  return out;
}

/**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */
function angle(a, b) {
  var tempA = fromValues(a[0], a[1], a[2]);
  var tempB = fromValues(b[0], b[1], b[2]);

  normalize(tempA, tempA);
  normalize(tempB, tempB);

  var cosine = dot(tempA, tempB);

  if (cosine > 1.0) {
    return 0;
  } else if (cosine < -1.0) {
    return Math.PI;
  } else {
    return Math.acos(cosine);
  }
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec3} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec3} a The first vector.
 * @param {vec3} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}

/**
 * Alias for {@link vec3.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/**
 * Alias for {@link vec3.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link vec3.divide}
 * @function
 */
var div = exports.div = divide;

/**
 * Alias for {@link vec3.distance}
 * @function
 */
var dist = exports.dist = distance;

/**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */
var sqrDist = exports.sqrDist = squaredDistance;

/**
 * Alias for {@link vec3.length}
 * @function
 */
var len = exports.len = length;

/**
 * Alias for {@link vec3.squaredLength}
 * @function
 */
var sqrLen = exports.sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = exports.forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 3;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
    }

    return a;
  };
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = undefined;
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.lerp = lerp;
exports.random = random;
exports.transformMat4 = transformMat4;
exports.transformQuat = transformQuat;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 4 Dimensional Vector
 * @module vec4
 */

/**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  return out;
}

/**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */
function fromValues(x, y, z, w) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */
function set(out, x, y, z, w) {
  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = w;
  return out;
}

/**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  out[2] = a[2] * b[2];
  out[3] = a[3] * b[3];
  return out;
}

/**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  out[2] = a[2] / b[2];
  out[3] = a[3] / b[3];
  return out;
}

/**
 * Math.ceil the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to ceil
 * @returns {vec4} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  out[2] = Math.ceil(a[2]);
  out[3] = Math.ceil(a[3]);
  return out;
}

/**
 * Math.floor the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to floor
 * @returns {vec4} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  out[2] = Math.floor(a[2]);
  out[3] = Math.floor(a[3]);
  return out;
}

/**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  out[2] = Math.min(a[2], b[2]);
  out[3] = Math.min(a[3], b[3]);
  return out;
}

/**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  out[2] = Math.max(a[2], b[2]);
  out[3] = Math.max(a[3], b[3]);
  return out;
}

/**
 * Math.round the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to round
 * @returns {vec4} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  out[2] = Math.round(a[2]);
  out[3] = Math.round(a[3]);
  return out;
}

/**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0];
  var y = b[1] - a[1];
  var z = b[2] - a[2];
  var w = b[3] - a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return Math.sqrt(x * x + y * y + z * z + w * w);
}

/**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  return x * x + y * y + z * z + w * w;
}

/**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = -a[3];
  return out;
}

/**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  out[2] = 1.0 / a[2];
  out[3] = 1.0 / a[3];
  return out;
}

/**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */
function normalize(out, a) {
  var x = a[0];
  var y = a[1];
  var z = a[2];
  var w = a[3];
  var len = x * x + y * y + z * z + w * w;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
  }
  return out;
}

/**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}

/**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */
function lerp(out, a, b, t) {
  var ax = a[0];
  var ay = a[1];
  var az = a[2];
  var aw = a[3];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  out[2] = az + t * (b[2] - az);
  out[3] = aw + t * (b[3] - aw);
  return out;
}

/**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */
function random(out, vectorScale) {
  vectorScale = vectorScale || 1.0;

  //TODO: This is a pretty awful way of doing this. Find something better.
  out[0] = glMatrix.RANDOM();
  out[1] = glMatrix.RANDOM();
  out[2] = glMatrix.RANDOM();
  out[3] = glMatrix.RANDOM();
  normalize(out, out);
  scale(out, out, vectorScale);
  return out;
}

/**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */
function transformMat4(out, a, m) {
  var x = a[0],
      y = a[1],
      z = a[2],
      w = a[3];
  out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
  out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
  out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
  out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
  return out;
}

/**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */
function transformQuat(out, a, q) {
  var x = a[0],
      y = a[1],
      z = a[2];
  var qx = q[0],
      qy = q[1],
      qz = q[2],
      qw = q[3];

  // calculate quat * vec
  var ix = qw * x + qy * z - qz * y;
  var iy = qw * y + qz * x - qx * z;
  var iz = qw * z + qx * y - qy * x;
  var iw = -qx * x - qy * y - qz * z;

  // calculate result * inverse quat
  out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
  out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
  out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
  out[3] = a[3];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec4} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec4} a The first vector.
 * @param {vec4} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Alias for {@link vec4.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/**
 * Alias for {@link vec4.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link vec4.divide}
 * @function
 */
var div = exports.div = divide;

/**
 * Alias for {@link vec4.distance}
 * @function
 */
var dist = exports.dist = distance;

/**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */
var sqrDist = exports.sqrDist = squaredDistance;

/**
 * Alias for {@link vec4.length}
 * @function
 */
var len = exports.len = length;

/**
 * Alias for {@link vec4.squaredLength}
 * @function
 */
var sqrLen = exports.sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = exports.forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 4;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];
    }

    return a;
  };
}();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vec4 = exports.vec3 = exports.vec2 = exports.quat = exports.mat4 = exports.mat3 = exports.mat2d = exports.mat2 = exports.glMatrix = undefined;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

var _mat = __webpack_require__(5);

var mat2 = _interopRequireWildcard(_mat);

var _mat2d = __webpack_require__(6);

var mat2d = _interopRequireWildcard(_mat2d);

var _mat2 = __webpack_require__(1);

var mat3 = _interopRequireWildcard(_mat2);

var _mat3 = __webpack_require__(7);

var mat4 = _interopRequireWildcard(_mat3);

var _quat = __webpack_require__(8);

var quat = _interopRequireWildcard(_quat);

var _vec = __webpack_require__(9);

var vec2 = _interopRequireWildcard(_vec);

var _vec2 = __webpack_require__(2);

var vec3 = _interopRequireWildcard(_vec2);

var _vec3 = __webpack_require__(3);

var vec4 = _interopRequireWildcard(_vec3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.glMatrix = glMatrix;
exports.mat2 = mat2;
exports.mat2d = mat2d;
exports.mat3 = mat3;
exports.mat4 = mat4;
exports.quat = quat;
exports.vec2 = vec2;
exports.vec3 = vec3;
exports.vec4 = vec4; /**
                      * @fileoverview gl-matrix - High performance matrix and vector operations
                      * @author Brandon Jones
                      * @author Colin MacKenzie IV
                      * @version 2.4.0
                      */

/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */
// END HEADER

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.str = str;
exports.frob = frob;
exports.LDU = LDU;
exports.add = add;
exports.subtract = subtract;
exports.exactEquals = exactEquals;
exports.equals = equals;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 2x2 Matrix
 * @module mat2
 */

/**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  return out;
}

/**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Create a new mat2 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out A new 2x2 matrix
 */
function fromValues(m00, m01, m10, m11) {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Set the components of a mat2 to the given values
 *
 * @param {mat2} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m10 Component in column 1, row 0 position (index 2)
 * @param {Number} m11 Component in column 1, row 1 position (index 3)
 * @returns {mat2} out
 */
function set(out, m00, m01, m10, m11) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m10;
  out[3] = m11;
  return out;
}

/**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache
  // some values
  if (out === a) {
    var a1 = a[1];
    out[1] = a[2];
    out[2] = a1;
  } else {
    out[0] = a[0];
    out[1] = a[2];
    out[2] = a[1];
    out[3] = a[3];
  }

  return out;
}

/**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];

  // Calculate the determinant
  var det = a0 * a3 - a2 * a1;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = a3 * det;
  out[1] = -a1 * det;
  out[2] = -a2 * det;
  out[3] = a0 * det;

  return out;
}

/**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */
function adjoint(out, a) {
  // Caching this value is nessecary if out == a
  var a0 = a[0];
  out[0] = a[3];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a0;

  return out;
}

/**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[2] * a[1];
}

/**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  return out;
}

/**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  return out;
}

/**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2
 *
 * @param {mat2} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
}

/**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix
 * @param {mat2} D the diagonal matrix
 * @param {mat2} U the upper triangular matrix
 * @param {mat2} a the input matrix to factorize
 */

function LDU(L, D, U, a) {
  L[2] = a[2] / a[0];
  U[0] = a[0];
  U[1] = a[1];
  U[3] = a[3] - L[2] * U[1];
  return [L, D, U];
}

/**
 * Adds two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2} a The first matrix.
 * @param {mat2} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  return out;
}

/**
 * Adds two mat2's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2} out the receiving vector
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  return out;
}

/**
 * Alias for {@link mat2.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link mat2.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.identity = identity;
exports.fromValues = fromValues;
exports.set = set;
exports.invert = invert;
exports.determinant = determinant;
exports.multiply = multiply;
exports.rotate = rotate;
exports.scale = scale;
exports.translate = translate;
exports.fromRotation = fromRotation;
exports.fromScaling = fromScaling;
exports.fromTranslation = fromTranslation;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 2x3 Matrix
 * @module mat2d
 *
 * @description
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */

/**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  return out;
}

/**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Create a new mat2d with the given values
 *
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} A new mat2d
 */
function fromValues(a, b, c, d, tx, ty) {
  var out = new glMatrix.ARRAY_TYPE(6);
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Set the components of a mat2d to the given values
 *
 * @param {mat2d} out the receiving matrix
 * @param {Number} a Component A (index 0)
 * @param {Number} b Component B (index 1)
 * @param {Number} c Component C (index 2)
 * @param {Number} d Component D (index 3)
 * @param {Number} tx Component TX (index 4)
 * @param {Number} ty Component TY (index 5)
 * @returns {mat2d} out
 */
function set(out, a, b, c, d, tx, ty) {
  out[0] = a;
  out[1] = b;
  out[2] = c;
  out[3] = d;
  out[4] = tx;
  out[5] = ty;
  return out;
}

/**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */
function invert(out, a) {
  var aa = a[0],
      ab = a[1],
      ac = a[2],
      ad = a[3];
  var atx = a[4],
      aty = a[5];

  var det = aa * ad - ab * ac;
  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = ad * det;
  out[1] = -ab * det;
  out[2] = -ac * det;
  out[3] = aa * det;
  out[4] = (ac * aty - ad * atx) * det;
  out[5] = (ab * atx - aa * aty) * det;
  return out;
}

/**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  return a[0] * a[3] - a[1] * a[2];
}

/**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function multiply(out, a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  out[0] = a0 * b0 + a2 * b1;
  out[1] = a1 * b0 + a3 * b1;
  out[2] = a0 * b2 + a2 * b3;
  out[3] = a1 * b2 + a3 * b3;
  out[4] = a0 * b4 + a2 * b5 + a4;
  out[5] = a1 * b4 + a3 * b5 + a5;
  return out;
}

/**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function rotate(out, a, rad) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  out[0] = a0 * c + a2 * s;
  out[1] = a1 * c + a3 * s;
  out[2] = a0 * -s + a2 * c;
  out[3] = a1 * -s + a3 * c;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/
function scale(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0 * v0;
  out[1] = a1 * v0;
  out[2] = a2 * v1;
  out[3] = a3 * v1;
  out[4] = a4;
  out[5] = a5;
  return out;
}

/**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/
function translate(out, a, v) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var v0 = v[0],
      v1 = v[1];
  out[0] = a0;
  out[1] = a1;
  out[2] = a2;
  out[3] = a3;
  out[4] = a0 * v0 + a2 * v1 + a4;
  out[5] = a1 * v0 + a3 * v1 + a5;
  return out;
}

/**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */
function fromRotation(out, rad) {
  var s = Math.sin(rad),
      c = Math.cos(rad);
  out[0] = c;
  out[1] = s;
  out[2] = -s;
  out[3] = c;
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = v[1];
  out[4] = 0;
  out[5] = 0;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  out[4] = v[0];
  out[5] = v[1];
  return out;
}

/**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
}

/**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
}

/**
 * Adds two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat2d} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  return out;
}

/**
 * Adds two mat2d's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat2d} out the receiving vector
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat2d} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat2d} a The first matrix.
 * @param {mat2d} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3],
      a4 = a[4],
      a5 = a[5];
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3],
      b4 = b[4],
      b5 = b[5];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5));
}

/**
 * Alias for {@link mat2d.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link mat2d.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sub = exports.mul = undefined;
exports.create = create;
exports.clone = clone;
exports.copy = copy;
exports.fromValues = fromValues;
exports.set = set;
exports.identity = identity;
exports.transpose = transpose;
exports.invert = invert;
exports.adjoint = adjoint;
exports.determinant = determinant;
exports.multiply = multiply;
exports.translate = translate;
exports.scale = scale;
exports.rotate = rotate;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.fromTranslation = fromTranslation;
exports.fromScaling = fromScaling;
exports.fromRotation = fromRotation;
exports.fromXRotation = fromXRotation;
exports.fromYRotation = fromYRotation;
exports.fromZRotation = fromZRotation;
exports.fromRotationTranslation = fromRotationTranslation;
exports.getTranslation = getTranslation;
exports.getScaling = getScaling;
exports.getRotation = getRotation;
exports.fromRotationTranslationScale = fromRotationTranslationScale;
exports.fromRotationTranslationScaleOrigin = fromRotationTranslationScaleOrigin;
exports.fromQuat = fromQuat;
exports.frustum = frustum;
exports.perspective = perspective;
exports.perspectiveFromFieldOfView = perspectiveFromFieldOfView;
exports.ortho = ortho;
exports.lookAt = lookAt;
exports.targetTo = targetTo;
exports.str = str;
exports.frob = frob;
exports.add = add;
exports.subtract = subtract;
exports.multiplyScalar = multiplyScalar;
exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 4x4 Matrix
 * @module mat4
 */

/**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  out[2] = a[2];
  out[3] = a[3];
  out[4] = a[4];
  out[5] = a[5];
  out[6] = a[6];
  out[7] = a[7];
  out[8] = a[8];
  out[9] = a[9];
  out[10] = a[10];
  out[11] = a[11];
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Create a new mat4 with the given values
 *
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} A new mat4
 */
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  var out = new glMatrix.ARRAY_TYPE(16);
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set the components of a mat4 to the given values
 *
 * @param {mat4} out the receiving matrix
 * @param {Number} m00 Component in column 0, row 0 position (index 0)
 * @param {Number} m01 Component in column 0, row 1 position (index 1)
 * @param {Number} m02 Component in column 0, row 2 position (index 2)
 * @param {Number} m03 Component in column 0, row 3 position (index 3)
 * @param {Number} m10 Component in column 1, row 0 position (index 4)
 * @param {Number} m11 Component in column 1, row 1 position (index 5)
 * @param {Number} m12 Component in column 1, row 2 position (index 6)
 * @param {Number} m13 Component in column 1, row 3 position (index 7)
 * @param {Number} m20 Component in column 2, row 0 position (index 8)
 * @param {Number} m21 Component in column 2, row 1 position (index 9)
 * @param {Number} m22 Component in column 2, row 2 position (index 10)
 * @param {Number} m23 Component in column 2, row 3 position (index 11)
 * @param {Number} m30 Component in column 3, row 0 position (index 12)
 * @param {Number} m31 Component in column 3, row 1 position (index 13)
 * @param {Number} m32 Component in column 3, row 2 position (index 14)
 * @param {Number} m33 Component in column 3, row 3 position (index 15)
 * @returns {mat4} out
 */
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  out[0] = m00;
  out[1] = m01;
  out[2] = m02;
  out[3] = m03;
  out[4] = m10;
  out[5] = m11;
  out[6] = m12;
  out[7] = m13;
  out[8] = m20;
  out[9] = m21;
  out[10] = m22;
  out[11] = m23;
  out[12] = m30;
  out[13] = m31;
  out[14] = m32;
  out[15] = m33;
  return out;
}

/**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */
function identity(out) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function transpose(out, a) {
  // If we are transposing ourselves we can skip a few steps but have to cache some values
  if (out === a) {
    var a01 = a[1],
        a02 = a[2],
        a03 = a[3];
    var a12 = a[6],
        a13 = a[7];
    var a23 = a[11];

    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a01;
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a02;
    out[9] = a12;
    out[11] = a[14];
    out[12] = a03;
    out[13] = a13;
    out[14] = a23;
  } else {
    out[0] = a[0];
    out[1] = a[4];
    out[2] = a[8];
    out[3] = a[12];
    out[4] = a[1];
    out[5] = a[5];
    out[6] = a[9];
    out[7] = a[13];
    out[8] = a[2];
    out[9] = a[6];
    out[10] = a[10];
    out[11] = a[14];
    out[12] = a[3];
    out[13] = a[7];
    out[14] = a[11];
    out[15] = a[15];
  }

  return out;
}

/**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function invert(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

  if (!det) {
    return null;
  }
  det = 1.0 / det;

  out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
  out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
  out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
  out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
  out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
  out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
  out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
  out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
  out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
  out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
  out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
  out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
  out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
  out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
  out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
  out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;

  return out;
}

/**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */
function adjoint(out, a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
  out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
  out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
  out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
  out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
  out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
  out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
  out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
  out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
  out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
  out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
  out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
  out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
  out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
  out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
  out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
  return out;
}

/**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */
function determinant(a) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  var b00 = a00 * a11 - a01 * a10;
  var b01 = a00 * a12 - a02 * a10;
  var b02 = a00 * a13 - a03 * a10;
  var b03 = a01 * a12 - a02 * a11;
  var b04 = a01 * a13 - a03 * a11;
  var b05 = a02 * a13 - a03 * a12;
  var b06 = a20 * a31 - a21 * a30;
  var b07 = a20 * a32 - a22 * a30;
  var b08 = a20 * a33 - a23 * a30;
  var b09 = a21 * a32 - a22 * a31;
  var b10 = a21 * a33 - a23 * a31;
  var b11 = a22 * a33 - a23 * a32;

  // Calculate the determinant
  return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
}

/**
 * Multiplies two mat4s
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function multiply(out, a, b) {
  var a00 = a[0],
      a01 = a[1],
      a02 = a[2],
      a03 = a[3];
  var a10 = a[4],
      a11 = a[5],
      a12 = a[6],
      a13 = a[7];
  var a20 = a[8],
      a21 = a[9],
      a22 = a[10],
      a23 = a[11];
  var a30 = a[12],
      a31 = a[13],
      a32 = a[14],
      a33 = a[15];

  // Cache only the current line of the second matrix
  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];
  out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];
  out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;

  b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];
  out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
  out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
  out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
  out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
  return out;
}

/**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */
function translate(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;

  if (a === out) {
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
  } else {
    a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
    a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
    a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

    out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;
    out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;
    out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;

    out[12] = a00 * x + a10 * y + a20 * z + a[12];
    out[13] = a01 * x + a11 * y + a21 * z + a[13];
    out[14] = a02 * x + a12 * y + a22 * z + a[14];
    out[15] = a03 * x + a13 * y + a23 * z + a[15];
  }

  return out;
}

/**
 * Scales the mat4 by the dimensions in the given vec3 not using vectorization
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/
function scale(out, a, v) {
  var x = v[0],
      y = v[1],
      z = v[2];

  out[0] = a[0] * x;
  out[1] = a[1] * x;
  out[2] = a[2] * x;
  out[3] = a[3] * x;
  out[4] = a[4] * y;
  out[5] = a[5] * y;
  out[6] = a[6] * y;
  out[7] = a[7] * y;
  out[8] = a[8] * z;
  out[9] = a[9] * z;
  out[10] = a[10] * z;
  out[11] = a[11] * z;
  out[12] = a[12];
  out[13] = a[13];
  out[14] = a[14];
  out[15] = a[15];
  return out;
}

/**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function rotate(out, a, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;
  var a00 = void 0,
      a01 = void 0,
      a02 = void 0,
      a03 = void 0;
  var a10 = void 0,
      a11 = void 0,
      a12 = void 0,
      a13 = void 0;
  var a20 = void 0,
      a21 = void 0,
      a22 = void 0,
      a23 = void 0;
  var b00 = void 0,
      b01 = void 0,
      b02 = void 0;
  var b10 = void 0,
      b11 = void 0,
      b12 = void 0;
  var b20 = void 0,
      b21 = void 0,
      b22 = void 0;

  if (Math.abs(len) < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];
  a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];
  a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];

  // Construct the elements of the rotation matrix
  b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;
  b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;
  b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c;

  // Perform rotation-specific matrix multiplication
  out[0] = a00 * b00 + a10 * b01 + a20 * b02;
  out[1] = a01 * b00 + a11 * b01 + a21 * b02;
  out[2] = a02 * b00 + a12 * b01 + a22 * b02;
  out[3] = a03 * b00 + a13 * b01 + a23 * b02;
  out[4] = a00 * b10 + a10 * b11 + a20 * b12;
  out[5] = a01 * b10 + a11 * b11 + a21 * b12;
  out[6] = a02 * b10 + a12 * b11 + a22 * b12;
  out[7] = a03 * b10 + a13 * b11 + a23 * b12;
  out[8] = a00 * b20 + a10 * b21 + a20 * b22;
  out[9] = a01 * b20 + a11 * b21 + a21 * b22;
  out[10] = a02 * b20 + a12 * b21 + a22 * b22;
  out[11] = a03 * b20 + a13 * b21 + a23 * b22;

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }
  return out;
}

/**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateX(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[4] = a10 * c + a20 * s;
  out[5] = a11 * c + a21 * s;
  out[6] = a12 * c + a22 * s;
  out[7] = a13 * c + a23 * s;
  out[8] = a20 * c - a10 * s;
  out[9] = a21 * c - a11 * s;
  out[10] = a22 * c - a12 * s;
  out[11] = a23 * c - a13 * s;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateY(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a20 = a[8];
  var a21 = a[9];
  var a22 = a[10];
  var a23 = a[11];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged rows
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c - a20 * s;
  out[1] = a01 * c - a21 * s;
  out[2] = a02 * c - a22 * s;
  out[3] = a03 * c - a23 * s;
  out[8] = a00 * s + a20 * c;
  out[9] = a01 * s + a21 * c;
  out[10] = a02 * s + a22 * c;
  out[11] = a03 * s + a23 * c;
  return out;
}

/**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function rotateZ(out, a, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);
  var a00 = a[0];
  var a01 = a[1];
  var a02 = a[2];
  var a03 = a[3];
  var a10 = a[4];
  var a11 = a[5];
  var a12 = a[6];
  var a13 = a[7];

  if (a !== out) {
    // If the source and destination differ, copy the unchanged last row
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
  }

  // Perform axis-specific matrix multiplication
  out[0] = a00 * c + a10 * s;
  out[1] = a01 * c + a11 * s;
  out[2] = a02 * c + a12 * s;
  out[3] = a03 * c + a13 * s;
  out[4] = a10 * c - a00 * s;
  out[5] = a11 * c - a01 * s;
  out[6] = a12 * c - a02 * s;
  out[7] = a13 * c - a03 * s;
  return out;
}

/**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromTranslation(out, v) {
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */
function fromScaling(out, v) {
  out[0] = v[0];
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = v[1];
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = v[2];
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */
function fromRotation(out, rad, axis) {
  var x = axis[0],
      y = axis[1],
      z = axis[2];
  var len = Math.sqrt(x * x + y * y + z * z);
  var s = void 0,
      c = void 0,
      t = void 0;

  if (Math.abs(len) < glMatrix.EPSILON) {
    return null;
  }

  len = 1 / len;
  x *= len;
  y *= len;
  z *= len;

  s = Math.sin(rad);
  c = Math.cos(rad);
  t = 1 - c;

  // Perform rotation-specific matrix multiplication
  out[0] = x * x * t + c;
  out[1] = y * x * t + z * s;
  out[2] = z * x * t - y * s;
  out[3] = 0;
  out[4] = x * y * t - z * s;
  out[5] = y * y * t + c;
  out[6] = z * y * t + x * s;
  out[7] = 0;
  out[8] = x * z * t + y * s;
  out[9] = y * z * t - x * s;
  out[10] = z * z * t + c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromXRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = 1;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = c;
  out[6] = s;
  out[7] = 0;
  out[8] = 0;
  out[9] = -s;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromYRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = 0;
  out[2] = -s;
  out[3] = 0;
  out[4] = 0;
  out[5] = 1;
  out[6] = 0;
  out[7] = 0;
  out[8] = s;
  out[9] = 0;
  out[10] = c;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */
function fromZRotation(out, rad) {
  var s = Math.sin(rad);
  var c = Math.cos(rad);

  // Perform axis-specific matrix multiplication
  out[0] = c;
  out[1] = s;
  out[2] = 0;
  out[3] = 0;
  out[4] = -s;
  out[5] = c;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 1;
  out[11] = 0;
  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;
  return out;
}

/**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */
function fromRotationTranslation(out, q, v) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - (yy + zz);
  out[1] = xy + wz;
  out[2] = xz - wy;
  out[3] = 0;
  out[4] = xy - wz;
  out[5] = 1 - (xx + zz);
  out[6] = yz + wx;
  out[7] = 0;
  out[8] = xz + wy;
  out[9] = yz - wx;
  out[10] = 1 - (xx + yy);
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Returns the translation vector component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslation,
 *  the returned vector will be the same as the translation vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive translation component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getTranslation(out, mat) {
  out[0] = mat[12];
  out[1] = mat[13];
  out[2] = mat[14];

  return out;
}

/**
 * Returns the scaling factor component of a transformation
 *  matrix. If a matrix is built with fromRotationTranslationScale
 *  with a normalized Quaternion paramter, the returned vector will be
 *  the same as the scaling vector
 *  originally supplied.
 * @param  {vec3} out Vector to receive scaling factor component
 * @param  {mat4} mat Matrix to be decomposed (input)
 * @return {vec3} out
 */
function getScaling(out, mat) {
  var m11 = mat[0];
  var m12 = mat[1];
  var m13 = mat[2];
  var m21 = mat[4];
  var m22 = mat[5];
  var m23 = mat[6];
  var m31 = mat[8];
  var m32 = mat[9];
  var m33 = mat[10];

  out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
  out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
  out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);

  return out;
}

/**
 * Returns a quaternion representing the rotational component
 *  of a transformation matrix. If a matrix is built with
 *  fromRotationTranslation, the returned quaternion will be the
 *  same as the quaternion originally supplied.
 * @param {quat} out Quaternion to receive the rotation component
 * @param {mat4} mat Matrix to be decomposed (input)
 * @return {quat} out
 */
function getRotation(out, mat) {
  // Algorithm taken from http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm
  var trace = mat[0] + mat[5] + mat[10];
  var S = 0;

  if (trace > 0) {
    S = Math.sqrt(trace + 1.0) * 2;
    out[3] = 0.25 * S;
    out[0] = (mat[6] - mat[9]) / S;
    out[1] = (mat[8] - mat[2]) / S;
    out[2] = (mat[1] - mat[4]) / S;
  } else if (mat[0] > mat[5] & mat[0] > mat[10]) {
    S = Math.sqrt(1.0 + mat[0] - mat[5] - mat[10]) * 2;
    out[3] = (mat[6] - mat[9]) / S;
    out[0] = 0.25 * S;
    out[1] = (mat[1] + mat[4]) / S;
    out[2] = (mat[8] + mat[2]) / S;
  } else if (mat[5] > mat[10]) {
    S = Math.sqrt(1.0 + mat[5] - mat[0] - mat[10]) * 2;
    out[3] = (mat[8] - mat[2]) / S;
    out[0] = (mat[1] + mat[4]) / S;
    out[1] = 0.25 * S;
    out[2] = (mat[6] + mat[9]) / S;
  } else {
    S = Math.sqrt(1.0 + mat[10] - mat[0] - mat[5]) * 2;
    out[3] = (mat[1] - mat[4]) / S;
    out[0] = (mat[8] + mat[2]) / S;
    out[1] = (mat[6] + mat[9]) / S;
    out[2] = 0.25 * S;
  }

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */
function fromRotationTranslationScale(out, q, v, s) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;
  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0];
  out[13] = v[1];
  out[14] = v[2];
  out[15] = 1;

  return out;
}

/**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     let quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
  // Quaternion math
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var xy = x * y2;
  var xz = x * z2;
  var yy = y * y2;
  var yz = y * z2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  var sx = s[0];
  var sy = s[1];
  var sz = s[2];

  var ox = o[0];
  var oy = o[1];
  var oz = o[2];

  out[0] = (1 - (yy + zz)) * sx;
  out[1] = (xy + wz) * sx;
  out[2] = (xz - wy) * sx;
  out[3] = 0;
  out[4] = (xy - wz) * sy;
  out[5] = (1 - (xx + zz)) * sy;
  out[6] = (yz + wx) * sy;
  out[7] = 0;
  out[8] = (xz + wy) * sz;
  out[9] = (yz - wx) * sz;
  out[10] = (1 - (xx + yy)) * sz;
  out[11] = 0;
  out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);
  out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);
  out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);
  out[15] = 1;

  return out;
}

/**
 * Calculates a 4x4 matrix from the given quaternion
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat} q Quaternion to create matrix from
 *
 * @returns {mat4} out
 */
function fromQuat(out, q) {
  var x = q[0],
      y = q[1],
      z = q[2],
      w = q[3];
  var x2 = x + x;
  var y2 = y + y;
  var z2 = z + z;

  var xx = x * x2;
  var yx = y * x2;
  var yy = y * y2;
  var zx = z * x2;
  var zy = z * y2;
  var zz = z * z2;
  var wx = w * x2;
  var wy = w * y2;
  var wz = w * z2;

  out[0] = 1 - yy - zz;
  out[1] = yx + wz;
  out[2] = zx - wy;
  out[3] = 0;

  out[4] = yx - wz;
  out[5] = 1 - xx - zz;
  out[6] = zy + wx;
  out[7] = 0;

  out[8] = zx + wy;
  out[9] = zy - wx;
  out[10] = 1 - xx - yy;
  out[11] = 0;

  out[12] = 0;
  out[13] = 0;
  out[14] = 0;
  out[15] = 1;

  return out;
}

/**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */
function frustum(out, left, right, bottom, top, near, far) {
  var rl = 1 / (right - left);
  var tb = 1 / (top - bottom);
  var nf = 1 / (near - far);
  out[0] = near * 2 * rl;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = near * 2 * tb;
  out[6] = 0;
  out[7] = 0;
  out[8] = (right + left) * rl;
  out[9] = (top + bottom) * tb;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = far * near * 2 * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspective(out, fovy, aspect, near, far) {
  var f = 1.0 / Math.tan(fovy / 2);
  var nf = 1 / (near - far);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) * nf;
  out[11] = -1;
  out[12] = 0;
  out[13] = 0;
  out[14] = 2 * far * near * nf;
  out[15] = 0;
  return out;
}

/**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Object} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function perspectiveFromFieldOfView(out, fov, near, far) {
  var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
  var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
  var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
  var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
  var xScale = 2.0 / (leftTan + rightTan);
  var yScale = 2.0 / (upTan + downTan);

  out[0] = xScale;
  out[1] = 0.0;
  out[2] = 0.0;
  out[3] = 0.0;
  out[4] = 0.0;
  out[5] = yScale;
  out[6] = 0.0;
  out[7] = 0.0;
  out[8] = -((leftTan - rightTan) * xScale * 0.5);
  out[9] = (upTan - downTan) * yScale * 0.5;
  out[10] = far / (near - far);
  out[11] = -1.0;
  out[12] = 0.0;
  out[13] = 0.0;
  out[14] = far * near / (near - far);
  out[15] = 0.0;
  return out;
}

/**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */
function ortho(out, left, right, bottom, top, near, far) {
  var lr = 1 / (left - right);
  var bt = 1 / (bottom - top);
  var nf = 1 / (near - far);
  out[0] = -2 * lr;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;
  out[4] = 0;
  out[5] = -2 * bt;
  out[6] = 0;
  out[7] = 0;
  out[8] = 0;
  out[9] = 0;
  out[10] = 2 * nf;
  out[11] = 0;
  out[12] = (left + right) * lr;
  out[13] = (top + bottom) * bt;
  out[14] = (far + near) * nf;
  out[15] = 1;
  return out;
}

/**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function lookAt(out, eye, center, up) {
  var x0 = void 0,
      x1 = void 0,
      x2 = void 0,
      y0 = void 0,
      y1 = void 0,
      y2 = void 0,
      z0 = void 0,
      z1 = void 0,
      z2 = void 0,
      len = void 0;
  var eyex = eye[0];
  var eyey = eye[1];
  var eyez = eye[2];
  var upx = up[0];
  var upy = up[1];
  var upz = up[2];
  var centerx = center[0];
  var centery = center[1];
  var centerz = center[2];

  if (Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON) {
    return mat4.identity(out);
  }

  z0 = eyex - centerx;
  z1 = eyey - centery;
  z2 = eyez - centerz;

  len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
  z0 *= len;
  z1 *= len;
  z2 *= len;

  x0 = upy * z2 - upz * z1;
  x1 = upz * z0 - upx * z2;
  x2 = upx * z1 - upy * z0;
  len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
  if (!len) {
    x0 = 0;
    x1 = 0;
    x2 = 0;
  } else {
    len = 1 / len;
    x0 *= len;
    x1 *= len;
    x2 *= len;
  }

  y0 = z1 * x2 - z2 * x1;
  y1 = z2 * x0 - z0 * x2;
  y2 = z0 * x1 - z1 * x0;

  len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
  if (!len) {
    y0 = 0;
    y1 = 0;
    y2 = 0;
  } else {
    len = 1 / len;
    y0 *= len;
    y1 *= len;
    y2 *= len;
  }

  out[0] = x0;
  out[1] = y0;
  out[2] = z0;
  out[3] = 0;
  out[4] = x1;
  out[5] = y1;
  out[6] = z1;
  out[7] = 0;
  out[8] = x2;
  out[9] = y2;
  out[10] = z2;
  out[11] = 0;
  out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
  out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
  out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
  out[15] = 1;

  return out;
}

/**
 * Generates a matrix that makes something look at something else.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */
function targetTo(out, eye, target, up) {
  var eyex = eye[0],
      eyey = eye[1],
      eyez = eye[2],
      upx = up[0],
      upy = up[1],
      upz = up[2];

  var z0 = eyex - target[0],
      z1 = eyey - target[1],
      z2 = eyez - target[2];

  var len = z0 * z0 + z1 * z1 + z2 * z2;
  if (len > 0) {
    len = 1 / Math.sqrt(len);
    z0 *= len;
    z1 *= len;
    z2 *= len;
  }

  var x0 = upy * z2 - upz * z1,
      x1 = upz * z0 - upx * z2,
      x2 = upx * z1 - upy * z0;

  out[0] = x0;
  out[1] = x1;
  out[2] = x2;
  out[3] = 0;
  out[4] = z1 * x2 - z2 * x1;
  out[5] = z2 * x0 - z0 * x2;
  out[6] = z0 * x1 - z1 * x0;
  out[7] = 0;
  out[8] = z0;
  out[9] = z1;
  out[10] = z2;
  out[11] = 0;
  out[12] = eyex;
  out[13] = eyey;
  out[14] = eyez;
  out[15] = 1;
  return out;
};

/**
 * Returns a string representation of a mat4
 *
 * @param {mat4} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */
function str(a) {
  return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
}

/**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */
function frob(a) {
  return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
}

/**
 * Adds two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  out[2] = a[2] + b[2];
  out[3] = a[3] + b[3];
  out[4] = a[4] + b[4];
  out[5] = a[5] + b[5];
  out[6] = a[6] + b[6];
  out[7] = a[7] + b[7];
  out[8] = a[8] + b[8];
  out[9] = a[9] + b[9];
  out[10] = a[10] + b[10];
  out[11] = a[11] + b[11];
  out[12] = a[12] + b[12];
  out[13] = a[13] + b[13];
  out[14] = a[14] + b[14];
  out[15] = a[15] + b[15];
  return out;
}

/**
 * Subtracts matrix b from matrix a
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  out[2] = a[2] - b[2];
  out[3] = a[3] - b[3];
  out[4] = a[4] - b[4];
  out[5] = a[5] - b[5];
  out[6] = a[6] - b[6];
  out[7] = a[7] - b[7];
  out[8] = a[8] - b[8];
  out[9] = a[9] - b[9];
  out[10] = a[10] - b[10];
  out[11] = a[11] - b[11];
  out[12] = a[12] - b[12];
  out[13] = a[13] - b[13];
  out[14] = a[14] - b[14];
  out[15] = a[15] - b[15];
  return out;
}

/**
 * Multiply each element of the matrix by a scalar.
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {Number} b amount to scale the matrix's elements by
 * @returns {mat4} out
 */
function multiplyScalar(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  out[2] = a[2] * b;
  out[3] = a[3] * b;
  out[4] = a[4] * b;
  out[5] = a[5] * b;
  out[6] = a[6] * b;
  out[7] = a[7] * b;
  out[8] = a[8] * b;
  out[9] = a[9] * b;
  out[10] = a[10] * b;
  out[11] = a[11] * b;
  out[12] = a[12] * b;
  out[13] = a[13] * b;
  out[14] = a[14] * b;
  out[15] = a[15] * b;
  return out;
}

/**
 * Adds two mat4's after multiplying each element of the second operand by a scalar value.
 *
 * @param {mat4} out the receiving vector
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @param {Number} scale the amount to scale b's elements by before adding
 * @returns {mat4} out
 */
function multiplyScalarAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  out[2] = a[2] + b[2] * scale;
  out[3] = a[3] + b[3] * scale;
  out[4] = a[4] + b[4] * scale;
  out[5] = a[5] + b[5] * scale;
  out[6] = a[6] + b[6] * scale;
  out[7] = a[7] + b[7] * scale;
  out[8] = a[8] + b[8] * scale;
  out[9] = a[9] + b[9] * scale;
  out[10] = a[10] + b[10] * scale;
  out[11] = a[11] + b[11] * scale;
  out[12] = a[12] + b[12] * scale;
  out[13] = a[13] + b[13] * scale;
  out[14] = a[14] + b[14] * scale;
  out[15] = a[15] + b[15] * scale;
  return out;
}

/**
 * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}

/**
 * Returns whether or not the matrices have approximately the same elements in the same position.
 *
 * @param {mat4} a The first matrix.
 * @param {mat4} b The second matrix.
 * @returns {Boolean} True if the matrices are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var a4 = a[4],
      a5 = a[5],
      a6 = a[6],
      a7 = a[7];
  var a8 = a[8],
      a9 = a[9],
      a10 = a[10],
      a11 = a[11];
  var a12 = a[12],
      a13 = a[13],
      a14 = a[14],
      a15 = a[15];

  var b0 = b[0],
      b1 = b[1],
      b2 = b[2],
      b3 = b[3];
  var b4 = b[4],
      b5 = b[5],
      b6 = b[6],
      b7 = b[7];
  var b8 = b[8],
      b9 = b[9],
      b10 = b[10],
      b11 = b[11];
  var b12 = b[12],
      b13 = b[13],
      b14 = b[14],
      b15 = b[15];

  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}

/**
 * Alias for {@link mat4.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link mat4.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAxes = exports.sqlerp = exports.rotationTo = exports.equals = exports.exactEquals = exports.normalize = exports.sqrLen = exports.squaredLength = exports.len = exports.length = exports.lerp = exports.dot = exports.scale = exports.mul = exports.add = exports.set = exports.copy = exports.fromValues = exports.clone = undefined;
exports.create = create;
exports.identity = identity;
exports.setAxisAngle = setAxisAngle;
exports.getAxisAngle = getAxisAngle;
exports.multiply = multiply;
exports.rotateX = rotateX;
exports.rotateY = rotateY;
exports.rotateZ = rotateZ;
exports.calculateW = calculateW;
exports.slerp = slerp;
exports.invert = invert;
exports.conjugate = conjugate;
exports.fromMat3 = fromMat3;
exports.fromEuler = fromEuler;
exports.str = str;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

var _mat = __webpack_require__(1);

var mat3 = _interopRequireWildcard(_mat);

var _vec = __webpack_require__(2);

var vec3 = _interopRequireWildcard(_vec);

var _vec2 = __webpack_require__(3);

var vec4 = _interopRequireWildcard(_vec2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * Quaternion
 * @module quat
 */

/**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function create() {
  var out = new glMatrix.ARRAY_TYPE(4);
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */
function identity(out) {
  out[0] = 0;
  out[1] = 0;
  out[2] = 0;
  out[3] = 1;
  return out;
}

/**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/
function setAxisAngle(out, axis, rad) {
  rad = rad * 0.5;
  var s = Math.sin(rad);
  out[0] = s * axis[0];
  out[1] = s * axis[1];
  out[2] = s * axis[2];
  out[3] = Math.cos(rad);
  return out;
}

/**
 * Gets the rotation axis and angle for a given
 *  quaternion. If a quaternion is created with
 *  setAxisAngle, this method will return the same
 *  values as providied in the original parameter list
 *  OR functionally equivalent values.
 * Example: The quaternion formed by axis [0, 0, 1] and
 *  angle -90 is the same as the quaternion formed by
 *  [0, 0, 1] and 270. This method favors the latter.
 * @param  {vec3} out_axis  Vector receiving the axis of rotation
 * @param  {quat} q     Quaternion to be decomposed
 * @return {Number}     Angle, in radians, of the rotation
 */
function getAxisAngle(out_axis, q) {
  var rad = Math.acos(q[3]) * 2.0;
  var s = Math.sin(rad / 2.0);
  if (s != 0.0) {
    out_axis[0] = q[0] / s;
    out_axis[1] = q[1] / s;
    out_axis[2] = q[2] / s;
  } else {
    // If s is zero, return any axis (no rotation - axis does not matter)
    out_axis[0] = 1;
    out_axis[1] = 0;
    out_axis[2] = 0;
  }
  return rad;
}

/**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */
function multiply(out, a, b) {
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  out[0] = ax * bw + aw * bx + ay * bz - az * by;
  out[1] = ay * bw + aw * by + az * bx - ax * bz;
  out[2] = az * bw + aw * bz + ax * by - ay * bx;
  out[3] = aw * bw - ax * bx - ay * by - az * bz;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateX(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + aw * bx;
  out[1] = ay * bw + az * bx;
  out[2] = az * bw - ay * bx;
  out[3] = aw * bw - ax * bx;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateY(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var by = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw - az * by;
  out[1] = ay * bw + aw * by;
  out[2] = az * bw + ax * by;
  out[3] = aw * bw - ay * by;
  return out;
}

/**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */
function rotateZ(out, a, rad) {
  rad *= 0.5;

  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bz = Math.sin(rad),
      bw = Math.cos(rad);

  out[0] = ax * bw + ay * bz;
  out[1] = ay * bw - ax * bz;
  out[2] = az * bw + aw * bz;
  out[3] = aw * bw - az * bz;
  return out;
}

/**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */
function calculateW(out, a) {
  var x = a[0],
      y = a[1],
      z = a[2];

  out[0] = x;
  out[1] = y;
  out[2] = z;
  out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
  return out;
}

/**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */
function slerp(out, a, b, t) {
  // benchmarks:
  //    http://jsperf.com/quaternion-slerp-implementations
  var ax = a[0],
      ay = a[1],
      az = a[2],
      aw = a[3];
  var bx = b[0],
      by = b[1],
      bz = b[2],
      bw = b[3];

  var omega = void 0,
      cosom = void 0,
      sinom = void 0,
      scale0 = void 0,
      scale1 = void 0;

  // calc cosine
  cosom = ax * bx + ay * by + az * bz + aw * bw;
  // adjust signs (if necessary)
  if (cosom < 0.0) {
    cosom = -cosom;
    bx = -bx;
    by = -by;
    bz = -bz;
    bw = -bw;
  }
  // calculate coefficients
  if (1.0 - cosom > 0.000001) {
    // standard case (slerp)
    omega = Math.acos(cosom);
    sinom = Math.sin(omega);
    scale0 = Math.sin((1.0 - t) * omega) / sinom;
    scale1 = Math.sin(t * omega) / sinom;
  } else {
    // "from" and "to" quaternions are very close
    //  ... so we can do a linear interpolation
    scale0 = 1.0 - t;
    scale1 = t;
  }
  // calculate final values
  out[0] = scale0 * ax + scale1 * bx;
  out[1] = scale0 * ay + scale1 * by;
  out[2] = scale0 * az + scale1 * bz;
  out[3] = scale0 * aw + scale1 * bw;

  return out;
}

/**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */
function invert(out, a) {
  var a0 = a[0],
      a1 = a[1],
      a2 = a[2],
      a3 = a[3];
  var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
  var invDot = dot ? 1.0 / dot : 0;

  // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

  out[0] = -a0 * invDot;
  out[1] = -a1 * invDot;
  out[2] = -a2 * invDot;
  out[3] = a3 * invDot;
  return out;
}

/**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */
function conjugate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  out[2] = -a[2];
  out[3] = a[3];
  return out;
}

/**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */
function fromMat3(out, m) {
  // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
  // article "Quaternion Calculus and Fast Animation".
  var fTrace = m[0] + m[4] + m[8];
  var fRoot = void 0;

  if (fTrace > 0.0) {
    // |w| > 1/2, may as well choose w > 1/2
    fRoot = Math.sqrt(fTrace + 1.0); // 2w
    out[3] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot; // 1/(4w)
    out[0] = (m[5] - m[7]) * fRoot;
    out[1] = (m[6] - m[2]) * fRoot;
    out[2] = (m[1] - m[3]) * fRoot;
  } else {
    // |w| <= 1/2
    var i = 0;
    if (m[4] > m[0]) i = 1;
    if (m[8] > m[i * 3 + i]) i = 2;
    var j = (i + 1) % 3;
    var k = (i + 2) % 3;

    fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
    out[i] = 0.5 * fRoot;
    fRoot = 0.5 / fRoot;
    out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
    out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
    out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
  }

  return out;
}

/**
 * Creates a quaternion from the given euler angle x, y, z.
 *
 * @param {quat} out the receiving quaternion
 * @param {x} Angle to rotate around X axis in degrees.
 * @param {y} Angle to rotate around Y axis in degrees.
 * @param {z} Angle to rotate around Z axis in degrees.
 * @returns {quat} out
 * @function
 */
function fromEuler(out, x, y, z) {
  var halfToRad = 0.5 * Math.PI / 180.0;
  x *= halfToRad;
  y *= halfToRad;
  z *= halfToRad;

  var sx = Math.sin(x);
  var cx = Math.cos(x);
  var sy = Math.sin(y);
  var cy = Math.cos(y);
  var sz = Math.sin(z);
  var cz = Math.cos(z);

  out[0] = sx * cy * cz - cx * sy * sz;
  out[1] = cx * sy * cz + sx * cy * sz;
  out[2] = cx * cy * sz - sx * sy * cz;
  out[3] = cx * cy * cz + sx * sy * sz;

  return out;
}

/**
 * Returns a string representation of a quatenion
 *
 * @param {quat} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
}

/**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */
var clone = exports.clone = vec4.clone;

/**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */
var fromValues = exports.fromValues = vec4.fromValues;

/**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */
var copy = exports.copy = vec4.copy;

/**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */
var set = exports.set = vec4.set;

/**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */
var add = exports.add = vec4.add;

/**
 * Alias for {@link quat.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */
var scale = exports.scale = vec4.scale;

/**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */
var dot = exports.dot = vec4.dot;

/**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */
var lerp = exports.lerp = vec4.lerp;

/**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 */
var length = exports.length = vec4.length;

/**
 * Alias for {@link quat.length}
 * @function
 */
var len = exports.len = length;

/**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */
var squaredLength = exports.squaredLength = vec4.squaredLength;

/**
 * Alias for {@link quat.squaredLength}
 * @function
 */
var sqrLen = exports.sqrLen = squaredLength;

/**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */
var normalize = exports.normalize = vec4.normalize;

/**
 * Returns whether or not the quaternions have exactly the same elements in the same position (when compared with ===)
 *
 * @param {quat} a The first quaternion.
 * @param {quat} b The second quaternion.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var exactEquals = exports.exactEquals = vec4.exactEquals;

/**
 * Returns whether or not the quaternions have approximately the same elements in the same position.
 *
 * @param {quat} a The first vector.
 * @param {quat} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
var equals = exports.equals = vec4.equals;

/**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */
var rotationTo = exports.rotationTo = function () {
  var tmpvec3 = vec3.create();
  var xUnitVec3 = vec3.fromValues(1, 0, 0);
  var yUnitVec3 = vec3.fromValues(0, 1, 0);

  return function (out, a, b) {
    var dot = vec3.dot(a, b);
    if (dot < -0.999999) {
      vec3.cross(tmpvec3, xUnitVec3, a);
      if (vec3.len(tmpvec3) < 0.000001) vec3.cross(tmpvec3, yUnitVec3, a);
      vec3.normalize(tmpvec3, tmpvec3);
      setAxisAngle(out, tmpvec3, Math.PI);
      return out;
    } else if (dot > 0.999999) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    } else {
      vec3.cross(tmpvec3, a, b);
      out[0] = tmpvec3[0];
      out[1] = tmpvec3[1];
      out[2] = tmpvec3[2];
      out[3] = 1 + dot;
      return normalize(out, out);
    }
  };
}();

/**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */
var sqlerp = exports.sqlerp = function () {
  var temp1 = create();
  var temp2 = create();

  return function (out, a, b, c, d, t) {
    slerp(temp1, a, d, t);
    slerp(temp2, b, c, t);
    slerp(out, temp1, temp2, 2 * t * (1 - t));

    return out;
  };
}();

/**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */
var setAxes = exports.setAxes = function () {
  var matr = mat3.create();

  return function (out, view, right, up) {
    matr[0] = right[0];
    matr[3] = right[1];
    matr[6] = right[2];

    matr[1] = up[0];
    matr[4] = up[1];
    matr[7] = up[2];

    matr[2] = -view[0];
    matr[5] = -view[1];
    matr[8] = -view[2];

    return normalize(out, fromMat3(out, matr));
  };
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = undefined;
exports.create = create;
exports.clone = clone;
exports.fromValues = fromValues;
exports.copy = copy;
exports.set = set;
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.ceil = ceil;
exports.floor = floor;
exports.min = min;
exports.max = max;
exports.round = round;
exports.scale = scale;
exports.scaleAndAdd = scaleAndAdd;
exports.distance = distance;
exports.squaredDistance = squaredDistance;
exports.length = length;
exports.squaredLength = squaredLength;
exports.negate = negate;
exports.inverse = inverse;
exports.normalize = normalize;
exports.dot = dot;
exports.cross = cross;
exports.lerp = lerp;
exports.random = random;
exports.transformMat2 = transformMat2;
exports.transformMat2d = transformMat2d;
exports.transformMat3 = transformMat3;
exports.transformMat4 = transformMat4;
exports.str = str;
exports.exactEquals = exactEquals;
exports.equals = equals;

var _common = __webpack_require__(0);

var glMatrix = _interopRequireWildcard(_common);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 2 Dimensional Vector
 * @module vec2
 */

/**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */
function create() {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = 0;
  out[1] = 0;
  return out;
}

/**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */
/* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */

function clone(a) {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */
function fromValues(x, y) {
  var out = new glMatrix.ARRAY_TYPE(2);
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */
function copy(out, a) {
  out[0] = a[0];
  out[1] = a[1];
  return out;
}

/**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */
function set(out, x, y) {
  out[0] = x;
  out[1] = y;
  return out;
}

/**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function add(out, a, b) {
  out[0] = a[0] + b[0];
  out[1] = a[1] + b[1];
  return out;
}

/**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function subtract(out, a, b) {
  out[0] = a[0] - b[0];
  out[1] = a[1] - b[1];
  return out;
}

/**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function multiply(out, a, b) {
  out[0] = a[0] * b[0];
  out[1] = a[1] * b[1];
  return out;
};

/**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function divide(out, a, b) {
  out[0] = a[0] / b[0];
  out[1] = a[1] / b[1];
  return out;
};

/**
 * Math.ceil the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to ceil
 * @returns {vec2} out
 */
function ceil(out, a) {
  out[0] = Math.ceil(a[0]);
  out[1] = Math.ceil(a[1]);
  return out;
};

/**
 * Math.floor the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to floor
 * @returns {vec2} out
 */
function floor(out, a) {
  out[0] = Math.floor(a[0]);
  out[1] = Math.floor(a[1]);
  return out;
};

/**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function min(out, a, b) {
  out[0] = Math.min(a[0], b[0]);
  out[1] = Math.min(a[1], b[1]);
  return out;
};

/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
function max(out, a, b) {
  out[0] = Math.max(a[0], b[0]);
  out[1] = Math.max(a[1], b[1]);
  return out;
};

/**
 * Math.round the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to round
 * @returns {vec2} out
 */
function round(out, a) {
  out[0] = Math.round(a[0]);
  out[1] = Math.round(a[1]);
  return out;
};

/**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */
function scale(out, a, b) {
  out[0] = a[0] * b;
  out[1] = a[1] * b;
  return out;
};

/**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */
function scaleAndAdd(out, a, b, scale) {
  out[0] = a[0] + b[0] * scale;
  out[1] = a[1] + b[1] * scale;
  return out;
};

/**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */
function distance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return Math.sqrt(x * x + y * y);
};

/**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */
function squaredDistance(a, b) {
  var x = b[0] - a[0],
      y = b[1] - a[1];
  return x * x + y * y;
};

/**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */
function length(a) {
  var x = a[0],
      y = a[1];
  return Math.sqrt(x * x + y * y);
};

/**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */
function squaredLength(a) {
  var x = a[0],
      y = a[1];
  return x * x + y * y;
};

/**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */
function negate(out, a) {
  out[0] = -a[0];
  out[1] = -a[1];
  return out;
};

/**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */
function inverse(out, a) {
  out[0] = 1.0 / a[0];
  out[1] = 1.0 / a[1];
  return out;
};

/**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */
function normalize(out, a) {
  var x = a[0],
      y = a[1];
  var len = x * x + y * y;
  if (len > 0) {
    //TODO: evaluate use of glm_invsqrt here?
    len = 1 / Math.sqrt(len);
    out[0] = a[0] * len;
    out[1] = a[1] * len;
  }
  return out;
};

/**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */
function dot(a, b) {
  return a[0] * b[0] + a[1] * b[1];
};

/**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */
function cross(out, a, b) {
  var z = a[0] * b[1] - a[1] * b[0];
  out[0] = out[1] = 0;
  out[2] = z;
  return out;
};

/**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */
function lerp(out, a, b, t) {
  var ax = a[0],
      ay = a[1];
  out[0] = ax + t * (b[0] - ax);
  out[1] = ay + t * (b[1] - ay);
  return out;
};

/**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */
function random(out, scale) {
  scale = scale || 1.0;
  var r = glMatrix.RANDOM() * 2.0 * Math.PI;
  out[0] = Math.cos(r) * scale;
  out[1] = Math.sin(r) * scale;
  return out;
};

/**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y;
  out[1] = m[1] * x + m[3] * y;
  return out;
};

/**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat2d(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[2] * y + m[4];
  out[1] = m[1] * x + m[3] * y + m[5];
  return out;
};

/**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat3(out, a, m) {
  var x = a[0],
      y = a[1];
  out[0] = m[0] * x + m[3] * y + m[6];
  out[1] = m[1] * x + m[4] * y + m[7];
  return out;
};

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */
function transformMat4(out, a, m) {
  var x = a[0];
  var y = a[1];
  out[0] = m[0] * x + m[4] * y + m[12];
  out[1] = m[1] * x + m[5] * y + m[13];
  return out;
}

/**
 * Returns a string representation of a vector
 *
 * @param {vec2} a vector to represent as a string
 * @returns {String} string representation of the vector
 */
function str(a) {
  return 'vec2(' + a[0] + ', ' + a[1] + ')';
}

/**
 * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function exactEquals(a, b) {
  return a[0] === b[0] && a[1] === b[1];
}

/**
 * Returns whether or not the vectors have approximately the same elements in the same position.
 *
 * @param {vec2} a The first vector.
 * @param {vec2} b The second vector.
 * @returns {Boolean} True if the vectors are equal, false otherwise.
 */
function equals(a, b) {
  var a0 = a[0],
      a1 = a[1];
  var b0 = b[0],
      b1 = b[1];
  return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}

/**
 * Alias for {@link vec2.length}
 * @function
 */
var len = exports.len = length;

/**
 * Alias for {@link vec2.subtract}
 * @function
 */
var sub = exports.sub = subtract;

/**
 * Alias for {@link vec2.multiply}
 * @function
 */
var mul = exports.mul = multiply;

/**
 * Alias for {@link vec2.divide}
 * @function
 */
var div = exports.div = divide;

/**
 * Alias for {@link vec2.distance}
 * @function
 */
var dist = exports.dist = distance;

/**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */
var sqrDist = exports.sqrDist = squaredDistance;

/**
 * Alias for {@link vec2.squaredLength}
 * @function
 */
var sqrLen = exports.sqrLen = squaredLength;

/**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */
var forEach = exports.forEach = function () {
  var vec = create();

  return function (a, stride, offset, count, fn, arg) {
    var i = void 0,
        l = void 0;
    if (!stride) {
      stride = 2;
    }

    if (!offset) {
      offset = 0;
    }

    if (count) {
      l = Math.min(count * stride + offset, a.length);
    } else {
      l = a.length;
    }

    for (i = offset; i < l; i += stride) {
      vec[0] = a[i];vec[1] = a[i + 1];
      fn(vec, vec, arg);
      a[i] = vec[0];a[i + 1] = vec[1];
    }

    return a;
  };
}();

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "./node_modules/rbush/rbush.min.js":
/*!*****************************************!*\
  !*** ./node_modules/rbush/rbush.min.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,i){ true?module.exports=i():undefined}(this,function(){"use strict";function t(t,r,e,a,h){!function t(n,r,e,a,h){for(;a>e;){if(a-e>600){var o=a-e+1,s=r-e+1,l=Math.log(o),f=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*f*(o-f)/o)*(s-o/2<0?-1:1),m=Math.max(e,Math.floor(r-s*f/o+u)),c=Math.min(a,Math.floor(r+(o-s)*f/o+u));t(n,r,m,c,h)}var p=n[r],d=e,x=a;for(i(n,e,r),h(n[a],p)>0&&i(n,e,a);d<x;){for(i(n,d,x),d++,x--;h(n[d],p)<0;)d++;for(;h(n[x],p)>0;)x--}0===h(n[e],p)?i(n,e,x):i(n,++x,a),x<=r&&(e=x+1),r<=x&&(a=x-1)}}(t,r,e||0,a||t.length-1,h||n)}function i(t,i,n){var r=t[i];t[i]=t[n],t[n]=r}function n(t,i){return t<i?-1:t>i?1:0}var r=function(t){void 0===t&&(t=9),this._maxEntries=Math.max(4,t),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),this.clear()};function e(t,i,n){if(!n)return i.indexOf(t);for(var r=0;r<i.length;r++)if(n(t,i[r]))return r;return-1}function a(t,i){h(t,0,t.children.length,i,t)}function h(t,i,n,r,e){e||(e=p(null)),e.minX=1/0,e.minY=1/0,e.maxX=-1/0,e.maxY=-1/0;for(var a=i;a<n;a++){var h=t.children[a];o(e,t.leaf?r(h):h)}return e}function o(t,i){return t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY),t}function s(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function f(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function u(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function c(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function p(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function d(i,n,r,e,a){for(var h=[n,r];h.length;)if(!((r=h.pop())-(n=h.pop())<=e)){var o=n+Math.ceil((r-n)/e/2)*e;t(i,o,n,r,a),h.push(n,o,o,r)}}return r.prototype.all=function(){return this._all(this.data,[])},r.prototype.search=function(t){var i=this.data,n=[];if(!c(t,i))return n;for(var r=this.toBBox,e=[];i;){for(var a=0;a<i.children.length;a++){var h=i.children[a],o=i.leaf?r(h):h;c(t,o)&&(i.leaf?n.push(h):m(t,o)?this._all(h,n):e.push(h))}i=e.pop()}return n},r.prototype.collides=function(t){var i=this.data;if(!c(t,i))return!1;for(var n=[];i;){for(var r=0;r<i.children.length;r++){var e=i.children[r],a=i.leaf?this.toBBox(e):e;if(c(t,a)){if(i.leaf||m(t,a))return!0;n.push(e)}}i=n.pop()}return!1},r.prototype.load=function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var i=0;i<t.length;i++)this.insert(t[i]);return this}var n=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===n.height)this._splitRoot(this.data,n);else{if(this.data.height<n.height){var r=this.data;this.data=n,n=r}this._insert(n,this.data.height-n.height-1,!0)}else this.data=n;return this},r.prototype.insert=function(t){return t&&this._insert(t,this.data.height-1),this},r.prototype.clear=function(){return this.data=p([]),this},r.prototype.remove=function(t,i){if(!t)return this;for(var n,r,a,h=this.data,o=this.toBBox(t),s=[],l=[];h||s.length;){if(h||(h=s.pop(),r=s[s.length-1],n=l.pop(),a=!0),h.leaf){var f=e(t,h.children,i);if(-1!==f)return h.children.splice(f,1),s.push(h),this._condense(s),this}a||h.leaf||!m(h,o)?r?(n++,h=r.children[n],a=!1):h=null:(s.push(h),l.push(n),n=0,r=h,h=h.children[0])}return this},r.prototype.toBBox=function(t){return t},r.prototype.compareMinX=function(t,i){return t.minX-i.minX},r.prototype.compareMinY=function(t,i){return t.minY-i.minY},r.prototype.toJSON=function(){return this.data},r.prototype.fromJSON=function(t){return this.data=t,this},r.prototype._all=function(t,i){for(var n=[];t;)t.leaf?i.push.apply(i,t.children):n.push.apply(n,t.children),t=n.pop();return i},r.prototype._build=function(t,i,n,r){var e,h=n-i+1,o=this._maxEntries;if(h<=o)return a(e=p(t.slice(i,n+1)),this.toBBox),e;r||(r=Math.ceil(Math.log(h)/Math.log(o)),o=Math.ceil(h/Math.pow(o,r-1))),(e=p([])).leaf=!1,e.height=r;var s=Math.ceil(h/o),l=s*Math.ceil(Math.sqrt(o));d(t,i,n,l,this.compareMinX);for(var f=i;f<=n;f+=l){var u=Math.min(f+l-1,n);d(t,f,u,s,this.compareMinY);for(var m=f;m<=u;m+=s){var c=Math.min(m+s-1,u);e.children.push(this._build(t,m,c,r-1))}}return a(e,this.toBBox),e},r.prototype._chooseSubtree=function(t,i,n,r){for(;r.push(i),!i.leaf&&r.length-1!==n;){for(var e=1/0,a=1/0,h=void 0,o=0;o<i.children.length;o++){var s=i.children[o],l=f(s),u=(m=t,c=s,(Math.max(c.maxX,m.maxX)-Math.min(c.minX,m.minX))*(Math.max(c.maxY,m.maxY)-Math.min(c.minY,m.minY))-l);u<a?(a=u,e=l<e?l:e,h=s):u===a&&l<e&&(e=l,h=s)}i=h||i.children[0]}var m,c;return i},r.prototype._insert=function(t,i,n){var r=n?t:this.toBBox(t),e=[],a=this._chooseSubtree(r,this.data,i,e);for(a.children.push(t),o(a,r);i>=0&&e[i].children.length>this._maxEntries;)this._split(e,i),i--;this._adjustParentBBoxes(r,e,i)},r.prototype._split=function(t,i){var n=t[i],r=n.children.length,e=this._minEntries;this._chooseSplitAxis(n,e,r);var h=this._chooseSplitIndex(n,e,r),o=p(n.children.splice(h,n.children.length-h));o.height=n.height,o.leaf=n.leaf,a(n,this.toBBox),a(o,this.toBBox),i?t[i-1].children.push(o):this._splitRoot(n,o)},r.prototype._splitRoot=function(t,i){this.data=p([t,i]),this.data.height=t.height+1,this.data.leaf=!1,a(this.data,this.toBBox)},r.prototype._chooseSplitIndex=function(t,i,n){for(var r,e,a,o,s,l,u,m=1/0,c=1/0,p=i;p<=n-i;p++){var d=h(t,0,p,this.toBBox),x=h(t,p,n,this.toBBox),v=(e=d,a=x,o=void 0,s=void 0,l=void 0,u=void 0,o=Math.max(e.minX,a.minX),s=Math.max(e.minY,a.minY),l=Math.min(e.maxX,a.maxX),u=Math.min(e.maxY,a.maxY),Math.max(0,l-o)*Math.max(0,u-s)),M=f(d)+f(x);v<m?(m=v,r=p,c=M<c?M:c):v===m&&M<c&&(c=M,r=p)}return r||n-i},r.prototype._chooseSplitAxis=function(t,i,n){var r=t.leaf?this.compareMinX:s,e=t.leaf?this.compareMinY:l;this._allDistMargin(t,i,n,r)<this._allDistMargin(t,i,n,e)&&t.children.sort(r)},r.prototype._allDistMargin=function(t,i,n,r){t.children.sort(r);for(var e=this.toBBox,a=h(t,0,i,e),s=h(t,n-i,n,e),l=u(a)+u(s),f=i;f<n-i;f++){var m=t.children[f];o(a,t.leaf?e(m):m),l+=u(a)}for(var c=n-i-1;c>=i;c--){var p=t.children[c];o(s,t.leaf?e(p):p),l+=u(s)}return l},r.prototype._adjustParentBBoxes=function(t,i,n){for(var r=n;r>=0;r--)o(i[r],t)},r.prototype._condense=function(t){for(var i=t.length-1,n=void 0;i>=0;i--)0===t[i].children.length?i>0?(n=t[i-1].children).splice(n.indexOf(t[i]),1):this.clear():a(t[i],this.toBBox)},r});


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/sass-loader/dist/cjs.js!./mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./examples-webgl/vue/module/app/components/mesh/mesh.scss?vue&type=style&index=0&id=83b4749c&lang=scss&scoped=true&");

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

/***/ "./node_modules/tiny-sdf/index.js":
/*!****************************************!*\
  !*** ./node_modules/tiny-sdf/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = TinySDF;

var INF = 1e20;

function TinySDF(fontSize, buffer, radius, cutoff, fontFamily) {
    this.fontSize = fontSize || 24;
    this.buffer = buffer === undefined ? 3 : buffer;
    this.cutoff = cutoff || 0.25;
    this.fontFamily = fontFamily || 'sans-serif';
    this.radius = radius || 8;
    var size = this.size = this.fontSize + this.buffer * 2;

    this.canvas = document.createElement('canvas');
    this.canvas.width = this.canvas.height = size;

    this.ctx = this.canvas.getContext('2d');
    this.ctx.font = fontSize + 'px ' + this.fontFamily;
    this.ctx.textBaseline = 'middle';
    this.ctx.fillStyle = 'black';

    // temporary arrays for the distance transform
    this.gridOuter = new Float64Array(size * size);
    this.gridInner = new Float64Array(size * size);
    this.f = new Float64Array(size);
    this.d = new Float64Array(size);
    this.z = new Float64Array(size + 1);
    this.v = new Int16Array(size);

    // hack around https://bugzilla.mozilla.org/show_bug.cgi?id=737852
    this.middle = Math.round((size / 2) * (navigator.userAgent.indexOf('Gecko/') >= 0 ? 1.2 : 1));
}

TinySDF.prototype.draw = function (char) {
    this.ctx.clearRect(0, 0, this.size, this.size);
    this.ctx.fillText(char, this.buffer, this.middle);

    var imgData = this.ctx.getImageData(0, 0, this.size, this.size);
    var data = imgData.data;

    for (var i = 0; i < this.size * this.size; i++) {
        var a = data[i * 4 + 3] / 255; // alpha value
        this.gridOuter[i] = a === 1 ? 0 : a === 0 ? INF : Math.pow(Math.max(0, 0.5 - a), 2);
        this.gridInner[i] = a === 1 ? INF : a === 0 ? 0 : Math.pow(Math.max(0, a - 0.5), 2);
    }

    edt(this.gridOuter, this.size, this.size, this.f, this.d, this.v, this.z);
    edt(this.gridInner, this.size, this.size, this.f, this.d, this.v, this.z);

    for (i = 0; i < this.size * this.size; i++) {
        var d = this.gridOuter[i] - this.gridInner[i];
        var c = Math.max(0, Math.min(255, Math.round(255 - 255 * (d / this.radius + this.cutoff))));
        data[4 * i + 0] = c;
        data[4 * i + 1] = c;
        data[4 * i + 2] = c;
        data[4 * i + 3] = 255;
    }

    return imgData;
};

// 2D Euclidean distance transform by Felzenszwalb & Huttenlocher https://cs.brown.edu/~pff/dt/
function edt(data, width, height, f, d, v, z) {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            f[y] = data[y * width + x];
        }
        edt1d(f, d, v, z, height);
        for (y = 0; y < height; y++) {
            data[y * width + x] = d[y];
        }
    }
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            f[x] = data[y * width + x];
        }
        edt1d(f, d, v, z, width);
        for (x = 0; x < width; x++) {
            data[y * width + x] = Math.sqrt(d[x]);
        }
    }
}

// 1D squared distance transform
function edt1d(f, d, v, z, n) {
    v[0] = 0;
    z[0] = -INF;
    z[1] = +INF;

    for (var q = 1, k = 0; q < n; q++) {
        var s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        while (s <= z[k]) {
            k--;
            s = ((f[q] + q * q) - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
        }
        k++;
        v[k] = q;
        z[k] = s;
        z[k + 1] = +INF;
    }

    for (q = 0, k = 0; q < n; q++) {
        while (z[k + 1] < q) k++;
        d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
    }
}


/***/ }),

/***/ "./node_modules/ts-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=script&lang=ts&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/ts-loader??ref--1!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=script&lang=ts& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mesh_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mesh.ts */ "./examples-webgl/vue/module/app/components/mesh/mesh.ts");
// @ts-ignore

/* harmony default export */ __webpack_exports__["default"] = (_mesh_ts__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=template&id=83b4749c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./examples-webgl/vue/module/app/components/mesh/mesh.vue?vue&type=template&id=83b4749c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
    [_vm._v("你的浏览器不支持WebGL，请更换新的浏览器")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/events/index.ts":
/*!*****************************!*\
  !*** ./src/events/index.ts ***!
  \*****************************/
/*! exports provided: EventDispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/**
 * eventBus
 */
var EventDispatcher = /** @class */ (function () {
    function EventDispatcher() {
        this.eventList = {}; // 事件列表
    }
    /**
     * 派发事件
     * @param type 事件类型
     * @param args 事件参数
     */
    EventDispatcher.prototype.dispatchEvent = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var arr = this.eventList[type];
        if (arr) {
            arr.forEach(function (element) {
                element[0].apply(element[1], args);
                // listener.call(thisObject, args);
            });
        }
    };
    /**
     * 监听事件
     * @param type       事件类型
     * @param listener   回调函数
     * @param thisObject 回调执行对象
     */
    EventDispatcher.prototype.addEventListener = function (type, listener, thisObject) {
        var arr = this.eventList[type];
        if (!arr) {
            arr = [];
            this.eventList[type] = arr;
        }
        // else
        // {
        //     arr.forEach(element =>
        //     {
        //         if(element[0] == listener && element[1] == thisObject)
        //         {
        //             return;
        //         }
        //     });
        // }
        arr.push([listener, thisObject]);
    };
    /**
     * 移除事件
     * @param type       事件类型
     * @param listener   回调函数
     * @param thisObject 回调执行对象
     */
    EventDispatcher.prototype.removeEventListener = function (type, listener, thisObject) {
        var arr = this.eventList[type];
        if (arr) {
            var len = arr.length;
            for (var i = len - 1; i >= 0; i--) {
                if (arr[i][0] === listener && arr[i][1] === thisObject) {
                    arr.splice(i, 1);
                }
            }
        }
        if (arr && arr.length === 0) {
            this.eventList[type] = null;
            delete this.eventList[type];
        }
    };
    return EventDispatcher;
}());



/***/ }),

/***/ "./src/graph/mesh.ts":
/*!***************************!*\
  !*** ./src/graph/mesh.ts ***!
  \***************************/
/*! exports provided: PrimitiveMode, Mesh, RectMesh, OneWayArrowMesh, TwoWayArrowMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimitiveMode", function() { return PrimitiveMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mesh", function() { return Mesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectMesh", function() { return RectMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneWayArrowMesh", function() { return OneWayArrowMesh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayArrowMesh", function() { return TwoWayArrowMesh; });
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/gl-matrix.js */ "./lib/gl-matrix.js");
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__);
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

var vec2 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__["vec2"];
var PrimitiveMode;
(function (PrimitiveMode) {
    PrimitiveMode[PrimitiveMode["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    PrimitiveMode[PrimitiveMode["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(PrimitiveMode || (PrimitiveMode = {}));
var Mesh = /** @class */ (function () {
    /**
     * 模型构造函数
     * @param vertexes 顶点坐标
     * @param borderVertexes 边框顶点坐标
     * @param uv 材质UV
     */
    function Mesh(mode, vertexes, offsetRatios, uv, indeces) {
        this._vertexes = vertexes;
        this._offsetRatios = offsetRatios;
        this._uv = uv;
        this._indeces = indeces;
        this._primitiveMode = mode;
    }
    Object.defineProperty(Mesh.prototype, "currVertexes", {
        get: function () {
            return this._vertexes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "prevVertexes", {
        get: function () {
            var vs = this._vertexes;
            return vs.slice(-2).concat(vs.slice(0, vs.length - 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "nextVertexes", {
        get: function () {
            var vs = this._vertexes;
            return vs.slice(2).concat(vs.slice(0, 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "currOffsetRatios", {
        get: function () {
            return this._offsetRatios;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "prevOffsetRatios", {
        get: function () {
            var vs = this._offsetRatios;
            return vs.slice(-2).concat(vs.slice(0, vs.length - 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "nextOffsetRatios", {
        get: function () {
            var vs = this._offsetRatios;
            return vs.slice(2).concat(vs.slice(0, 2));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "originMeshConfig", {
        get: function () {
            var edgeOffsetRatios = new Array(this._vertexes.length);
            edgeOffsetRatios.fill(0);
            return {
                currVertexes: this.currVertexes,
                prevVertexes: this.prevVertexes,
                nextVertexes: this.nextVertexes,
                currOffsetRatios: this.currOffsetRatios,
                prevOffsetRatios: this.prevOffsetRatios,
                nextOffsetRatios: this.nextOffsetRatios,
                edgeOffsetRatios: edgeOffsetRatios,
                indeces: this._indeces,
                uvs: this._uv,
                primitiveMode: this._primitiveMode
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mesh.prototype, "borderMeshConfig", {
        get: function () {
            var len = this.currVertexes.length;
            var cvs = this.currVertexes, pvs = this.prevVertexes, nvs = this.nextVertexes, cvo = this.currOffsetRatios, pvo = this.prevOffsetRatios, nvo = this.nextOffsetRatios, uvs = new Array(len * 2), indeces = new Array();
            uvs.fill(0);
            var arr1 = new Array(len / 2);
            arr1.fill(0);
            var arr2 = new Array(len / 2);
            arr2.fill(1);
            var ero = arr1.concat(arr2);
            len /= 2;
            for (var i = 0; i < len; i++) {
                indeces[i * 2] = i;
                indeces[i * 2 + 1] = len + i;
            }
            indeces.push(indeces[0], indeces[1]);
            // 双倍顶点
            cvs = cvs.concat(cvs);
            pvs = pvs.concat(pvs);
            nvs = nvs.concat(nvs);
            cvo = cvo.concat(cvo);
            pvo = pvo.concat(pvo);
            nvo = nvo.concat(nvo);
            return {
                currVertexes: cvs,
                prevVertexes: pvs,
                nextVertexes: nvs,
                currOffsetRatios: cvo,
                prevOffsetRatios: pvo,
                nextOffsetRatios: nvo,
                edgeOffsetRatios: ero,
                indeces: indeces,
                uvs: uvs,
                primitiveMode: PrimitiveMode.TRIANGLE_STRIP
            };
        },
        enumerable: true,
        configurable: true
    });
    return Mesh;
}());

var RectMesh = /** @class */ (function (_super) {
    __extends(RectMesh, _super);
    function RectMesh(originX, originY) {
        if (originX === void 0) { originX = 0; }
        if (originY === void 0) { originY = 0; }
        var _this = this;
        var vertexes = [0, 0, 0, 0, 0, 0, 0, 0];
        var offsetRatio = [-0.5, 0.5, -0.5, -0.5, 0.5, -0.5, 0.5, 0.5];
        var uv = [0, 1, 0, 0, 1, 0, 1, 1];
        var indeces = [0, 1, 3, 2];
        offsetRatio = offsetRatio.map(function (v, k) {
            if (k % 2 === 0) {
                return v - originX;
            }
            else {
                return v - originY;
            }
        });
        _this = _super.call(this, PrimitiveMode.TRIANGLE_STRIP, vertexes, offsetRatio, uv, indeces) || this;
        return _this;
    }
    return RectMesh;
}(Mesh));

var OneWayArrowMesh = /** @class */ (function (_super) {
    __extends(OneWayArrowMesh, _super);
    function OneWayArrowMesh(width, height) {
        if (width === void 0) { width = 20; }
        if (height === void 0) { height = 20; }
        var _this = this;
        var vertexes = [
            -0.2,
            0,
            0.2,
            0,
            0.2,
            0,
            0.5,
            0,
            0,
            1,
            -0.5,
            0,
            -0.2,
            0
        ].map(function (v, k) {
            if (k % 2 === 0) {
                return v * width;
            }
            else {
                return v * height;
            }
        });
        var offsetRatio = [0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1];
        var uv = new Array(vertexes.length);
        var indeces = [0, 1, 6, 2, 5, 3, 4];
        _this = _super.call(this, PrimitiveMode.TRIANGLE_STRIP, vertexes, offsetRatio, uv, indeces) || this;
        return _this;
    }
    return OneWayArrowMesh;
}(Mesh));

var TwoWayArrowMesh = /** @class */ (function (_super) {
    __extends(TwoWayArrowMesh, _super);
    function TwoWayArrowMesh(width, height) {
        if (width === void 0) { width = 20; }
        if (height === void 0) { height = 20; }
        var _this = this;
        var vertexes = [
            0,
            0,
            0.5,
            1,
            0.2,
            1,
            0.2,
            1,
            0.5,
            1,
            0,
            2,
            -0.5,
            1,
            -0.2,
            1,
            -0.2,
            1,
            -0.5,
            1
        ].map(function (v, k) {
            if (k % 2 === 0) {
                return v * width;
            }
            else {
                return v * height;
            }
        });
        var offsetRatio = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            1,
            0,
            0,
            0,
            0
        ];
        var uv = new Array(vertexes.length);
        var indeces = [0, 1, 9, 2, 8, 3, 7, 4, 6, 5];
        _this = _super.call(this, PrimitiveMode.TRIANGLE_STRIP, vertexes, offsetRatio, uv, indeces) || this;
        return _this;
    }
    return TwoWayArrowMesh;
}(Mesh));

// export class BorderMesh extends Mesh {
// 	constructor(originMesh: Mesh) {
// 		let btransforms = createBorderTransformVector(originMesh.vertexes);
// 		let vertexes;
// 		let transforms;
// 		let uv;
// 		let indeces;
// 		const len = originMesh.vertexes.length / 2;
// 		vertexes = originMesh.vertexes.slice();
// 		transforms = new Array(vertexes.length);
// 		transforms.fill(0);
// 		uv = new Array(vertexes.length);
// 		uv.fill(0);
// 		indeces = [];
// 		for(let i = 0; i < len; i ++) {
// 			vertexes.push(vertexes[i*2], vertexes[i*2+1]);
// 			transforms.push(btransforms[i*2], btransforms[i*2+1]);
// 			uv.push(0,0);
// 			indeces.push(i, len + i);
// 		}
// 		// 闭合
// 		indeces.push(0, 1);
// 		super(PrimitiveMode.TRIANGLE_STRIP, vertexes, transforms, uv, indeces);
// 	}
// }
// function createBorderTransformVector(verteies: number[]): number[] {
// 	const len = verteies.length;
// 	const vs = verteies;
// 	if(len % 2 != 0 && len < 2*3) return;
// 	let transforms = [];
// 	for (let i = 0; i < len; i += 2) {
// 		let curr = i,
// 			prev = 0,
// 			next = 0;
// 		if(i == 0) {
// 			prev = len - 2;
// 			next = i + 2;
// 		} else if (i == len - 2) {
// 			prev = i - 2;
// 			next = 0;
// 		} else {
// 			prev = i - 2;
// 			next = i + 2;
// 		}
// 		let cp = vec2.fromValues(vs[curr], vs[curr+1]),
// 			pp = vec2.fromValues(vs[prev], vs[prev+1]),
// 			np = vec2.fromValues(vs[next], vs[next+1]);
// 		let v = getVertexVec(pp, cp, np);
// 		transforms.push(v[0], v[1]);
// 	}
// 	return transforms;
// }
// function getVertexVec(prevP, currP, nextP) {
// 	let v1 = getBorderVercitalVec(prevP, currP),
// 		v2 = getBorderVercitalVec(currP, nextP);
// 	let p1 = vec2.create(),
// 		p2 = vec2.create(),
// 		p3 = vec2.create(),
// 		p4 = vec2.create();
// 	vec2.add(p1, prevP, v1);
// 	vec2.add(p2, currP, v1);
// 	vec2.add(p3, currP, v2);
// 	vec2.add(p4, nextP, v2);
// 	let A1 = p2[1] - p1[1],
// 		B1 = p2[0] - p1[0],
// 		C1 = p2[0] * p1[1] - p2[1] * p1[0],
// 		A2 = p4[1] - p3[1],
// 		B2 = p4[0] - p3[0],
// 		C2 = p4[0] * p3[1] - p4[1] * p3[0];
// 	let D = A1 * B2 - A2 * B1;
// 	let v = vec2.fromValues((B1 * C2 - B2 * C1)/D, -(C1 * A2 - C2 * A1)/D);
// 	return vec2.subtract(v, v, currP);
// }
// // 获取边得垂直向量
// function getBorderVercitalVec(p1, p2): Float32Array {
// 	let v = vec2.create();
// 	vec2.sub(v, p2, p1);
// 	let a = vec2.angle(vec2.fromValues(1,0), v);
// 	// angleTo 对角度的正负不敏感
// 	if(v[1] < 0) {
// 		a = - a;
// 	}
// 	// 求边的垂直向量
// 	a -= Math.PI/2;
// 	let x = Math.cos(a),
// 		y = Math.sin(a);
// 	if(Math.abs(x) <= 10e-5) {
// 		x = 0;
// 	}
// 	if(Math.abs(y) <= 10e-5) {
// 		y = 0;
// 	}
// 	return vec2.fromValues(x, y);
// }
// export class MeshUnit {
// 	vertexes: number[];
// 	primitiveMode: PrimitiveMode;
// 	constructor(v: number[], mode: PrimitiveMode) {
// 		this.vertexes = v;
// 		this.primitiveMode = mode;
// 	}
// }
// export class MeshFactroy {
// 	public static createRectMesh() {
// 		const varr = [
// 			// x, y, dynamicX, dynamicY,
// 			0,	0,	-0.5,	 0.5,
// 			0,	0,	-0.5,	-0.5,
// 			0,	0,	 0.5,	 0.5,
// 			0,	0,	 0.5,	-0.5,
// 		];
// 		const uv = [
// 			0,	1,
// 			0,	0,
// 			1,	1,
// 			1,	0,
// 		];
// 		const bArr = [
// 			// x, y, dynamicX, dynamicY,
// 			0, 	0,	-0.5,	 0.5,
// 			0,	0,	 0.5,	 0.5,
// 			0,	0,	 0.5,	-0.5,
// 			0,	0,	-0.5,	-0.5,
// 		];
// 		return new Mesh(PrimitiveMode.TRIANGLE_STRIP ,varr, bArr, uv);
// 	}
// 	public static createArrowMesh() {
// 		const varr = [
// 			 0,	15, 0, 0,
// 			-8, 0, 0, 0,
// 			-3, 0, 0, 0,
// 			-3, 0, 0, -1,
// 			 3, 0, 0, -1,
// 			 3, 0, 0, 0,
// 			 8, 0, 0, 0,
// 		];
// 		const uv = [
// 			0, 0,
// 			0, 0,
// 			0, 0,
// 			0, 0,
// 			0, 0,
// 			0, 0,
// 			0, 0,
// 		];
// 		const bArr = varr;
// 		return new Mesh(PrimitiveMode.TRIANGLE_FAN, varr, bArr, uv);
// 	}
// 	public static createTestMesh() {
// 		const varr = [
// 		];
// 	}
// }
// private createBorderVertex(verteies: number[]) {
// 	let len = verteies.length;
// 	if(len % 4 != 0 && len < 4*3) return;
// 	let vlist = [];
// 	for (let i = 0; i < len; i += 4) {
// 		let curr = i,
// 			prev = 0,
// 			next = 0;
// 		if(i == 0) {
// 			prev = len - 4;
// 			next = i + 4;
// 		} else if (i == len - 4) {
// 			prev = i - 4;
// 			next = 0;
// 		} else {
// 			prev = i - 4;
// 			next = i + 4;
// 		}
// 		let currP = new Vector(verteies[curr], verteies[curr+1]),
// 			prevP = new Vector(verteies[prev], verteies[prev+1]),
// 			nextP = new Vector(verteies[next], verteies[next+1]);
// 		let v = this.getVertexVec(prevP, currP, nextP);
// 		vlist.push(verteies[i], verteies[i+1], verteies[i+2], verteies[i+3], v.x, v.y);
// 		vlist.push(0,0);
// 		vlist.push(verteies[i], verteies[i+1], verteies[i+2], verteies[i+3], 0, 0);
// 		vlist.push(0,0);
// 	}
// 	//闭合
// 	vlist.push.apply(vlist, vlist.slice(0, 16));
// 	return vlist;
// }
// // 	获取顶点的偏倚矢量
// private getVertexVec(prevP, currP, nextP) {
// 	let v1 = this.getBorderVercitalVec(prevP, currP),
// 		v2 = this.getBorderVercitalVec(currP, nextP);
// 	let p1 = prevP.add(v1),
// 		p2 = currP.add(v1),
// 		p3 = currP.add(v2),
// 		p4 = nextP.add(v2);
// 	let A1 = p2.y - p1.y,
// 		B1 = p2.x - p1.x,
// 		C1 = p2.x * p1.y - p2.y * p1.x,
// 		A2 = p4.y - p3.y,
// 		B2 = p4.x - p3.x,
// 		C2 = p4.x * p3.y - p4.y * p3.x;
// 	let D = A1 * B2 - A2 * B1;
// 	let v = new Vector((B1 * C2 - B2 * C1)/D, -(C1 * A2 - C2 * A1)/D);
// 	return v.subtract(currP);
// }
// // 获取边得垂直向量
// private getBorderVercitalVec(p1, p2) {
// 	let v = p2.subtract(p1);
// 	let a = v.angleTo(new Vector(1,0));
// 	// angleTo 对角度的正负不敏感
// 	if(v.y < 0) {
// 		a = - a;
// 	}
// 	// 求边的垂直向量
// 	a -= Math.PI/2;
// 	let x = Math.cos(a),
// 		y = Math.sin(a);
// 	if(Math.abs(x) <= 10e-5) {
// 		x = 0;
// 	}
// 	if(Math.abs(y) <= 10e-5) {
// 		y = 0;
// 	}
// 	return new Vector(x, y);
// }


/***/ }),

/***/ "./src/rainbow/index.ts":
/*!******************************!*\
  !*** ./src/rainbow/index.ts ***!
  \******************************/
/*! exports provided: Rainbow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rainbow", function() { return Rainbow; });
/* harmony import */ var _lib_gl_matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/gl-matrix */ "./lib/gl-matrix.js");
/* harmony import */ var _lib_gl_matrix__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_gl_matrix__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../viewport */ "./src/viewport/index.ts");
/* harmony import */ var _source_vsSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./source/vsSource */ "./src/rainbow/source/vsSource.ts");
/* harmony import */ var _source_fsSource__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source/fsSource */ "./src/rainbow/source/fsSource.ts");
/* harmony import */ var _shader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shader */ "./src/rainbow/shader.ts");
/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./program */ "./src/rainbow/program.ts");
/* harmony import */ var _search_searcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../search/searcher */ "./src/search/searcher.ts");
/* harmony import */ var _render_texture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../render/texture */ "./src/render/texture.ts");








_lib_gl_matrix__WEBPACK_IMPORTED_MODULE_0__["glMatrix"].setMatrixArrayType(Float32Array);
var Rainbow = /** @class */ (function () {
    function Rainbow(canvas) {
        this._sizeRatio = 1;
        this.isDebug = true;
        this.canRending = true;
        // 支持性略差,https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
        this._gl = canvas.getContext('webgl2', {
            alpha: false,
            premultiplyAlpha: false,
            antialias: true
        });
        if (!this._gl) {
            throw Error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301WebGL2\u6E32\u67D3\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u4EBA\u5458");
        }
        this._unitList = [];
        this._searcher = new _search_searcher__WEBPACK_IMPORTED_MODULE_6__["Searcher"]();
        this._tf = new _render_texture__WEBPACK_IMPORTED_MODULE_7__["TextureFactroy"](this._gl);
        this._vp = new _viewport__WEBPACK_IMPORTED_MODULE_1__["Viewport"](this);
        this._init();
        window['__unitList'] = this._unitList;
    }
    Object.defineProperty(Rainbow.prototype, "gl", {
        get: function () {
            return this._gl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rainbow.prototype, "prg", {
        get: function () {
            return this._prg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rainbow.prototype, "searcher", {
        get: function () {
            return this._searcher;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rainbow.prototype, "textureFactroy", {
        get: function () {
            return this._tf;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rainbow.prototype, "viewport", {
        get: function () {
            return this._vp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Rainbow.prototype, "sizeRatio", {
        get: function () {
            return this._sizeRatio;
        },
        set: function (ratio) {
            this._sizeRatio = ratio;
            this._vp.vpScaleIsModified = true;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化program shader
     */
    Rainbow.prototype._init = function () {
        var gl = this._gl;
        var vxShader = Object(_shader__WEBPACK_IMPORTED_MODULE_4__["loadShader"])(gl, gl.VERTEX_SHADER, _source_vsSource__WEBPACK_IMPORTED_MODULE_2__["vsSource"]);
        var fgShader = Object(_shader__WEBPACK_IMPORTED_MODULE_4__["loadShader"])(gl, gl.FRAGMENT_SHADER, _source_fsSource__WEBPACK_IMPORTED_MODULE_3__["fsSource"]);
        this._prg = Object(_program__WEBPACK_IMPORTED_MODULE_5__["createProgram"])(gl, vxShader, fgShader);
        gl.useProgram(this._prg);
        // 打开透明度混合
        gl.enable(gl.BLEND);
        gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_DST_COLOR);
        // gl.enable(gl.DEPTH_TEST);
        this._vpScaleLocal = gl.getUniformLocation(this._prg, 'uViewportScale');
        this._vpTranslationLocal = gl.getUniformLocation(this._prg, 'uViewportTranslation');
        this._vpRotationLocal = gl.getUniformLocation(this._prg, 'uViewportRotation');
        this._vecLocal = gl.getUniformLocation(this._prg, 'uConversionVec2');
    };
    /**
     * 渲染
     * todo：脏检查实现
     */
    Rainbow.prototype.render = function () {
        var _this = this;
        if (!this.canRending)
            return;
        this.draw();
        window.requestAnimationFrame(function () { return _this.render(); });
    };
    Rainbow.prototype._updateViewport = function () {
        var _this = this;
        var gl = this.gl;
        var result = false;
        if (this._vp.vpScaleIsModified) {
            gl.uniform2fv(this._vpScaleLocal, this._vp.vpScaleVec2.map(function (s) { return s * _this._sizeRatio; }));
            this._vp.vpScaleIsModified = false;
            result = true;
        }
        if (this._vp.vpTranslationIsModified) {
            gl.uniform2fv(this._vpTranslationLocal, this._vp.vpTranslationVec2);
            this._vp.vpTranslationIsModified = false;
            result = true;
        }
        if (this._vp.vpRotationIsModified) {
            gl.uniform1f(this._vpRotationLocal, this._vp.vpRotation);
            this._vp.vpRotationIsModified = false;
            result = true;
        }
        return result;
    };
    // 更新坐标变换矢量
    Rainbow.prototype._updateConversionVec = function () {
        if (this._vp.cvMatIsModified) {
            var gl = this.gl;
            gl.uniform2fv(this._vecLocal, this._vp.cvec2);
            this._vp.cvMatIsModified = false;
            return true;
        }
        return false;
    };
    /**
     * 绘制
     * @param indexlist 需要绘制的层级
     * @param isForce 是否强制绘制，否则如果数据无变化就不绘制
     */
    Rainbow.prototype.draw = function (indexlist, isForce) {
        if (indexlist === void 0) { indexlist = []; }
        if (isForce === void 0) { isForce = false; }
        var gl = this.gl;
        var r1 = this._updateViewport();
        var r2 = this._updateConversionVec();
        var r3 = false;
        var ul = [];
        var unitlist = this._unitList;
        if (indexlist && indexlist.length > 0) {
            ul = indexlist.map(function (i) { return unitlist[i]; });
        }
        else {
            ul = unitlist;
        }
        ul.forEach(function (units) {
            units.forEach(function (unit) {
                if (unit.updateToGL()) {
                    r3 = true;
                }
            });
        });
        if (isForce || r1 || r2 || r3) {
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
            ul.forEach(function (units) {
                units
                    .filter(function (u) { return u.display === 1 /* DISPLAY */; })
                    .forEach(function (u) {
                    u.updateUniform();
                    u.draw();
                });
            });
        }
    };
    Rainbow.prototype.registVAO = function (unit, index) {
        if (index === void 0) { index = 0; }
        if (!this._unitList[index]) {
            this._unitList[index] = [];
        }
        this._unitList[index].push(unit);
        return unit;
    };
    Rainbow.prototype.unRegistVAO = function (unit, index) {
        if (index === void 0) { index = 0; }
        if (index >= this._unitList.length)
            return;
        var idx = this._unitList[index].indexOf(unit);
        if (idx < 0)
            return;
        this._unitList[index].splice(idx, 1);
    };
    return Rainbow;
}());



/***/ }),

/***/ "./src/rainbow/program.ts":
/*!********************************!*\
  !*** ./src/rainbow/program.ts ***!
  \********************************/
/*! exports provided: createProgram */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProgram", function() { return createProgram; });
/**
 * 创建program
 * @param gl GL context
 * @param vshader a vertex shader program (string)
 * @param fshader a fragment shader program (string)
 * @return created program object, or null if the creation has failed
 */
function createProgram(gl, vertexShader, fragmentShader) {
    // 创建程序对象
    var program = gl.createProgram();
    if (!program) {
        return null;
    }
    // 为程序对象分配顶点着色器和片元着色器
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    // 连接着色器
    gl.linkProgram(program);
    // 检查连接
    var linked = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (!linked) {
        var error = gl.getProgramInfoLog(program);
        console.error('无法连接程序对象: ' + error);
        gl.deleteProgram(program);
        gl.deleteShader(fragmentShader);
        gl.deleteShader(vertexShader);
        return null;
    }
    return program;
}


/***/ }),

/***/ "./src/rainbow/shader.ts":
/*!*******************************!*\
  !*** ./src/rainbow/shader.ts ***!
  \*******************************/
/*! exports provided: loadShader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadShader", function() { return loadShader; });
/**
 * 创建着色器对象
 * loadShader()函数首先创建了一个着色器对象，然后为改着色器对象指定源代码，并进行编译，接着检查编译是否成功，如果编译成功，没有出错，就返回着色器对象。
 * @param gl GL context
 * @param type the type of the shader object to be created
 * @param source shader program (string)
 * @return created shader object, or null if the creation has failed.
 */
function loadShader(gl, type, source) {
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


/***/ }),

/***/ "./src/rainbow/source/fsSource.ts":
/*!****************************************!*\
  !*** ./src/rainbow/source/fsSource.ts ***!
  \****************************************/
/*! exports provided: fsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fsSource", function() { return fsSource; });
var fsSource = "#version 300 es\n\tprecision mediump float;\n\tuniform sampler2D uSampler;\n\t// uniform vec2 uConversionVec2;\t//\u5750\u6807\u8F6C\u6362\n\tin vec2 vTexCoord;\n\tin vec4 vBgColor;\n\tin float vIsText;\n\tin float vTextBorderWidth;\n\tin vec4 vTextBorderColor;\n\tin float vHasTexture;\n\tin vec4 vPos;\n\tin float vNotBorder;\n\tin float vBorderDashed;\n\tin float vOpacity;\n\tin float vDisplay;\n\tout vec4 fragColor;\n\n\tfloat inBorderDashed() {\n\n\t\t// \u662F\u5426\u7ED8\u5236\u865A\u7EBF\n\t\tfloat hasDashed = 1.0 - step(vBorderDashed, 0.0);\n\n\t\tvec2 fw = fwidth(vPos.xy);\n\t\tfloat k = fw.y * (1.0/fw.x);\n\n\t\t// \u5982\u679Ck\u5728 0.95 \u548C 1.05 \u4E4B\u95F4\n\t\tfloat c1 = step(0.95, k) * step(k, 1.05);\n\t\t// \u5982\u679C c1 == 0.1 \u5219 c2 = 0.0 \u5426\u5219 c2 = 1.0\n\t\tfloat c2 = 1.0 - c1;\n\t\t// \u5982\u679C c1 \u6761\u4EF6\u6210\u7ACB \u5219 gl_FragCoord.x \u5426\u5219 ...\n\t\tfloat d = gl_FragCoord.x * c1 + (step(1.0, k) * gl_FragCoord.y + step(k, 1.0) * gl_FragCoord.x) * c2;\n\n\t\treturn step(mod(floor( d * (1.0/vBorderDashed) ), 2.0), 0.0) * hasDashed;\n\t}\n\n\tvec4 drawText(vec4 texture) {\n\t\t// \u6587\u5B57\u8FB9\u6846\u662F\u5426\u5927\u4E8E0\n\t\tfloat c1 = step(0.1, vTextBorderWidth);\n\t\t// \u6587\u5B57\u8FB9\u6846\u662F\u5426\u5C0F\u4E8E\u7B49\u4E8E0\n\t\tfloat c2 = 1.0 - c1;\n\n\t\t// \u7B2C\u4E00\u4E2A\u63D2\u503C\u9636\u68AF\n\t\tfloat start = max(0.0, 0.5 - vTextBorderWidth * 0.1);\n\t\t// \u8FB9\u6846\u63D2\u503C\u7CFB\u6570\n\t\tfloat r1 = smoothstep(start, start + 0.2, texture.r) * c1;\n\t\t// \u6587\u5B57\u63D2\u503C\u7CFB\u6570\n\t\tfloat r2 = smoothstep(0.5, 0.85, texture.r);\n\n\t\treturn vec4(mix(vTextBorderColor.rgb, vBgColor.rgb, r2), r2+(1.0-r2)*r1);\n\t}\n\n\tvec4 drawNormal(vec4 texture, vec4 bgColor) {\n\t\tfloat a1 = texture.a * vHasTexture;\n\t\tfloat a2 = bgColor.a;\n\t\treturn vec4(mix(bgColor.rgb, texture.rgb, a1), a1+(1.0-a1)*a2);\n\t}\n\n\tvoid main(void) {\n\n\t\tif(vDisplay == 0.0 || vOpacity == 0.0) {\n\t\t\tdiscard;\n\t\t\treturn;\n\t\t}\n\n\t\t// ib == 0.0 \u5219\u6B63\u5E38\u6E32\u67D3\uFF0C ib == 1.0 \u5219\u6E32\u67D3\u53CD\u8272\n\t\tfloat ib = inBorderDashed();\n\t\tvec4 bgColor = vec4(vBgColor.rgb * (1.0 - ib) + (vec3(1.0, 1.0, 1.0) - vBgColor.rgb) * ib, vBgColor.a);\n\n\t\t// \u6750\u8D28\n\t\tvec4 tColor = texture(uSampler, vTexCoord);\n\t\t// \u7ED8\u5236\u5B57\u4F53\n\t\tvec4 textColor = drawText(tColor);\n\t\t// \u7ED8\u5236\u666E\u901A\u5BF9\u8C61\n\t\tvec4 normalColor = drawNormal(tColor, bgColor);\n\n\t\tvec4 color = vIsText * textColor + (1.0 - vIsText) * normalColor;\n\t\tcolor.a *= vOpacity;\n\n\t\tfragColor = color;\n\t}\n";


/***/ }),

/***/ "./src/rainbow/source/vsSource.ts":
/*!****************************************!*\
  !*** ./src/rainbow/source/vsSource.ts ***!
  \****************************************/
/*! exports provided: vsSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vsSource", function() { return vsSource; });
var vsSource = "#version 300 es\n\tlayout(location=1) in vec4 currVertexAndRatio;\t\t\t//\u9876\u70B9\u5750\u6807\u548C\u53D8\u5F62\u7CFB\u6570\n\tlayout(location=2) in vec4 prevVertexAndRatio;\n\tlayout(location=3) in vec4 nextVertexAndRatio;\n\tlayout(location=4) in vec4 uvAndEdgeOffsetRatio;\t\t//UV\n\n\tlayout(location=5) in vec4 vertexAndEdgeOffsetValueAndNotFollowViewport;\t// \u9876\u70B9\u5F62\u53D8  \u8FB9\u5F62\u53D8\u503C  \u662F\u5426\u4E0D\u8DDF\u968F\u89C6\u53E3\n\tlayout(location=6) in vec4 UVRect;\t\t\t\t\t\t//UVRect\n\tlayout(location=7) in vec4 backgroundColor;\t\t\t\t//\u80CC\u666F\u8272\n\tlayout(location=8) in vec4 translationAndRotation;\t\t//\u5F62\u53D8\n\tlayout(location=9) in vec4 isTextAndBorderWidthAndDashedAndScale;\t\t//\u662F\u5426\u6E32\u67D3\u6587\u5B57 \u4EE5\u53CA \u6587\u5B57\u8FB9\u6846\u7C97\u7EC6 \u4EE5\u53CA\u7269\u4F53\u8FB9\u6846\u865A\u7EBF \u7F29\u653E\n\tlayout(location=10) in vec4 textBorderColor;\t\t\t//\u6587\u5B57\u8FB9\u6846\u989C\u8272\n\tlayout(location=11) in vec4 opacityAndDisplayAndVpScaleAndVpTrans;\t\t\t//\u900F\u660E\u5EA6 \u662F\u5426\u663E\u793A \u662F\u5426\u8DDF\u968F\u89C6\u53E3\u7F29\u653E \u662F\u5426\u8DDF\u968F\u89C6\u53E3\u5E73\u79FB\n\n\tout vec2 vTexCoord;\t\t\t\t//UV\n\tout vec4 vBgColor;\n\tout float vIsText;\n\tout float vTextBorderWidth;\n\tout vec4 vTextBorderColor;\n\tout float vHasTexture;\n\tout vec4 vPos;\n\tout float vNotBorder;\n\tout float vBorderDashed;\n\tout float vOpacity;\n\tout float vDisplay;\n\n\tuniform vec2 uConversionVec2;\t//\u5750\u6807\u8F6C\u6362\n\tuniform vec2 uViewportTranslation;\t//\u89C6\u53E3\u5E73\u79FB\n\tuniform vec2 uViewportScale;\t\t//\u89C6\u53E3\u7F29\u653E\n\tuniform float uViewportRotation;\t//\u89C6\u53E3\u65CB\u8F6C\n\tuniform vec4 uOpacity;\t\t\t\t//\u5168\u5C40\u900F\u660E\u5EA6\n\n\tmat4 getScaleMatrix(vec2 scale) {\n\t\treturn mat4(\n\t\t\tscale.x, 0.0, 0.0, 0.0,\n\t\t\t0.0, scale.y, 0.0, 0.0,\n\t\t\t0.0, 0.0, 1.0, 0.0,\n\t\t\t0.0, 0.0, 0.0, 1.0\n\t\t);\n\t}\n\n\tmat4 getRotationMatrix(float radian) {\n\t\tfloat cost = cos(radian);\n\t\tfloat sint = sin(radian);\n\t\treturn mat4(\n\t\t\tcost, -sint, 0.0, 0.0,\n\t\t\tsint, cost, 0.0, 0.0,\n\t\t\t0.0, 0.0, 1.0, 0.0,\n\t\t\t0.0, 0.0, 0.0, 1.0\n\t\t);\n\t}\n\n\tmat4 getTranslationMatrix(vec2 translation) {\n\t\treturn mat4(\n\t\t\t1.0, 0.0, 0.0, 0.0,\n\t\t\t0.0, 1.0, 0.0, 0.0,\n\t\t\t0.0, 0.0, 1.0, 0.0,\n\t\t\ttranslation.x, translation.y, 0.0, 1.0\n\t\t);\n\t}\n\n\tvec2 getIntersectionVertex(\n\t\tin vec2 v1,\n\t\tin vec2 v2,\n\t\tin float offset\n\t) {\n\t\tvec4 vv1 = vec4(v1, 0.0, 1.0);\n\t\tvec4 vv2 = vec4(v2, 0.0, 1.0);\n\t\t// \u5411\u91CF\u5939\u89D2\n\t\tvec2 mid = normalize(normalize(v1) + normalize(v2));\n\t\tfloat theta = acos(dot(v1, v2) / (length(v1) * length(v2)));\n\t\t// \u53F3\u624B\u6CD5\u5219\uFF0C\u5224\u65AD\u5939\u89D2\u6B63\u8D1F\n\t\tvec3 c = cross(vv1.xyz, vv2.xyz);\n\t\tfloat l = offset / sin(theta * 0.5);\n\t\treturn mid * l * (- sign(c.z));\n\t}\n\n\tvec2 getVertex(\n\t\tin vec2 origin,\n\t\tin vec2 offsetRatio,\n\t\tin vec2 offsetValue\n\t) {\n\t\tvec2 offset = offsetRatio * offsetValue;\n\t\treturn origin + offset;\n\t}\n\n\tvec2 getFollowViewport() {\n\t\tfloat outViewportStatus = vertexAndEdgeOffsetValueAndNotFollowViewport.w;\t//\u8DDF\u968F\u89C6\u53E3\u72B6\u6001\n\t\tvec3 f = vec3(outViewportStatus - 1.0, outViewportStatus - 2.0, outViewportStatus - 3.0);\n\t\tf = step(vec3(0.5, 0.5, 0.5), abs(f));\n\t\treturn vec2(f.x * f.z, f.y * f.z);\n\t}\n\n\t// \u83B7\u53D6\u7F29\u653E\u77E2\u91CF\n\tvec2 getScaleVec(float scale, vec2 followViewport, vec2 notFollowViewport) {\n\t\tvec2 scaleVec = vec2(scale, scale);\n\t\tvec2 isVpScale = vec2(1.0, 1.0) - opacityAndDisplayAndVpScaleAndVpTrans.zz;\n\t\tvec2 dscaleVec = vec2(1.0, 1.0) / uViewportScale * scaleVec * isVpScale + scaleVec * (1.0-isVpScale);\n\t\treturn dscaleVec * followViewport + scaleVec * notFollowViewport;\n\t}\n\n\tvoid main(void) {\n\n\t\tvec2 pv = getVertex(prevVertexAndRatio.xy, prevVertexAndRatio.zw, vertexAndEdgeOffsetValueAndNotFollowViewport.xy);\n\t\tvec2 cv = getVertex(currVertexAndRatio.xy, currVertexAndRatio.zw, vertexAndEdgeOffsetValueAndNotFollowViewport.xy);\n\t\tvec2 nv = getVertex(nextVertexAndRatio.xy, nextVertexAndRatio.zw, vertexAndEdgeOffsetValueAndNotFollowViewport.xy);\n\t\tvec2 pe = pv - cv;\n\t\tvec2 ne = nv - cv;\n\n\t\t// \u5224\u65AD\u662F\u5426\u9700\u8981\u4E58\u89C6\u53E3\u77E9\u9635\n\t\tvec2 followViewport = getFollowViewport();\n\t\tvec2 notFollowViewport = vec2(1.0, 1.0) - followViewport;\n\n\t\t// \u5404\u79CD\u77E9\u9635\n\t\tmat4 rotationMatrix = getRotationMatrix(translationAndRotation.z);\n\t\t// \u7F29\u653E\u77E9\u9635\uFF0C\u5982\u679C\u8BBE\u7F6E\u4E86\u8131\u79BB\u89C6\u53E3\uFF0C\u5219\u9700\u8981\u8BA1\u7B97\u4E00\u4E2A\u53CD\u5411\u7F29\u653E\u77E9\u9635\n\t\tmat4 scaleMatrix = getScaleMatrix(getScaleVec(isTextAndBorderWidthAndDashedAndScale.w, followViewport, notFollowViewport));\n\t\tmat4 transMat = getTranslationMatrix(translationAndRotation.xy);\n\t\tmat4 converMat = getScaleMatrix(uConversionVec2.xy);\n\t\t// \u89C6\u53E3\u77E9\u9635\n\t\tmat4 vpScaleMatrix = getScaleMatrix(uViewportScale);\n\t\tmat4 vpTranslationMatrix = getTranslationMatrix(uViewportTranslation);\n\t\tmat4 vpRotationMatrix = getRotationMatrix(uViewportRotation);\n\t\tmat4 vpMat = vpTranslationMatrix * vpScaleMatrix * converMat * vpRotationMatrix;\n\n\t\t// \u6C42\u76F8\u90BB\u4E24\u8FB9\u4EA4\u70B9\u5411\u91CF\n\t\tvec2 intersection = getIntersectionVertex(pe, ne, vertexAndEdgeOffsetValueAndNotFollowViewport.z * uvAndEdgeOffsetRatio.z);\n\n\t\tvec4 posOrigin = transMat * scaleMatrix * rotationMatrix * vec4(cv, 0.0, 1.0);\n\t\tvec4 posBorder = rotationMatrix * vec4(intersection, 0.0, 0.0);\n\t\tposBorder = converMat * vec4(vec2(vpRotationMatrix * posBorder) * followViewport + posBorder.xy * notFollowViewport, 0, 0);\n\t\tposOrigin = vec4(vec2(vpMat * posOrigin) * followViewport + vec2(converMat * posOrigin) * notFollowViewport, 0.0, 1.0);\n\n\t\tgl_Position = posOrigin + posBorder;\n\n\t\t// out\n\t\t// \u5982\u679C\u6750\u8D28\u5BBD\u5EA6\u4E3A0 \u5219\u6807\u5FD7\u4E3A\u65E0\u6750\u8D28\n\t\tvHasTexture = step(0.0, UVRect.z);\n\t\tvTexCoord = uvAndEdgeOffsetRatio.xy * UVRect.zw + UVRect.xy;\n\t\tvBgColor = backgroundColor;\n\t\tvIsText = isTextAndBorderWidthAndDashedAndScale.x;\n\t\tvTextBorderWidth = isTextAndBorderWidthAndDashedAndScale.y;\n\t\tvTextBorderColor = textBorderColor;\n\t\tvNotBorder = step(vertexAndEdgeOffsetValueAndNotFollowViewport.z, 0.0);\n\n\t\tvPos = rotationMatrix * vec4(cv, 0.0, 1.0); // \u7528\u4E8E\u8FB9\u6846\u6E32\u67D3\u8BA1\u7B97\n\t\tvPos = vec4(vec2(vpRotationMatrix * vPos) * followViewport + vPos.xy * notFollowViewport, 0.0, 1.0);\n\n\t\tvBorderDashed = isTextAndBorderWidthAndDashedAndScale.z;\n\t\tvOpacity = opacityAndDisplayAndVpScaleAndVpTrans.x * uOpacity.x;\n\t\tvDisplay = opacityAndDisplayAndVpScaleAndVpTrans.y;\n\t}\n";


/***/ }),

/***/ "./src/render/generator.ts":
/*!*********************************!*\
  !*** ./src/render/generator.ts ***!
  \*********************************/
/*! exports provided: Generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return Generator; });
/* harmony import */ var _render_unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render-unit */ "./src/render/render-unit.ts");
/* harmony import */ var _render_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-object */ "./src/render/render-object.ts");


var Generator = /** @class */ (function () {
    function Generator(rainbow, mesh, originIndex, borderIndex, instanceCountMax) {
        if (originIndex === void 0) { originIndex = 0; }
        if (borderIndex === void 0) { borderIndex = 1; }
        if (instanceCountMax === void 0) { instanceCountMax = 0; }
        this._rainbow = rainbow;
        this.originIdx = Math.floor(originIndex);
        this.borderIdx = Math.floor(borderIndex);
        this.originUnit = new _render_unit__WEBPACK_IMPORTED_MODULE_0__["RenderUnit"](rainbow, mesh.originMeshConfig, instanceCountMax).regist();
        this.borderUnit = new _render_unit__WEBPACK_IMPORTED_MODULE_0__["RenderUnit"](rainbow, mesh.borderMeshConfig, instanceCountMax).regist();
        this.rainbow.registVAO(this.originUnit, this.originIdx);
        this.rainbow.registVAO(this.borderUnit, this.borderIdx);
    }
    Generator.prototype.instance = function () {
        return new _render_object__WEBPACK_IMPORTED_MODULE_1__["RenderObject"](this.originUnit, this.borderUnit);
    };
    Generator.prototype.destroy = function () {
        this.rainbow.unRegistVAO(this.originUnit, this.originIdx);
        this.rainbow.unRegistVAO(this.borderUnit, this.borderIdx);
        this.originUnit.destroy();
        this.borderUnit.destroy();
        // todo
        // this.originUnit = null;
        // this.borderUnit = null;
    };
    Generator.prototype.clear = function () {
        this.originUnit.clear();
        this.borderUnit.clear();
    };
    Object.defineProperty(Generator.prototype, "opacity", {
        set: function (o) {
            // this.originUnit.batchAdd(RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS, [o], 0);
            // this.borderUnit.batchAdd(RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS, [o], 0);
            this.originUnit.opacity = o;
            this.borderUnit.opacity = o;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Generator.prototype, "display", {
        set: function (n) {
            this.originUnit.display = n;
            this.borderUnit.display = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Generator.prototype, "translate", {
        set: function (offset) {
            this.originUnit.batchAdd("translationAndRotation" /* TRANSLATION_AND_ROTATION */, offset, 0);
            this.borderUnit.batchAdd("translationAndRotation" /* TRANSLATION_AND_ROTATION */, offset, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Generator.prototype, "rainbow", {
        get: function () {
            return this._rainbow;
        },
        enumerable: true,
        configurable: true
    });
    return Generator;
}());



/***/ }),

/***/ "./src/render/packer.ts":
/*!******************************!*\
  !*** ./src/render/packer.ts ***!
  \******************************/
/*! exports provided: GrowingPacker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrowingPacker", function() { return GrowingPacker; });
/*****
 *
Inputs:
------

  blocks: array of any objects that have .w and .h attributes

Outputs:
-------

  marks each block that fits with a .fit attribute pointing to a
  node with .x and .y coordinates

Example:
-------

  var blocks = [
    { w: 100, h: 100 },
    { w: 100, h: 100 },
    { w:  80, h:  80 },
    { w:  80, h:  80 },
    etc
    etc
  ];

  var packer = new GrowingPacker();
  packer.fit(blocks);

  for(var n = 0 ; n < blocks.length ; n++) {
    var block = blocks[n];
    if (block.fit) {
      Draw(block.fit.x, block.fit.y, block.w, block.h);
    }
  }
 */
var GrowingPacker = /** @class */ (function () {
    function GrowingPacker(maxWidth, maxHeight) {
        if (maxWidth === void 0) { maxWidth = 0; }
        if (maxHeight === void 0) { maxHeight = 0; }
        this.mw = maxWidth;
        this.mh = maxHeight;
    }
    GrowingPacker.prototype.fit = function (blocks) {
        var n;
        var node;
        var block;
        var len = blocks.length;
        var w = len > 0 ? blocks[0].w : 0;
        var h = len > 0 ? blocks[0].h : 0;
        this.root = { x: 0, y: 0, w: w, h: h };
        for (n = 0; n < len; n++) {
            block = blocks[n];
            if (node === this.findNode(this.root, block.w, block.h)) {
                block.fit = this.splitNode(node, block.w, block.h);
            }
            else
                block.fit = this.growNode(block.w, block.h);
        }
        return blocks;
    };
    GrowingPacker.prototype.findNode = function (root, w, h) {
        if (root.used) {
            // @ts-ignore
            return this.findNode(root.right, w, h) || this.findNode(root.down, w, h);
        }
        else if (w <= root.w && h <= root.h) {
            return root;
        }
        else {
            // @ts-ignore
            return null;
        }
    };
    GrowingPacker.prototype.splitNode = function (node, w, h) {
        node.used = true;
        node.down = {
            x: node.x,
            // @ts-ignore
            y: node.y + h,
            w: node.w,
            h: node.h - h
        };
        node.right = {
            // @ts-ignore
            x: node.x + w,
            y: node.y,
            w: node.w - w,
            h: h
        };
        return node;
    };
    GrowingPacker.prototype.growNode = function (w, h) {
        if (this.root.w + w > this.mw || this.root.h + h > this.mh) {
            console.error('Texture too large.');
            // @ts-ignore
            return;
        }
        var canGrowDown = w <= this.root.w;
        var canGrowRight = h <= this.root.h;
        var shouldGrowRight = canGrowRight && this.root.h >= this.root.w + w; // attempt to keep square-ish by growing right when height is much greater than width
        var shouldGrowDown = canGrowDown && this.root.w >= this.root.h + h; // attempt to keep square-ish by growing down  when width  is much greater than height
        if (shouldGrowRight)
            return this.growRight(w, h);
        else if (shouldGrowDown)
            return this.growDown(w, h);
        else if (canGrowRight)
            return this.growRight(w, h);
        else if (canGrowDown)
            return this.growDown(w, h);
        // @ts-ignore
        else
            return null; // need to ensure sensible root starting size to avoid this happening
    };
    GrowingPacker.prototype.growRight = function (w, h) {
        this.root = {
            used: true,
            x: 0,
            y: 0,
            w: this.root.w + w,
            h: this.root.h,
            down: this.root,
            right: { x: this.root.w, y: 0, w: w, h: this.root.h }
        };
        var node = this.findNode(this.root, w, h);
        if (node)
            return this.splitNode(node, w, h);
        // @ts-ignore
        else
            return null;
    };
    GrowingPacker.prototype.growDown = function (w, h) {
        this.root = {
            used: true,
            x: 0,
            y: 0,
            w: this.root.w,
            h: this.root.h + h,
            down: { x: 0, y: this.root.h, w: this.root.w, h: h },
            right: this.root
        };
        var node = this.findNode(this.root, w, h);
        if (node)
            return this.splitNode(node, w, h);
        // @ts-ignore
        else
            return null;
    };
    return GrowingPacker;
}());



/***/ }),

/***/ "./src/render/render-object.ts":
/*!*************************************!*\
  !*** ./src/render/render-object.ts ***!
  \*************************************/
/*! exports provided: RenderObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderObject", function() { return RenderObject; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
/* harmony import */ var _search_searchable_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../search/searchable-object */ "./src/search/searchable-object.ts");
/* harmony import */ var _texture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./texture */ "./src/render/texture.ts");
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



var RATIO = window.devicePixelRatio;
var RenderObject = /** @class */ (function (_super) {
    __extends(RenderObject, _super);
    function RenderObject(originUnit, borderUnit) {
        var _this = _super.call(this, originUnit.rainbow.searcher) || this;
        _this._needReset = false;
        _this._attribs = {
            translation: [0, 0],
            rotation: 0,
            scale: 1,
            backgroundColor: [0, 0, 0, 0],
            uv: null,
            vertexOffsetValue: [0, 0],
            isText: false,
            textBorderWidth: 0,
            textBorderColor: [0, 0, 0, 0],
            borderWidth: 0,
            borderColor: [0, 0, 0, 0],
            borderDashed: 0,
            opacity: 1,
            display: 1 /* DISPLAY */,
            outViewportStatus: 0 /* NONE */,
            attachViewportScale: true,
            attachViewportTranslation: true
        };
        _this._attriblist = [
            'vertexOffsetValue',
            'translation',
            'rotation',
            'scale',
            'backgroundColor',
            'uv',
            'borderWidth',
            'borderColor',
            'borderDashed',
            'isText',
            'textBorderWidth',
            'textBorderColor',
            'opacity',
            'display',
            'outViewportStatus',
            'attachViewportScale',
            'attachViewportTranslation'
        ];
        _this._originUnit = originUnit;
        _this._borderUnit = borderUnit;
        _this._id = _utils__WEBPACK_IMPORTED_MODULE_0__["IdCreator"].createId();
        return _this;
    }
    Object.defineProperty(RenderObject.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "rainbow", {
        get: function () {
            return this._originUnit.rainbow;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "isShown", {
        get: function () {
            return this._isAdded;
        },
        enumerable: true,
        configurable: true
    });
    RenderObject.prototype.show = function () {
        if (!this._isAdded) {
            this._originId = this._originUnit.add();
            this._isAdded = true;
            this.updateStatus();
            this.searchable && this.registToSearcher();
        }
        this.borderWidth = this.borderWidth;
        return this;
    };
    RenderObject.prototype.hide = function () {
        this._isAdded && this._originUnit.remove(this._originId);
        this._isBorderAdded && this._borderUnit.remove(this._borderId);
        this._isAdded = false;
        this._isBorderAdded = false;
        // @ts-ignore
        this._originId = null;
        // @ts-ignore
        this._borderId = null;
        this.deregistToSearcher();
        return this;
    };
    Object.defineProperty(RenderObject.prototype, "translation", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, 0, 2);
            }
            return this._attribs['translation'];
        },
        set: function (offset) {
            // this.rainbow.isDebug && console.log('RenderObject:: translation: ', offset);
            // if(arrayEqual(offset, this._attribs['translation'])) return;
            this._isAdded &&
                this._originUnit.setAttribute(this._originId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, offset, 0);
            this._isBorderAdded &&
                this._borderUnit.setAttribute(this._borderId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, offset, 0);
            this._attribs['translation'] = offset;
            this.searchable && this.registToSearcher();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "rotation", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, 2, 1)[0];
            }
            return this._attribs['rotation'];
        },
        set: function (radian) {
            // if(this.rotation == radian) return;
            var data = [radian];
            this._isAdded &&
                this._originUnit.setAttribute(this._originId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, data, 2);
            this._isBorderAdded &&
                this._borderUnit.setAttribute(this._borderId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, data, 2);
            this._attribs['rotation'] = radian;
            this.searchable && this.registToSearcher();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "scale", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, 3, 1)[0];
            }
            return this._attribs['scale'];
        },
        set: function (n) {
            // if(this.scale == n) return;
            var data = [n];
            this._isAdded &&
                this._originUnit.setAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, data, 3);
            this._isBorderAdded &&
                this._borderUnit.setAttribute(this._borderId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, data, 3);
            this._attribs['scale'] = n;
            this.searchable && this.registToSearcher();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "backgroundColor", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit
                    .getAttribute(this._originId, "backgroundColor" /* BACKGROUND_COLOR */, 0, 4)
                    .map(function (c) { return c * 255; });
            }
            return this._attribs['backgroundColor'];
        },
        set: function (color) {
            // if(arrayEqual(color, this._attribs['backgroundColor'])) return;
            var data = color.map(function (c) { return c / 255; });
            this._isAdded &&
                this._originUnit.setAttribute(this._originId, "backgroundColor" /* BACKGROUND_COLOR */, data);
            this._attribs['backgroundColor'] = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "texture", {
        set: function (texture) {
            if (texture == null) {
                if (this._texture && this._texture instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["ImageTexture"]) {
                    this._texture.removeEventListener("update" /* UPDATE */, this.changeUV, this);
                    // @ts-ignore
                    this._texture = null;
                }
                // @ts-ignore
                this.changeUV(null);
                return;
            }
            if (!(texture instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["ImageTexture"])) {
                return;
            }
            var t = this._texture;
            var tt = texture;
            if (!this._needReset && t === tt)
                return;
            t instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["ImageTexture"] &&
                t.removeEventListener("update" /* UPDATE */, this.changeUV, this);
            this._texture = texture;
            this.changeUV(this._texture);
            this._texture.addEventListener("update" /* UPDATE */, this.changeUV, this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "borderWidth", {
        get: function () {
            if (this._isBorderAdded) {
                return this._borderUnit.getAttribute(this._borderId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, 2, 1)[0];
            }
            return this._attribs['borderWidth'];
        },
        set: function (width) {
            if (this._isBorderAdded && width === this._attribs.borderWidth)
                return;
            this._attribs['borderWidth'] = width;
            var data = [width];
            if (this._isBorderAdded) {
                if (width > 0) {
                    this._borderUnit.setAttribute(this._borderId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, data, 2);
                }
                else {
                    this.removeBorder();
                }
            }
            else if (width > 0) {
                this.addBorder();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "borderColor", {
        get: function () {
            if (this._isBorderAdded) {
                return this._borderUnit
                    .getAttribute(this._borderId, "backgroundColor" /* BACKGROUND_COLOR */, 0, 4)
                    .map(function (c) { return c * 255; });
            }
            return this._attribs['borderColor'];
        },
        set: function (color) {
            // if(arrayEqual(color, this._attribs['borderColor'])) return;
            var data = color.map(function (c) { return c / 255; });
            this._isBorderAdded &&
                this._borderUnit.setAttribute(this._borderId, "backgroundColor" /* BACKGROUND_COLOR */, data);
            this._attribs['borderColor'] = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "borderDashed", {
        get: function () {
            if (this._isBorderAdded) {
                return this._borderUnit.getAttribute(this._borderId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, 2, 1)[0];
            }
            return this._attribs.borderDashed;
        },
        set: function (n) {
            // if(n == this._attribs.borderDashed) return;
            this._isBorderAdded &&
                this._borderUnit.setAttribute(this._borderId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, [n * RATIO], 2);
            this._attribs.borderDashed = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "vertexOffsetValue", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, 0, 2);
            }
            return this._attribs['vertexOffsetValue'];
        },
        set: function (value) {
            // if(arrayEqual(value, this._attribs['vertexOffsetValue'])) return;
            // const v = value.slice(0, 2);
            this._originUnit.setAttribute(this._originId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, value);
            this._borderUnit.setAttribute(this._borderId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, value);
            this._attribs['vertexOffsetValue'] = value;
            this.searchable && this.registToSearcher();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "size", {
        get: function () {
            return this.vertexOffsetValue;
        },
        set: function (value) {
            this.vertexOffsetValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "isText", {
        get: function () {
            if (this._isAdded) {
                return (this._originUnit.getAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, 0, 1)[0] === 1);
            }
            return this._attribs['isText'];
        },
        set: function (ist) {
            // if(this._attribs['isText'] == ist) return;
            var r = ist ? 1 : 0;
            var data = [r];
            this._originUnit.setAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, data, 0);
            this._attribs['isText'] = ist;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "textBorderWidth", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, 1, 1)[0];
            }
            return this._attribs['textBorderWidth'];
        },
        set: function (n) {
            // if(n == this._attribs['textBorderWidth']) return;
            var data = [n];
            this._originUnit.setAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, data, 1);
            this._attribs['textBorderWidth'] = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "textBorderColor", {
        get: function () {
            return this._attribs['textBorderColor'];
        },
        set: function (color) {
            // if(arrayEqual(color, this._attribs['textBorderColor'])) return;
            this._originUnit.setAttribute(this._originId, "textBorderColor" /* TEXT_BORDER_COLOR */, color.map(function (c) { return c / 255; }));
            this._attribs['textBorderColor'] = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "opacity", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, 0, 1)[0];
            }
            return this._attribs['opacity'];
        },
        set: function (n) {
            // let op = numberClamp(0, 1, n);
            // if(this._attribs['opacity'] == op) return;
            var op = Math.max(0, n);
            var data = [op];
            this._originUnit.setAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 0);
            this._borderUnit.setAttribute(this._borderId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 0);
            this._attribs['opacity'] = op;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "display", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, 1)[0];
            }
            return this._attribs['display'];
        },
        set: function (n) {
            // if(this._attribs['display'] == n) return;
            var data = [n];
            this._originUnit.setAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 1);
            this._borderUnit.setAttribute(this._borderId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 1);
            this._attribs['display'] = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "outViewportStatus", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, 3, 1)[0];
            }
            return this._attribs['outViewportStatus'];
        },
        set: function (status) {
            var data = [status];
            this._originUnit.setAttribute(this._originId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, data, 3);
            this._borderUnit.setAttribute(this._borderId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, data, 3);
            this._attribs['outViewportStatus'] = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "attachViewportScale", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, 2, 1)[0] === 1
                    ? true
                    : false;
            }
            return this._attribs['attachViewportScale'];
        },
        set: function (n) {
            // if(this._attribs['attachViewportScale'] == n) return;
            var o = n ? 1 : 0;
            var data = [o];
            this._originUnit.setAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 2);
            this._borderUnit.setAttribute(this._borderId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 2);
            this._attribs['attachViewportScale'] = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderObject.prototype, "attachViewportTranslation", {
        get: function () {
            if (this._isAdded) {
                return this._originUnit.getAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, 3, 1)[0] === 1
                    ? true
                    : false;
            }
            return this._attribs['attachViewportTranslation'];
        },
        set: function (n) {
            // if(this._attribs['attachViewportTranslation'] == n) return;
            var o = n ? 1 : 0;
            var data = [o];
            this._originUnit.setAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 3);
            this._borderUnit.setAttribute(this._borderId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, data, 3);
            this._attribs['attachViewportTranslation'] = n;
        },
        enumerable: true,
        configurable: true
    });
    RenderObject.prototype.getVertexPositions = function (expand) {
        if (expand === void 0) { expand = 0; }
        return this._originUnit.getVertexesPositionById(this._originId, expand);
    };
    RenderObject.prototype.changeUV = function (texture) {
        if (!texture || !(texture instanceof _texture__WEBPACK_IMPORTED_MODULE_2__["ImageTexture"])) {
            this._isAdded &&
                this._originUnit.setAttribute(this._originId, "UVRect" /* UV_RECT */, [
                    0,
                    0,
                    0,
                    0
                ]);
        }
        else {
            var uv = [texture.u, texture.v, texture.width, texture.height];
            this._isAdded &&
                this._originUnit.setAttribute(this._originId, "UVRect" /* UV_RECT */, uv);
            // @ts-ignore
            this._attribs['uv'] = uv;
        }
    };
    RenderObject.prototype.updateStatus = function () {
        this._needReset = true;
        var list = this._attriblist;
        var s = this._attribs;
        // list.forEach(v => this[v] = s[v]);
        if (this._isAdded) {
            this._originUnit.setAttribute(this._originId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, [s['translation'][0], s['translation'][1], s['rotation']]);
            this._originUnit.setAttribute(this._originId, "backgroundColor" /* BACKGROUND_COLOR */, s['backgroundColor'].map(function (v) { return v / 255; }));
            this._originUnit.setAttribute(this._originId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, [s['isText'] ? 1 : 0, 0, 0, s['scale']]);
            this._originUnit.setAttribute(this._originId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, [
                s['opacity'],
                s['display'],
                s['attachViewportScale'] ? 1 : 0,
                s['attachViewportTranslation'] ? 1 : 0
            ]);
            // this._originUnit.setAttribute(this._originId, RenderAttribute.TEXT_BORDER_COLOR, s['textBorderColor'].map(v => v/255));
            this._originUnit.setAttribute(this._originId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, [
                s['vertexOffsetValue'][0],
                s['vertexOffsetValue'][1],
                s['borderWidth'],
                s['outViewportStatus']
            ]);
        }
        this.changeUV(this._texture);
        this._needReset = false;
    };
    RenderObject.prototype.addBorder = function () {
        if (!this._isBorderAdded) {
            this._borderId = this._borderUnit.add();
            this._borderUnit.setAttribute(this._borderId, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, [this.translation[0], this.translation[1], this.rotation], 0);
            this._borderUnit.setAttribute(this._borderId, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, [
                this.vertexOffsetValue[0],
                this.vertexOffsetValue[1],
                this.borderWidth,
                this.outViewportStatus
            ], 0);
            this._borderUnit.setAttribute(this._borderId, "backgroundColor" /* BACKGROUND_COLOR */, this.borderColor.map(function (v) { return v / 255; }), 0);
            this._borderUnit.setAttribute(this._borderId, "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, [this.borderDashed * RATIO, this.scale], 2);
            this._borderUnit.setAttribute(this._borderId, "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, [
                this.opacity,
                this.display,
                this.attachViewportScale ? 1 : 0,
                this.attachViewportTranslation ? 1 : 0
            ], 0);
            this._isBorderAdded = true;
        }
    };
    RenderObject.prototype.removeBorder = function () {
        if (this._isBorderAdded) {
            this._borderUnit.remove(this._borderId);
            // @ts-ignore
            this._borderId = undefined;
            this._isBorderAdded = false;
        }
    };
    return RenderObject;
}(_search_searchable_object__WEBPACK_IMPORTED_MODULE_1__["SearchableObject"]));



/***/ }),

/***/ "./src/render/render-unit.ts":
/*!***********************************!*\
  !*** ./src/render/render-unit.ts ***!
  \***********************************/
/*! exports provided: VertexAttributeStride, RenderAttributeStride, RenderAttributeList, RenderUnformList, RenderUnit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VertexAttributeStride", function() { return VertexAttributeStride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderAttributeStride", function() { return RenderAttributeStride; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderAttributeList", function() { return RenderAttributeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderUnformList", function() { return RenderUnformList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderUnit", function() { return RenderUnit; });
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/gl-matrix.js */ "./lib/gl-matrix.js");
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");


var MAX_INSTANCE = 3000;
var mat4 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__["mat4"];
var vec3 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__["vec3"];
var VertexAttributeStride = new Map();
VertexAttributeStride.set("currVertexAndRatio" /* CURR_VERTEX_AND_RATIO */, 4);
VertexAttributeStride.set("nextVertexAndRatio" /* NEXT_VERTEX_AND_RATIO */, 4);
VertexAttributeStride.set("prevVertexAndRatio" /* PREV_VERTEX_AND_RATIO */, 4);
VertexAttributeStride.set("uvAndEdgeOffsetRatio" /* UV_AND_EDGE_OFFSET_RATIO */, 4);
var RenderAttributeStride = new Map();
RenderAttributeStride.set("vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, 4);
RenderAttributeStride.set("backgroundColor" /* BACKGROUND_COLOR */, 4);
RenderAttributeStride.set("UVRect" /* UV_RECT */, 4);
RenderAttributeStride.set("translationAndRotation" /* TRANSLATION_AND_ROTATION */, 4);
RenderAttributeStride.set("isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */, 4);
RenderAttributeStride.set("textBorderColor" /* TEXT_BORDER_COLOR */, 4);
RenderAttributeStride.set("opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */, 4);
var RenderAttributeList = [
    "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */,
    "backgroundColor" /* BACKGROUND_COLOR */,
    "UVRect" /* UV_RECT */,
    "translationAndRotation" /* TRANSLATION_AND_ROTATION */,
    "isTextAndBorderWidthAndDashedAndScale" /* IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE */,
    "textBorderColor" /* TEXT_BORDER_COLOR */,
    "opacityAndDisplayAndVpScaleAndVpTrans" /* OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS */
];
var RenderUnformList = ["uOpacity" /* OPACITY */];
var RenderUnit = /** @class */ (function () {
    function RenderUnit(rainbow, meshConfig, instanceCountMax) {
        var _this = this;
        if (instanceCountMax === void 0) { instanceCountMax = 0; }
        this.instanceCount = 0;
        this.instanceCountMax = 0;
        this.instanceCountInited = 0;
        this.attribBuffers = new Map();
        this.attribBufferDatas = new Map();
        this.attribIsModifieds = new Map();
        this.attribLocals = new Map();
        this.uniformLocals = new Map();
        this.uniformDatas = new Map();
        this._display = 1 /* DISPLAY */;
        this.displayIsModified = false;
        this._engine = rainbow;
        this._meshConfig = meshConfig;
        var gl = rainbow.gl;
        var prg = rainbow.prg;
        var icm = Math.floor(instanceCountMax);
        this.instanceCountMax = icm > 0 ? icm : MAX_INSTANCE;
        this.instanceCountInited = this.instanceCountMax; // 缓存
        // 初始化
        RenderAttributeList.forEach(function (attrib) {
            // 本体属性
            var data = new Float32Array(
            // @ts-ignore
            _this.instanceCountMax * RenderAttributeStride.get(attrib));
            // @ts-ignore
            _this.attribBuffers.set(attrib, gl.createBuffer());
            _this.attribBufferDatas.set(attrib, data);
            _this.attribIsModifieds.set(attrib, true);
            _this.attribLocals.set(attrib, gl.getAttribLocation(prg, attrib));
        });
        RenderUnformList.forEach(function (uniform) {
            _this.uniformLocals.set(uniform, gl.getUniformLocation(prg, uniform));
            _this.uniformDatas.set(uniform, new Float32Array(4));
        });
        // 默认数据
        this.uniformDatas.set("uOpacity" /* OPACITY */, new Float32Array([1, 0, 0, 0]));
        this.idmap = new Map();
        this.idlist = [];
    }
    RenderUnit.prototype.regist = function () {
        var gl = this._engine.gl;
        var config = this._meshConfig;
        var currVs = config.currVertexes;
        var prevVs = config.prevVertexes;
        var nextVs = config.nextVertexes;
        var currRt = config.currOffsetRatios;
        var prevRt = config.prevOffsetRatios;
        var nextRt = config.nextOffsetRatios;
        var vlen = currVs.length / 2;
        var v1 = [];
        var v2 = [];
        var v3 = [];
        var v4 = [];
        var uvc = config.uvs;
        var eor = config.edgeOffsetRatios;
        for (var i = 0; i < vlen; i++) {
            v1.push(currVs[i * 2], currVs[i * 2 + 1], currRt[i * 2], currRt[i * 2 + 1]);
            v2.push(prevVs[i * 2], prevVs[i * 2 + 1], prevRt[i * 2], prevRt[i * 2 + 1]);
            v3.push(nextVs[i * 2], nextVs[i * 2 + 1], nextRt[i * 2], nextRt[i * 2 + 1]);
            v4.push(uvc[i * 2], uvc[i * 2 + 1], eor[i], 0);
        }
        this.vao = gl.createVertexArray();
        gl.bindVertexArray(this.vao);
        this.registAttribute("currVertexAndRatio" /* CURR_VERTEX_AND_RATIO */, new Float32Array(v1));
        this.registAttribute("prevVertexAndRatio" /* PREV_VERTEX_AND_RATIO */, new Float32Array(v2));
        this.registAttribute("nextVertexAndRatio" /* NEXT_VERTEX_AND_RATIO */, new Float32Array(v3));
        this.registAttribute("uvAndEdgeOffsetRatio" /* UV_AND_EDGE_OFFSET_RATIO */, new Float32Array(v4));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(this._meshConfig.indeces), gl.STATIC_DRAW);
        gl.bindVertexArray(null);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
        return this;
    };
    RenderUnit.prototype.updateToGL = function () {
        var _this = this;
        var gl = this._engine.gl;
        var result = this.displayIsModified;
        gl.bindVertexArray(this.vao);
        RenderAttributeList.forEach(function (attrib) {
            if (_this.attribIsModifieds.get(attrib) === true) {
                _this.updateBufferToGL(attrib, 
                // @ts-ignore
                _this.attribBuffers.get(attrib), _this.attribBufferDatas.get(attrib), RenderAttributeStride.get(attrib));
                _this.attribIsModifieds.set(attrib, false);
                result = true;
            }
        });
        this.displayIsModified = false;
        return result;
    };
    RenderUnit.prototype.updateUniform = function () {
        var _this = this;
        var gl = this.rainbow.gl;
        RenderUnformList.forEach(function (uniform) {
            gl.uniform4fv(_this.uniformLocals.get(uniform), 
            // @ts-ignore
            _this.uniformDatas.get(uniform));
        });
    };
    RenderUnit.prototype.setAttribute = function (id, attrib, value, offset) {
        if (offset === void 0) { offset = 0; }
        if (!id || id === '')
            return;
        var idx = this.idmap.get(id);
        // @ts-ignore
        var stride = RenderAttributeStride.get(attrib);
        var bufferData;
        // @ts-ignore
        bufferData = this.attribBufferDatas.get(attrib);
        this.attribIsModifieds.set(attrib, true);
        // @ts-ignore
        bufferData.set(value.slice(0, stride - offset), idx * stride + offset);
    };
    RenderUnit.prototype.getAttribute = function (id, attrib, offset, lenght) {
        if (offset === void 0) { offset = 0; }
        if (lenght === void 0) { lenght = 0; }
        var idx = this.idmap.get(id);
        // @ts-ignore
        var stride = RenderAttributeStride.get(attrib);
        var bufferData;
        // @ts-ignore
        bufferData = this.attribBufferDatas.get(attrib);
        this.attribIsModifieds.set(attrib, true);
        // @ts-ignore
        var start = idx * stride + offset;
        var end;
        if (lenght > 0) {
            // @ts-ignore
            end = Math.min(start + lenght, (idx + 1) * stride);
        }
        else {
            // @ts-ignore
            end = (idx + 1) * stride;
        }
        return Array.from(bufferData.subarray(start, end));
    };
    RenderUnit.prototype.add = function () {
        var _this = this;
        // 如果超过了最大实例限制，则扩展
        if (this.instanceCount === this.instanceCountMax) {
            this.grow();
        }
        var id = this.createId();
        var idx = this.instanceCount;
        this.idmap.set(id, idx);
        this.idlist[idx] = id;
        this.instanceCount++;
        RenderAttributeList.forEach(function (attrib) {
            return _this.attribIsModifieds.set(attrib, true);
        });
        return id;
    };
    RenderUnit.prototype.remove = function (id) {
        var _this = this;
        var idx = this.idmap.get(id);
        var t = this.instanceCount;
        // @ts-ignore
        if (t < 1 || idx < 0 || idx >= t) {
            return;
        }
        RenderAttributeList.forEach(function (attrib) {
            _this.removeAttributeBufferData(id, attrib);
            _this.attribIsModifieds.set(attrib, true);
        });
        var lastId = this.idlist[this.instanceCount - 1];
        // @ts-ignore
        this.idmap.set(lastId, idx);
        // @ts-ignore
        this.idlist[idx] = lastId;
        this.idmap.delete(id);
        this.idlist.pop();
        this.instanceCount--;
    };
    RenderUnit.prototype.clear = function () {
        var _this = this;
        if (this.instanceCountMax > this.instanceCountInited) {
            var k_1 = this.instanceCountMax / this.instanceCountInited;
            RenderAttributeList.forEach(function (attrib) {
                // @ts-ignore
                var len = _this.attribBufferDatas.get(attrib).length;
                _this.attribBufferDatas.set(attrib, new Float32Array(len / k_1));
            });
            this.instanceCountMax = this.instanceCountInited;
        }
        else {
            this.attribBufferDatas.forEach(function (v) { return v.fill(0); });
        }
        this.attribIsModifieds.forEach(function (v, k) {
            return _this.attribIsModifieds.set(k, true);
        });
        // @ts-ignore
        this.idmap.clear();
        this.idlist = [];
        this.instanceCount = 0;
    };
    RenderUnit.prototype.fill = function (attrib, value) {
        // @ts-ignore
        this.attribBufferDatas.get(attrib).fill(value);
        this.attribIsModifieds.set(attrib, true);
    };
    /**
     * 批量set
     * @param id
     * @param attrib
     * @param value
     * @param offset
     */
    RenderUnit.prototype.batchSet = function (attrib, value, offset) {
        if (offset === void 0) { offset = 0; }
        var stride = RenderAttributeStride.get(attrib);
        // @ts-ignore
        if (stride <= offset) {
            return;
        }
        var buffer = this.attribBufferDatas.get(attrib);
        var len = this.instanceCount;
        // @ts-ignore
        var v = value.slice(0, stride - offset);
        var o = offset;
        for (var i = 0; i < len; i++) {
            // @ts-ignore
            buffer.set(v, o);
            // @ts-ignore
            o += stride;
        }
        this.attribIsModifieds.set(attrib, true);
    };
    /**
     * 批量在原来的值上叠加
     * @param attrib
     * @param value
     * @param offset
     */
    RenderUnit.prototype.batchAdd = function (attrib, value, offset) {
        if (offset === void 0) { offset = 0; }
        var stride = RenderAttributeStride.get(attrib);
        // @ts-ignore
        if (stride <= offset) {
            return;
        }
        var buffer = this.attribBufferDatas.get(attrib);
        var len = this.instanceCount;
        // @ts-ignore
        var v = value.slice(0, stride - offset);
        var vl = v.length;
        var o = offset;
        for (var i = 0; i < len; i++) {
            for (var j = 0; j < vl; j++) {
                // @ts-ignore
                buffer[o + j] += v[j];
            }
            // @ts-ignore
            o += stride;
        }
        this.attribIsModifieds.set(attrib, true);
    };
    RenderUnit.prototype.destroy = function () {
        this.attribBuffers.clear();
        this.attribBufferDatas.clear();
        this.attribIsModifieds.clear();
        this.idmap.clear();
        this.idlist = [];
        this.instanceCount = 0;
        this.vao = null;
    };
    RenderUnit.prototype.draw = function () {
        var gl = this._engine.gl;
        var oc = this._meshConfig;
        gl.bindVertexArray(this.vao);
        gl.drawElementsInstanced(oc.primitiveMode, oc.indeces.length, gl.UNSIGNED_INT, 0, this.instanceCount);
    };
    Object.defineProperty(RenderUnit.prototype, "display", {
        get: function () {
            return this._display;
        },
        set: function (n) {
            this._display = n;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderUnit.prototype, "opacity", {
        get: function () {
            // @ts-ignore
            return this.uniformDatas.get("uOpacity" /* OPACITY */)[0];
        },
        set: function (n) {
            // const o = numberClamp(0, 1, n);
            var o = Math.max(0, n);
            var data = this.uniformDatas.get("uOpacity" /* OPACITY */);
            // @ts-ignore
            data.set([o], 0);
            this.displayIsModified = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RenderUnit.prototype, "rainbow", {
        get: function () {
            return this._engine;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 按ID获取实例的膨胀后真实顶点位置
     * @param id 实例id
     * @param expand 膨胀
     */
    RenderUnit.prototype.getVertexesPositionById = function (id, expand) {
        if (expand === void 0) { expand = 0; }
        // 顶点
        var cv = this._meshConfig.currVertexes;
        // 形变系数
        var co = this._meshConfig.currOffsetRatios;
        // 形变值
        var cov = this.getAttribute(id, "vertexAndEdgeOffsetValueAndNotFollowViewport" /* VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT */, 0, 2);
        // 偏移
        var trans = this.getAttribute(id, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, 0, 2);
        // 旋转
        var rot = this.getAttribute(id, "translationAndRotation" /* TRANSLATION_AND_ROTATION */, 2, 1)[0];
        // 顶点数量
        var len = cv.length / 2;
        var mat = mat4.create();
        mat4.fromZRotation(mat, -rot);
        var vertexes = [];
        for (var i = 0; i < len; i++) {
            var vs = vec3.fromValues(cv[i * 2], cv[i * 2 + 1], 0);
            var ratio = vec3.fromValues(co[i * 2], co[i * 2 + 1], 0);
            // 顶点形变后的坐标
            var vertex = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["getVertexPosition"])(vs, ratio, vec3.fromValues(cov[0], cov[1], 0));
            // @ts-ignore
            vertexes.push(vertex);
        }
        var result = [];
        var _loop_1 = function (j) {
            var pidx = j === 0 ? len - 1 : j - 1;
            var nidx = j === len - 1 ? 0 : j + 1;
            var pv = vertexes[pidx];
            var cv_1 = vertexes[j];
            var nv = vertexes[nidx];
            // 前后边向量
            // @ts-ignore
            var pc = pv.map(function (v, k) { return v - cv_1[k]; });
            // @ts-ignore
            var nc = nv.map(function (v, k) { return v - cv_1[k]; });
            // 膨胀后的坐标
            var rv = Object(_utils_index__WEBPACK_IMPORTED_MODULE_1__["getVertexAfterExpand"])(pc, nc, cv_1, expand);
            // 旋转
            vec3.transformMat4(rv, rv, mat);
            // 偏移
            vec3.add(rv, rv, vec3.fromValues(trans[0], trans[1], 0));
            // @ts-ignore
            result.push(rv[0], rv[1]);
        };
        for (var j = 0; j < len; j++) {
            _loop_1(j);
        }
        return result;
    };
    RenderUnit.prototype.createId = function () {
        return _utils_index__WEBPACK_IMPORTED_MODULE_1__["IdCreator"].createId();
    };
    RenderUnit.prototype.registAttribute = function (attrib, bufferData) {
        var gl = this.rainbow.gl;
        var prg = this.rainbow.prg;
        var buffer = gl.createBuffer();
        var stride = VertexAttributeStride.get(attrib);
        var local = gl.getAttribLocation(prg, attrib);
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
        // @ts-ignore
        gl.vertexAttribPointer(local, stride, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(local);
    };
    RenderUnit.prototype.updateBufferToGL = function (attrib, buffer, bufferData, size, offset) {
        if (offset === void 0) { offset = 0; }
        var gl = this._engine.gl;
        var prg = this._engine.prg;
        var FSIZE = bufferData.BYTES_PER_ELEMENT;
        var local = this.attribLocals.get(attrib);
        var t = this.instanceCount;
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.DYNAMIC_DRAW, 0, t * size);
        gl.enableVertexAttribArray(local);
        gl.vertexAttribPointer(local, size, gl.FLOAT, false, size * FSIZE, offset * FSIZE);
        gl.vertexAttribDivisor(local, 1);
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
    };
    RenderUnit.prototype.removeAttributeBufferData = function (id, attrib) {
        var idx = this.idmap.get(id);
        // @ts-ignore
        var bufferData = this.attribBufferDatas.get(attrib);
        // @ts-ignore
        var stride = RenderAttributeStride.get(attrib);
        var n = Math.max(1, this.instanceCount - 1);
        var arr = new Array(stride);
        arr.fill(0);
        bufferData.set(bufferData.slice(n * stride, (n + 1) * stride), 
        // @ts-ignore
        idx * stride);
        bufferData.set(arr, n * stride);
    };
    RenderUnit.prototype.grow = function () {
        var _this = this;
        RenderAttributeList.forEach(function (attrib) {
            var buffer = _this.attribBufferDatas.get(attrib);
            // @ts-ignore
            var newBuffer = new Float32Array(buffer.length * 2);
            // @ts-ignore
            newBuffer.set(buffer);
            _this.attribBufferDatas.set(attrib, newBuffer);
            // @ts-ignore
            buffer = null;
        });
        this.instanceCountMax *= 2;
    };
    return RenderUnit;
}());



/***/ }),

/***/ "./src/render/texture.ts":
/*!*******************************!*\
  !*** ./src/render/texture.ts ***!
  \*******************************/
/*! exports provided: TextureFactroy, ImageTexture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextureFactroy", function() { return TextureFactroy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageTexture", function() { return ImageTexture; });
/* harmony import */ var tiny_sdf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-sdf */ "./node_modules/tiny-sdf/index.js");
/* harmony import */ var tiny_sdf__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tiny_sdf__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _packer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./packer */ "./src/render/packer.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../events */ "./src/events/index.ts");
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



var TextureConfig = {
    MAX_WIDTH: Math.pow(2, 11),
    MAX_HEIGHT: Math.pow(2, 11)
};
var FontConfig = {
    fontSize: Math.pow(2, 7),
    fontFamily: 'Sans-serif',
    fontWeight: 'normal'
};
// 生成的材质雪碧图 材质间的gap 防止材质采样错误
var TextureGap = Math.pow(2, 1);
var TextureFactroy = /** @class */ (function () {
    // 初始化材质
    function TextureFactroy(glContext) {
        this.blocks = [];
        this.fontMaps = new Map();
        this.gl = glContext;
        var gl = glContext;
        var mw = TextureConfig.MAX_WIDTH;
        var mh = TextureConfig.MAX_HEIGHT;
        this.packer = new _packer__WEBPACK_IMPORTED_MODULE_1__["GrowingPacker"](mw, mh);
        this.texture = gl.createTexture();
        // 创建不可变材质空间
        gl.bindTexture(gl.TEXTURE_2D, this.texture);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1); // y轴反转
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texStorage2D(gl.TEXTURE_2D, 1, gl.RGBA8, mw, mh);
    }
    TextureFactroy.prototype.getOriginTexture = function () {
        return this.texture;
    };
    TextureFactroy.prototype.createTexture = function (source, width, height) {
        if (!source) {
            source = new Uint8Array(width * height * 4);
            source.fill(0);
        }
        var t = new ImageTexture();
        t.index = this.blocks.length;
        // width + 2 和 height + 2 是为了解决材质距离太近被错误采样问题
        this.blocks.push({
            w: width + TextureGap,
            h: height + TextureGap,
            data: {
                source: source,
                texture: t
            }
        });
        this.updateToGL();
        return t;
    };
    TextureFactroy.prototype.getFontTexture = function (str) {
        var t = str.substr(0, 1);
        // @ts-ignore
        if (t === '')
            return null;
        if (!this.fontMaps.has(t)) {
            this.embedFont(t);
            this.updateToGL();
        }
        // @ts-ignore
        return this.fontMaps.get(str);
    };
    TextureFactroy.prototype.getFontTextures = function () {
        return this.fontMaps;
    };
    TextureFactroy.prototype.embedFont = function (chars) {
        var sdf = new tiny_sdf__WEBPACK_IMPORTED_MODULE_0__(FontConfig.fontSize, FontConfig.fontSize / 8, FontConfig.fontSize / 3, null, FontConfig.fontFamily, FontConfig.fontWeight);
        var size = sdf.size;
        for (var i = 0; i < chars.length; i++) {
            var char = chars[i];
            var txt = this.fontMaps.get(char);
            // 不允许重复导入
            if (txt && txt instanceof ImageTexture) {
                continue;
            }
            var s = sdf.draw(char, size);
            var t = new ImageTexture();
            t.index = this.blocks.length;
            // width + 2 和 height + 2 是为了解决材质距离太近被错误采样问题
            this.blocks.push({
                w: size + TextureGap,
                h: size + TextureGap,
                data: {
                    source: s,
                    texture: t
                }
            });
            this.fontMaps.set(char, t);
        }
    };
    TextureFactroy.prototype.updateToGL = function () {
        var _this = this;
        var gl = this.gl;
        var bs = this.blocks;
        // 排序能得到最优解，但是却失去了静态区域
        // this.blocks = bs.sort((a, b) => {
        // 	if (a.w + a.h > b.w + b.h) return -1;
        // 	return 1;
        // });
        // this.blocks.forEach((b, k) => {
        // 	b.data.texture.index = k;
        // });
        this.packer.fit(this.blocks);
        var textures = this.blocks
            .map(function (b, k) { return b.data.texture; })
            .filter(function (t) { return t.isReady === false; });
        textures.forEach(function (t) { return _this.updateTextureToGL(t); });
    };
    TextureFactroy.prototype.updateTextureToGL = function (texture) {
        var idx = texture.index;
        var block = this.blocks[idx];
        var gl = this.gl;
        var gap = TextureGap;
        var ind = gap * 0.5;
        // @ts-ignore
        var x = block.fit.x + ind;
        // @ts-ignore
        var y = block.fit.y + ind;
        var w = block.w - gap;
        var h = block.h - gap;
        texture.update(x, y, w, h);
        // x+1, y+1, width-2 和 height-2 是为了解决材质距离太近被错误采样问题
        gl.texSubImage2D(gl.TEXTURE_2D, 0, x, y, w, h, gl.RGBA, gl.UNSIGNED_BYTE, block.data.source);
        texture.isReady = true;
    };
    /**
     * 复制屏幕像素到材质
     * @param texture
     * @param offsetX
     * @param offsetY
     */
    TextureFactroy.prototype.copyToTexture = function (texture, offsetX, offsetY) {
        if (offsetX === void 0) { offsetX = 0; }
        if (offsetY === void 0) { offsetY = 0; }
        var idx = texture.index;
        var block = this.blocks[idx];
        var gl = this.gl;
        var gap = TextureGap;
        var ind = gap * 0.5;
        // @ts-ignore
        var x = block.fit.x + ind;
        // @ts-ignore
        var y = block.fit.y + ind;
        var w = block.w - gap;
        var h = block.h - gap;
        // 写进材质
        gl.copyTexSubImage2D(gl.TEXTURE_2D, 0, x, y, offsetX, offsetY, w, h);
    };
    return TextureFactroy;
}());

var ImageTexture = /** @class */ (function (_super) {
    __extends(ImageTexture, _super);
    function ImageTexture() {
        var _this = _super.call(this) || this;
        _this.u = 0;
        _this.v = 0;
        _this.width = 0;
        _this.height = 0;
        _this.index = 0;
        _this.isReady = false;
        return _this;
    }
    ImageTexture.prototype.update = function (u, v, width, height, index) {
        if (index === void 0) { index = -1; }
        var mw = TextureConfig.MAX_WIDTH;
        var mh = TextureConfig.MAX_HEIGHT;
        this.u = u / mw;
        this.v = v / mh;
        this.width = width / mw;
        this.height = height / mh;
        if (index >= 0) {
            this.index = index;
        }
        this.dispatchEvent("update" /* UPDATE */, this);
    };
    return ImageTexture;
}(_events__WEBPACK_IMPORTED_MODULE_2__["EventDispatcher"]));



/***/ }),

/***/ "./src/search/searchable-object.ts":
/*!*****************************************!*\
  !*** ./src/search/searchable-object.ts ***!
  \*****************************************/
/*! exports provided: SearchableObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchableObject", function() { return SearchableObject; });
var SearchableObject = /** @class */ (function () {
    function SearchableObject(srh) {
        this._sable = false;
        this._expandRadius = 0;
        this._srh = srh;
    }
    Object.defineProperty(SearchableObject.prototype, "searchable", {
        get: function () {
            return this._sable;
        },
        set: function (able) {
            if (able === this._sable)
                return;
            this._sable = able;
            if (able === true) {
                this.registToSearcher();
            }
            else {
                this.deregistToSearcher();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchableObject.prototype, "expandRadius", {
        get: function () {
            return this._expandRadius;
        },
        set: function (r) {
            if (this._expandRadius === r)
                return;
            this._expandRadius = r;
            // 刷新搜索区域
            this._sable && this.registToSearcher();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchableObject.prototype, "id", {
        get: function () {
            return '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取当前的顶点坐标 override
     */
    SearchableObject.prototype.getVertexPositions = function (expand) {
        if (expand === void 0) { expand = 0; }
        return [];
    };
    /**
     * 注册成可查找
     */
    SearchableObject.prototype.registToSearcher = function () {
        var vs = this.getVertexPositions(this._expandRadius);
        var vx = vs.filter(function (v, k) { return k % 2 === 0; });
        var vy = vs.filter(function (v, k) { return k % 2 !== 0; });
        var obj = {
            id: this.id,
            bounds: {
                minX: Math.min.apply(null, vx),
                maxX: Math.max.apply(null, vx),
                minY: Math.min.apply(null, vy),
                maxY: Math.max.apply(null, vy)
            },
            vertexes: vs
        };
        this._srh.insert(obj);
    };
    /**
     * 解除注册
     */
    SearchableObject.prototype.deregistToSearcher = function () {
        this._srh.remove(this.id);
    };
    return SearchableObject;
}());



/***/ }),

/***/ "./src/search/searcher.ts":
/*!********************************!*\
  !*** ./src/search/searcher.ts ***!
  \********************************/
/*! exports provided: Searcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Searcher", function() { return Searcher; });
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rbush */ "./node_modules/rbush/rbush.min.js");
/* harmony import */ var rbush__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rbush__WEBPACK_IMPORTED_MODULE_0__);

/**
 * 判断点是否在多边形内
 * @param p 点坐标
 * @param poly 多边形顶点坐标
 */
function rayCasting(p, poly) {
    var px = p[0], py = p[1], flag = false, l = poly.length / 2;
    for (var i = 0, j = l - 1; i < l; j = i, i++) {
        var sx = poly[i * 2], sy = poly[i * 2 + 1], tx = poly[j * 2], ty = poly[j * 2 + 1];
        // 点与多边形顶点重合
        if ((sx === px && sy === py) || (tx === px && ty === py)) {
            flag = true;
            break;
        }
        // 判断线段两端点是否在射线两侧
        if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
            // 线段上与射线 Y 坐标相同的点的 X 坐标
            var x = sx + ((py - sy) * (tx - sx)) / (ty - sy);
            // 点在多边形的边上
            if (x === px) {
                flag = true;
                break;
            }
            // 射线穿过多边形的边界
            if (x > px) {
                flag = !flag;
            }
        }
    }
    // 射线穿过多边形边界的次数为奇数时点在多边形内
    return flag;
}
var Searcher = /** @class */ (function () {
    function Searcher() {
        this._sobj = new rbush__WEBPACK_IMPORTED_MODULE_0___default.a(200);
        this._buffer = new Map();
    }
    Searcher.prototype.insert = function (obj) {
        if (!obj) {
            console.log('Searcher: ', 'Can not insert.', obj);
            return;
        }
        var bounds = obj.bounds;
        if (!((bounds.minX - bounds.maxX) * (bounds.minY - bounds.maxY))) {
            console.log('Searcher: ', 'Can not insert, width or height equals 0.');
            return;
        }
        var id = obj.id;
        var bufferObj = this._buffer.get(id);
        bufferObj && this.remove(id);
        this._sobj.insert(this.objToItem(obj));
        this._buffer.set(obj.id, obj);
    };
    Searcher.prototype.remove = function (id) {
        var obj = this._buffer.get(id);
        if (!obj)
            return;
        this._sobj.remove(this.objToItem(obj));
        this._buffer.delete(obj.id);
    };
    Searcher.prototype.search = function (x, y, width, height) {
        var _this = this;
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        var result = this._sobj
            .search({ minX: x, minY: y, maxX: width + x, maxY: height + y })
            .map(function (v) { return _this._buffer.get(v.id); });
        if (width == 0 && height == 0) {
            result = result.filter(function (v) {
                return rayCasting([x, y], v.vertexes);
            });
        }
        return result;
    };
    Searcher.prototype.objToItem = function (obj) {
        var bound = obj.bounds;
        return Object.assign(obj.bounds, {
            id: obj.id
        });
    };
    return Searcher;
}());



/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: Rectangle, getBounds, loadImage, loadImages, IdCreator, getVertexAfterExpand, getVertexPosition, arrayEqual, hexToRgb, isInteger, isChinese, numberClamp, rectangleIntersection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rectangle", function() { return Rectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBounds", function() { return getBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImages", function() { return loadImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCreator", function() { return IdCreator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertexAfterExpand", function() { return getVertexAfterExpand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getVertexPosition", function() { return getVertexPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayEqual", function() { return arrayEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgb", function() { return hexToRgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInteger", function() { return isInteger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isChinese", function() { return isChinese; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numberClamp", function() { return numberClamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectangleIntersection", function() { return rectangleIntersection; });
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/gl-matrix.js */ "./lib/gl-matrix.js");
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__);

var vec2 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__["vec2"];
var vec3 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_0__["vec3"];
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    Rectangle.prototype.setAttrs = function (x, y, w, h) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 0; }
        if (h === void 0) { h = 0; }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    };
    return Rectangle;
}());

function getBounds(vertexes) {
    var vs = vertexes;
    var vsx = vs.filter(function (v, k) { return k % 2 === 0; });
    var vsy = vs.filter(function (v, k) { return k % 2 !== 0; });
    var minx = Math.min.apply(null, vsx);
    var maxx = Math.max.apply(null, vsx);
    var miny = Math.min.apply(null, vsy);
    var maxy = Math.max.apply(null, vsy);
    return new Rectangle(minx, miny, maxx - minx, maxy - miny);
}
function loadImage(src) {
    return new Promise(function (resolve, reject) {
        var image = new Image();
        image.onload = function () { return resolve(image); };
        image.src = src;
    });
}
function loadImages(srcs) {
    return Promise.all(srcs.map(function (src) { return loadImage(src); }));
}
var IdCreator = /** @class */ (function () {
    function IdCreator() {
    }
    IdCreator.createId = function () {
        this.num++;
        return this.num.toString();
    };
    IdCreator.num = 0;
    return IdCreator;
}());

/**
 * 获取膨胀后的顶点坐标
 * @param pcv 前边
 * @param ncv 后边
 * @param cv 当前顶点
 * @param expand 膨胀系数
 */
function getVertexAfterExpand(pcv, ncv, cv, expand) {
    var mpc = vec3.normalize(vec3.create(), pcv);
    var mnc = vec3.normalize(vec3.create(), ncv);
    var mid = vec3.add(vec3.create(), mpc, mnc);
    // 中线单位向量
    mid = vec3.normalize(mid, mid);
    // 夹角
    var theta = Math.acos(vec3.dot(pcv, ncv) / (vec3.length(pcv) * vec3.length(ncv)));
    // 右手法则判断角度正负
    var c = vec3.cross(vec3.create(), mpc, mnc);
    var sign = Math.sign(c[2]);
    // 求膨胀中线长度
    var l = expand / Math.sin(theta * 0.5);
    return mid.map(function (v, k) { return v * l * sign + cv[k]; });
}
/**
 * 获取顶点形变后的坐标
 * @param vertex vec3 原顶点坐标
 * @param ratio vec3 顶点形变系数
 * @param offsetValue vec3 形变值
 */
function getVertexPosition(vertex, ratio, offsetValue) {
    return vertex.map(function (v, k) { return v + ratio[k] * offsetValue[k]; });
}
function arrayEqual(arr1, arr2) {
    var result = true;
    if (!(arr1 instanceof Array) ||
        !(arr2 instanceof Array) ||
        arr1.length !== arr2.length) {
        return false;
    }
    arr1.forEach(function (v, k) {
        if (v !== arr2[k]) {
            result = false;
            return;
        }
    });
    return result;
}
/*16进制颜色转为RGB格式*/
function hexToRgb(str) {
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    var sColor = str.toLowerCase();
    if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
            var sColorNew = '#';
            for (var i = 1; i < 4; i += 1) {
                sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
        }
        // 处理六位的颜色值
        var sColorChange = [];
        for (var i = 1; i < 7; i += 2) {
            // @ts-ignore
            // tslint:disable-next-line:radix
            sColorChange.push(parseInt('0x' + sColor.slice(i, i + 2)));
        }
        return sColorChange;
    }
    else {
        return sColor;
    }
}
// 判断字符串是否是数字
function isInteger(str) {
    var reg = new RegExp('^[-\\+]?[\\d]*$');
    return reg.test(str);
}
function isChinese(str) {
    // 通过字节码进行判断
    var code = str.charCodeAt(0);
    return code >= 0x4e00 && code <= 0x29fa5;
}
function numberClamp(min, max, x) {
    return Math.min(max, Math.max(min, x));
}
function rectangleIntersection(out, rect1, rect2) {
    var x1 = Math.max(rect1.x, rect2.x);
    var y1 = Math.max(rect1.y, rect2.y);
    var x2 = Math.min(rect1.x + rect1.w, rect2.x + rect2.w);
    var y2 = Math.min(rect1.y + rect1.h, rect2.y + rect2.h);
    if (x2 <= x1 || y2 <= y1) {
        out.x = out.y = out.w = out.h = 0;
        return out;
    }
    else {
        out.x = x1;
        out.y = y1;
        out.w = x2 - x1;
        out.h = y2 - y1;
        return out;
    }
}


/***/ }),

/***/ "./src/viewport/index.ts":
/*!*******************************!*\
  !*** ./src/viewport/index.ts ***!
  \*******************************/
/*! exports provided: ViewportEvent, Viewport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportEvent", function() { return ViewportEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Viewport", function() { return Viewport; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events */ "./src/events/index.ts");
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/gl-matrix.js */ "./lib/gl-matrix.js");
/* harmony import */ var _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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



var mat4 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_1__["mat4"];
var vec2 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_1__["vec2"];
var vec3 = _lib_gl_matrix_js__WEBPACK_IMPORTED_MODULE_1__["vec3"];
var RATIO = window.devicePixelRatio;
var ViewportEvent;
(function (ViewportEvent) {
    ViewportEvent["TRANSLATION_CHANGE"] = "translationChange";
    ViewportEvent["SCALE_CHANGE"] = "scaleChange";
    ViewportEvent["SIZE_CHANGE"] = "sizeChange";
    ViewportEvent["ROTATION_CHANGE"] = "rotationChange";
})(ViewportEvent || (ViewportEvent = {}));
var Viewport = /** @class */ (function (_super) {
    __extends(Viewport, _super);
    function Viewport(rainbow) {
        var _this = _super.call(this) || this;
        _this._cvec2 = new Float32Array(2);
        _this._vpScaleVec2 = new Float32Array(2);
        _this._vpTranslationVec2 = new Float32Array(2);
        _this._vpRotation = 0;
        _this._bgColor = [0, 0, 0, 1];
        _this.tempMat4 = mat4.create();
        _this.tempVec3 = vec3.create();
        _this.scaleMin = 0.05;
        _this.scaleMax = 2;
        _this.cvMatIsModified = true;
        _this.vpScaleIsModified = true;
        _this.vpTranslationIsModified = true;
        _this.vpRotationIsModified = true;
        _this._gl = rainbow.gl;
        _this._engine = rainbow;
        var canvas = _this._gl.canvas;
        _this.setViewportSize(canvas.width, canvas.height);
        _this.reset();
        return _this;
    }
    /**
     * 设置背景色
     * @param color 颜色
     */
    Viewport.prototype.setBackgroundColor = function (color) {
        this._bgColor = color;
        this._gl.clearColor.apply(this._gl, color.map(function (c) { return c / 255; }));
    };
    Viewport.prototype.getBackgroundColor = function () {
        return this._bgColor;
    };
    /**
     * 设置视口尺寸
     * @param width 宽度
     * @param height 高度
     */
    Viewport.prototype.setViewportSize = function (width, height, setCanvas) {
        if (setCanvas === void 0) { setCanvas = true; }
        this._vpWidth = width;
        this._vpHeight = height;
        var gl = this._gl;
        var w = width * RATIO;
        var h = height * RATIO;
        gl.viewport(0, 0, w, h);
        this._cvec2.set([(1 / width) * 2, (1 / height) * 2]);
        this.cvMatIsModified = true;
        if (setCanvas) {
            var canvas = gl.canvas;
            canvas.width = w;
            canvas.height = h;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
        }
        this.dispatchEvent(ViewportEvent.SIZE_CHANGE);
    };
    Viewport.prototype.getViewportSize = function () {
        return [this._vpWidth, this._vpHeight];
    };
    /**
     * 按照中心点缩放
     * @param scale 缩放比例
     * @param px 缩放中心x
     * @param py 缩放中心y
     */
    Viewport.prototype.scaleOrigin = function (scale, px, py, dispatch) {
        if (dispatch === void 0) { dispatch = true; }
        scale = Object(_utils__WEBPACK_IMPORTED_MODULE_2__["numberClamp"])(this.scaleMin, this.scaleMax, scale);
        var vpScale = this._vpScaleVec2;
        var sizeRatio = this._engine.sizeRatio;
        var s = (this.scale - scale) * sizeRatio;
        var ms = scale / this.scale;
        vpScale[0] *= ms;
        vpScale[1] *= ms;
        var cos = Math.cos(this._vpRotation);
        var sin = Math.sin(this._vpRotation);
        var dx = px * cos + py * sin;
        var dy = py * cos - px * sin;
        this.translate(dx * s, dy * s, dispatch);
        this.vpScaleIsModified = true;
        dispatch && this.dispatchEvent(ViewportEvent.SCALE_CHANGE);
    };
    /**
     * 设置视口平移
     * @param dx 增量
     * @param dy 增量
     */
    Viewport.prototype.translate = function (dx, dy, dispatch) {
        if (dispatch === void 0) { dispatch = true; }
        var width = this._vpWidth;
        var height = this._vpHeight;
        this._vpTranslationVec2[0] += (dx / width) * 2;
        this._vpTranslationVec2[1] += (dy / height) * 2;
        this.vpTranslationIsModified = true;
        dispatch && this.dispatchEvent(ViewportEvent.TRANSLATION_CHANGE);
    };
    Viewport.prototype.rotate = function (radian, dispatch) {
        if (dispatch === void 0) { dispatch = true; }
        var width = this._vpWidth;
        var height = this._vpHeight;
        this._vpRotation += radian;
        this.vpRotationIsModified = true;
        dispatch && this.dispatchEvent(ViewportEvent.ROTATION_CHANGE);
    };
    Viewport.prototype.reset = function (dispatch) {
        if (dispatch === void 0) { dispatch = true; }
        var gl = this._gl;
        var width = this._vpWidth;
        var height = this._vpHeight;
        this._vpTranslationVec2.set([-1, -1]);
        this._vpScaleVec2.set([1, 1]);
        this._vpRotation = 0;
        this.vpTranslationIsModified = true;
        this.vpScaleIsModified = true;
        this.vpRotationIsModified = true;
        if (dispatch) {
            this.dispatchEvent(ViewportEvent.SCALE_CHANGE);
            this.dispatchEvent(ViewportEvent.TRANSLATION_CHANGE);
            this.dispatchEvent(ViewportEvent.ROTATION_CHANGE);
        }
    };
    Viewport.prototype.resetTranslationAndScale = function (offsetX, offsetY, scale, originX, originY, dispatch) {
        if (scale === void 0) { scale = 1; }
        if (originX === void 0) { originX = 0; }
        if (originY === void 0) { originY = 0; }
        if (dispatch === void 0) { dispatch = true; }
        var sizeRatio = this._engine.sizeRatio;
        this.reset(false);
        this.translate(offsetX * sizeRatio, offsetY * sizeRatio, false);
        this.scaleOrigin(scale, originX, originY, false);
        if (dispatch) {
            this.dispatchEvent(ViewportEvent.SCALE_CHANGE);
            this.dispatchEvent(ViewportEvent.TRANSLATION_CHANGE);
            this.dispatchEvent(ViewportEvent.ROTATION_CHANGE);
        }
    };
    Object.defineProperty(Viewport.prototype, "scale", {
        /**
         * 获取缩放比例
         */
        get: function () {
            return this._vpScaleVec2[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "translation", {
        get: function () {
            var vec2 = this._vpTranslationVec2;
            var sizeRatio = this._engine.sizeRatio;
            var scale = this.scale * sizeRatio;
            return [
                ((vec2[0] + 1) * this._vpWidth * 0.5) / scale,
                ((vec2[1] + 1) * this._vpHeight * 0.5) / scale
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "scaleRange", {
        get: function () {
            return [this.scaleMin, this.scaleMax];
        },
        set: function (range) {
            this.scaleMin = range[0];
            this.scaleMax = range[1];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 从屏幕坐标转换程世界坐标
     * @param x
     * @param y
     * @param z
     */
    Viewport.prototype.changeCoordinateFromScreen = function (x, y) {
        var tvec = this.tempVec3;
        var tmat = this.tempMat4;
        var e = this._engine;
        mat4.identity(tmat);
        tvec.set([this._vpTranslationVec2[0], this._vpTranslationVec2[1], 0]);
        mat4.translate(tmat, tmat, tvec);
        tvec.set([
            this._vpScaleVec2[0] * e.sizeRatio,
            this._vpScaleVec2[1] * e.sizeRatio,
            1
        ]);
        mat4.scale(tmat, tmat, tvec);
        tvec.set([this._cvec2[0], this._cvec2[1], 1]);
        mat4.scale(tmat, tmat, tvec);
        mat4.rotateZ(tmat, tmat, -this._vpRotation);
        mat4.invert(tmat, tmat);
        var w = this._vpWidth / 2;
        var h = this._vpHeight / 2;
        tvec.set([x / w - 1, -y / h + 1, 0]);
        vec3.transformMat4(tvec, tvec, tmat);
        return tvec.subarray(0, 2);
    };
    Object.defineProperty(Viewport.prototype, "cvec2", {
        get: function () {
            return this._cvec2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "vpScaleVec2", {
        get: function () {
            return this._vpScaleVec2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "vpTranslationVec2", {
        get: function () {
            return this._vpTranslationVec2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Viewport.prototype, "vpRotation", {
        get: function () {
            return this._vpRotation;
        },
        enumerable: true,
        configurable: true
    });
    return Viewport;
}(_events__WEBPACK_IMPORTED_MODULE_0__["EventDispatcher"]));



/***/ })

}]);
//# sourceMappingURL=0.rainbow.js.map