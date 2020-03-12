import * as glMatrix from '../../lib/gl-matrix.js';
import {PaintUnitInterface} from '../interface/unit.js';
import {Rainbow} from '../index.js';
import {MeshConfig} from '../graph/mesh.js';
import {DisplayStatus} from '../enum/unit.js';
import {
  getVertexPosition,
  getVertexAfterExpand,
  IdCreator
} from '../utils/index';

const MAX_INSTANCE = 3000;
const mat4 = glMatrix.mat4;
const vec3 = glMatrix.vec3;

// 模型属性
export const enum VertexAttribute {
  CURR_VERTEX_AND_RATIO = 'currVertexAndRatio',
  NEXT_VERTEX_AND_RATIO = 'nextVertexAndRatio',
  PREV_VERTEX_AND_RATIO = 'prevVertexAndRatio',
  UV_AND_EDGE_OFFSET_RATIO = 'uvAndEdgeOffsetRatio'
}

export let VertexAttributeStride: Map<VertexAttribute, number> = new Map();
VertexAttributeStride.set(VertexAttribute.CURR_VERTEX_AND_RATIO, 4);
VertexAttributeStride.set(VertexAttribute.NEXT_VERTEX_AND_RATIO, 4);
VertexAttributeStride.set(VertexAttribute.PREV_VERTEX_AND_RATIO, 4);
VertexAttributeStride.set(VertexAttribute.UV_AND_EDGE_OFFSET_RATIO, 4);

// 实例属性
export const enum RenderAttribute {
  VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT = 'vertexAndEdgeOffsetValueAndNotFollowViewport',
  BACKGROUND_COLOR = 'backgroundColor',
  UV_RECT = 'UVRect',
  TRANSLATION_AND_ROTATION = 'translationAndRotation',
  IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE = 'isTextAndBorderWidthAndDashedAndScale',
  TEXT_BORDER_COLOR = 'textBorderColor',
  OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS = 'opacityAndDisplayAndVpScaleAndVpTrans'
}

export let RenderAttributeStride: Map<RenderAttribute, number> = new Map();
RenderAttributeStride.set(
  RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
  4
);
RenderAttributeStride.set(RenderAttribute.BACKGROUND_COLOR, 4);
RenderAttributeStride.set(RenderAttribute.UV_RECT, 4);
RenderAttributeStride.set(RenderAttribute.TRANSLATION_AND_ROTATION, 4);
RenderAttributeStride.set(
  RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
  4
);
RenderAttributeStride.set(RenderAttribute.TEXT_BORDER_COLOR, 4);
RenderAttributeStride.set(
  RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
  4
);

export const RenderAttributeList = [
  RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
  RenderAttribute.BACKGROUND_COLOR,
  RenderAttribute.UV_RECT,
  RenderAttribute.TRANSLATION_AND_ROTATION,
  RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
  RenderAttribute.TEXT_BORDER_COLOR,
  RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS
];

export const enum RenderUniform {
  OPACITY = 'uOpacity'
}

export const RenderUnformList = [RenderUniform.OPACITY];

export class RenderUnit implements PaintUnitInterface {
  private _engine: Rainbow;
  private idmap: Map<string, number>;
  private idlist: string[];
  private _meshConfig: MeshConfig;
  private vao;
  private instanceCount: number = 0;
  private instanceCountMax: number = 0;
  private instanceCountInited: number = 0;

  private attribBuffers: Map<RenderAttribute, WebGLBuffer> = new Map();
  private attribBufferDatas: Map<RenderAttribute, Float32Array> = new Map();
  private attribIsModifieds: Map<RenderAttribute, boolean> = new Map();
  private attribLocals: Map<RenderAttribute, any> = new Map();

  private uniformLocals: Map<RenderUniform, any> = new Map();
  private uniformDatas: Map<RenderUniform, Float32Array> = new Map();

  private _display: DisplayStatus = DisplayStatus.DISPLAY;
  private displayIsModified: boolean = false;

  constructor(
    rainbow: Rainbow,
    meshConfig: MeshConfig,
    instanceCountMax: number = 0
  ) {
    this._engine = rainbow;
    this._meshConfig = meshConfig;

    const gl = rainbow.gl;
    const prg = rainbow.prg;
    const icm = Math.floor(instanceCountMax);
    this.instanceCountMax = icm > 0 ? icm : MAX_INSTANCE;
    this.instanceCountInited = this.instanceCountMax; // 缓存

    // 初始化
    RenderAttributeList.forEach(attrib => {
      // 本体属性
      const data = new Float32Array(
        // @ts-ignore
        this.instanceCountMax * RenderAttributeStride.get(attrib)
      );
      // @ts-ignore
      this.attribBuffers.set(attrib, gl.createBuffer());
      this.attribBufferDatas.set(attrib, data);
      this.attribIsModifieds.set(attrib, true);
      this.attribLocals.set(attrib, gl.getAttribLocation(prg, attrib));
    });

    RenderUnformList.forEach(uniform => {
      this.uniformLocals.set(uniform, gl.getUniformLocation(prg, uniform));
      this.uniformDatas.set(uniform, new Float32Array(4));
    });

    // 默认数据
    this.uniformDatas.set(
      RenderUniform.OPACITY,
      new Float32Array([1, 0, 0, 0])
    );

    this.idmap = new Map<string, number>();
    this.idlist = [];
  }

