import { Viewport } from '../viewport';
import { PaintUnitInterface } from '../interface/unit';
import { Searcher } from '../search/searcher';
import { TextureFactroy } from '../render/texture';
export declare class Rainbow {
    private _gl;
    private _prg;
    private _searcher;
    private _tf;
    private _vp;
    private _unitList;
    private _vpScaleLocal;
    private _vpTranslationLocal;
    private _vecLocal;
    private _vpRotationLocal;
    private _sizeRatio;
    isDebug: boolean;
    canRending: boolean;
    constructor(canvas: HTMLCanvasElement);
    get gl(): WebGL2RenderingContext;
    get prg(): WebGLProgram;
    get searcher(): Searcher;
    get textureFactroy(): TextureFactroy;
    get viewport(): Viewport;
    set sizeRatio(ratio: number);
    get sizeRatio(): number;
    /**
     * 初始化program shader
     */
    private _init;
    /**
     * 渲染
     * todo：脏检查实现
     */
    render(): void;
    private _updateViewport;
    private _updateConversionVec;
    /**
     * 绘制
     * @param indexlist 需要绘制的层级
     * @param isForce 是否强制绘制，否则如果数据无变化就不绘制
     */
    draw(indexlist?: number[], isForce?: boolean): void;
    registVAO(unit: PaintUnitInterface, index?: number): PaintUnitInterface;
    unRegistVAO(unit: PaintUnitInterface, index?: number): void;
}
