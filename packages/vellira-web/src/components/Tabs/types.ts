import type { BaseTabsProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface TabsProps extends BaseTabsProps {
  children?: ReactNode;
  className?: string;
}
