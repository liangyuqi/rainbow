export interface SearchObjectInterface {
    id: string;
    bounds: {
        minX: number;
        minY: number;
        maxX: number;
        maxY: number;
    };
    vertexes: number[];
}
export declare class Searcher {
    private _sobj;
    private _buffer;
    constructor();
    insert(obj: SearchObjectInterface): void;
    remove(id: string): void;
    search(x: number, y: number, width?: number, height?: number): SearchObjectInterface[];
    private objToItem;
}
