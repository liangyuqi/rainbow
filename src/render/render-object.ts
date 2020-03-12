import {ComponentInterface} from '../interface/generator';
import {RenderUnit, RenderAttribute} from './render-unit';
import {DisplayStatus} from '../enum/unit';
import {IdCreator} from '../utils';
import {Rainbow} from '..';
import {SearchableObject} from '../search/searchable-object';
import {ImageTexture, ImageTextureEvent} from './texture';

const RATIO = window.devicePixelRatio;

export const enum OutViewportStatus {
  NONE = 0,
  X = 1,
  Y = 2,
  BOTH = 3
}

export class RenderObject extends SearchableObject
  implements ComponentInterface {
  private _id: string;
  private _originUnit: RenderUnit;
  private _borderUnit: RenderUnit;
  private _originId!: string;
  private _borderId!: string;
  private _isAdded!: boolean;
  private _isBorderAdded!: boolean;
  private _texture!: ImageTexture;
  private _needReset: boolean = false;

  private _attribs = {
    translation: [0, 0],
    rotation: 0,
    scale: 1,
    backgroundColor: [0, 0, 0, 0],
    uv: null,
    vertexOffsetValue: [0, 0],
    isText: false,
    textBorderWidth: 0,
    textBorderColor: [0, 0, 0, 0],
    borderWidth: 0,
    borderColor: [0, 0, 0, 0],
    borderDashed: 0,
    opacity: 1,
    display: DisplayStatus.DISPLAY,
    outViewportStatus: OutViewportStatus.NONE,
    attachViewportScale: true,
    attachViewportTranslation: true
  };

  private _attriblist = [
    'vertexOffsetValue',
    'translation',
    'rotation',
    'scale',
    'backgroundColor',
    'uv',

    'borderWidth',
    'borderColor',
    'borderDashed',

    'isText',
    'textBorderWidth',
    'textBorderColor',

    'opacity',
    'display',
    'outViewportStatus',
    'attachViewportScale',
    'attachViewportTranslation'
  ];

  constructor(originUnit: RenderUnit, borderUnit: RenderUnit) {
    super(originUnit.rainbow.searcher);
    this._originUnit = originUnit;
    this._borderUnit = borderUnit;
    this._id = IdCreator.createId();
  }

  public get id(): string {
    return this._id;
  }

  public get rainbow(): Rainbow {
    return this._originUnit.rainbow;
  }

  public get isShown(): boolean {
    return this._isAdded;
  }

  public show() {
    if (!this._isAdded) {
      this._originId = this._originUnit.add();
      this._isAdded = true;
      this.updateStatus();
      this.searchable && this.registToSearcher();
    }
    this.borderWidth = this.borderWidth;
    return this;
  }

  public hide() {
    this._isAdded && this._originUnit.remove(this._originId);
    this._isBorderAdded && this._borderUnit.remove(this._borderId);
    this._isAdded = false;
    this._isBorderAdded = false;
    // @ts-ignore
    this._originId = null;
    // @ts-ignore
    this._borderId = null;
    this.deregistToSearcher();
    return this;
  }

  public set translation(offset: number[]) {
    // this.rainbow.isDebug && console.log('RenderObject:: translation: ', offset);
    // if(arrayEqual(offset, this._attribs['translation'])) return;
    this._isAdded &&
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        offset,
        0
      );
    this._isBorderAdded &&
      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        offset,
        0
      );
    this._attribs['translation'] = offset;
    this.searchable && this.registToSearcher();
  }

  public get translation(): number[] {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        0,
        2
      );
    }
    return this._attribs['translation'];
  }

  public set rotation(radian: number) {
    // if(this.rotation == radian) return;
    const data = [radian];
    this._isAdded &&
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        data,
        2
      );
    this._isBorderAdded &&
      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        data,
        2
      );
    this._attribs['rotation'] = radian;
    this.searchable && this.registToSearcher();
  }

  public get rotation(): number {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        2,
        1
      )[0];
    }
    return this._attribs['rotation'];
  }

  public set scale(n: number) {
    // if(this.scale == n) return;
    const data = [n];
    this._isAdded &&
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        data,
        3
      );
    this._isBorderAdded &&
      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        data,
        3
      );
    this._attribs['scale'] = n;
    this.searchable && this.registToSearcher();
  }

  public get scale(): number {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        3,
        1
      )[0];
    }
    return this._attribs['scale'];
  }

  public set backgroundColor(color: number[]) {
    // if(arrayEqual(color, this._attribs['backgroundColor'])) return;
    const data = color.map(c => c / 255);
    this._isAdded &&
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.BACKGROUND_COLOR,
        data
      );
    this._attribs['backgroundColor'] = color;
  }

  public get backgroundColor(): number[] {
    if (this._isAdded) {
      return this._originUnit
        .getAttribute(this._originId, RenderAttribute.BACKGROUND_COLOR, 0, 4)
        .map(c => c * 255);
    }
    return this._attribs['backgroundColor'];
  }

  public set texture(texture: ImageTexture) {
    if (texture == null) {
      if (this._texture && this._texture instanceof ImageTexture) {
        this._texture.removeEventListener(
          ImageTextureEvent.UPDATE,
          this.changeUV,
          this
        );
        // @ts-ignore
        this._texture = null;
      }
      // @ts-ignore
      this.changeUV(null);
      return;
    }

    if (!(texture instanceof ImageTexture)) {
      return;
    }

    const t = this._texture;
    const tt = texture;

    if (!this._needReset && t === tt) return;

    t instanceof ImageTexture &&
      t.removeEventListener(ImageTextureEvent.UPDATE, this.changeUV, this);

    this._texture = texture;
    this.changeUV(this._texture);
    this._texture.addEventListener(
      ImageTextureEvent.UPDATE,
      this.changeUV,
      this
    );
  }

  public set borderWidth(width: number) {
    if (this._isBorderAdded && width === this._attribs.borderWidth) return;

    this._attribs['borderWidth'] = width;

    const data = [width];

    if (this._isBorderAdded) {
      if (width > 0) {
        this._borderUnit.setAttribute(
          this._borderId,
          RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
          data,
          2
        );
      } else {
        this.removeBorder();
      }
    } else if (width > 0) {
      this.addBorder();
    }
  }

  public get borderWidth(): number {
    if (this._isBorderAdded) {
      return this._borderUnit.getAttribute(
        this._borderId,
        RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
        2,
        1
      )[0];
    }
    return this._attribs['borderWidth'];
  }

  public set borderColor(color: number[]) {
    // if(arrayEqual(color, this._attribs['borderColor'])) return;
    const data = color.map(c => c / 255);
    this._isBorderAdded &&
      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.BACKGROUND_COLOR,
        data
      );
    this._attribs['borderColor'] = color;
  }

  public get borderColor(): number[] {
    if (this._isBorderAdded) {
      return this._borderUnit
        .getAttribute(this._borderId, RenderAttribute.BACKGROUND_COLOR, 0, 4)
        .map(c => c * 255);
    }
    return this._attribs['borderColor'];
  }

  public set borderDashed(n: number) {
    // if(n == this._attribs.borderDashed) return;
    this._isBorderAdded &&
      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        [n * RATIO],
        2
      );
    this._attribs.borderDashed = n;
  }

  public get borderDashed(): number {
    if (this._isBorderAdded) {
      return this._borderUnit.getAttribute(
        this._borderId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        2,
        1
      )[0];
    }
    return this._attribs.borderDashed;
  }

  public set vertexOffsetValue(value: number[]) {
    // if(arrayEqual(value, this._attribs['vertexOffsetValue'])) return;
    // const v = value.slice(0, 2);
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
      value
    );
    this._borderUnit.setAttribute(
      this._borderId,
      RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
      value
    );
    this._attribs['vertexOffsetValue'] = value;
    this.searchable && this.registToSearcher();
  }

  public get vertexOffsetValue(): number[] {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
        0,
        2
      );
    }
    return this._attribs['vertexOffsetValue'];
  }

  public set size(value: number[]) {
    this.vertexOffsetValue = value;
  }

  public get size(): number[] {
    return this.vertexOffsetValue;
  }

  public set isText(ist: boolean) {
    // if(this._attribs['isText'] == ist) return;
    let r = ist ? 1 : 0;
    const data = [r];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
      data,
      0
    );
    this._attribs['isText'] = ist;
  }

  public get isText(): boolean {
    if (this._isAdded) {
      return (
        this._originUnit.getAttribute(
          this._originId,
          RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
          0,
          1
        )[0] === 1
      );
    }
    return this._attribs['isText'];
  }

  public set textBorderWidth(n: number) {
    // if(n == this._attribs['textBorderWidth']) return;
    const data = [n];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
      data,
      1
    );
    this._attribs['textBorderWidth'] = n;
  }

  public get textBorderWidth(): number {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        1,
        1
      )[0];
    }
    return this._attribs['textBorderWidth'];
  }

  public set textBorderColor(color: number[]) {
    // if(arrayEqual(color, this._attribs['textBorderColor'])) return;
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.TEXT_BORDER_COLOR,
      color.map(c => c / 255)
    );
    this._attribs['textBorderColor'] = color;
  }

  public get textBorderColor(): number[] {
    return this._attribs['textBorderColor'];
  }

  public set opacity(n: number) {
    // let op = numberClamp(0, 1, n);
    // if(this._attribs['opacity'] == op) return;
    const op = Math.max(0, n);
    const data = [op];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      0
    );
    this._borderUnit.setAttribute(
      this._borderId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      0
    );
    this._attribs['opacity'] = op;
  }

  public get opacity(): number {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
        0,
        1
      )[0];
    }
    return this._attribs['opacity'];
  }

  public set display(n: DisplayStatus) {
    // if(this._attribs['display'] == n) return;
    const data = [n];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      1
    );
    this._borderUnit.setAttribute(
      this._borderId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      1
    );
    this._attribs['display'] = n;
  }

  public get display(): DisplayStatus {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
        1
      )[0] as DisplayStatus;
    }
    return this._attribs['display'];
  }

  public set outViewportStatus(status: OutViewportStatus) {
    const data = [status];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
      data,
      3
    );
    this._borderUnit.setAttribute(
      this._borderId,
      RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
      data,
      3
    );
    this._attribs['outViewportStatus'] = status;
  }

  public get outViewportStatus(): OutViewportStatus {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
        3,
        1
      )[0] as OutViewportStatus;
    }
    return this._attribs['outViewportStatus'];
  }

  public set attachViewportScale(n: boolean) {
    // if(this._attribs['attachViewportScale'] == n) return;
    const o = n ? 1 : 0;
    const data = [o];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      2
    );
    this._borderUnit.setAttribute(
      this._borderId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      2
    );
    this._attribs['attachViewportScale'] = n;
  }

  public get attachViewportScale() {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
        2,
        1
      )[0] === 1
        ? true
        : false;
    }
    return this._attribs['attachViewportScale'];
  }

  public set attachViewportTranslation(n: boolean) {
    // if(this._attribs['attachViewportTranslation'] == n) return;
    const o = n ? 1 : 0;
    const data = [o];
    this._originUnit.setAttribute(
      this._originId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      3
    );
    this._borderUnit.setAttribute(
      this._borderId,
      RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
      data,
      3
    );
    this._attribs['attachViewportTranslation'] = n;
  }

  public get attachViewportTranslation() {
    if (this._isAdded) {
      return this._originUnit.getAttribute(
        this._originId,
        RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
        3,
        1
      )[0] === 1
        ? true
        : false;
    }
    return this._attribs['attachViewportTranslation'];
  }

  public getVertexPositions(expand: number = 0): number[] {
    return this._originUnit.getVertexesPositionById(this._originId, expand);
  }

  private changeUV(texture: ImageTexture) {
    if (!texture || !(texture instanceof ImageTexture)) {
      this._isAdded &&
        this._originUnit.setAttribute(this._originId, RenderAttribute.UV_RECT, [
          0,
          0,
          0,
          0
        ]);
    } else {
      const uv = [texture.u, texture.v, texture.width, texture.height];
      this._isAdded &&
        this._originUnit.setAttribute(
          this._originId,
          RenderAttribute.UV_RECT,
          uv
        );
      // @ts-ignore
      this._attribs['uv'] = uv;
    }
  }

  private updateStatus() {
    this._needReset = true;
    const list = this._attriblist;
    const s = this._attribs;
    // list.forEach(v => this[v] = s[v]);

    if (this._isAdded) {
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        [s['translation'][0], s['translation'][1], s['rotation']]
      );
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.BACKGROUND_COLOR,
        s['backgroundColor'].map(v => v / 255)
      );
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        [s['isText'] ? 1 : 0, 0, 0, s['scale']]
      );
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
        [
          s['opacity'],
          s['display'],
          s['attachViewportScale'] ? 1 : 0,
          s['attachViewportTranslation'] ? 1 : 0
        ]
      );
      // this._originUnit.setAttribute(this._originId, RenderAttribute.TEXT_BORDER_COLOR, s['textBorderColor'].map(v => v/255));
      this._originUnit.setAttribute(
        this._originId,
        RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
        [
          s['vertexOffsetValue'][0],
          s['vertexOffsetValue'][1],
          s['borderWidth'],
          s['outViewportStatus']
        ]
      );
    }

    this.changeUV(this._texture);
    this._needReset = false;
  }

  private addBorder() {
    if (!this._isBorderAdded) {
      this._borderId = this._borderUnit.add();

      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.TRANSLATION_AND_ROTATION,
        [this.translation[0], this.translation[1], this.rotation],
        0
      );

      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.VERTEX_AND_EDGE_OFFSET_VALUE_AND_NOT_FOLLOW_VIEWPORT,
        [
          this.vertexOffsetValue[0],
          this.vertexOffsetValue[1],
          this.borderWidth,
          this.outViewportStatus
        ],
        0
      );

      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.BACKGROUND_COLOR,
        this.borderColor.map(v => v / 255),
        0
      );
      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.IS_TEXT_AND_BORDER_WIDTH_AND_DASHED_AND_SCALE,
        [this.borderDashed * RATIO, this.scale],
        2
      );

      this._borderUnit.setAttribute(
        this._borderId,
        RenderAttribute.OPACITY_AND_DISPLAY_AND_VPSCALE_AND_VPTRANS,
        [
          this.opacity,
          this.display,
          this.attachViewportScale ? 1 : 0,
          this.attachViewportTranslation ? 1 : 0
        ],
        0
      );

      this._isBorderAdded = true;
    }
  }

  private removeBorder() {
    if (this._isBorderAdded) {
      this._borderUnit.remove(this._borderId);
      // @ts-ignore
      this._borderId = undefined;
      this._isBorderAdded = false;
    }
  }
}
