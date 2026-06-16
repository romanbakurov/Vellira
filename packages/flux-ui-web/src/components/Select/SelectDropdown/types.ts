import type { BaseSelectDropdownProps } from '@romanbakurov/flux-ui-types';
import type { CSSProperties, MutableRefObject } from 'react';

export interface SelectDropdownProps extends BaseSelectDropdownProps {
  style: CSSProperties;
  listRef: MutableRefObject<HTMLUListElement | null>;
  floatingRef: (node: HTMLUListElement | null) => void;
}
