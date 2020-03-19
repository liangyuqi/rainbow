import { ComponentInterface } from '../interface/generator';
import { RenderUnit } from './render-unit';
import { DisplayStatus } from '../enum/unit';
import { Rainbow } from '..';
import { SearchableObject } from '../search/searchable-object';
import { ImageTexture } from './texture';
export declare const enum OutViewportStatus {
    NONE = 0,
    X = 1,
    Y = 2,
    BOTH = 3
}
export declare class RenderObject extends SearchableObject implements ComponentInterface {
    private _id;
    private _originUnit;
    private _borderUnit;
    private _originId;
    private _borderId;
    private _isAdded;
    private _isBorderAdded;
    private _texture;
    private _needReset;
    private _attribs;
    private _attriblist;
    constructor(originUnit: RenderUnit, borderUnit: RenderUnit);
    get id(): string;
    get rainbow(): Rainbow;
    get isShown(): boolean;
    show(): this;
    hide(): this;
    set translation(offset: number[]);
    get translation(): number[];
    set rotation(radian: number);
    get rotation(): number;
    set scale(n: number);
    get scale(): number;
    set backgroundColor(color: number[]);
    get backgroundColor(): number[];
    set texture(texture: ImageTexture);
    set borderWidth(width: number);
    get borderWidth(): number;
    set borderColor(color: number[]);
    get borderColor(): number[];
    set borderDashed(n: number);
    get borderDashed(): number;
    set vertexOffsetValue(value: number[]);
    get vertexOffsetValue(): number[];
    set size(value: number[]);
    get size(): number[];
    set isText(ist: boolean);
    get isText(): boolean;
    set textBorderWidth(n: number);
    get textBorderWidth(): number;
    set textBorderColor(color: number[]);
    get textBorderColor(): number[];
    set opacity(n: number);
    get opacity(): number;
    set display(n: DisplayStatus);
    get display(): DisplayStatus;
    set outViewportStatus(status: OutViewportStatus);
    get outViewportStatus(): OutViewportStatus;
    set attachViewportScale(n: boolean);
    get attachViewportScale(): boolean;
    set attachViewportTranslation(n: boolean);
    get attachViewportTranslation(): boolean;
    getVertexPositions(expand?: number): number[];
    private changeUV;
    private updateStatus;
    private addBorder;
    private removeBorder;
}
