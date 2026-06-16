import { forwardRef } from 'react';

import { useControllableState } from '@romanbakurov/virelia-core';
import { Check } from '@romanbakurov/virelia-icons';
import { theme } from '@romanbakurov/virelia-tokens';
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
      style,
      ...props
    },
    ref
  ) => {
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
      <Pressable
        ref={ref}
        onPress={handlePress}
        disabled={disabled}
        accessibilityRole='checkbox'
        accessibilityState={{
          checked: isChecked,
          disabled,
        }}
        accessibilityLabel={typeof label === 'string' ? label : 'Checkbox'}
        style={({ pressed }) => [
          styles.wrapper,
          disabled && styles.disabled,
          pressed && !disabled && styles.disabled,
          style,
        ]}
        {...props}
      >
        <View
          style={[
            styles.box,
            isChecked && styles.boxChecked,
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
    );
  }
);

Checkbox.displayName = 'Checkbox';
