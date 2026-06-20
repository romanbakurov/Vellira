import type { BaseCheckboxProps } from '@romanbakurov/vellira-types';
import type { StyleProp, ViewStyle } from 'react-native';

export interface CheckboxProps extends BaseCheckboxProps {
  label?: string;
  style?: StyleProp<ViewStyle>;
  error?: string;
}
