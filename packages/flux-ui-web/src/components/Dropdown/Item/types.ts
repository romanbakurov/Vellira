import type { ReactNode } from 'react';

import type { DropdownMenuItem } from '../types';

export type DropdownItemProps = DropdownMenuItem & {
  children: ReactNode;
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  shortcut?: string;
  textWrap?: 'nowrap' | 'wrap' | 'truncate';
  className?: string;
};