  public regist(): RenderUnit {
    const gl = this._engine.gl;
    const config = this._meshConfig;

    const currVs = config.currVertexes;
    const prevVs = config.prevVertexes;
    const nextVs = config.nextVertexes;
    const currRt = config.currOffsetRatios;
    const prevRt = config.prevOffsetRatios;
    const nextRt = config.nextOffsetRatios;
    const vlen = currVs.length / 2;

    const v1: number[] = [];
    const v2: number[] = [];
    const v3: number[] = [];
    const v4: number[] = [];

    const uvc = config.uvs;
    const eor = config.edgeOffsetRatios;

    for (let i = 0; i < vlen; i++) {
      v1.push(
        currVs[i * 2],
        currVs[i * 2 + 1],
        currRt[i * 2],
        currRt[i * 2 + 1]
      );
      v2.push(
        prevVs[i * 2],
        prevVs[i * 2 + 1],
        prevRt[i * 2],
        prevRt[i * 2 + 1]
      );
      v3.push(
        nextVs[i * 2],
        nextVs[i * 2 + 1],
        nextRt[i * 2],
        nextRt[i * 2 + 1]
      );
      v4.push(uvc[i * 2], uvc[i * 2 + 1], eor[i], 0);
    }

    this.vao = gl.createVertexArray();
    gl.bindVertexArray(this.vao);

    this.registAttribute(
      VertexAttribute.CURR_VERTEX_AND_RATIO,
      new Float32Array(v1)
    );
    this.registAttribute(
      VertexAttribute.PREV_VERTEX_AND_RATIO,
      new Float32Array(v2)
    );
    this.registAttribute(
      VertexAttribute.NEXT_VERTEX_AND_RATIO,
      new Float32Array(v3)
    );
    this.registAttribute(
      VertexAttribute.UV_AND_EDGE_OFFSET_RATIO,
      new Float32Array(v4)
    );

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(
      gl.ELEMENT_ARRAY_BUFFER,
      new Uint32Array(this._meshConfig.indeces),
      gl.STATIC_DRAW
    );

    gl.bindVertexArray(null);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    return this;
  }
  public updateToGL(): boolean {
    const gl = this._engine.gl;
    let result = this.displayIsModified;
    gl.bindVertexArray(this.vao);

    RenderAttributeList.forEach((attrib: RenderAttribute) => {
      if (this.attribIsModifieds.get(attrib) === true) {
        this.updateBufferToGL(
          attrib,
          // @ts-ignore
          this.attribBuffers.get(attrib),
          this.attribBufferDatas.get(attrib),
          RenderAttributeStride.get(attrib)
        );
        this.attribIsModifieds.set(attrib, false);
        result = true;
      }
    });
    this.displayIsModified = false;
    return result;
  }

  public updateUniform() {
    const gl = this.rainbow.gl;
    RenderUnformList.forEach(uniform => {
      gl.uniform4fv(
        this.uniformLocals.get(uniform),
        // @ts-ignore
        this.uniformDatas.get(uniform)
      );
    });
  }

  public setAttribute(
    id: string,
    attrib: RenderAttribute,
    value: number[],
    offset: number = 0
  ) {
    if (!id || id === '') return;
    const idx = this.idmap.get(id);
    // @ts-ignore
    const stride: number = RenderAttributeStride.get(attrib);
    let bufferData: Float32Array;
    // @ts-ignore
    bufferData = this.attribBufferDatas.get(attrib);
    this.attribIsModifieds.set(attrib, true);
    // @ts-ignore
    bufferData.set(value.slice(0, stride - offset), idx * stride + offset);
  }

  public getAttribute(
    id: string,
    attrib: RenderAttribute,
    offset: number = 0,
    lenght: number = 0
  ): number[] {
    const idx = this.idmap.get(id);
    // @ts-ignore
    const stride: number = RenderAttributeStride.get(attrib);
    let bufferData: Float32Array;
    // @ts-ignore
    bufferData = this.attribBufferDatas.get(attrib);
    this.attribIsModifieds.set(attrib, true);
    // @ts-ignore
    const start = idx * stride + offset;
    let end;
    if (lenght > 0) {
      // @ts-ignore
      end = Math.min(start + lenght, (idx + 1) * stride);
    } else {
      // @ts-ignore
      end = (idx + 1) * stride;
    }
    return Array.from(bufferData.subarray(start, end));
  }

