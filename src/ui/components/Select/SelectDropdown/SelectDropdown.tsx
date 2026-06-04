import { Portal } from '@ui/overlay/Portal';
import { SelectOption } from '../SelectOption/SelectOption';
import styles from './SelectedDropdown.module.scss';
import type { SelectDropdownProps } from './type';

export const SelectDropdown = ({
  isOpen,
  listboxId,
  labelId,
  floatingRef,
  hasLabel,
  style,
  options,
  selectedValue,
  activeIndex,
  listRef,
  onSelect,
  onMouseEnter,
}: SelectDropdownProps) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <ul
        ref={(node) => {
          listRef.current = node;
          floatingRef(node);
        }}
        id={listboxId}
        role='listbox'
        aria-labelledby={hasLabel ? labelId : undefined}
        className={styles.dropdown}
        style={style}
      >
        {options.map((option, index) => (
          <SelectOption
            key={option.value}
            option={option}
            isSelected={option.value === selectedValue}
            isActive={index === activeIndex}
            optionId={`${listboxId}-option-${index}`}
            onSelect={onSelect}
            onMouseEnter={() => onMouseEnter(index)}
          />
        ))}
      </ul>
    </Portal>
  );
};
