export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  id?: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;

  size?: InputSize;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
}
