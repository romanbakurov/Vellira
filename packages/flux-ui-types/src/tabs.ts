import type { Orientation } from './common';

export type TabsAppearance = 'default' | 'underline' | 'pills';

export interface BaseTabsProps {
  defaultActiveIndex?: number;
  orientation: Orientation;
  appearance: TabsAppearance;
  className?: string;
}

export interface BaseTabsListProps {
  className?: string;
}

export interface BaseTabsPanelProps {
  index: number;
  className?: string;
}

export interface BaseTabProps {
  index: number;
  className?: string;
  disabled?: boolean;
}
