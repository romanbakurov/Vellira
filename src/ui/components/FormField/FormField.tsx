import { cn } from '@/ui/utils/cn';
import styles from './FormField.module.scss';
import React from 'react';

export interface FormFieldProps {
  id?: string;
  label: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const FormField = ({
  id,
  label,
  error,
  required,
  disabled,
  children,
}: FormFieldProps) => {
  return (
    <div className={cn(styles.wrapper, { [styles.disabled]: disabled })}>
      <label className={styles.label} htmlFor={id}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.control}>{children}</div>

      {error && (
        <span className={styles.errorText} id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
};
