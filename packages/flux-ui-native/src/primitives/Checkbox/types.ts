import type { ReactNode } from 'react';
import type { ViewStyle } from 'react-native';

import type { BaseCheckboxProps } from '@romanbakurov/flux-ui-types';

export interface CheckboxProps extends BaseCheckboxProps {
  label?: string;
  style?: ViewStyle;
  children?: ReactNode;
}
