import { Portal } from '@utils/Portal';

import { SelectOption } from '../SelectOption/SelectOption';

import type { SelectDropdownProps } from './types';

import styles from './SelectedDropdown.module.scss';

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
  const dropdownRef = (node: HTMLUListElement | null) => {
    listRef.current = node;
    floatingRef(node);
  };
  return (
    <Portal>
      <ul
        ref={dropdownRef}
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
