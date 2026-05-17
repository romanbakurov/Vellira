import { cn } from '@/utils/cn';
import styles from './Select.module.scss';
import { useState, useRef, useId, useEffect, useCallback } from 'react';
import ChevronDown from '@/assets/icons/ChevronDown.svg?react';
import { createPortal } from 'react-dom';

export type SelectOptions = {
  label: string;
  value: string;
};

export interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOptions[];
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean | string;
}

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
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const controlRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const labelId = useId();
  const errorId = useId();
  const listboxId = useRef(
    `select-listbox-${Math.random().toString(36).slice(2)}`
  ).current;

  const selected = options.find((option) => option.value === value);

  // Update dropDown position
  const updatePosition = useCallback(() => {
    if (!controlRef.current) return;

    const rect = controlRef.current.getBoundingClientRect();
    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, []);

  //Open/close
  const toggleOpen = useCallback(() => {
    if (disabled) return;
    setOpen((prev) => {
      const newOpen = !prev;
      if (newOpen) {
        updatePosition();

        const currentIndex = options.findIndex((opt) => opt.value === value);
        setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
      }
      return newOpen;
    });
  }, [disabled, updatePosition, options, value]);

  //close
  const close = useCallback(() => {
    setOpen(false);
    controlRef.current?.focus();
  }, []);

  //choosing option
  const selectOption = useCallback(
    (optionValue: string) => {
      onChange(optionValue);
      close();
    },
    [onChange, close]
  );

  //Keyboard Event
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      if (
        e.key === ' ' ||
        e.key === 'Enter' ||
        e.key === 'ArrowDown' ||
        e.key === 'ArrowUp'
      ) {
        e.preventDefault();
        setOpen(true);

        const currentIndex = options.findIndex((opt) => opt.value === value);
        setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
        updatePosition();
      }
      return;
    }

    //when open
    switch (e.key) {
      case 'Escape':
        e.preventDefault();
        close();
        break;

      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
        break;

      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
        break;

      case 'Enter':
      case ' ':
        e.preventDefault();
        if (activeIndex >= 0 && activeIndex < options.length) {
          selectOption(options[activeIndex].value);
        }
        break;

      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;

      case 'End':
        e.preventDefault();
        setActiveIndex(options.length - 1);
        break;

      case 'Tab':
        close();
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        controlRef.current &&
        !controlRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        close();
      }
    };

    if (open) {
      document.addEventListener('pointerdown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [open, close]);

  useEffect(() => {
    if (!open) return;

    const handleUpdate = () => updatePosition();

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [open, updatePosition]);

  useEffect(() => {
    if (open && activeIndex >= 0) {
      const activeElement = optionRefs.current[activeIndex];
      activeElement?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [open, activeIndex]);

  return (
    <div className={styles.wrapper}>
      <label id={labelId} className={styles.label}>
        {label}
        {required && <span aria-hidden='true'>*</span>}
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
        onClick={toggleOpen}
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
                onMouseEnter={() => setActiveIndex(index)}
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
