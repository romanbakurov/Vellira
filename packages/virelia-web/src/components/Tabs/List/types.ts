import type { BaseTabsListProps } from '@romanbakurov/virelia-types';
import type { ReactNode } from 'react';

export interface TabsListProps extends BaseTabsListProps {
  children?: ReactNode;
  className?: string;
}
