import type { BaseFormFieldProps } from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface FormFieldProps extends BaseFormFieldProps {
  label?: string;
  error?: string;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
}
