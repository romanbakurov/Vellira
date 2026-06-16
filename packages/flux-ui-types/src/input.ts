export type InputSize = 'sm' | 'md' | 'lg';
export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url';

export interface BaseInputProps {
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
  type?: InputType;
  autoComplete?: string;
}
