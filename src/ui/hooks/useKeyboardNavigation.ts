import { useCallback } from 'react';

type Params = {
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  itemsCount: number;
  isOpen: boolean;
  onOpen: () => void;
  onSelect?: () => void;
  onClose?: () => void;
};

//ArrowUp / ArrowDown / Enter / Escape логика

export const useKeyboardNavigation = ({
  activeIndex,
  setActiveIndex,
  itemsCount,
  isOpen,
  onOpen,
  onSelect,
  onClose,
}: Params) => {
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
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
          setActiveIndex(activeIndex < itemsCount - 1 ? activeIndex + 1 : 0);
          break;

        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex(activeIndex > 0 ? activeIndex - 1 : itemsCount - 1);
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
          setActiveIndex(0);
          break;

        case 'End':
          e.preventDefault();
          setActiveIndex(itemsCount - 1);
          break;

        case 'Tab':
          onClose?.();
          break;
      }
    },
    [activeIndex, setActiveIndex, itemsCount, isOpen, onOpen, onSelect, onClose]
  );
  return { onKeyDown };
};
