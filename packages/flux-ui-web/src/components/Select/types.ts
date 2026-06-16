import type {
  BaseSelectDropdownProps,
  BaseSelectOption,
  BaseSelectProps,
} from '@romanbakurov/flux-ui-types';
import type React from 'react';
import type { RefObject } from 'react';

export type SelectOption = BaseSelectOption;
export type SelectProps = BaseSelectProps;

export interface SelectDropdownProps extends BaseSelectDropdownProps {
  style?: React.CSSProperties;
  listRef: RefObject<HTMLUListElement | null>;
  floatingRef?: (node: HTMLUListElement | null) => void;
}
