import { useCallback } from 'react';
import type { KeyboardEvent } from 'react';

type NavigableItem = {
  disabled?: boolean;
};

type Params = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  items: NavigableItem[];
  isOpen: boolean;
  onOpen: () => void;
  onSelect?: () => void;
  onClose?: () => void;
};

//ArrowUp / ArrowDown / Enter / Escape logic

export const useKeyboardNavigation = ({
  activeIndex,
  setActiveIndex,
  items,
  isOpen,
  onOpen,
  onSelect,
  onClose,
}: Params) => {
  const getNextEnabledIndex = useCallback(
    (current: number, direction: 1 | -1) => {
      if (!items.length) return current;

      let index = current;

      for (let i = 0; i < items.length; i++) {
        index = (index + direction + items.length) % items.length;

        if (!items[index]?.disabled) {
          return index;
        }
      }

      return current;
    },
    [items]
  );

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (!isOpen) {
        if (
          e.key === ' ' ||
          e.key === 'Enter' ||
          e.key === 'ArrowDown' ||
          e.key === 'ArrowUp'
        ) {
          e.preventDefault();
          onOpen();
        }
        return;
      }

      //when open
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex(getNextEnabledIndex(activeIndex, 1));
          break;

        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(getNextEnabledIndex(activeIndex, -1));
          break;

        case 'Enter':
        case ' ':
          e.preventDefault();
          onSelect?.();
          break;

        case 'Escape':
          e.preventDefault();
          onClose?.();
          break;

        case 'Home':
          e.preventDefault();
          setActiveIndex(items.findIndex((item) => !item.disabled));
          break;

        case 'End':
          e.preventDefault();
          for (let i = items.length - 1; i >= 0; i--) {
            if (!items[i].disabled) {
              setActiveIndex(i);
              break;
            }
          }
          break;

        case 'Tab':
          onClose?.();
          break;
      }
    },
    [
      activeIndex,
      items,
      isOpen,
      onOpen,
      onSelect,
      onClose,
      setActiveIndex,
      getNextEnabledIndex,
    ]
  );
  return { onKeyDown };
};
