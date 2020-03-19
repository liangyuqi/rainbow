import { Rainbow } from '../rainbow';
import { EventDispatcher } from '../events';
export declare enum ViewportEvent {
    TRANSLATION_CHANGE = "translationChange",
    SCALE_CHANGE = "scaleChange",
    SIZE_CHANGE = "sizeChange",
    ROTATION_CHANGE = "rotationChange"
}
export declare class Viewport extends EventDispatcher {
    private _engine;
    private _gl;
    private _cvec2;
    private _vpScaleVec2;
    private _vpTranslationVec2;
    private _vpRotation;
    private _bgColor;
    private _vpWidth;
    private _vpHeight;
    private tempMat4;
    private tempVec3;
    private scaleMin;
    private scaleMax;
    cvMatIsModified: boolean;
    vpScaleIsModified: boolean;
    vpTranslationIsModified: boolean;
    vpRotationIsModified: boolean;
    constructor(rainbow: Rainbow);
    /**
     * 设置背景色
     * @param color 颜色
     */
    setBackgroundColor(color: number[]): void;
    getBackgroundColor(): number[];
    /**
     * 设置视口尺寸
     * @param width 宽度
     * @param height 高度
     */
    setViewportSize(width: number, height: number, setCanvas?: boolean): void;
    getViewportSize(): number[];
    /**
     * 按照中心点缩放
     * @param scale 缩放比例
     * @param px 缩放中心x
     * @param py 缩放中心y
     */
    scaleOrigin(scale: number, px: number, py: number, dispatch?: boolean): void;
    /**
     * 设置视口平移
     * @param dx 增量
     * @param dy 增量
     */
    translate(dx: number, dy: number, dispatch?: boolean): void;
    rotate(radian: number, dispatch?: boolean): void;
    reset(dispatch?: boolean): void;
    resetTranslationAndScale(offsetX: number, offsetY: number, scale?: number, originX?: number, originY?: number, dispatch?: boolean): void;
    /**
     * 获取缩放比例
     */
    get scale(): number;
    get translation(): number[];
    set scaleRange(range: number[]);
    get scaleRange(): number[];
    /**
     * 从屏幕坐标转换程世界坐标
     * @param x
     * @param y
     * @param z
     */
    changeCoordinateFromScreen(x: number, y: number): Float32Array;
    get cvec2(): Float32Array;
    get vpScaleVec2(): Float32Array;
    get vpTranslationVec2(): Float32Array;
    get vpRotation(): number;
}
