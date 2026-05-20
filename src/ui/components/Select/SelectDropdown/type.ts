export type SelectDropdownProps = {
  isOpen: boolean;
  listboxId: string;
  labelId: string;
  hasLabel: boolean;
  position: { top: number; left: number; width: number };
  options: { label: string; value: string; disabled?: boolean }[];
  selectedValue: string;
  activeIndex: number;
  listRef: React.Ref<HTMLUListElement>;
  onSelect: (value: string) => void;
  onMouseEnter: (index: number) => void;
};
