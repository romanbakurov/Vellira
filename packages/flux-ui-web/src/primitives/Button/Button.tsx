import { forwardRef } from 'react';

import { cn } from '@utils/cn';

import styles from './Button.module.scss';
import type { ButtonProps } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'medium',
      disabled = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className,
      onClick,
      ariaLabel,
    },
    ref
  ) => {
    const iconOnly = !children && (leftIcon || rightIcon);

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel || undefined}
        className={cn(styles.button, styles[variant], styles[size], className, {
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth,
          [styles.iconOnly]: iconOnly,
        })}
      >
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </button>
    );
  }
);
