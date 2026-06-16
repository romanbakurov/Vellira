import type {
  BaseTooltipContentProps,
  BaseTooltipProps,
} from '@romanbakurov/flux-ui-types';
import type React from 'react';
import type { ReactNode, RefObject } from 'react';

export interface TooltipProps extends BaseTooltipProps {
  content: ReactNode;
  children: ReactNode;
}

export interface TooltipContentProps extends BaseTooltipContentProps {
  content: ReactNode;
  arrowRef: RefObject<HTMLDivElement | null>;
  style?: React.CSSProperties;
}
