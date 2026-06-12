import type { ReactNode } from 'react';

export interface DropdownContentProps {
  children: ReactNode;
  floatingStyles: React.CSSProperties;
  menuId: string;
  role?: string;
  className?: string;
}
