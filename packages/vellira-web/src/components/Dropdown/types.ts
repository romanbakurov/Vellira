import type { Placement } from '@floating-ui/react';
import type {
  BaseDropdownGroup,
  BaseDropdownMenuItem,
  BaseDropdownProps,
  BaseDropdownSeparator,
  TextWrap,
} from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface DropdownMenuItem extends BaseDropdownMenuItem {
  label: string;
  icon?: ReactNode;
  danger?: boolean;
  textWrap?: TextWrap;
}

export interface DropdownGroup extends BaseDropdownGroup {
  label: string;
}

export type DropdownSeparator = BaseDropdownSeparator;
export type DropdownItem = DropdownMenuItem | DropdownGroup | DropdownSeparator;

export interface DropdownProps extends Omit<BaseDropdownProps, 'items'> {
  label?: string;
  trigger?: ReactNode;
  icon?: ReactNode;
  items: DropdownItem[];
  placement?: Placement;
  className?: string;
  rotateAngle?: number;
  matchTriggerWidth?: boolean;
  textWrap?: TextWrap;
}

export const isMenuItem = (item: DropdownItem): item is DropdownMenuItem =>
  item.type !== 'group' && item.type !== 'separator';

export const isGroup = (item: DropdownItem): item is DropdownGroup =>
  item.type === 'group';

export const isSeparator = (item: DropdownItem): item is DropdownSeparator =>
  item.type === 'separator';
