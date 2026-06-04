import type { DropdownProps } from './type';
import { cn } from '@utils/cn';
import { useState, useRef, useId } from 'react';
import { useOutsideClick } from '@hooks/useOutsideClick';
import { useFloatingPosition } from '@hooks/useFloatingPosition';
import { useKeyboardNavigation } from '@hooks/useKeyboardNavigation';
import styles from './Dropdown.module.scss';
import { DropdownTrigger } from './Trigger/DropdownTrigger';
import { DropdownContent } from './Content/DropdownContent';
import { DropdownItem } from './Item/DropdownItem';
import { DropdownGroup } from './Group/DropdownGroup';
import { DropdownSeparator } from './Separator/DropdownSeparator';
import { isMenuItem, isGroup, isSeparator } from './types';

export const Dropdown = ({
  label,
  icon,
  trigger,
  items,
  onSelect,
  className,
  disabled,
  rotateAngle = 90,
  placement,
  matchTriggerWidth,
  textWrap,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);
  const menuId = useId();

  const { floatingStyles, setRef, setFloatingRef } = useFloatingPosition({
    placement,
    matchTriggerWidth,
  });

  const getFirstEnabledIndex = () =>
    items.findIndex((item) => isMenuItem(item) && !item.disabled);

  const toggleOpen = () => {
    if (disabled) return;

    setIsOpen((prev) => {
      const next = !prev;
      if (next) {
        setActiveIndex(getFirstEnabledIndex());
      } else {
        setActiveIndex(-1);
      }
      return next;
    });
  };

  const close = () => {
    setIsOpen(false);
    setActiveIndex(-1);
  };

  const { onKeyDown } = useKeyboardNavigation({
    activeIndex,
    setActiveIndex,
    items,
    isOpen,
    onOpen: toggleOpen,
    onSelect: () => {
      const item = items[activeIndex];
      if (!item || !isMenuItem(item) || item.disabled) return;

      onSelect?.(item.value);
      close();
    },
    onClose: close,
  });

  useOutsideClick([buttonRef, menuRef], () => close(), isOpen);

  const triggerRef = (el: HTMLButtonElement | null) => {
    buttonRef.current = el;
    setRef(el);
  };

  const menuRefCallback = (el: HTMLUListElement | null) => {
    menuRef.current = el;
    setFloatingRef(el);
  };

  return (
    <div className={cn(styles.wrapper, className)}>
      <DropdownTrigger
        ref={triggerRef}
        isOpen={isOpen}
        disabled={disabled}
        icon={icon}
        label={label}
        rotateAngle={rotateAngle}
        onClick={toggleOpen}
        onKeyDown={onKeyDown}
        aria-expanded={isOpen}
        aria-haspopup='menu'
        {...(isOpen && { 'aria-controls': menuId })}
      >
        {trigger}
      </DropdownTrigger>

      {isOpen && (
        <DropdownContent
          ref={menuRefCallback}
          floatingStyles={floatingStyles}
          menuId={menuId}
          role='menu'
        >
          {items.map((item, index) => {
            if (isGroup(item)) {
              return (
                <DropdownGroup key={`group-${item.label}`} label={item.label} />
              );
            }

            if (isSeparator(item)) {
              return <DropdownSeparator key={`separator-${index}`} />;
            }

            if (isMenuItem(item)) {
              return (
                <DropdownItem
                  key={item.value}
                  {...item}
                  active={activeIndex === index}
                  textWrap={item.textWrap || textWrap}
                  onClick={() => {
                    if (!item.disabled) {
                      onSelect?.(item.value);
                      close();
                    }
                  }}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              );
            }
          })}
        </DropdownContent>
      )}
    </div>
  );
};
