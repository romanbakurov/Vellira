import type { CSSProperties, MutableRefObject } from 'react';

export type SelectDropdownProps = {
  isOpen: boolean;
  listboxId: string;
  labelId: string;
  hasLabel: boolean;
  style: CSSProperties;
  options: { label: string; value: string; disabled?: boolean }[];
  selectedValue: string;
  activeIndex: number;
  listRef: MutableRefObject<HTMLUListElement | null>;
  floatingRef: (node: HTMLUListElement | null) => void;
  onSelect: (value: string) => void;
  onMouseEnter: (index: number) => void;
};
