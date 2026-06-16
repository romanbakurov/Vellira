import type { Orientation } from './common';

export interface BaseRadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface BaseRadioGroupProps {
  label?: string;
  value?: string;
  defaultValue: string;
  onChange?: (value: string) => void;
  options: BaseRadioOption[];
  name: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  orientation: Orientation;
}
