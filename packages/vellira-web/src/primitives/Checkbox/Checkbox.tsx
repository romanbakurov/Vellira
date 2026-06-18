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
    },
    ref
  ) => {
    const generatedId = useId();

    const [isChecked, setIsChecked] = useControllableState({
      value: checked,
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked);
    };

    return (
      <label
        htmlFor={generatedId}
        className={cn(styles.wrapper, disabled, className)}
      >
        <input
          ref={ref}
          id={generatedId}
          type='checkbox'
          checked={isChecked}
          aria-checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className={styles.input}
          aria-disabled={disabled}
          aria-label={typeof label === 'string' ? label : 'Checkbox'}
        />

        <span className={styles.customCheckbox} aria-hidden='true'>
          {isChecked && (
            <span className={styles.checkmark}>
              <Check />
            </span>
          )}
        </span>

        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
