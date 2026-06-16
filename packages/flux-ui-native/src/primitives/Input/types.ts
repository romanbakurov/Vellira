import type {
  BaseInputProps,
  InputSize,
  InputType,
} from '@romanbakurov/flux-ui-types';
import type { TextInputProps, TextStyle, ViewStyle } from 'react-native';

export type NativeInputKeyboardType = TextInputProps['keyboardType'];

export interface InputProps
  extends
    BaseInputProps,
    Omit<TextInputProps, 'value' | 'onChange' | 'onChangeText' | 'editable'> {
  label: string;
  placeholder?: string;
  size?: InputSize;
  error?: string;
  type?: InputType;
  containerStyle?: ViewStyle;
  inputStyle?: TextStyle;
}
