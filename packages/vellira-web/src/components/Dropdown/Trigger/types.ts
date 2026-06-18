import type { BaseDropdownTriggerProps } from '@romanbakurov/vellira-types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface DropdownTriggerProps
  extends BaseDropdownTriggerProps, ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  arrowIcon?: ReactNode;
  rotateAngle?: number;
  label?: string;
}
