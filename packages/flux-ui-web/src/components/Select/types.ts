import type {
  BaseSelectDropdownProps,
  BaseSelectOption,
  BaseSelectProps,
} from '@romanbakurov/flux-ui-types';
import type React from 'react';
import type { RefObject } from 'react';

export interface SelectOption extends BaseSelectOption {
  label: string;
}

export interface SelectProps extends Omit<BaseSelectProps, 'options'> {
  label?: string;
  id?: string;
  name?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  className?: string;
}

export interface SelectDropdownProps extends Omit<
  BaseSelectDropdownProps,
  'options'
> {
  listboxId: string;
  labelId: string;
  hasLabel: boolean;
  options: SelectOption[];
  onMouseEnter: (index: number) => void;
  style?: React.CSSProperties;
  listRef: RefObject<HTMLUListElement | null>;
  floatingRef?: (node: HTMLUListElement | null) => void;
}
