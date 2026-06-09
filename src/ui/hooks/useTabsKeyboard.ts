import { useCallback, KeyboardEvent } from 'react';

type TabsParams = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  tabRefs: React.MutableRefObject<(HTMLButtonElement | null)[]>;
  orientation: 'horizontal' | 'vertical';
};

export const useTabsKeyboard = ({
  activeIndex,
  setActiveIndex,
  tabRefs,
  orientation = 'horizontal',
}: TabsParams) => {
  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      const getNextEnabledIndex = (current: number, direction: 1 | -1) => {
        const total = tabRefs.current.length;
        if (!total) return current;
        let index = current;

        for (let i = 0; i < total; i++) {
          index = (index + direction + total) % total;

          const tab = tabRefs.current[index];

          if (tab && !tab.disabled) {
            return index;
          }
        }

        return current;
      };

      const getFirstEnabledIndex = () => {
        return tabRefs.current.findIndex((tab) => tab && !tab.disabled);
      };

      const getLastEnabledIndex = () => {
        for (let i = tabRefs.current.length - 1; i >= 0; i--) {
          const tab = tabRefs.current[i];

          if (tab && !tab.disabled) {
            return i;
          }
        }

        return activeIndex;
      };

      let nextIndex = activeIndex;

      switch (e.key) {
        // Горизонтальная навигация
        case 'ArrowLeft':
          if (orientation === 'horizontal') {
            e.preventDefault();
            nextIndex = getNextEnabledIndex(activeIndex, -1);
          }
          break;

        case 'ArrowRight':
          if (orientation === 'horizontal') {
            e.preventDefault();
            nextIndex = getNextEnabledIndex(activeIndex, 1);
          }
          break;

        // Vertical navigation
        case 'ArrowUp':
          if (orientation === 'vertical') {
            e.preventDefault();
            nextIndex = getNextEnabledIndex(activeIndex, -1);
          }
          break;

        case 'ArrowDown':
          if (orientation === 'vertical') {
            e.preventDefault();
            nextIndex = getNextEnabledIndex(activeIndex, 1);
          }
          break;

        // Home / End
        case 'Home':
          e.preventDefault();
          nextIndex = getFirstEnabledIndex();
          break;

        case 'End':
          e.preventDefault();
          nextIndex = getLastEnabledIndex();
          break;

        default:
          return;
      }

      if (nextIndex !== activeIndex) {
        setActiveIndex(nextIndex);
      }
    },
    [activeIndex, orientation, setActiveIndex, tabRefs]
  );

  return { onKeyDown };
};
