export declare class Rectangle {
    x: number;
    y: number;
    w: number;
    h: number;
    constructor(x?: number, y?: number, w?: number, h?: number);
    setAttrs(x?: number, y?: number, w?: number, h?: number): void;
}
export declare function getBounds(vertexes: number[]): Rectangle;
export declare function loadImage(src: string): Promise<any>;
export declare function loadImages(srcs: string[]): Promise<any[]>;
export declare class IdCreator {
    private static num;
    static createId(): string;
}
/**
 * 获取膨胀后的顶点坐标
 * @param pcv 前边
 * @param ncv 后边
 * @param cv 当前顶点
 * @param expand 膨胀系数
 */
export declare function getVertexAfterExpand(pcv: Float32Array, ncv: Float32Array, cv: Float32Array, expand: number): Float32Array;
/**
 * 获取顶点形变后的坐标
 * @param vertex vec3 原顶点坐标
 * @param ratio vec3 顶点形变系数
 * @param offsetValue vec3 形变值
 */
export declare function getVertexPosition(vertex: Float32Array, ratio: Float32Array, offsetValue: Float32Array): Float32Array;
export declare function arrayEqual(arr1: any, arr2: any): boolean;
export declare function hexToRgb(str: string): string | never[];
export declare function isInteger(str: string): boolean;
export declare function isChinese(str: string): boolean;
export declare function numberClamp(min: number, max: number, x: number): number;
export declare function rectangleIntersection(out: Rectangle, rect1: Rectangle, rect2: Rectangle): Rectangle;
