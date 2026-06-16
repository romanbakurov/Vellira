import type {
  BaseTooltipContentProps,
  BaseTooltipProps,
} from '@romanbakurov/virelia-types';
import type React from 'react';
import type { ReactNode, RefObject } from 'react';

export interface TooltipProps extends BaseTooltipProps {
  content: ReactNode;
  children: ReactNode;
  maxWidth?: number | string;
  className: string;
}

export interface TooltipContentProps extends BaseTooltipContentProps {
  content: ReactNode;
  placement: string;
  arrowX?: number | null;
  arrowY?: number | null;
  className?: string;
  id?: string;
  role?: string;
  arrowRef: RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}
