import { cloneElement } from 'react';

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

const backgroundMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  danger: theme.colors.error,
};

const contentColorMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: theme.colors.gray[0],
  secondary: theme.colors.gray[0],
  danger: theme.colors.gray[0],
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

  const iconOnly = !children && Boolean(leftIcon || rightIcon);

  if (
    process.env.NODE_ENV !== 'production' &&
    iconOnly &&
    !accessibilityLabel
  ) {
    console.warn(
      'Vellira Button: icon-only buttons must provide an accessibilityLabel.'
    );
  }

  const contentColor = contentColorMap[variant];
  const resolvedIconSize = iconSize ?? config.iconSize;

  const renderIcon = (icon: ButtonIconElement) => {
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
          backgroundColor: backgroundMap[variant],
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
              color: contentColor,
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
