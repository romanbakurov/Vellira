import { cn } from '@/ui/utils/cn';
import styles from './Select.module.scss';
import type { SelectProps } from './types';
import { useSelect } from './useSelect';
import { useId } from 'react';
import { createPortal } from 'react-dom';
import ChevronDown from '@/assets/icons/ChevronDown.svg?react';

export const Select = ({
  label,
  value,
  onChange,
  options = [],
  placeholder,
  required = false,
  disabled,
  error,
}: SelectProps) => {
  const {
    open,
    activeIndex,
    dropdownPosition,
    listboxId,
    controlRef,
    dropdownRef,
    optionRefs,
    selectOption,
    handleKeyDown,
    handleControlClick,
    highlightOption,
  } = useSelect({ options, value, onChange, disabled });
  const labelId = useId();
  const errorId = useId();

  const selected = options.find((option) => option.value === value);

  return (
    <div className={styles.wrapper}>
      <label id={labelId} className={styles.label}>
        {label}
        {required && (
          <span aria-hidden='true' className={styles.required}>
            *
          </span>
        )}
      </label>

      <div
        ref={controlRef}
        role='combobox'
        aria-expanded={open}
        aria-haspopup='listbox'
        aria-labelledby={labelId}
        aria-controls={open ? listboxId : undefined}
        aria-activedescendant={
          open && activeIndex >= 0
            ? `${listboxId}-option-${activeIndex}`
            : undefined
        }
        aria-describedby={error ? errorId : undefined}
        aria-disabled={disabled}
        aria-required={required}
        tabIndex={disabled ? -1 : 0}
        className={cn(styles.control, {
          [styles.error]: !!error,
          [styles.disabled]: disabled,
        })}
        onClick={handleControlClick}
        onKeyDown={handleKeyDown}
      >
        <span
          className={cn(styles.value, {
            [styles.empty]: !selected,
          })}
        >
          {selected?.label || placeholder || 'Select...'}
        </span>
        <span className={cn(styles.arrow, { [styles.open]: open })}>
          <ChevronDown />
        </span>
      </div>

      {open &&
        createPortal(
          <ul
            id={listboxId}
            ref={dropdownRef}
            role='listbox'
            aria-labelledby={labelId}
            className={styles.dropdown}
            style={{
              position: 'absolute',
              top: `${dropdownPosition.top}px`,
              left: `${dropdownPosition.left}px`,
              width: `${dropdownPosition.width}px`,
              zIndex: 9999,
            }}
          >
            {options.map((option, index) => (
              <li
                key={option.value}
                id={`${listboxId}-option-${index}`}
                ref={(el) => (optionRefs.current[index] = el)}
                role='option'
                aria-selected={option.value === value}
                className={cn(styles.option, {
                  [styles.selected]: option.value === value,
                  [styles.active]: index === activeIndex,
                })}
                onClick={(e) => {
                  e.stopPropagation();
                  selectOption(option.value);
                }}
                onMouseEnter={() => highlightOption(index)}
              >
                {option.label}
              </li>
            ))}
          </ul>,
          document.body
        )}

      {error && typeof error === 'string' && (
        <span id={errorId} className={styles.errorText} role='alert'>
          {error}
        </span>
      )}
    </div>
  );
};
