import { cloneElement, isValidElement } from 'react';

import { theme } from '@romanbakurov/vellira-tokens';
import { Pressable, Text } from 'react-native';

import { styles } from './Button.styles';
import type { ButtonIconElement, ButtonProps } from './types';

const sizeMap: Record<
  NonNullable<ButtonProps['size']>,
  {
    px: number;
    py: number;
    fontSize: number;
    iconSize: number;
  }
> = {
  sm: {
    px: theme.spacing[3],
    py: theme.spacing[2],
    fontSize: 14,
    iconSize: 16,
  },

  md: {
    px: theme.spacing[4],
    py: theme.spacing[3],
    fontSize: 16,
    iconSize: 18,
  },

  lg: {
    px: theme.spacing[5],
    py: theme.spacing[4],
    fontSize: 18,
    iconSize: 20,
  },
};

const variantMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  danger: theme.colors.error,
};

export function Button({
  children,
  disabled = false,
  onPress,
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  fullWidth = false,
  style,
  accessibilityLabel,
  iconSize,
}: ButtonProps) {
  const config = sizeMap[size];

  const iconOnly = !children && (leftIcon || rightIcon);
  const contentColor = theme.colors.gray[0];
  const resolvedIconSize = iconSize ?? config.iconSize;

  const renderIcon = (icon: ButtonIconElement) => {
    if (!isValidElement(icon)) return icon;

    return cloneElement(icon, {
      color: contentColor,
      size: resolvedIconSize,
    });
  };

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      accessibilityRole='button'
      accessibilityState={{ disabled }}
      accessibilityLabel={
        accessibilityLabel ??
        (typeof children === 'string' ? children : undefined)
      }
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: variantMap[variant],
          paddingHorizontal: iconOnly ? config.py : config.px,
          paddingVertical: config.py,
        },
        fullWidth && styles.fullWidth,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      {leftIcon && renderIcon(leftIcon)}
      {children && (
        <Text
          style={[
            styles.text,
            {
              fontSize: config.fontSize,
            },
          ]}
        >
          {children}
        </Text>
      )}
      {rightIcon && renderIcon(rightIcon)}
    </Pressable>
  );
}
