import type { BaseSelectDropdownProps } from '@romanbakurov/vellira-types';
import type { CSSProperties } from 'react';

import type { SelectOption } from '../types';

export interface SelectDropdownProps extends Omit<
  BaseSelectDropdownProps,
  'options'
> {
  listboxId: string;
  options: SelectOption[];
  onMouseEnter: (index: number) => void;
  style: CSSProperties;
  setDropdownRef: (node: HTMLUListElement | null) => void;
}
