import {DisplayStatus} from '../enum/unit';

export interface PaintUnitInterface {
  draw(): void;
  updateToGL(): boolean;
  updateUniform();
  destroy(): void;
  clear(): void;
  display: DisplayStatus;
  fill(attrib: string, value: number): void;
  batchSet(
    attrib: string,
    value: Float32Array | Array<number>,
    offset: number
  ): void;
  batchAdd(
    attrib: string,
    value: Float32Array | Array<number>,
    offset: number
  ): void;
}
