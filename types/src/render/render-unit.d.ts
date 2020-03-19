import { PaintUnitInterface } from 'src/interface/unit.js';
import { Rainbow } from 'src/index.js';
import { MeshConfig } from 'src/graph/mesh.js';
import { DisplayStatus } from 'src/enum/unit.js';
export declare const enum VertexAttribute {
    CURR_VERTEX_AND_RATIO = "currVertexAndRatio",
    NEXT_VERTEX_AND_RATIO = "nextVertexAndRatio",
    PREV_VERTEX_AND_RATIO = "prevVertexAndRatio",
    UV_AND_EDGE_OFFSET_RATIO = "uvAndEdgeOffsetRatio"
}
export declare let VertexAttributeStride: Map<VertexAttribute, number>;
export declare const enum RenderAttribute {
    VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT = "vertexAndEdgeOffsetValueAndNotFollowViewport",
    BACKGROUND_COLOR = "backgroundColor",
    UV_RECT = "UVRect",
    TRANSLATION_AND_ROTATION = "translationAndRotation",
    IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE = "isTextAndBorderWidthAndDashedAndScale",
    TEXT_BORDER_COLOR = "textBorderColor",
    OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS = "opacityAndDisplayAndVpScaleAndVpTrans"
}
export declare let RenderAttributeStride: Map<RenderAttribute, number>;
export declare const RenderAttributeList: RenderAttribute[];
export declare const enum RenderUniform {
    OPACITY = "uOpacity"
}
export declare const RenderUnformList: RenderUniform[];
export declare class RenderUnit implements PaintUnitInterface {
    private _engine;
    private idmap;
    private idlist;
    private _meshConfig;
    private vao;
    private instanceCount;
    private instanceCountMax;
    private instanceCountInited;
    private attribBuffers;
    private attribBufferDatas;
    private attribIsModifieds;
    private attribLocals;
    private uniformLocals;
    private uniformDatas;
    private _display;
    private displayIsModified;
    constructor(rainbow: Rainbow, meshConfig: MeshConfig, instanceCountMax?: number);
    regist(): RenderUnit;
    updateToGL(): boolean;
    updateUniform(): void;
    setAttribute(id: string, attrib: RenderAttribute, value: number[], offset?: number): void;
    getAttribute(id: string, attrib: RenderAttribute, offset?: number, lenght?: number): number[];
    add(): string;
    remove(id: string): void;
    clear(): void;
    fill(attrib: RenderAttribute, value: number): void;
    /**
     * 批量set
     * @param id
     * @param attrib
     * @param value
     * @param offset
     */
    batchSet(attrib: RenderAttribute, value: Float32Array | Array<number>, offset?: number): void;
    /**
     * 批量在原来的值上叠加
     * @param attrib
     * @param value
     * @param offset
     */
    batchAdd(attrib: RenderAttribute, value: Float32Array | Array<number>, offset?: number): void;
    destroy(): void;
    draw(): void;
    set display(n: DisplayStatus);
    get display(): DisplayStatus;
    set opacity(n: number);
    get opacity(): number;
    get rainbow(): Rainbow;
    /**
     * 按ID获取实例的膨胀后真实顶点位置
     * @param id 实例id
     * @param expand 膨胀
     */
    getVertexesPositionById(id: string, expand?: number): number[];
    private createId;
    private registAttribute;
    private updateBufferToGL;
    private removeAttributeBufferData;
    private grow;
}
