import type { BaseTabsPanelProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface TabsPanelProps extends BaseTabsPanelProps {
  children?: ReactNode;
  className?: string;
}
