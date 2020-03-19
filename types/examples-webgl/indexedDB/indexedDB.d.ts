export declare class DB {
    indexedDBData: {
        dataBaseName: string;
        objectStore: string;
        keyPath: string;
        indexKeys: Array<string>;
        version?: number;
    };
    db: IDBDatabase;
    constructor(indexedDBData: {
        dataBaseName: string;
        objectStore: string;
        keyPath: string;
        indexKeys: Array<string>;
        version?: number;
    });
    /**
     * 初始化
     */
    _init(): void;
    /**
     * 增（添加数据）
     * @param payload
     */
    add(payload: IFileData): Promise<unknown>;
    /**
     * 删（根据主键添加数据）
     * @param payload
     */
    delete(key: string): Promise<unknown>;
    /**
     * 改（更新数据）
     * @param payload
     */
    put(payload: IFileData): Promise<unknown>;
    /**
     * 查(根据主键读取数据)
     * todo:目前没有根据索引查的需求
     * @param key
     */
    get(key: string): Promise<unknown>;
    /**
     * 获取全部主键集合
     */
    keys(): Promise<unknown>;
    destroy(): void;
    _open(): IDBOpenDBRequest;
    _close(): void;
}
export interface IFileData {
    fileName: string;
    content: string;
}
