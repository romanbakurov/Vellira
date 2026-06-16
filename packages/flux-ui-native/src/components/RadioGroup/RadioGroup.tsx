import { useControllableState } from '@romanbakurov/flux-ui-core';
import { Pressable, Text, View } from 'react-native';

import { FormField } from '../../patterns/FormField';

import { styles } from './RadioGroup.styles';
import type { RadioGroupProps } from './types';

export function RadioGroup({
  label,
  value,
  defaultValue,
  onChange,
  options,
  required,
  disabled,
  error,
  orientation = 'vertical',
  style,
  optionStyle,
  labelStyle,
}: RadioGroupProps) {
  const [selectedValue, setSelectedValue] = useControllableState({
    value,
    defaultValue,
    onChange,
  });

  return (
    <FormField
      label={label}
      error={error}
      required={required}
      disabled={disabled}
    >
      <View
        accessibilityRole='radiogroup'
        style={[
          styles.group,
          orientation === 'horizontal' && styles.horizontal,
          style,
        ]}
      >
        {options.map((option) => {
          const isSelected = selectedValue === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <Pressable
              key={option.value}
              disabled={isDisabled}
              accessibilityRole='radio'
              accessibilityState={{ checked: isSelected, disabled: isDisabled }}
              onPress={() => setSelectedValue(option.value)}
              style={[
                styles.option,
                isDisabled && styles.optionDisabled,
                optionStyle,
              ]}
            >
              <View style={[styles.radio, isDisabled && styles.radioDisabled]}>
                {isSelected && <View style={styles.dot} />}
              </View>
              <Text style={[styles.label, labelStyle]}>{option.label}</Text>
            </Pressable>
          );
        })}
      </View>
    </FormField>
  );
}
