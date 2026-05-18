import { useCallback, useEffect, useState, useRef } from 'react';

type Position = {
  top: number;
  left: number;
  width: number;
};

//Позиционирование dropdown / tooltip / popover
export const useFloatingPosition = () => {
  const [position, setPosition] = useState<Position>({
    top: 0,
    left: 0,
    width: 0,
  });

  const refRef = useRef<HTMLElement | null>(null);

  const updatePosition = useCallback(() => {
    if (!refRef.current) return;

    const rect = refRef.current.getBoundingClientRect();

    setPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, []);

  const setRef = useCallback(
    (ref: HTMLElement | null) => {
      refRef.current = ref;
      updatePosition();
    },
    [updatePosition]
  );

  useEffect(() => {
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);

    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [updatePosition]);

  return { position, setRef, updatePosition };
};
