import type { FloatingPlacement } from './common';

export interface TooltipDelay {
  open: number;
  close: number;
}

export interface BaseTooltipProps {
  placement?: FloatingPlacement;
  disabled?: boolean;
  delay?: TooltipDelay;
  maxWidth?: number | string;
  className: string;
}

export interface BaseTooltipContentProps {
  placement: string;
  arrowX?: number | null;
  arrowY?: number | null;
  className?: string;
  id?: string;
  role?: string;
}
