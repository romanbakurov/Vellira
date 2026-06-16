import { useEffect, useState } from 'react';

import { cn } from '@utils/cn';

import { useTabs } from '../TabsContext';

import type { TabsPanelProps } from './types';

import styles from './TabsPanel.module.scss';

export const TabsPanel = ({
  index,
  children,
  className = '',
}: TabsPanelProps) => {
  const { activeIndex, orientation } = useTabs();
  const [isVisible, setIsVisible] = useState(false);
  const isActive = activeIndex === index;

  useEffect(() => {
    if (isActive) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div
      role='tabpanel'
      id={`tab-panel-${index}`}
      className={cn(
        styles.panel,
        isVisible && styles.visible,
        orientation === 'vertical' && styles.vertical,
        className
      )}
      aria-labelledby={`tab-${index}`}
    >
      {children}
    </div>
  );
};

TabsPanel.displayName = 'TabPanel';
