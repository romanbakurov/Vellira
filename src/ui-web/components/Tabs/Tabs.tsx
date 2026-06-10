import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@utils/cn';

import { useTabsKeyboard } from '@web/hooks/useTabsKeyboard';

import styles from './Tabs.module.scss';
import type { TabsContextValue } from './TabsContext';
import { TabsContext } from './TabsContext';
import type { TabsProps } from './types';

export const Tabs = ({
  children,
  defaultActiveIndex = 0,
  orientation = 'horizontal',
  appearance = 'default',
  className = '',
}: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const registerTab = useCallback(
    (index: number, el: HTMLButtonElement | null) => {
      tabRefs.current[index] = el;
    },
    []
  );

  const { onKeyDown } = useTabsKeyboard({
    activeIndex,
    setActiveIndex,
    tabRefs,
    orientation,
  });

  useEffect(() => {
    tabRefs.current[activeIndex]?.focus();
  }, [activeIndex]);

  const contextValue: TabsContextValue = {
    activeIndex,
    setActiveIndex,
    orientation,
    appearance,

    registerTab,
    onTabKeyDown: onKeyDown,
  };

  return (
    <TabsContext.Provider value={contextValue}>
      <div
        className={cn(
          styles.tabs,
          orientation === 'vertical' && styles.vertical,
          className
        )}
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = 'Tabs';

export default Tabs;
