import styles from './Checkbox.module.scss';
import { cn } from '@/utils/cn';

export type CheckboxSize = 'xs' | 'sm' | 'md';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;

  isDisabled?: boolean;
  error?: boolean;
  size?: CheckboxSize;
}

export const Checkbox = ({
  label,
  checked = false,
  onChange,
  isDisabled = false,
  error,
  size = 'md',
}: CheckboxProps) => {
  return (
    <label className={styles.wrapper}>
      <input
        type='checkbox'
        checked={checked}
        isDisabled={isDisabled}
        onChange={(e) => onChange(e.target.checked)}
        className={cn(styles.input, styles[size], {
          [styles.error]: !!error,
        })}
      />

      <span className={styles.customCheckbox}>
        <span className={styles.checkmark}>✓</span>
      </span>

      <span className={styles.label}>{label}</span>

      {error && <span className={styles.errorText}>{error}</span>}
    </label>
  );
};
