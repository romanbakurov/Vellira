import { Pressable, Text } from 'react-native';

import { styles } from './DropdownItem.styles';
import type { DropdownItemProps } from './types';

export function DropdownItem({
  label,
  value,
  icon,
  danger = false,
  disabled = false,
  textWrap = 'truncate',
  itemStyle,
  textStyle,
  onSelect,
}: DropdownItemProps) {
  return (
    <Pressable
      disabled={disabled}
      accessibilityRole='menuitem'
      accessibilityLabel={label}
      accessibilityState={{ disabled }}
      onPress={() => {
        if (disabled) return;

        onSelect(value);
      }}
      style={({ pressed }) => [
        styles.item,
        pressed && styles.itemPressed,
        disabled && styles.itemDisabled,
        danger && styles.itemDanger,
        itemStyle,
      ]}
    >
      {icon}

      <Text
        numberOfLines={textWrap === 'wrap' ? undefined : 1}
        style={[
          styles.itemText,
          danger && styles.dangerText,
          disabled && styles.itemTextDisabled,
          textStyle,
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

DropdownItem.displayName = 'DropdownItem';
