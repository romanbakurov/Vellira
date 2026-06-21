import { forwardRef } from 'react';

import { TextInput } from 'react-native';

import { FormField } from '../../patterns/FormField';

import { placeholderTextColor, styles } from './Input.styles';
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
  search: 'web-search',
};

const autoCapitalizeByInputType: Record<
  NonNullable<InputProps['type']>,
  NonNullable<InputProps['autoCapitalize']>
> = {
  text: 'sentences',
  email: 'none',
  password: 'none',
  number: 'none',
  tel: 'none',
  url: 'none',
  search: 'none',
};

const autoCorrectByInputType: Record<
  NonNullable<InputProps['type']>,
  boolean
> = {
  text: true,
  email: false,
  password: false,
  number: false,
  tel: false,
  url: false,
  search: false,
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
      disabled = false,
      required = false,
      type = 'text',
      containerStyle,
      inputStyle,
      keyboardType,
      secureTextEntry,
      autoCapitalize,
      autoCorrect,
      accessibilityLabel,
      accessibilityHint,
      ...props
    },
    ref
  ) => {
    const isPassword = type === 'password';

    return (
      <FormField
        label={label}
        error={error}
        required={required}
        disabled={disabled}
        style={containerStyle}
      >
        <TextInput
          {...props}
          ref={ref}
          value={value}
          editable={!disabled}
          placeholder={placeholder}
          keyboardType={keyboardType ?? keyboardTypeByInputType[type]}
          secureTextEntry={secureTextEntry ?? isPassword}
          autoCapitalize={autoCapitalize ?? autoCapitalizeByInputType[type]}
          autoCorrect={autoCorrect ?? autoCorrectByInputType[type]}
          onChangeText={onChange}
          placeholderTextColor={placeholderTextColor}
          accessibilityLabel={accessibilityLabel ?? label}
          accessibilityHint={accessibilityHint}
          accessibilityState={{ disabled }}
          style={[
            styles.input,
            styles[size],
            error && styles.error,
            disabled && styles.disabled,
            inputStyle,
          ]}
        />
      </FormField>
    );
  }
);

Input.displayName = 'Input';
