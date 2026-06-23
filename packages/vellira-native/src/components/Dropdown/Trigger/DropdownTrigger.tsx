import { useEffect, useRef } from 'react';

import { ChevronDown } from '@romanbakurov/vellira-icons';
import { Animated, Pressable, Text, View } from 'react-native';

import { styles } from './DropdownTrigger.styles';
import type { DropdownTriggerProps } from './types';

export function DropdownTrigger({
  label,
  trigger,
  icon,
  arrowIcon,
  showArrow = true,
  disabled = false,
  isOpen,
  triggerStyle,
  onPress,
}: DropdownTriggerProps) {
  const hasIcon = Boolean(icon);
  const isIconOnly = !trigger && hasIcon && !showArrow;
  const arrow = arrowIcon ?? <ChevronDown width={16} height={16} />;
  const rotateAnim = useRef(new Animated.Value(isOpen ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(rotateAnim, {
      toValue: isOpen ? 1 : 0,
      duration: 180,
      useNativeDriver: true,
    }).start();
  }, [isOpen, rotateAnim]);

  const arrowRotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <Pressable
      disabled={disabled}
      accessibilityRole='button'
      accessibilityLabel={label}
      accessibilityState={{ expanded: isOpen, disabled }}
      onPress={onPress}
      style={[
        styles.trigger,
        disabled && styles.triggerDisabled,
        isIconOnly && styles.iconOnly,
        triggerStyle,
      ]}
    >
      {hasIcon && <View style={styles.icon}>{icon}</View>}

      {!isIconOnly &&
        (trigger ? (
          trigger
        ) : (
          <Text numberOfLines={1} style={styles.triggerText}>
            {label}
          </Text>
        ))}

      {showArrow && (
        <Animated.View
          style={[styles.arrow, { transform: [{ rotate: arrowRotate }] }]}
        >
          {arrow}
        </Animated.View>
      )}
    </Pressable>
  );
}

DropdownTrigger.displayName = 'DropdownTrigger';
