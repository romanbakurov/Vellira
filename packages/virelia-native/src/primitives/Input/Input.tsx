import { forwardRef } from 'react';

import { TextInput } from 'react-native';

import { FormField } from '../../patterns/FormField';

import { styles } from './Input.styles';
import type { InputProps, NativeInputKeyboardType } from './types';

const keyboardTypeByInputType: Record<
  NonNullable<InputProps['type']>,
  NativeInputKeyboardType
> = {
  text: 'default',
  email: 'email-address',
  password: 'default',
  number: 'numeric',
  tel: 'phone-pad',
  url: 'url',
};

export const Input = forwardRef<TextInput, InputProps>(
  (
    {
      label,
      value,
      onChange,
      placeholder,
      size = 'md',
      error,
      disabled,
      required,
      type = 'text',
      containerStyle,
      inputStyle,
      keyboardType,
      secureTextEntry,
      ...props
    },
    ref
  ) => {
    return (
      <FormField
        label={label}
        error={error}
        required={required}
        disabled={disabled}
        style={containerStyle}
      >
        <TextInput
          ref={ref}
          value={value}
          editable={!disabled}
          placeholder={placeholder}
          keyboardType={keyboardType ?? keyboardTypeByInputType[type]}
          secureTextEntry={secureTextEntry ?? type === 'password'}
          onChangeText={onChange}
          placeholderTextColor='#999'
          style={[
            styles.input,
            styles[size],
            error && styles.error,
            disabled && styles.disabled,
            inputStyle,
          ]}
          {...props}
        />
      </FormField>
    );
  }
);

Input.displayName = 'Input';
