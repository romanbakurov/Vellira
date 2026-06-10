import { forwardRef } from 'react';
import { cn } from '@utils/cn';

import { Portal } from '@web/primitives/Portal';

import styles from './DropdownContent.module.scss';
import type { DropdownContentProps } from './types';

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
