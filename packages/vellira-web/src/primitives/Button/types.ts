import type { BaseButtonProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface ButtonProps extends BaseButtonProps {
  ariaLabel?: string | false;
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}
