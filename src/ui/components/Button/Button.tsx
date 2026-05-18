import styles from './Button.module.scss';
import { cn } from '@/ui/utils/cn';
import type { ButtonProps } from './types';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className={cn(styles.button, styles[variant], styles[size], {
        [styles.disabled]: disabled,
        [styles.fullWidth]: fullWidth,
      })}
    >
      {leftIcon && <span className={styles.icon}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={styles.icon}>{rightIcon}</span>}
    </button>
  );
};
