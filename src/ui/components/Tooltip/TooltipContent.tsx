import { forwardRef } from 'react';
import styles from './Tooltip.module.scss';
import { cn } from '@utils/cn';
import type { TooltipContentProps } from './types';

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  (
    {
      content,
      placement = 'top',
      arrowRef,
      arrowX,
      arrowY,
      className,
      style,
      ...props
    },
    ref
  ) => {
    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]];

    const arrowStyles = {
      position: 'absolute' as const,
      pointerEvents: 'none' as const,
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      [staticSide]: '-5px',
    };

    return (
      <div
        ref={ref}
        className={cn(styles.tooltip, className)}
        data-placement={placement}
        data-state='open'
        style={style}
        {...props}
      >
        {content}
        <div ref={arrowRef} className={styles.arrow} style={arrowStyles} />
      </div>
    );
  }
);

TooltipContent.displayName = 'TooltipContent';
