import {TextureFactroy} from './texture';
import {RenderObject, OutViewportStatus} from './render-object';
import {Generator} from './generator';
import {SearchableObject} from 'src/search/searchable-object';
import {ComponentInterface} from 'src/interface/generator';
import {DisplayStatus} from 'src/enum/unit';
import {Rainbow} from '..';
import {IdCreator} from 'src/utils';

export class TextField extends SearchableObject implements ComponentInterface {
  private _id: string;
  private _isShown: boolean = false;
  private _text: string = '';
  private _fontSize: number = 12;
  private _translation: number[] = [0, 0];
  private _color: number[] = [255, 255, 255, 255];
  private _borderWidth: number = 0;
  private _borderColor: number[] = [0, 0, 0, 0];
  private _opacity: number = 1;
  private _display: DisplayStatus = DisplayStatus.DISPLAY;
  private _outViewportStatus: OutViewportStatus = OutViewportStatus.NONE;
  private _attachViewportScale: boolean = true;
  private _attachViewportTranslation: boolean = true;

  private _tf: TextureFactroy;
  private _fontObjects: RenderObject[];
  private _gs: Generator[];

  constructor(rainbow: Rainbow, generators: Generator[]) {
    super(rainbow.searcher);
    this._id = IdCreator.createId();
    this._gs = generators;
    this._tf = rainbow.textureFactroy;
    this._fontObjects = [];
    this._gs.forEach((g) => {
      let obj = g.instance();
      obj.isText = true;
      obj.display = DisplayStatus.NONE;
      this._fontObjects.push(obj);
    });
  }

  get id(): string {
    return this._id;
  }

  get isShown(): boolean {
    return this._isShown;
  }

  show(): TextField {
    if (this._isShown) return this;
    this._isShown = true;
    this._fontObjects.forEach((v) => v.show());
    this.resetFonts();
    this.searchable && this.registToSearcher();
    return this;
  }

  hide(): TextField {
    if (!this._isShown) return this;
    this._isShown = false;
    // this.resetFonts();
    this._fontObjects.forEach((v) => v.hide());
    this.deregistToSearcher();
    return this;
  }

  set text(str: string) {
    this._text = str;
    // this.resetFonts();
    const f = this._tf;
    const len = str.length;
    this._fontObjects.forEach((v, k) => {
      if (k < len) {
        v.display = DisplayStatus.DISPLAY;
        v.texture = f.getFontTexture(str[k]);
      } else {
        v.display = DisplayStatus.NONE;
      }
    });
  }

  get text(): string {
    return this._text;
  }

  set translation(offset: number[]) {
    this._translation = offset;
    // this.setFontsTranslation();
    this._fontObjects.forEach((v) => (v.translation = offset));
    this.searchable && this.registToSearcher();
  }

  get translation(): number[] {
    return this._translation;
  }

  set fontSize(size: number) {
    this._fontSize = size;
    // this.setFontsTranslation();
    this._fontObjects.forEach((v) => (v.size = [size, size]));
    this.searchable && this.registToSearcher();
  }

  get fontSize(): number {
    return this._fontSize;
  }

  set color(color: number[]) {
    this._color = color;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.backgroundColor = color));
  }

  get color(): number[] {
    return this._color;
  }

  set borderWidth(n: number) {
    // if(this._borderWidth == n) return;
    this._borderWidth = n;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.textBorderWidth = n));
  }

  get borderWidth(): number {
    return this._borderWidth;
  }

  set borderColor(color: number[]) {
    // if(arrayEqual(this._borderColor, color)) return;
    this._borderColor = color;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.textBorderColor = color));
  }

  set opacity(n: number) {
    // this._opacity = numberClamp(0, 1, n);
    // this.resetFonts();
    this._opacity = n;
    this._fontObjects.forEach((v) => (v.opacity = this._opacity));
  }

  get opacity() {
    return this._opacity;
  }

  set display(n: DisplayStatus) {
    this._display = n;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.display = n));
  }

  get display(): DisplayStatus {
    return this._display;
  }

  set outViewportStatus(status: OutViewportStatus) {
    this._outViewportStatus = status;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.outViewportStatus = status));
  }

  get outViewportStatus(): OutViewportStatus {
    return this._outViewportStatus;
  }

  set attachViewportScale(n: boolean) {
    this._attachViewportScale = n;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.attachViewportScale = n));
  }

  get attachViewportScale(): boolean {
    return this._attachViewportScale;
  }

  set attachViewportTranslation(n: boolean) {
    this._attachViewportTranslation = n;
    // this.resetFonts();
    this._fontObjects.forEach((v) => (v.attachViewportTranslation = n));
  }

  get attachViewportTranslation(): boolean {
    return this._attachViewportTranslation;
  }

  private resetFonts() {
    const len = this._text.length;
    const f = this._tf;
    const gs = this._gs;

    this._fontObjects.forEach((v, k) => {
      let text = this._text[k];
      v.size = [this._fontSize, this._fontSize];
      v.backgroundColor = this._color;
      v.opacity = this._opacity;
      v.textBorderWidth = this._borderWidth;
      v.textBorderColor = this._borderColor;
      v.outViewportStatus = this._outViewportStatus;
      v.attachViewportScale = this._attachViewportScale;
      v.attachViewportTranslation = this._attachViewportTranslation;
      v.display = this._display;
      v.translation = this._translation;
      if (text) {
        let texture = f.getFontTexture(text);
        v.texture = texture;
      }
    });
  }

  public getVertexPositions(expand: number = 0): number[] {
    const len = this._fontObjects.length;
    if (len <= 0) return [];
    const first = this._fontObjects[0].getVertexPositions(expand);
    const last = this._fontObjects[len - 1].getVertexPositions(expand);
    const vs = first.concat(last);
    const vx = vs.filter((v, k) => k % 2 == 0);
    const vy = vs.filter((v, k) => k % 2 != 0);
    const minX = Math.min.apply(null, vx);
    const maxX = Math.max.apply(null, vx);
    const minY = Math.min.apply(null, vy);
    const maxY = Math.max.apply(null, vy);
    return [minX, maxY, minX, minY, maxX, minY, maxX, maxY];
  }
}
