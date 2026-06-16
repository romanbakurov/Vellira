import type { BaseTabsPanelProps } from '@romanbakurov/virelia-types';
import type { ReactNode } from 'react';

export interface TabsPanelProps extends BaseTabsPanelProps {
  children?: ReactNode;
  className?: string;
}
