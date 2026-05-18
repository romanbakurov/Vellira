import styles from './Checkbox.module.scss';
import { cn } from '@/ui/utils/cn';

export type CheckboxSize = 'xs' | 'sm' | 'md';

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export const Checkbox = ({
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) => {
  return (
    <label className={cn(styles.wrapper, { [styles.disabled]: disabled })}>
      <input
        type='checkbox'
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange(e.target.checked)}
        className={styles.input}
      />

      <span className={styles.customCheckbox}>
        {checked && <span className={styles.checkmark}>✓</span>}
      </span>

      <span className={styles.label}>{label}</span>
    </label>
  );
};
