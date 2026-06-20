import { forwardRef } from 'react';

import { useControllableState } from '@romanbakurov/vellira-core';
import { Check } from '@romanbakurov/vellira-icons';
import { theme } from '@romanbakurov/vellira-tokens';
import { Pressable, Text, View } from 'react-native';

import { styles } from './Checkbox.styles';
import type { CheckboxProps } from './types';

export const Checkbox = forwardRef<View, CheckboxProps>(
  (
    {
      label,
      checked,
      defaultChecked = false,
      disabled = false,
      onCheckedChange,
      error,
      style,
      ...props
    },
    ref
  ) => {
    const hasError = Boolean(error);

    const [isChecked, setIsChecked] = useControllableState({
      value: checked,
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
    });

    const handlePress = () => {
      if (disabled) return;
      setIsChecked(!isChecked);
    };

    const checkColor = disabled ? theme.colors.gray[700] : theme.colors.gray[0];

    return (
      <View style={styles.container}>
        <Pressable
          ref={ref}
          onPress={handlePress}
          disabled={disabled}
          accessibilityRole='checkbox'
          accessibilityState={{
            checked: isChecked,
            disabled,
            invalid: hasError,
          }}
          accessibilityLabel={label ?? 'Checkbox'}
          style={({ pressed }) => [
            styles.wrapper,
            disabled && styles.disabled,
            pressed && !disabled && styles.pressed,
            style,
          ]}
          {...props}
        >
          <View
            style={[
              styles.box,
              isChecked && styles.boxChecked,
              hasError && styles.boxError,
              disabled && styles.boxDisabled,
            ]}
          >
            {isChecked && <Check size={14} color={checkColor} />}
          </View>

          {label && (
            <Text style={[styles.label, disabled && styles.labelDisabled]}>
              {label}
            </Text>
          )}
        </Pressable>

        {hasError && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);

Checkbox.displayName = 'Checkbox';
