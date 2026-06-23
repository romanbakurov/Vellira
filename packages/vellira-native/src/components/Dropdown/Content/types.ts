import type { BaseDropdownContentProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface DropdownContentProps extends BaseDropdownContentProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
}
