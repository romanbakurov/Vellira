import type { BaseTooltipProps } from '@romanbakurov/virelia-types';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface TooltipProps extends BaseTooltipProps {
  content: ReactNode;
  children: ReactNode;
  maxWidth?: number;
  style?: StyleProp<ViewStyle>;
  bubbleStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
