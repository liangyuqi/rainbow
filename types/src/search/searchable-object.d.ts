import { Searcher } from './searcher';
export declare class SearchableObject {
    private _srh;
    private _sable;
    private _expandRadius;
    constructor(srh: Searcher);
    set searchable(able: boolean);
    get searchable(): boolean;
    set expandRadius(r: number);
    get expandRadius(): number;
    protected get id(): string;
    /**
     * 获取当前的顶点坐标 override
     */
    protected getVertexPositions(expand?: number): number[];
    /**
     * 注册成可查找
     */
    protected registToSearcher(): void;
    /**
     * 解除注册
     */
    protected deregistToSearcher(): void;
}
