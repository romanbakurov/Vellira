import type { BaseDropdownContentProps } from '@romanbakurov/vellira-types';
import type { CSSProperties, ReactNode } from 'react';

export interface DropdownContentProps extends BaseDropdownContentProps {
  children: ReactNode;
  menuId: string;
  className?: string;
  floatingStyles: CSSProperties;
}
