import { useState } from 'react';

import { Pressable, Text, View } from 'react-native';

import { styles } from './Dropdown.styles';
import type { DropdownItem, DropdownProps } from './types';

const isGroup = (
  item: DropdownItem
): item is Extract<DropdownItem, { type: 'group' }> => item.type === 'group';

const isSeparator = (
  item: DropdownItem
): item is Extract<DropdownItem, { type: 'separator' }> =>
  item.type === 'separator';

export function Dropdown({
  label = 'Menu',
  trigger,
  items,
  onSelect,
  disabled,
  style,
  triggerStyle,
  itemStyle,
  textStyle,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={[styles.root, style]}>
      <Pressable
        disabled={disabled}
        accessibilityRole='button'
        accessibilityState={{ expanded: isOpen, disabled }}
        onPress={() => setIsOpen((current) => !current)}
        style={[styles.trigger, disabled && styles.itemDisabled, triggerStyle]}
      >
        {trigger ?? <Text style={styles.triggerText}>{label}</Text>}
        {!trigger && (
          <Text style={styles.triggerText}>{isOpen ? 'up' : 'down'}</Text>
        )}
      </Pressable>

      {isOpen && (
        <View style={styles.menu}>
          {items.map((item, index) => {
            if (isGroup(item)) {
              return (
                <Text
                  key={`group-${item.label}-${index}`}
                  style={styles.groupLabel}
                >
                  {item.label}
                </Text>
              );
            }

            if (isSeparator(item)) {
              return (
                <View key={`separator-${index}`} style={styles.separator} />
              );
            }

            return (
              <Pressable
                key={item.value}
                disabled={item.disabled}
                accessibilityRole='button'
                onPress={() => {
                  onSelect?.(item.value);
                  setIsOpen(false);
                }}
                style={({ pressed }) => [
                  styles.item,
                  pressed && styles.itemPressed,
                  item.disabled && styles.itemDisabled,
                  itemStyle,
                ]}
              >
                {item.icon}
                <Text
                  numberOfLines={item.textWrap === 'wrap' ? undefined : 1}
                  style={[
                    styles.itemText,
                    item.danger && styles.dangerText,
                    textStyle,
                  ]}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      )}
    </View>
  );
}
