import { cn } from '@/ui/utils/cn';
import styles from './SelectOption.module.scss';
import type { SelectOptionProps } from './type';

export const SelectOption = ({
  option,
  isSelected,
  isActive,
  optionId,
  onSelect,
  onMouseEnter,
}: SelectOptionProps) => {
  return (
    <li
      id={optionId}
      role='option'
      aria-selected={isSelected}
      aria-disabled={option.disabled}
      className={cn(styles.option, {
        [styles.selected]: isSelected,
        [styles.active]: isActive,
        [styles.optionDisabled]: option.disabled,
      })}
      onClick={() => !option.disabled && onSelect(option.value)}
      onMouseEnter={() => !option.disabled && onMouseEnter()}
    >
      {option.label}
    </li>
  );
};
