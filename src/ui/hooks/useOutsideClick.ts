import { useEffect } from 'react';

//Закрывать dropdown/modal при клике вне элемента
export const useOutsideClick = (
  ref: React.RefObject<HTMLElement | null>,
  handler: () => void,
  enabled = true
) => {
  useEffect(() => {
    if (!enabled) return;

    const listener = (e: MouseEvent) => {
      const target = e.target as Node;

      if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };

    // pointerdown for touch + mouse
    document.addEventListener('pointerdown', listener);

    return () => document.removeEventListener('pointerdown', listener);
  }, [ref, handler, enabled]);
};
