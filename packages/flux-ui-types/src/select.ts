export interface BaseSelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface BaseSelectProps {
  label?: string;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  options: BaseSelectOption[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
}

export interface BaseSelectDropdownProps {
  isOpen: boolean;
  listboxId: string;
  labelId: string;
  hasLabel: boolean;
  options: BaseSelectOption[];
  selectedValue: string;
  activeIndex: number;
  onSelect: (value: string) => void;
  onMouseEnter: (index: number) => void;
}

export interface BaseSelectOptionProps {
  option: BaseSelectOption;
  isSelected: boolean;
  isActive: boolean;
  optionId: string;
  onSelect: (value: string) => void;
  onMouseEnter: () => void;
}

export interface BaseSelectTriggerProps {
  id?: string;
  errorId?: string;
  isOpen: boolean;
  disabled?: boolean;
  required?: boolean;
  hasLabel: boolean;
  labelId: string;
  listboxId: string;
  activeIndex: number;
  ariaLabel?: string;
  error?: boolean | string;
  onClick: () => void;
}
