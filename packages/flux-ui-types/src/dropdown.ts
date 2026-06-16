import type { TextWrap } from './common';

export interface BaseDropdownMenuItem {
  type?: 'item';
  label: string;
  value: string;
  danger?: boolean;
  disabled?: boolean;
  textWrap?: TextWrap;
}

export interface BaseDropdownGroup {
  type: 'group';
  label: string;
}

export interface BaseDropdownSeparator {
  type: 'separator';
}

export type BaseDropdownItem =
  | BaseDropdownMenuItem
  | BaseDropdownGroup
  | BaseDropdownSeparator;

export interface BaseDropdownProps {
  label?: string;
  items: BaseDropdownItem[];
  onSelect?: (value: string) => void;
  className?: string;
  disabled?: boolean;
  rotateAngle?: number;
  matchTriggerWidth?: boolean;
  textWrap?: TextWrap;
}

export interface BaseDropdownContentProps {
  menuId: string;
  role?: string;
  className?: string;
}

export interface BaseDropdownGroupProps {
  label: string;
}

export type BaseDropdownItemProps = BaseDropdownMenuItem & {
  active: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  shortcut?: string;
  textWrap?: TextWrap;
  className?: string;
};

export interface BaseDropdownTriggerProps {
  isOpen: boolean;
  rotateAngle?: number;
  label?: string;
}
