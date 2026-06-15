import type React from 'react';

export interface SelectTriggerProps {
  id?: string;
  errorId?: string;
  isOpen: boolean;
  disabled?: boolean;
  required?: boolean;
  hasLabel: boolean;
  labelId: string;
  listboxId: string;
  activeIndex: number;
  ariaLabel?: string;
  error?: boolean | string;
  displayText: string;
  buttonRef: React.Ref<HTMLButtonElement>;
  onClick: () => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
}
