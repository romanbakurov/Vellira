import type { BaseTabsPanelProps } from '@romanbakurov/vellira-types';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

export interface TabsPanelProps extends BaseTabsPanelProps {
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}
