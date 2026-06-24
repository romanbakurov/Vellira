import { cloneElement, isValidElement } from 'react';

import { theme } from '@romanbakurov/vellira-tokens';
import type { ReactElement } from 'react';
import { Pressable, Text, View } from 'react-native';

import { useTabs } from '../TabsContext';

import { styles } from './Tab.styles';
import type { TabProps } from './types';

export const Tab = ({
  index,
  children,
  icon,
  disabled,
  style,
  textStyle,
}: TabProps) => {
  const { activeIndex, appearance, orientation, setActiveIndex } = useTabs();
  const isActive = activeIndex === index;
  const isPills = appearance === 'pills';
  const isUnderline = appearance === 'underline';
  const isDefault = appearance === 'default';

  const iconColor =
    isPills && isActive
      ? theme.colors.gray[0]
      : isActive
        ? theme.colors.primary
        : theme.colors.gray[700];

  const renderedIcon = isValidElement(icon)
    ? cloneElement(icon as ReactElement<{ color?: string }>, {
        color: iconColor,
      })
    : icon;

  return (
    <Pressable
      disabled={disabled}
      accessibilityRole='tab'
      accessibilityState={{ selected: isActive, disabled }}
      onPress={() => setActiveIndex(index)}
      style={[
        styles.tab,
        orientation === 'vertical' && styles.tabVertical,
        isPills && isActive && styles.tabPillsActive,
        isUnderline && styles.tabUnderline,
        isUnderline && isActive && styles.tabUnderlineActive,
        isDefault && isActive && styles.tabDefaultActive,
        disabled && styles.tabDisabled,
        style,
      ]}
    >
      {icon != null && <View style={styles.tabIcon}>{renderedIcon}</View>}

      {children != null && (
        <Text
          style={[
            styles.tabText,
            isPills && isActive && styles.tabTextPillsActive,
            !isPills && isActive && styles.tabTextActive,
            textStyle,
          ]}
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
};

Tab.displayName = 'Tab';
