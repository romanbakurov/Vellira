import type { TabsProps } from './types';
import { TabsContext } from './TabsContext';
import type { TabsContextValue } from './TabsContext';
import { useState, useRef, useCallback, useEffect } from 'react';
import styles from './Tabs.module.scss';
import { cn } from '@utils/cn';
import { useTabsKeyboard } from '@hooks/useTabsKeyboard';

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
