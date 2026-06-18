import type { BaseTabsListProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';

export interface TabsListProps extends BaseTabsListProps {
  children?: ReactNode;
  className?: string;
}
