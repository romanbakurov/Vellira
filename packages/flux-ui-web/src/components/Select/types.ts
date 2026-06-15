import type React from 'react';
import type { RefObject } from 'react';

interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  // Accessibility
  label?: string;
  id?: string;
  name?: string;

  // Controlled / Uncontrolled
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;

  // Options
  options: SelectOption[];
  placeholder?: string;

  // State
  required?: boolean;
  disabled?: boolean;
  error?: string;

  // Styling
  className?: string;
}

export interface SelectDropdownProps {
  isOpen: boolean;
  listboxId: string;
  labelId: string;
  hasLabel: boolean;
  style?: React.CSSProperties;
  options: SelectOption[];
  selectedValue: string;
  activeIndex: number;
  listRef: RefObject<HTMLUListElement | null>;
  onSelect: (value: string) => void;
  onMouseEnter: (index: number) => void;
  floatingRef?: (node: HTMLUListElement | null) => void;
}
