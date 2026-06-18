import type {
  BaseTabProps,
  BaseTabsPanelProps,
  BaseTabsProps,
  Orientation,
  TabsAppearance,
} from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface TabsProps extends BaseTabsProps {
  children: ReactNode;
  appearance?: TabsAppearance;
  style?: StyleProp<ViewStyle>;
}

export interface TabsListProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface TabsPanelProps extends BaseTabsPanelProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export interface TabProps extends BaseTabProps {
  children: ReactNode;
  icon?: ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export interface TabsContextValue {
  activeIndex: number;
  appearance: TabsAppearance;
  orientation: Orientation;
  setActiveIndex: (index: number) => void;
}
