import React from 'react';

import ChevronDown from '@assets/icons/ChevronDown.svg?react';

import { cn } from '@utils/cn';

import styles from './SelectedTigger.module.scss';
import type { SelectTriggerProps } from './types';

export const SelectTrigger = ({
  id,
  errorId,
  name,
  isOpen,
  disabled,
  hasLabel,
  labelId,
  listboxId,
  activeIndex,
  ariaLabel,
  error,
  displayText,
  buttonRef,
  onClick,
  onKeyDown,
}: SelectTriggerProps) => {
  return (
    <button
      id={id}
      name={name}
      ref={buttonRef}
      type='button'
      role='combobox'
      disabled={disabled}
      aria-disabled={disabled}
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      aria-labelledby={hasLabel ? labelId : undefined}
      aria-label={ariaLabel}
      aria-controls={listboxId}
      aria-describedby={errorId}
      aria-activedescendant={
        isOpen && activeIndex >= 0
          ? `${listboxId}-option-${activeIndex}`
          : undefined
      }
      className={cn(styles.control, {
        [styles.error]: !!error,
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
      onKeyDown={onKeyDown}
    >
      <span>{displayText}</span>
      <span
        className={cn(styles.arrow, {
          [styles.open]: isOpen,
        })}
      >
        <ChevronDown />
      </span>
    </button>
  );
};
