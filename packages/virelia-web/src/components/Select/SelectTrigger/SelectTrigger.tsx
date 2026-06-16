import React from 'react';

import { ChevronDown } from '@romanbakurov/virelia-icons';
import { cn } from '@utils/cn';

import type { SelectTriggerProps } from './types';

import styles from './SelectedTigger.module.scss';

export const SelectTrigger = ({
  id,
  errorId,
  isOpen,
  disabled,
  required,
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
      ref={buttonRef}
      type='button'
      role='combobox'
      disabled={disabled}
      aria-disabled={disabled}
      aria-required={required}
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
