import type {
  BaseDropdownItemProps,
  TextWrap,
} from '@romanbakurov/flux-ui-types';
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
