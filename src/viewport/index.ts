import {Rainbow} from '../rainbow';
import {EventDispatcher} from '../events';
import * as glMatrix from '../../lib/gl-matrix.js';
import {numberClamp} from '../utils';

const mat4 = glMatrix.mat4;
const vec2 = glMatrix.vec2;
const vec3 = glMatrix.vec3;
const RATIO = window.devicePixelRatio;

export enum ViewportEvent {
  TRANSLATION_CHANGE = 'translationChange',
  SCALE_CHANGE = 'scaleChange',
  SIZE_CHANGE = 'sizeChange',
  ROTATION_CHANGE = 'rotationChange'
}

export class Viewport extends EventDispatcher {
  private _engine: Rainbow;
  private _gl;
  private _cvec2: Float32Array = new Float32Array(2);
  private _vpScaleVec2: Float32Array = new Float32Array(2);
  private _vpTranslationVec2: Float32Array = new Float32Array(2);
  private _vpRotation: number = 0;
  private _bgColor: number[] = [0, 0, 0, 1];
  private _vpWidth!: number;
  private _vpHeight!: number;
  private tempMat4: Float32Array = mat4.create();
  private tempVec3: Float32Array = vec3.create();
  private scaleMin: number = 0.05;
  private scaleMax: number = 2;
  public cvMatIsModified: boolean = true;
  public vpScaleIsModified: boolean = true;
  public vpTranslationIsModified: boolean = true;
  public vpRotationIsModified: boolean = true;
  constructor(rainbow: Rainbow) {
    super();
    this._gl = rainbow.gl;
    this._engine = rainbow;
    const canvas = this._gl.canvas;
    this.setViewportSize(canvas.width, canvas.height);
    this.reset();
  }

  /**
   * 设置背景色
   * @param color 颜色
   */
  setBackgroundColor(color: number[]) {
    this._bgColor = color;
    this._gl.clearColor.apply(
      this._gl,
      color.map(c => c / 255)
    );
  }

  getBackgroundColor(): number[] {
    return this._bgColor;
  }

  /**
   * 设置视口尺寸
   * @param width 宽度
   * @param height 高度
   */
  setViewportSize(width: number, height: number, setCanvas: boolean = true) {
    this._vpWidth = width;
    this._vpHeight = height;

    const gl = this._gl;
    const w = width * RATIO;
    const h = height * RATIO;

    gl.viewport(0, 0, w, h);

    this._cvec2.set([(1 / width) * 2, (1 / height) * 2]);

    this.cvMatIsModified = true;

    if (setCanvas) {
      const canvas = gl.canvas;
      canvas.width = w;
      canvas.height = h;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
    }

    this.dispatchEvent(ViewportEvent.SIZE_CHANGE);
  }

  getViewportSize(): number[] {
    return [this._vpWidth, this._vpHeight];
  }

  /**
   * 按照中心点缩放
   * @param scale 缩放比例
   * @param px 缩放中心x
   * @param py 缩放中心y
   */
  scaleOrigin(scale: number, px: number, py: number, dispatch: boolean = true) {
    scale = numberClamp(this.scaleMin, this.scaleMax, scale);
    const vpScale = this._vpScaleVec2;
    const sizeRatio = this._engine.sizeRatio;
    const s = (this.scale - scale) * sizeRatio;
    const ms = scale / this.scale;
    vpScale[0] *= ms;
    vpScale[1] *= ms;

    const cos = Math.cos(this._vpRotation);
    const sin = Math.sin(this._vpRotation);

    let dx = px * cos + py * sin;
    let dy = py * cos - px * sin;

    this.translate(dx * s, dy * s, dispatch);
    this.vpScaleIsModified = true;
    dispatch && this.dispatchEvent(ViewportEvent.SCALE_CHANGE);
  }

  /**
   * 设置视口平移
   * @param dx 增量
   * @param dy 增量
   */
  translate(dx: number, dy: number, dispatch: boolean = true) {
    const width = this._vpWidth;
    const height = this._vpHeight;
    this._vpTranslationVec2[0] += (dx / width) * 2;
    this._vpTranslationVec2[1] += (dy / height) * 2;
    this.vpTranslationIsModified = true;
    dispatch && this.dispatchEvent(ViewportEvent.TRANSLATION_CHANGE);
  }

  rotate(radian: number, dispatch: boolean = true) {
    const width = this._vpWidth;
    const height = this._vpHeight;

    this._vpRotation += radian;
    this.vpRotationIsModified = true;
    dispatch && this.dispatchEvent(ViewportEvent.ROTATION_CHANGE);
  }

  reset(dispatch: boolean = true) {
    const gl = this._gl;
    const width = this._vpWidth;
    const height = this._vpHeight;
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
  }

  resetTranslationAndScale(
    offsetX: number,
    offsetY: number,
    scale: number = 1,
    originX: number = 0,
    originY: number = 0,
    dispatch: boolean = true
  ) {
    const sizeRatio = this._engine.sizeRatio;
    this.reset(false);
    this.translate(offsetX * sizeRatio, offsetY * sizeRatio, false);
    this.scaleOrigin(scale, originX, originY, false);
    if (dispatch) {
      this.dispatchEvent(ViewportEvent.SCALE_CHANGE);
      this.dispatchEvent(ViewportEvent.TRANSLATION_CHANGE);
      this.dispatchEvent(ViewportEvent.ROTATION_CHANGE);
    }
  }

  /**
   * 获取缩放比例
   */
  get scale(): number {
    return this._vpScaleVec2[0];
  }

  get translation(): number[] {
    const vec2 = this._vpTranslationVec2;
    const sizeRatio = this._engine.sizeRatio;
    const scale = this.scale * sizeRatio;
    return [
      ((vec2[0] + 1) * this._vpWidth * 0.5) / scale,
      ((vec2[1] + 1) * this._vpHeight * 0.5) / scale
    ];
  }

  set scaleRange(range: number[]) {
    this.scaleMin = range[0];
    this.scaleMax = range[1];
  }

  get scaleRange(): number[] {
    return [this.scaleMin, this.scaleMax];
  }

  /**
   * 从屏幕坐标转换程世界坐标
   * @param x
   * @param y
   * @param z
   */
  changeCoordinateFromScreen(x: number, y: number): Float32Array {
    const tvec = this.tempVec3;
    const tmat = this.tempMat4;
    const e = this._engine;

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

    const w = this._vpWidth / 2;
    const h = this._vpHeight / 2;

    tvec.set([x / w - 1, -y / h + 1, 0]);
    vec3.transformMat4(tvec, tvec, tmat);
    return tvec.subarray(0, 2);
  }

  get cvec2(): Float32Array {
    return this._cvec2;
  }

  get vpScaleVec2(): Float32Array {
    return this._vpScaleVec2;
  }

  get vpTranslationVec2(): Float32Array {
    return this._vpTranslationVec2;
  }

  get vpRotation(): number {
    return this._vpRotation;
  }
}
