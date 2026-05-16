import styles from './Input.module.scss';
import { cn } from '@/utils/cn';
import { useId } from 'react';
import { FormField } from '@/components/FormField/FormField';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;

  size?: InputSize;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  size = 'md',
  error,
  disabled,
  required,
}: InputProps) => {
  const id = useId();

  return (
    <FormField id={id} label={label} error={error} required={required}>
      <input
        id={id}
        className={cn(styles.input, styles[size], {
          [styles.error]: !!error,
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        {...(error ? { 'aria-labelledby': `${id}-error` } : {})}
      />
    </FormField>
  );
};
