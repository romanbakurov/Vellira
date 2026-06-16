import { useCallback, useId, useMemo, useRef, useState } from 'react';

import { useFloatingPosition } from '@hooks/useFloatingPosition';
import { useOutsideClick } from '@hooks/useOutsideClick';
import {
  useControllableState,
  useKeyboardNavigation,
} from '@romanbakurov/flux-ui-core';
import { cn } from '@utils/cn';

import { SelectDropdown } from './SelectDropdown/SelectDropdown';
import { SelectTrigger } from './SelectTrigger/SelectTrigger';
import type { SelectProps } from './types';

import styles from './Select.module.scss';

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
  const triggerId = id ?? `${listboxId}-trigger`;
  const errorId = `${triggerId}-error`;

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLUListElement | null>(null);

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
        const selectedIndex = options.findIndex(
          (opt) => opt.value === selectedValue && !opt.disabled
        );
        const firstEnabledIndex = options.findIndex((opt) => !opt.disabled);
        setActiveIndex(selectedIndex >= 0 ? selectedIndex : firstEnabledIndex);
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

  const triggerRef = useCallback(
    (node: HTMLButtonElement | null) => {
      setRef(node);
      buttonRef.current = node;
    },
    [setRef]
  );

  return (
    <div className={cn(styles.wrapper, className)}>
      {label && (
        <label id={labelId} htmlFor={triggerId} className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}

      <SelectTrigger
        id={triggerId}
        errorId={typeof error === 'string' ? errorId : undefined}
        isOpen={isOpen}
        disabled={disabled}
        required={required}
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
      {name && (
        <input
          type='hidden'
          name={name}
          value={selectedValue}
          disabled={disabled}
        />
      )}
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
        <span id={errorId} className={styles.errorText} role='alert'>
          {error}
        </span>
      )}
    </div>
  );
};
