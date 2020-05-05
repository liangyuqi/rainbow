/**
 * 生成canvas
 */
export function initCanvas(): HTMLCanvasElement {
  let canvas = document.getElementById('canvas') as HTMLCanvasElement;
  canvas.style.transitionProperty = 'transform';
  canvas.style.userSelect = 'none';
  canvas.width = document.getElementById('main-canvas')!.clientWidth;
  canvas.height = document.getElementById('main-canvas')!.clientHeight;
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.zIndex = '1';
  return canvas;
}
