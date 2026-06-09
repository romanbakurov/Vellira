import { ReactNode } from 'react';

export interface TabProps {
  index: number;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  icon?: ReactNode;
}
