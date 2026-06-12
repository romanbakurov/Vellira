import type { KeyboardEvent, MouseEvent, ReactNode } from 'react';

export interface TabProps {
  index: number;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement> | null) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLButtonElement> | null) => void;
}
