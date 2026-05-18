import styles from './Input.module.scss';
import { cn } from '@/ui/utils/cn';
import { FormField } from '../FormField';
import type { InputProps } from './types';
import { forwardRef } from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      label,
      placeholder,
      value,
      onChange,
      size = 'md',
      error,
      disabled,
      required,
      className,
    },
    ref
  ) => {
    return (
      <FormField id={id} label={label} error={error} required={required}>
        <input
          ref={ref}
          id={id}
          className={cn(
            styles.input,
            styles[size],
            {
              [styles.error]: !!error,
            },
            className
          )}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={!!error}
          {...(error ? { 'aria-describedby': `${id}-error` } : {})}
        />
      </FormField>
    );
  }
);

Input.displayName = 'Input';
