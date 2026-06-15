export interface RadioOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  label?: string;
  value?: string;
  defaultValue: string;
  onChange?: (value: string) => void;

  options: RadioOption[];

  name: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  orientation: 'vertical' | 'horizontal';
}
