import type {
  BaseSelectOption,
  BaseSelectProps,
} from '@romanbakurov/virelia-types';
import type { StyleProp, TextStyle, ViewStyle } from 'react-native';

export interface SelectOption extends BaseSelectOption {
  label: string;
}

export interface SelectProps extends Omit<BaseSelectProps, 'options'> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  style?: StyleProp<ViewStyle>;
  triggerStyle?: StyleProp<ViewStyle>;
  optionStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
