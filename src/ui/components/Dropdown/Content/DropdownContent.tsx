import styles from './DropdownContent.module.scss';
import { cn } from '@utils/cn';
import { Portal } from '@ui/overlay/Portal';
import type { DropdownContentProps } from './types';
import { forwardRef } from 'react';

export const DropdownContent = forwardRef<
  HTMLUListElement,
  DropdownContentProps
>(({ children, floatingStyles, menuId, className }, ref) => {
  return (
    <Portal>
      <ul
        ref={ref}
        id={menuId}
        role='menu'
        style={floatingStyles}
        className={cn(styles.dropdown, className)}
      >
        {children}
      </ul>
    </Portal>
  );
});

DropdownContent.displayName = 'DropdownContent';