  public add(): string {
    // 如果超过了最大实例限制，则扩展
    if (this.instanceCount === this.instanceCountMax) {
      this.grow();
    }

    const id = this.createId();
    const idx = this.instanceCount;
    this.idmap.set(id, idx);
    this.idlist[idx] = id;
    this.instanceCount++;

    RenderAttributeList.forEach(attrib =>
      this.attribIsModifieds.set(attrib, true)
    );

    return id;
  }

  public remove(id: string) {
    const idx = this.idmap.get(id);
    const t = this.instanceCount;
    // @ts-ignore
    if (t < 1 || idx < 0 || idx >= t) {
      return;
    }
    RenderAttributeList.forEach((attrib: RenderAttribute) => {
      this.removeAttributeBufferData(id, attrib);
      this.attribIsModifieds.set(attrib, true);
    });

    const lastId = this.idlist[this.instanceCount - 1];
    // @ts-ignore
    this.idmap.set(lastId, idx);
    // @ts-ignore
    this.idlist[idx] = lastId;

    this.idmap.delete(id);
    this.idlist.pop();

    this.instanceCount--;
  }

  public clear() {
    if (this.instanceCountMax > this.instanceCountInited) {
      const k = this.instanceCountMax / this.instanceCountInited;
      RenderAttributeList.forEach(attrib => {
        // @ts-ignore
        const len = this.attribBufferDatas.get(attrib).length;
        this.attribBufferDatas.set(attrib, new Float32Array(len / k));
      });
      this.instanceCountMax = this.instanceCountInited;
    } else {
      this.attribBufferDatas.forEach(v => v.fill(0));
    }
    this.attribIsModifieds.forEach((v, k) =>
      this.attribIsModifieds.set(k, true)
    );
    // @ts-ignore
    this.idmap.clear();
    this.idlist = [];
    this.instanceCount = 0;
  }

  public fill(attrib: RenderAttribute, value: number) {
    // @ts-ignore
    this.attribBufferDatas.get(attrib).fill(value);
    this.attribIsModifieds.set(attrib, true);
  }

  /**
   * 批量set
   * @param id
   * @param attrib
   * @param value
   * @param offset
   */
  public batchSet(
    attrib: RenderAttribute,
    value: Float32Array | Array<number>,
    offset: number = 0
  ) {
    const stride = RenderAttributeStride.get(attrib);
    // @ts-ignore
    if (stride <= offset) {
      return;
    }

    const buffer = this.attribBufferDatas.get(attrib);
    const len = this.instanceCount;
    // @ts-ignore
    const v = value.slice(0, stride - offset);
    let o = offset;
    for (let i = 0; i < len; i++) {
      // @ts-ignore
      buffer.set(v, o);
      // @ts-ignore
      o += stride;
    }

    this.attribIsModifieds.set(attrib, true);
  }

