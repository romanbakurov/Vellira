import { cn } from '@/utils/cn';
import style from './InfoBlock.module.scss';

export type CheckboxSize = 'primary' | 'info' | 'warning' | 'error';

export interface InfoBlockProps {
  title: string;
  caption: string;
  color: CheckboxSize;
}

export const InfoBlock = ({ title, caption, color }: InfoBlockProps) => {
  return (
    <div className={cn(style.infoBlock, style[`infoBlock_color_${color}`])}>
      <p className={style.title}>{title}</p>
      <p className={style.caption}>{caption}</p>
    </div>
  );
};
