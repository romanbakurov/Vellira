import { useId, useMemo, useRef, useState } from 'react';
import { cn } from '@utils/cn';

import { useControllableState } from '@web/hooks/useControllableState';
import { useFloatingPosition } from '@web/hooks/useFloatingPosition';
import { useKeyboardNavigation } from '@web/hooks/useKeyboardNavigation';
import { useOutsideClick } from '@web/hooks/useOutsideClick';

import styles from './Select.module.scss';
import { SelectDropdown } from './SelectDropdown/SelectDropdown';
import { SelectTrigger } from './SelectTrigger/SelectTrigger';
import type { SelectProps } from './types';

export const Select = ({
  label,
  id,
  name,
  value: controlledValue,
  defaultValue,
  onChange,
  options,
  placeholder = 'Select...',
  required,
  disabled,
  error,
  className,
}: SelectProps) => {
  const [selectedValue, setSelectedValue] = useControllableState({
    value: controlledValue,
    defaultValue: defaultValue ?? '',
    onChange,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const labelId = useId();
  const listboxId = useId();
  const errorId = `${id || listboxId}-error`;

  const buttonRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  const { floatingStyles, setRef, setFloatingRef } = useFloatingPosition({
    matchTriggerWidth: true,
  });

  const toggleOpen = () => {
    if (disabled) return;
    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        const index = options.findIndex((opt) => opt.value === selectedValue);
        setActiveIndex(index >= 0 ? index : 0);
      }
      return next;
    });
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    buttonRef.current?.focus();
  };

  const { onKeyDown } = useKeyboardNavigation({
    activeIndex,
    setActiveIndex,
    items: options,
    isOpen,
    onOpen: toggleOpen,
    onSelect: () => {
      if (
        activeIndex >= 0 &&
        options[activeIndex] &&
        !options[activeIndex].disabled
      ) {
        handleSelect(options[activeIndex].value);
      }
    },
    onClose: () => setIsOpen(false),
  });

  useOutsideClick([buttonRef, listRef], () => setIsOpen(false), isOpen);

  const triggerRef = (el: HTMLButtonElement | null) => {
    buttonRef.current = el;
    setRef(el);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && (
        <label id={labelId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <SelectTrigger
        id={id}
        name={name}
        isOpen={isOpen}
        disabled={disabled}
        hasLabel={!!label}
        labelId={labelId}
        listboxId={listboxId}
        activeIndex={activeIndex}
        ariaLabel={!label ? selectedOption?.label || placeholder : undefined}
        error={error}
        displayText={selectedOption?.label ?? placeholder}
        buttonRef={triggerRef}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
      />
      <SelectDropdown
        isOpen={isOpen}
        listboxId={listboxId}
        labelId={labelId}
        hasLabel={!!label}
        style={floatingStyles}
        options={options}
        selectedValue={selectedValue}
        activeIndex={activeIndex}
        listRef={listRef}
        floatingRef={setFloatingRef}
        onSelect={handleSelect}
        onMouseEnter={setActiveIndex}
      />

      {error && typeof error === 'string' && (
        <span
          id={error ? errorId : undefined}
          className={styles.errorText}
          role='alert'
        >
          {error}
        </span>
      )}
    </div>
  );
};
