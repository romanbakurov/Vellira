import { DropdownMenuItem } from '../types';
import React from 'react';

export type DropdownItemProps = DropdownMenuItem & {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  shortcut?: string;
  textWrap?: 'nowrap' | 'wrap' | 'truncate';
  className: string;
};
