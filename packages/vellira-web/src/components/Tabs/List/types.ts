import type { BaseTabsListProps } from '@romanbakurov/vellira-types';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TabsListProps
  extends BaseTabsListProps, Omit<ComponentPropsWithoutRef<'div'>, 'children'> {
  children: ReactNode;
}
