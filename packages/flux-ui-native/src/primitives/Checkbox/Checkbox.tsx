import { useControllableState } from '@romanbakurov/flux-ui-core';
import { Pressable, Text, View } from 'react-native';

import { styles } from './Checkbox.styles';
import type { CheckboxProps } from './types';

export const Checkbox = ({
  label,
  checked,
  defaultChecked = false,
  disabled = false,
  onCheckedChange,
}: CheckboxProps) => {
  const [isChecked, setIsChecked] = useControllableState({
    value: checked,
    defaultValue: defaultChecked,
    onChange: onCheckedChange,
  });

  const handlePress = () => {
    if (disabled) return;

    setIsChecked(!isChecked);
  };

  return (
    <Pressable
      onPress={handlePress}
      disabled={disabled}
      style={styles.wrapper}
      accessibilityRole='checkbox'
      accessibilityState={{
        checked: isChecked,
        disabled,
      }}
    >
      <View
        style={[
          styles.checkbox,
          disabled && styles.checkboxDisabled,
          isChecked && styles.checkboxChecked,
        ]}
      />

      {label && <Text style={styles.label}>{label}</Text>}
    </Pressable>
  );
};
