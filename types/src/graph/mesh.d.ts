export declare enum PrimitiveMode {
    TRIANGLE_STRIP = 5,
    TRIANGLE_FAN = 6
}
export interface MeshConfig {
    currVertexes: number[];
    prevVertexes: number[];
    nextVertexes: number[];
    currOffsetRatios: number[];
    prevOffsetRatios: number[];
    nextOffsetRatios: number[];
    edgeOffsetRatios: number[];
    indeces: number[];
    uvs: number[];
    primitiveMode: PrimitiveMode;
}
export declare class Mesh {
    private _vertexes;
    private _offsetRatios;
    private _uv;
    private _indeces;
    private _primitiveMode;
    /**
     * 模型构造函数
     * @param vertexes 顶点坐标
     * @param borderVertexes 边框顶点坐标
     * @param uv 材质UV
     */
    constructor(mode: PrimitiveMode, vertexes: number[], offsetRatios: number[], uv: number[], indeces: number[]);
    private get currVertexes();
    private get prevVertexes();
    private get nextVertexes();
    private get currOffsetRatios();
    private get prevOffsetRatios();
    private get nextOffsetRatios();
    get originMeshConfig(): MeshConfig;
    get borderMeshConfig(): MeshConfig;
}
export declare class RectMesh extends Mesh {
    constructor(originX?: number, originY?: number);
}
