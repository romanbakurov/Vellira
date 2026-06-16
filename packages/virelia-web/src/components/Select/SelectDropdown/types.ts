import type { BaseSelectDropdownProps } from '@romanbakurov/virelia-types';
import type { CSSProperties, MutableRefObject } from 'react';

import type { SelectOption } from '../types';

export interface SelectDropdownProps extends Omit<
  BaseSelectDropdownProps,
  'options'
> {
  listboxId: string;
  labelId: string;
  hasLabel: boolean;
  options: SelectOption[];
  onMouseEnter: (index: number) => void;
  style: CSSProperties;
  listRef: MutableRefObject<HTMLUListElement | null>;
  floatingRef: (node: HTMLUListElement | null) => void;
}
