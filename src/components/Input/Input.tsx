import styles from './Input.module.scss';
import { cn } from '@/utils/cn';
import { useId } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;

  required?: boolean;
  disabled?: boolean;
  error?: string;

  size?: InputSize;
}

export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  required,
  disabled = false,
  error,
  size = 'md',
}: InputProps) => {
  const id = useId();

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {required && <span className={styles.required}> *</span>}
      </label>

      <input
        id={id}
        className={cn(styles.input, styles[size], {
          [styles.error]: !!error,
          [styles.disabled]: disabled,
        })}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
