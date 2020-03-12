import {Searcher, SearchObjectInterface} from './searcher';

export class SearchableObject {
  private _srh: Searcher;
  private _sable: boolean = false;
  private _expandRadius: number = 0;
  constructor(srh: Searcher) {
    this._srh = srh;
  }

  public set searchable(able: boolean) {
    if (able === this._sable) return;
    this._sable = able;
    if (able === true) {
      this.registToSearcher();
    } else {
      this.deregistToSearcher();
    }
  }

  public get searchable(): boolean {
    return this._sable;
  }

  public set expandRadius(r: number) {
    if (this._expandRadius === r) return;
    this._expandRadius = r;
    // 刷新搜索区域
    this._sable && this.registToSearcher();
  }

  public get expandRadius(): number {
    return this._expandRadius;
  }

  protected get id(): string {
    return '';
  }

  /**
   * 获取当前的顶点坐标 override
   */
  protected getVertexPositions(expand: number = 0): number[] {
    return [];
  }

  /**
   * 注册成可查找
   */
  protected registToSearcher() {
    const vs = this.getVertexPositions(this._expandRadius);
    const vx = vs.filter((v, k) => k % 2 === 0);
    const vy = vs.filter((v, k) => k % 2 !== 0);
    const obj: SearchObjectInterface = {
      id: this.id,
      bounds: {
        minX: Math.min.apply(null, vx),
        maxX: Math.max.apply(null, vx),
        minY: Math.min.apply(null, vy),
        maxY: Math.max.apply(null, vy)
      },
      vertexes: vs
    };
    this._srh.insert(obj);
  }

  /**
   * 解除注册
   */
  protected deregistToSearcher() {
    this._srh.remove(this.id);
  }
}
