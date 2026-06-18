import type {
  BaseDropdownItemProps,
  TextWrap,
} from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface DropdownItemProps extends BaseDropdownItemProps {
  label: string;
  children: ReactNode;
  icon?: ReactNode;
  danger?: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  shortcut?: string;
  textWrap?: TextWrap;
  className?: string;
}
