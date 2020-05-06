import { Mesh } from '../graph/mesh';
import { Rainbow } from '..';
import { GeneratorInterface } from '../interface/generator';
import { RenderObject } from './render-object';
import { DisplayStatus } from '../enum/unit';
import { TextField } from './textfield';
export declare class Generator implements GeneratorInterface {
    private _rainbow;
    private originUnit;
    private borderUnit;
    private originIdx;
    private borderIdx;
    constructor(rainbow: Rainbow, mesh: Mesh, originIndex?: number, borderIndex?: number, instanceCountMax?: number);
    instance(): RenderObject;
    destroy(): void;
    clear(): void;
    set opacity(o: number);
    set display(n: DisplayStatus);
    set translate(offset: number[]);
    get rainbow(): Rainbow;
}
export declare const enum TextFieldVerticalAlign {
    TOP = 0,
    MIDDLE = 1,
    BOTTOM = 2
}
export declare class TextFieldGenerator implements GeneratorInterface {
    private _rainbow;
    private gs;
    constructor(rainbow: Rainbow, maxLen?: number, wordSpace?: number, verticalAlign?: TextFieldVerticalAlign, index?: number, instanceCountMax?: number);
    instance(): TextField;
    destroy(): void;
    clear(): void;
    set display(n: DisplayStatus);
    set opacity(n: number);
    get rainbow(): Rainbow;
}
