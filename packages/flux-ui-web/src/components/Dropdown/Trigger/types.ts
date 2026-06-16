import type { BaseDropdownTriggerProps } from '@romanbakurov/flux-ui-types';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface DropdownTriggerProps
  extends BaseDropdownTriggerProps, ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  arrowIcon?: ReactNode;
}
