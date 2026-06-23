import type { BaseTooltipProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface TooltipProps extends BaseTooltipProps {
  content: ReactNode;
  children: ReactNode;
  maxWidth?: number | string;
  className?: string;
}
