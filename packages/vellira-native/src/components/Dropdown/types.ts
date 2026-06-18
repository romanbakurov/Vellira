import type {
  BaseDropdownGroup,
  BaseDropdownMenuItem,
  BaseDropdownProps,
  BaseDropdownSeparator,
  TextWrap,
} from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

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
  items: DropdownItem[];
  style?: StyleProp<ViewStyle>;
  triggerStyle?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
