import type {
  BaseTabsProps,
  TabsAppearance,
} from '@romanbakurov/virelia-types';
import type { ReactNode } from 'react';

export interface TabsProps extends BaseTabsProps {
  children?: ReactNode;
  appearance?: TabsAppearance;
  className?: string;
}
