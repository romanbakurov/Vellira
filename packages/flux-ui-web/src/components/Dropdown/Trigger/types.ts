import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface DropdownTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isOpen: boolean;
  icon?: ReactNode;
  arrowIcon?: ReactNode;
  rotateAngle?: number;
  label?: string;
}
