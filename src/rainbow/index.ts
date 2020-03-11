import * as glMatrix from '../../lib/gl-matrix.js';
import {PaintUnitInterface, DisplayStatus} from '../utils';
import {Viewport} from '../viewport';
import {vsSource} from './source/vsSource';
import {fsSource} from './source/fsSource';
import {loadShader} from './shader';
import {createProgram} from './program';

glMatrix.glMatrix.setMatrixArrayType(Float32Array);

export class Rainbow {
  private _gl: WebGL2RenderingContext;
  private _prg!: WebGLProgram;
  private _searcher;
  // private _tf: TextureFactroy;
  private _vp: Viewport;
  private _unitList: PaintUnitInterface[][];
  private _vpScaleLocal;
  private _vpTranslationLocal;
  private _vecLocal;
  private _vpRotationLocal;
  private _sizeRatio = 1;
  public isDebug: boolean = true;
  public canRending: boolean = true;

  constructor(canvas: HTMLCanvasElement) {
    // 支持性略差,https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext
    this._gl = canvas.getContext('webgl2', {
      alpha: false,
      premultiplyAlpha: false, // 关闭al
      antialias: true
    }) as WebGL2RenderingContext;
    if (!this._gl) {
      throw Error(`当前环境不支持WebGL2渲染，请联系开发人员`);
    }
    this._unitList = [];
    // this._searcher = new Searcher();
    // this._tf = new TextureFactroy(this._gl);
    this._vp = new Viewport(this);
    this._init();
    window['__unitList'] = this._unitList;
  }

  public get gl() {
    return this._gl;
  }
  public get prg() {
    return this._prg;
  }
  // public get searcher(): Searcher {
  //   return this._searcher;
  // }
  // public get textureFactroy(): TextureFactroy {
  //   return this._tf;
  // }
  public get viewport(): Viewport {
    return this._vp;
  }

  public set sizeRatio(ratio: number) {
    this._sizeRatio = ratio;
    this._vp.vpScaleIsModified = true;
  }

  public get sizeRatio(): number {
    return this._sizeRatio;
  }
  /**
   * 初始化program shader
   */
  private _init() {
    let gl = this._gl;
    const vxShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fgShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    this._prg = createProgram(gl, vxShader, fgShader) as WebGLProgram;

    gl.useProgram(this._prg);
    // 打开透明度混合
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(
      gl.SRC_ALPHA,
      gl.ONE_MINUS_SRC_ALPHA,
      gl.ONE,
      gl.ONE_MINUS_DST_COLOR
    );
    // gl.enable(gl.DEPTH_TEST);

    this._vpScaleLocal = gl.getUniformLocation(this._prg, 'uViewportScale');
    this._vpTranslationLocal = gl.getUniformLocation(
      this._prg,
      'uViewportTranslation'
    );
    this._vpRotationLocal = gl.getUniformLocation(
      this._prg,
      'uViewportRotation'
    );
    this._vecLocal = gl.getUniformLocation(this._prg, 'uConversionVec2');
  }

  /**
   * 渲染
   * todo：脏检查实现
   */
  public render() {
    if (!this.canRending) return;
    this.draw();
    window.requestAnimationFrame(() => this.render());
  }

  private _updateViewport(): boolean {
    const gl = this.gl;
    let result = false;
    if (this._vp.vpScaleIsModified) {
      gl.uniform2fv(
        this._vpScaleLocal,
        this._vp.vpScaleVec2.map(s => s * this._sizeRatio)
      );
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
  }

  // 更新坐标变换矢量
  private _updateConversionVec(): boolean {
    if (this._vp.cvMatIsModified) {
      const gl = this.gl;
      gl.uniform2fv(this._vecLocal, this._vp.cvec2);
      this._vp.cvMatIsModified = false;
      return true;
    }
    return false;
  }

  /**
   * 绘制
   * @param indexlist 需要绘制的层级
   * @param isForce 是否强制绘制，否则如果数据无变化就不绘制
   */
  public draw(indexlist: number[] = [], isForce: boolean = false) {
    const gl = this.gl;
    const r1 = this._updateViewport();
    const r2 = this._updateConversionVec();
    let r3 = false;

    let ul: PaintUnitInterface[][] = [];
    const unitlist = this._unitList;
    if (indexlist && indexlist.length > 0) {
      ul = indexlist.map(i => unitlist[i]);
    } else {
      ul = unitlist;
    }

    ul.forEach(units => {
      units.forEach(unit => {
        if (unit.updateToGL()) {
          r3 = true;
        }
      });
    });

    if (isForce || r1 || r2 || r3) {
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      ul.forEach(units => {
        units
          .filter(u => u.display === DisplayStatus.DISPLAY)
          .forEach(u => {
            u.updateUniform();
            u.draw();
          });
      });
    }
  }
}
