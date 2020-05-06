import {Mesh, RectMesh} from '../graph/mesh';
import {Rainbow} from '..';
import {RenderUnit, RenderAttribute} from './render-unit';
import {GeneratorInterface} from '../interface/generator';
import {RenderObject} from './render-object';
import {DisplayStatus} from '../enum/unit';
import {TextField} from './textfield';

export class Generator implements GeneratorInterface {
  private _rainbow: Rainbow;
  private originUnit: RenderUnit;
  private borderUnit: RenderUnit;
  private originIdx: number;
  private borderIdx: number;
  constructor(
    rainbow: Rainbow,
    mesh: Mesh,
    originIndex: number = 0,
    borderIndex: number = 1,
    instanceCountMax: number = 0
  ) {
    this._rainbow = rainbow;
    this.originIdx = Math.floor(originIndex);
    this.borderIdx = Math.floor(borderIndex);
    this.originUnit = new RenderUnit(
      rainbow,
      mesh.originMeshConfig,
      instanceCountMax
    ).regist();
    this.borderUnit = new RenderUnit(
      rainbow,
      mesh.borderMeshConfig,
      instanceCountMax
    ).regist();
    this.rainbow.registVAO(this.originUnit, this.originIdx);
    this.rainbow.registVAO(this.borderUnit, this.borderIdx);
  }
  public instance(): RenderObject {
    return new RenderObject(this.originUnit, this.borderUnit);
  }
  public destroy() {
    this.rainbow.unRegistVAO(this.originUnit, this.originIdx);
    this.rainbow.unRegistVAO(this.borderUnit, this.borderIdx);
    this.originUnit.destroy();
    this.borderUnit.destroy();
    // todo
    // this.originUnit = null;
    // this.borderUnit = null;
  }
  public clear() {
    this.originUnit.clear();
    this.borderUnit.clear();
  }

  public set opacity(o: number) {
    // this.originUnit.batchAdd(RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS, [o], 0);
    // this.borderUnit.batchAdd(RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS, [o], 0);
    this.originUnit.opacity = o;
    this.borderUnit.opacity = o;
  }

  public set display(n: DisplayStatus) {
    this.originUnit.display = n;
    this.borderUnit.display = n;
  }

  public set translate(offset: number[]) {
    this.originUnit.batchAdd(
      RenderAttribute.TRANSLATION_AND_ROTATION,
      offset,
      0
    );
    this.borderUnit.batchAdd(
      RenderAttribute.TRANSLATION_AND_ROTATION,
      offset,
      0
    );
  }

  public get rainbow(): Rainbow {
    return this._rainbow;
  }
}

export const enum TextFieldVerticalAlign {
  TOP = 0,
  MIDDLE = 1,
  BOTTOM = 2,
}

export class TextFieldGenerator implements GeneratorInterface {
  private _rainbow: Rainbow;
  private gs: Generator[] = [];
  constructor(
    rainbow: Rainbow,
    maxLen: number = 0,
    wordSpace: number = 0,
    verticalAlign: TextFieldVerticalAlign = TextFieldVerticalAlign.MIDDLE,
    index: number = 0,
    instanceCountMax: number = 0
  ) {
    this._rainbow = rainbow;
    const align = -verticalAlign * 0.5 + 0.5;
    for (let i = 0; i < maxLen; i++) {
      this.gs.push(
        new Generator(
          rainbow,
          new RectMesh((-(i + 1) * (wordSpace + 8)) / 10, align),
          index,
          index,
          instanceCountMax
        )
      );
    }
  }

  public instance(): TextField {
    return new TextField(this._rainbow, this.gs);
  }

  public destroy() {
    this.gs.forEach((g) => g.destroy());
    this.gs = [];
  }

  public clear() {
    this.gs.forEach((g) => g.clear());
  }

  public set display(n: DisplayStatus) {
    this.gs.forEach((g) => (g.display = n));
  }

  public set opacity(n: number) {
    this.gs.forEach((g) => (g.opacity = n));
  }

  public get rainbow(): Rainbow {
    return this._rainbow;
  }
}
