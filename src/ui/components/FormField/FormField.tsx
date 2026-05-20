import { cn } from '@/ui/utils/cn';
import styles from './FormField.module.scss';
import React from 'react';
import type { FormFieldProps } from './types';
import { useId, Children, isValidElement, cloneElement } from 'react';

export const FormField = ({
  id,
  label,
  error,
  required,
  disabled,
  children,
}: FormFieldProps) => {
  const generatedId = useId();
  const fieldId = id || generatedId;

  return (
    <div className={cn(styles.wrapper, { [styles.disabled]: disabled })}>
      <label className={styles.label} htmlFor={fieldId}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.control}>
        {Children.map(children, (child) =>
          isValidElement(child)
            ? cloneElement(child, { id: child.props.id ?? fieldId })
            : child
        )}
      </div>

      {error && (
        <span className={styles.errorText} id={`${fieldId}-error`} role='alert'>
          {error}
        </span>
      )}
    </div>
  );
};
