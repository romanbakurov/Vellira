import React from 'react';

export interface TabsProps {
  children?: React.ReactNode;
  defaultActiveIndex?: number;
  orientation: 'horizontal' | 'vertical';
  appearance: 'default' | 'underline' | 'pills';
  className?: string;
}
