import type {
  BaseRadioGroupProps,
  BaseRadioOption,
  Orientation,
} from '@romanbakurov/vellira-types';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface RadioOption extends BaseRadioOption {
  label: string;
}

export interface RadioGroupProps extends Omit<BaseRadioGroupProps, 'options'> {
  label?: string;
  options: RadioOption[];
  error?: string;
  orientation?: Orientation;
  style?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}
