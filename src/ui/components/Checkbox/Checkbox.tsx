import styles from './Checkbox.module.scss';
import { cn } from '@/ui/utils/cn';
import { forwardRef, ChangeEvent, useId } from 'react';
import { useControllableState } from '../../hooks';
import type { CheckboxProps } from './types';

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
        className={cn(styles.wrapper, disabled && styles.disabled, className)}
      >
        <input
          ref={ref}
          id={generatedId}
          type='checkbox'
          aria-checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          className={styles.input}
          aria-disabled={disabled}
        />

        <span className={styles.customCheckbox}>
          {isChecked && <span className={styles.checkmark}>✓</span>}
        </span>

        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
