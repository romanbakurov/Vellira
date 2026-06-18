import { useMemo, useState } from 'react';

import { useControllableState } from '@romanbakurov/vellira-core';
import { Pressable, Text, View } from 'react-native';

import { FormField } from '../../patterns/FormField';

import { styles } from './Select.styles';
import type { SelectProps } from './types';

export function Select({
  label,
  value,
  defaultValue,
  onChange,
  options,
  placeholder = 'Select...',
  required,
  disabled,
  error,
  style,
  triggerStyle,
  optionStyle,
  textStyle,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useControllableState({
    value,
    defaultValue: defaultValue ?? '',
    onChange,
  });

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  const handleSelect = (nextValue: string) => {
    setSelectedValue(nextValue);
    setIsOpen(false);
  };

  return (
    <FormField
      label={label}
      error={error}
      required={required}
      disabled={disabled}
    >
      <View style={[styles.root, style]}>
        <Pressable
          disabled={disabled}
          accessibilityRole='button'
          accessibilityState={{ expanded: isOpen, disabled }}
          onPress={() => setIsOpen((current) => !current)}
          style={[
            styles.trigger,
            isOpen && styles.triggerOpen,
            error && styles.triggerError,
            disabled && styles.disabled,
            triggerStyle,
          ]}
        >
          <Text
            style={[
              styles.text,
              !selectedOption && styles.placeholder,
              textStyle,
            ]}
          >
            {selectedOption?.label ?? placeholder}
          </Text>
          <Text style={styles.chevron}>{isOpen ? 'up' : 'down'}</Text>
        </Pressable>

        {isOpen && (
          <View style={styles.dropdown}>
            {options.map((option) => {
              const isSelected = option.value === selectedValue;

              return (
                <Pressable
                  key={option.value}
                  disabled={option.disabled}
                  accessibilityRole='button'
                  accessibilityState={{
                    selected: isSelected,
                    disabled: option.disabled,
                  }}
                  onPress={() => handleSelect(option.value)}
                  style={[
                    styles.option,
                    isSelected && styles.optionActive,
                    option.disabled && styles.optionDisabled,
                    optionStyle,
                  ]}
                >
                  <Text style={[styles.optionText, textStyle]}>
                    {option.label}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        )}
      </View>
    </FormField>
  );
}
