import { useMemo, useState } from 'react';

import { Picker } from '@react-native-picker/picker';
import { useControllableState } from '@romanbakurov/vellira-core';
import { theme } from '@romanbakurov/vellira-tokens';
import { Modal, Pressable, Text, View } from 'react-native';

import { FormField } from '../../patterns/FormField';

import { SelectTrigger } from './SelectTrigger/SelectTrigger';
import { styles } from './Select.styles';
import type { SelectProps } from './types';

export function Select({
  label,
  description,
  value,
  defaultValue,
  onChange,
  options,
  placeholder = 'Select...',
  required = false,
  disabled = false,
  error,
  style,
  triggerStyle,
  textStyle,
  pickerStyle,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [selectedValue, setSelectedValue] = useControllableState({
    value,
    defaultValue: defaultValue ?? '',
    onChange,
  });

  const [draftValue, setDraftValue] = useState(selectedValue);

  const selectedOption = useMemo(
    () => options.find((option) => option.value === selectedValue),
    [options, selectedValue]
  );

  const openPicker = () => {
    if (disabled) return;

    setDraftValue(selectedValue);
    setIsOpen(true);
  };

  const closePicker = () => {
    setIsOpen(false);
  };

  const handleValueChange = (nextValue: string) => {
    const nextOption = options.find((option) => option.value === nextValue);

    if (!nextOption || nextOption.disabled) {
      return;
    }

    setDraftValue(nextValue);
  };

  const confirmPicker = () => {
    setSelectedValue(draftValue);
    setIsOpen(false);
  };

  return (
    <FormField
      label={label}
      description={description}
      error={error}
      required={required}
      disabled={disabled}
      style={style}
    >
      <SelectTrigger
        displayText={selectedOption?.label ?? placeholder}
        isPlaceholder={!selectedOption}
        isOpen={isOpen}
        disabled={disabled}
        hasError={!!error}
        accessibilityLabel={label}
        triggerStyle={triggerStyle}
        textStyle={textStyle}
        onPress={openPicker}
      />

      <Modal
        transparent
        visible={isOpen}
        animationType='slide'
        onRequestClose={closePicker}
      >
        <View style={styles.modalRoot}>
          <Pressable style={styles.backdrop} onPress={closePicker} />

          <View style={styles.sheet}>
            <View style={styles.toolbar}>
              <Pressable onPress={closePicker} hitSlop={8}>
                <Text style={styles.cancelText}>Cancel</Text>
              </Pressable>

              <Text style={styles.title}>{label}</Text>

              <Pressable onPress={confirmPicker} hitSlop={8}>
                <Text style={styles.doneText}>Done</Text>
              </Pressable>
            </View>

            <Picker
              selectedValue={draftValue}
              onValueChange={handleValueChange}
              enabled={!disabled}
              style={[styles.picker, pickerStyle]}
            >
              <Picker.Item
                label={placeholder}
                value=''
                enabled={false}
                color={theme.colors.gray[400]}
              />

              {options.map((option) => (
                <Picker.Item
                  key={option.value}
                  label={
                    option.disabled
                      ? `${option.label} - unavailable`
                      : option.label
                  }
                  value={option.value}
                  enabled={!option.disabled}
                  color={
                    option.disabled
                      ? theme.colors.gray[400]
                      : theme.colors.gray[900]
                  }
                />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
    </FormField>
  );
}

Select.displayName = 'Select';
