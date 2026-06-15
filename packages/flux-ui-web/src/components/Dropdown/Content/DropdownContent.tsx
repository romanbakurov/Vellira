import { forwardRef } from 'react';

import { cn } from '@utils/cn';
import { Portal } from '@utils/Portal';

import type { DropdownContentProps } from './types';

import styles from './DropdownContent.module.scss';

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
