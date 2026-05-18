import { useCallback, useState, useEffect, useRef } from 'react';
import type { UseSelectProps } from './types';

export const useSelect = ({
  value,
  onChange,
  options,
  disabled,
}: UseSelectProps) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const controlRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  const listboxId = useRef(
    `select-listbox-${Math.random().toString(36).slice(2)}`
  ).current;

  const selectedIndex = options.findIndex((option) => option.value === value);

  const highlightOption = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Update dropDown position
  const updatePosition = useCallback(() => {
    if (!controlRef.current) return;

    const rect = controlRef.current.getBoundingClientRect();

    setDropdownPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
      width: rect.width,
    });
  }, []);

  //open
  const openSelect = useCallback(() => {
    if (disabled) return;

    setOpen(true);
    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);

    updatePosition();
  }, [disabled, selectedIndex, updatePosition]);

  //close
  const closeSelect = useCallback(() => {
    setOpen(false);
    controlRef.current?.focus();
  }, []);

  //choosing option
  const selectOption = useCallback(
    (optionValue: string) => {
      onChange(optionValue);
      closeSelect();
    },
    [onChange, closeSelect]
  );

  const handleControlClick = useCallback(() => {
    if (disabled) return;

    if (open) {
      closeSelect();
    } else {
      openSelect();
    }
  }, [disabled, open, openSelect, closeSelect]);

  //Keyboard Event
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!open) {
        if (
          e.key === ' ' ||
          e.key === 'Enter' ||
          e.key === 'ArrowDown' ||
          e.key === 'ArrowUp'
        ) {
          e.preventDefault();
          openSelect();
        }
        return;
      }

      //when open
      switch (e.key) {
        case 'Escape':
          e.preventDefault();
          closeSelect();
          break;

        case 'ArrowDown':
          e.preventDefault();
          setActiveIndex((prev) => (prev < options.length - 1 ? prev + 1 : 0));
          break;

        case 'ArrowUp':
          e.preventDefault();
          setActiveIndex((prev) => (prev > 0 ? prev - 1 : options.length - 1));
          break;

        case 'Enter':
        case ' ':
          e.preventDefault();
          if (activeIndex >= 0 && activeIndex < options.length) {
            selectOption(options[activeIndex].value);
          }
          break;

        case 'Home':
          e.preventDefault();
          setActiveIndex(0);
          break;

        case 'End':
          e.preventDefault();
          setActiveIndex(options.length - 1);
          break;

        case 'Tab':
          closeSelect();
          break;
      }
    },
    [open, activeIndex, options, openSelect, closeSelect, selectOption]
  );

  // outside click
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;

      if (
        controlRef.current &&
        !controlRef.current.contains(target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(target)
      ) {
        closeSelect();
      }
    };

    document.addEventListener('pointerdown', handleClickOutside);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    };
  }, [open, closeSelect]);

  // scroll/resize
  useEffect(() => {
    if (!open) return;

    const handleUpdate = () => updatePosition();

    window.addEventListener('scroll', handleUpdate, true);
    window.addEventListener('resize', handleUpdate);

    return () => {
      window.removeEventListener('scroll', handleUpdate, true);
      window.removeEventListener('resize', handleUpdate);
    };
  }, [open, updatePosition]);

  // scroll active option
  useEffect(() => {
    if (open && activeIndex >= 0) {
      const activeElement = optionRefs.current[activeIndex];
      activeElement?.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [open, activeIndex]);

  return {
    open,
    activeIndex,
    dropdownPosition,
    listboxId,
    controlRef,
    dropdownRef,
    optionRefs,
    openSelect,
    closeSelect,
    selectOption,
    handleKeyDown,
    updatePosition,
    handleControlClick,
    highlightOption,
  };
};
