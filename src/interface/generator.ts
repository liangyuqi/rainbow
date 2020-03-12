import {DisplayStatus} from '../enum/unit';
import {Rainbow} from '..';
import {OutViewportStatus} from '../render/render-object';

export interface GeneratorInterface {
  readonly rainbow: Rainbow;
  display: DisplayStatus;
  instance(): ComponentInterface;
  destroy(): void;
  clear(): void;
}

export interface ComponentInterface {
  readonly id: string;
  readonly isShown: boolean;
  opacity: number;
  display: DisplayStatus;
  outViewportStatus: OutViewportStatus;
  attachViewportScale: boolean;
  attachViewportTranslation: boolean;
  show(): ComponentInterface;
  hide(): ComponentInterface;
}
