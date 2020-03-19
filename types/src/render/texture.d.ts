import { EventDispatcher } from '../events';
export declare class TextureFactroy {
    private gl;
    private packer;
    private blocks;
    private fontMaps;
    private texture;
    constructor(glContext: any);
    getOriginTexture(): WebGLTexture;
    createTexture(source: any, width: number, height: number): ImageTexture;
    getFontTexture(str: string): ImageTexture;
    getFontTextures(): Map<string, ImageTexture>;
    embedFont(chars: string): void;
    updateToGL(): void;
    updateTextureToGL(texture: ImageTexture): void;
    /**
     * 复制屏幕像素到材质
     * @param texture
     * @param offsetX
     * @param offsetY
     */
    copyToTexture(texture: ImageTexture, offsetX?: number, offsetY?: number): void;
}
export declare const enum ImageTextureEvent {
    UPDATE = "update"
}
export declare class ImageTexture extends EventDispatcher {
    u: number;
    v: number;
    width: number;
    height: number;
    index: number;
    isReady: boolean;
    constructor();
    update(u: number, v: number, width: number, height: number, index?: number): void;
}
