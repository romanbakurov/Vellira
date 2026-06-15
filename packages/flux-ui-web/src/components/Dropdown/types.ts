import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';

export interface DropdownMenuItem {
  type?: 'item';

  label: string;
  value: string;
  icon?: ReactNode;
  danger?: boolean;
  disabled?: boolean;
  textWrap?: 'nowrap' | 'wrap' | 'truncate';
}

export interface DropdownGroup {
  type: 'group';
  label: string;
}

export interface DropdownSeparator {
  type: 'separator';
}

export type DropdownItem = DropdownMenuItem | DropdownGroup | DropdownSeparator;

export interface DropdownProps {
  label?: string;
  trigger?: ReactNode;
  icon?: ReactNode;
  items: DropdownItem[];
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  rotateAngle?: number;
  matchTriggerWidth?: boolean;
  placement?: Placement;
  textWrap?: 'nowrap' | 'wrap' | 'truncate';
}

export const isMenuItem = (item: DropdownItem): item is DropdownMenuItem =>
  item.type !== 'group' && item.type !== 'separator';

export const isGroup = (item: DropdownItem): item is DropdownGroup =>
  item.type === 'group';

export const isSeparator = (item: DropdownItem): item is DropdownSeparator =>
  item.type === 'separator';
