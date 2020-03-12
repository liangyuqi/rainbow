import rbush from 'rbush';

/**
 * 判断点是否在多边形内
 * @param p 点坐标
 * @param poly 多边形顶点坐标
 */
function rayCasting(p: number[], poly: number[]): boolean {
  var px = p[0],
    py = p[1],
    flag = false,
    l = poly.length / 2;

  for (var i = 0, j = l - 1; i < l; j = i, i++) {
    var sx = poly[i * 2],
      sy = poly[i * 2 + 1],
      tx = poly[j * 2],
      ty = poly[j * 2 + 1];

    // 点与多边形顶点重合
    if ((sx === px && sy === py) || (tx === px && ty === py)) {
      flag = true;
      break;
    }

    // 判断线段两端点是否在射线两侧
    if ((sy < py && ty >= py) || (sy >= py && ty < py)) {
      // 线段上与射线 Y 坐标相同的点的 X 坐标
      var x = sx + ((py - sy) * (tx - sx)) / (ty - sy);

      // 点在多边形的边上
      if (x === px) {
        flag = true;
        break;
      }

      // 射线穿过多边形的边界
      if (x > px) {
        flag = !flag;
      }
    }
  }

  // 射线穿过多边形边界的次数为奇数时点在多边形内
  return flag;
}

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

export class Searcher {
  private _sobj;
  private _buffer: Map<string, SearchObjectInterface>;
  constructor() {
    this._sobj = new rbush(200);
    this._buffer = new Map();
  }

  public insert(obj: SearchObjectInterface) {
    if (!obj) {
      console.log('Searcher: ', 'Can not insert.', obj);
      return;
    }
    const bounds = obj.bounds;
    if (!((bounds.minX - bounds.maxX) * (bounds.minY - bounds.maxY))) {
      console.log('Searcher: ', 'Can not insert, width or height equals 0.');
      return;
    }

    const id = obj.id;
    const bufferObj = this._buffer.get(id);

    bufferObj && this.remove(id);

    this._sobj.insert(this.objToItem(obj));
    this._buffer.set(obj.id, obj);
  }

  public remove(id: string) {
    let obj = this._buffer.get(id);
    if (!obj) return;
    this._sobj.remove(this.objToItem(obj));
    this._buffer.delete(obj.id);
  }

  public search(
    x: number,
    y: number,
    width: number = 0,
    height: number = 0
  ): SearchObjectInterface[] {
    let result = this._sobj
      .search({minX: x, minY: y, maxX: width + x, maxY: height + y})
      .map(v => this._buffer.get(v.id));
    if (width == 0 && height == 0) {
      result = result.filter(v => {
        return rayCasting([x, y], v.vertexes);
      });
    }
    return result;
  }

  private objToItem(obj) {
    const bound = obj.bounds;
    return Object.assign(obj.bounds, {
      id: obj.id
    });
  }
}
