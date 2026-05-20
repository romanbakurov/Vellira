import styles from './Button.module.scss';
import { cn } from '@/ui/utils/cn';
import type { ButtonProps } from './types';
import { forwardRef } from 'react';

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
    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(styles.button, styles[variant], styles[size], className, {
          [styles.disabled]: disabled,
          [styles.fullWidth]: fullWidth,
        })}
      >
        {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
        <span>{children}</span>
        {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
      </button>
    );
  }
);
