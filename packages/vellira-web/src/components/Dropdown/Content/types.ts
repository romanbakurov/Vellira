import type { BaseDropdownContentProps } from '@romanbakurov/vellira-types';
import type { CSSProperties, KeyboardEventHandler, ReactNode } from 'react';

export interface DropdownContentProps extends BaseDropdownContentProps {
  children: ReactNode;
  menuId: string;
  labelledById?: string;
  label?: string;
  activeDescendantId?: string;
  onKeyDown?: KeyboardEventHandler<HTMLUListElement>;
  className?: string;
  floatingStyles: CSSProperties;
}
