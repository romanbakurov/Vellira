import type { BaseCheckboxProps } from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

export interface CheckboxProps extends BaseCheckboxProps {
  label?: string;
  style?: ViewStyle;
  children?: ReactNode;
}
