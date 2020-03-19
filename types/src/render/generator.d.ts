import { Mesh } from '../graph/mesh';
import { Rainbow } from '..';
import { GeneratorInterface } from '../interface/generator';
import { RenderObject } from './render-object';
import { DisplayStatus } from '../enum/unit';
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
