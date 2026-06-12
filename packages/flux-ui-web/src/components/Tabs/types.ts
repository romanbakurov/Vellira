import type { ReactNode } from 'react';

export interface TabsProps {
  children?: ReactNode;
  defaultActiveIndex?: number;
  orientation: 'horizontal' | 'vertical';
  appearance: 'default' | 'underline' | 'pills';
  className?: string;
}