  /**
   * 批量在原来的值上叠加
   * @param attrib
   * @param value
   * @param offset
   */
  public batchAdd(
    attrib: RenderAttribute,
    value: Float32Array | Array<number>,
    offset: number = 0
  ) {
    const stride = RenderAttributeStride.get(attrib);
    // @ts-ignore
    if (stride <= offset) {
      return;
    }

    const buffer = this.attribBufferDatas.get(attrib);
    const len = this.instanceCount;
    // @ts-ignore
    const v = value.slice(0, stride - offset);
    const vl = v.length;
    let o = offset;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < vl; j++) {
        // @ts-ignore
        buffer[o + j] += v[j];
      }
      // @ts-ignore
      o += stride;
    }

    this.attribIsModifieds.set(attrib, true);
  }

  public destroy() {
    this.attribBuffers.clear();
    this.attribBufferDatas.clear();
    this.attribIsModifieds.clear();
    this.idmap.clear();
    this.idlist = [];
    this.instanceCount = 0;
    this.vao = null;
  }

  public draw() {
    const gl = this._engine.gl;
    const oc = this._meshConfig;
    gl.bindVertexArray(this.vao);
    gl.drawElementsInstanced(
      oc.primitiveMode,
      oc.indeces.length,
      gl.UNSIGNED_INT,
      0,
      this.instanceCount
    );
  }

  public set display(n: DisplayStatus) {
    this._display = n;
  }

  public get display(): DisplayStatus {
    return this._display;
  }

  public set opacity(n: number) {
    // const o = numberClamp(0, 1, n);
    const o = Math.max(0, n);
    const data = this.uniformDatas.get(RenderUniform.OPACITY);
    // @ts-ignore
    data.set([o], 0);
    this.displayIsModified = true;
  }

  public get opacity(): number {
    // @ts-ignore
    return this.uniformDatas.get(RenderUniform.OPACITY)[0];
  }

  public get rainbow(): Rainbow {
    return this._engine;
  }

  /**
   * 按ID获取实例的膨胀后真实顶点位置
   * @param id 实例id
   * @param expand 膨胀
   */
  public getVertexesPositionById(id: string, expand: number = 0): number[] {
    // 顶点
    let cv = this._meshConfig.currVertexes;
    // 形变系数
    const co = this._meshConfig.currOffsetRatios;
    // 形变值
    const cov = this.getAttribute(
      id,
      RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
      0,
      2
    );
    // 偏移
    const trans = this.getAttribute(
      id,
      RenderAttribute.TRANSLATION_AND_ROTATION,
      0,
      2
    );
    // 旋转
    const rot = this.getAttribute(
      id,
      RenderAttribute.TRANSLATION_AND_ROTATION,
      2,
      1
    )[0];
    // 顶点数量
    const len = cv.length / 2;

    let mat = mat4.create();
    mat4.fromZRotation(mat, -rot);

    let vertexes = [];
    for (let i = 0; i < len; i++) {
      const vs = vec3.fromValues(cv[i * 2], cv[i * 2 + 1], 0);
      const ratio = vec3.fromValues(co[i * 2], co[i * 2 + 1], 0);
      // 顶点形变后的坐标
      let vertex = getVertexPosition(
        vs,
        ratio,
        vec3.fromValues(cov[0], cov[1], 0)
      );
      // @ts-ignore
      vertexes.push(vertex);
    }

    const result = [];

    for (let j = 0; j < len; j++) {
      let pidx = j === 0 ? len - 1 : j - 1;
      let nidx = j === len - 1 ? 0 : j + 1;
      const pv = vertexes[pidx];
      const cv = vertexes[j];
      const nv = vertexes[nidx];
      // 前后边向量
      // @ts-ignore
      const pc = pv.map((v, k) => v - cv[k]);
      // @ts-ignore
      const nc = nv.map((v, k) => v - cv[k]);
      // 膨胀后的坐标
      let rv = getVertexAfterExpand(pc, nc, cv, expand);
      // 旋转
      vec3.transformMat4(rv, rv, mat);
      // 偏移
      vec3.add(rv, rv, vec3.fromValues(trans[0], trans[1], 0));
      // @ts-ignore
      result.push(rv[0], rv[1]);
    }

    return result;
  }

  private createId(): string {
    return IdCreator.createId();
  }

  private registAttribute(attrib: VertexAttribute, bufferData: Float32Array) {
    const gl = this.rainbow.gl;
    const prg = this.rainbow.prg;
    const buffer = gl.createBuffer();
    const stride = VertexAttributeStride.get(attrib);
    const local = gl.getAttribLocation(prg, attrib);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.STATIC_DRAW);
    // @ts-ignore
    gl.vertexAttribPointer(local, stride, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(local);
  }

  private updateBufferToGL(
    attrib: RenderAttribute,
    buffer: WebGLBuffer,
    bufferData: Float32Array,
    size: number,
    offset: number = 0
  ) {
    const gl = this._engine.gl;
    const prg = this._engine.prg;
    const FSIZE = bufferData.BYTES_PER_ELEMENT;
    const local = this.attribLocals.get(attrib);
    const t = this.instanceCount;

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, bufferData, gl.DYNAMIC_DRAW, 0, t * size);

    gl.enableVertexAttribArray(local);
    gl.vertexAttribPointer(
      local,
      size,
      gl.FLOAT,
      false,
      size * FSIZE,
      offset * FSIZE
    );
    gl.vertexAttribDivisor(local, 1);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
  }

  private removeAttributeBufferData(id: string, attrib: RenderAttribute) {
    const idx = this.idmap.get(id);
    // @ts-ignore
    const bufferData: Float32Array = this.attribBufferDatas.get(attrib);
    // @ts-ignore
    const stride: number = RenderAttributeStride.get(attrib);
    const n: number = Math.max(1, this.instanceCount - 1);
    const arr = new Array<number>(stride);
    arr.fill(0);
    bufferData.set(
      bufferData.slice(n * stride, (n + 1) * stride),
      // @ts-ignore
      idx * stride
    );
    bufferData.set(arr, n * stride);
  }

  private grow() {
    RenderAttributeList.forEach(attrib => {
      let buffer = this.attribBufferDatas.get(attrib);
      // @ts-ignore
      let newBuffer = new Float32Array(buffer.length * 2);
      // @ts-ignore
      newBuffer.set(buffer);
      this.attribBufferDatas.set(attrib, newBuffer);
      // @ts-ignore
      buffer = null;
    });
    this.instanceCountMax *= 2;
  }
}
