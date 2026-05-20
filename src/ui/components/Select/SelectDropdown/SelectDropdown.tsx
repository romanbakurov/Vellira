import { createPortal } from 'react-dom';
import { SelectOption } from '../SelectOption/SelectOption';
import styles from './SelectedDropdown.module.scss';
import type { SelectDropdownProps } from './type';

export const SelectDropdown = ({
  isOpen,
  listboxId,
  labelId,
  hasLabel,
  position,
  options,
  selectedValue,
  activeIndex,
  listRef,
  onSelect,
  onMouseEnter,
}: SelectDropdownProps) => {
  if (!isOpen) return null;

  return createPortal(
    <ul
      ref={listRef}
      id={listboxId}
      role='listbox'
      aria-labelledby={hasLabel ? labelId : undefined}
      className={styles.dropdown}
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: position.width,
        zIndex: 9999,
      }}
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
    </ul>,
    document.body
  );
};
