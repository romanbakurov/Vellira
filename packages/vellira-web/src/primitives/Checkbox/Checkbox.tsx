import { forwardRef, useId } from 'react';

import { useControllableState } from '@romanbakurov/vellira-core';
import { Check } from '@romanbakurov/vellira-icons';
import { cn } from '@utils/cn';
import type { ChangeEvent } from 'react';

import type { CheckboxProps } from './types';

import styles from './Checkbox.module.scss';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      checked,
      defaultChecked = false,
      disabled = false,
      className,
      onCheckedChange,
      error,
      size = 'md',
    },
    ref
  ) => {
    const generatedId = useId();
    const hasError = Boolean(error);

    const [isChecked, setIsChecked] = useControllableState({
      value: checked,
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };

    return (
      <div className={styles.container}>
        <label
          htmlFor={generatedId}
          className={cn(styles.wrapper, disabled && styles.disabled, className)}
        >
          <input
            ref={ref}
            id={generatedId}
            type='checkbox'
            checked={isChecked}
            disabled={disabled}
            onChange={handleChange}
            className={styles.input}
            aria-invalid={hasError || undefined}
            aria-describedby={hasError ? `${generatedId}-error` : undefined}
            aria-label={!label ? 'Checkbox' : undefined}
          />

          <span
            className={cn(
              styles.customCheckbox,
              styles[size],
              hasError && styles.error
            )}
            aria-hidden='true'
          >
            {isChecked && (
              <span className={styles.checkmark}>
                <Check />
              </span>
            )}
          </span>

          {label && <span className={styles.label}>{label}</span>}
        </label>

        {hasError && (
          <span id={`${generatedId}-error`} className={styles.errorText}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
