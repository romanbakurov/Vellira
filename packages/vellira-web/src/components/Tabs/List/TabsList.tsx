import { cn } from '@utils/cn';

import { useTabs } from '../TabsContext';

import type { TabsListProps } from './types';

import styles from './TabsList.module.scss';

export const TabsList = ({ children, className = '' }: TabsListProps) => {
  const { orientation } = useTabs();

  return (
    <div
      role='tablist'
      aria-orientation={orientation}
      className={cn(
        styles.list,
        orientation === 'vertical' && styles.vertical,
        className
      )}
    >
      {children}
    </div>
  );
};

TabsList.displayName = 'TabsList';
