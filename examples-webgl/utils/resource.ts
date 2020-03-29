import {TextureFactroy, ImageTexture} from 'src/render/texture';
import {ImageEnum} from '@/enum/image';

/**
 * 预加载全部资源
 * @param srcs
 */
export function PreloadAllImages(sources: IImageSource[], tf: TextureFactroy) {
  return Promise.all(
    sources.map(source => {
      return LoadImage(source.src);
    })
  ).then(res => {
    let textures = res.map(image =>
      tf.createTexture(image, image.width, image.height)
    );
    if (textures) {
      return new Promise((resolve, reject) => {
        resolve(textures);
      });
    }
  });
}

export function LoadImage(src: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.src = src;
  });
}

export function GetTextureByType(type: ImageEnum, uvList: Array<ImageTexture>) {
  let source = IMAGE_SOURCE_LIST.find(source => source.type === type);
  try {
    let index = source!.zIndex;
    return uvList[index];
  } catch (error) {
    throw Error('Error: 导入Zone找不到对应Texture');
  }
}

const tiktokImgUrl = require('./../../assets/images/tiktok.png');

export const IMAGE_SOURCE_LIST: Array<IImageSource> = [
  {
    zIndex: 0,
    type: ImageEnum.TikTok,
    src: tiktokImgUrl
  }
];

export interface IImageSource {
  type: ImageEnum;
  src: string;
  zIndex: number;
}

export function GetRandomColor() {
  return [Math.random() * 255, Math.random() * 255, Math.random() * 255, 255];
}
