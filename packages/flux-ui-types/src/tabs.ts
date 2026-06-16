import type { Orientation } from './common';

export type TabsAppearance = 'default' | 'underline' | 'pills';

export interface BaseTabsProps {
  defaultActiveIndex?: number;
  orientation: Orientation;
}

export type BaseTabsListProps = Record<never, never>;

export interface BaseTabsPanelProps {
  index: number;
}

export interface BaseTabProps {
  index: number;
  disabled?: boolean;
}
