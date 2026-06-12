import type { ReactNode } from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  ariaLabel?: string | false;
  children: ReactNode;
  variant?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}
