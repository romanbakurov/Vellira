import React, { useId } from 'react';

import { cn } from '@utils/cn';

import styles from './FormField.module.scss';
import type { FormFieldProps } from './types';

export const FormField = ({
  id,
  label,
  error,
  required,
  disabled,
  children,
}: FormFieldProps) => {
  const generatedId = useId();
  const fieldId = id ?? generatedId;

  return (
    <div className={cn(styles.wrapper, { [styles.disabled]: disabled })}>
      <label className={styles.label} htmlFor={fieldId}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </label>

      <div className={styles.control}>{children}</div>

      {error && (
        <span className={styles.errorText} id={`${fieldId}-error`} role='alert'>
          {error}
        </span>
      )}
    </div>
  );
};
