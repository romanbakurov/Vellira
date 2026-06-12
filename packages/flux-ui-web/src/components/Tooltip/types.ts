import type React from 'react';
import type { ReactNode, RefObject } from 'react';

export interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  disabled?: boolean;
  delay?: { open: number; close: number };
  maxWidth?: number | string;
  className: string;
}

export interface TooltipContentProps {
  content: ReactNode;
  placement: string;
  arrowRef: RefObject<HTMLDivElement>;
  arrowX?: number | null;
  arrowY?: number | null;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
  role?: string;
}
