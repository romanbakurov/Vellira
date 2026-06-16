import { theme } from '@romanbakurov/virelia-tokens';
import { Pressable, Text } from 'react-native';

import { styles } from './Button.styles';
import type { ButtonProps } from './types';

const sizeMap: Record<
  NonNullable<ButtonProps['size']>,
  {
    px: number;
    py: number;
    fontSize: number;
  }
> = {
  sm: {
    px: theme.spacing[3],
    py: theme.spacing[2],
    fontSize: 14,
  },

  md: {
    px: theme.spacing[4],
    py: theme.spacing[3],
    fontSize: 16,
  },

  lg: {
    px: theme.spacing[5],
    py: theme.spacing[4],
    fontSize: 18,
  },
};

const variantMap: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  danger: theme.colors.error,
};

export function Button({
  children,
  disabled,
  onPress,
  variant = 'primary',
  size = 'sm',
}: ButtonProps) {
  const config = sizeMap[size];

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      accessibilityRole='button'
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: variantMap[variant],
          paddingHorizontal: config.px,
          paddingVertical: config.py,
        },

        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
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
    </Pressable>
  );
}
