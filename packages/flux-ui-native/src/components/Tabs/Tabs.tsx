import { useMemo, useState } from 'react';

import { Pressable, Text, View } from 'react-native';

import { styles } from './Tabs.styles';
import { TabsProvider, useTabs } from './TabsContext';
import type {
  TabProps,
  TabsListProps,
  TabsPanelProps,
  TabsProps,
} from './types';

function TabsRoot({
  children,
  defaultActiveIndex = 0,
  orientation = 'horizontal',
  appearance = 'pills',
  style,
}: TabsProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);
  const value = useMemo(
    () => ({ activeIndex, appearance, orientation, setActiveIndex }),
    [activeIndex, appearance, orientation]
  );

  return (
    <TabsProvider value={value}>
      <View style={[styles.root, style]}>{children}</View>
    </TabsProvider>
  );
}

function TabsList({ children, style }: TabsListProps) {
  const { orientation } = useTabs();

  return (
    <View
      accessibilityRole='tablist'
      style={[
        styles.list,
        orientation === 'vertical' && styles.listVertical,
        style,
      ]}
    >
      {children}
    </View>
  );
}

function Tab({ index, children, icon, disabled, style, textStyle }: TabProps) {
  const { activeIndex, appearance, setActiveIndex } = useTabs();
  const isActive = activeIndex === index;
  const isUnderline = appearance === 'underline';

  return (
    <Pressable
      disabled={disabled}
      accessibilityRole='tab'
      accessibilityState={{ selected: isActive, disabled }}
      onPress={() => setActiveIndex(index)}
      style={[
        styles.tab,
        isActive && styles.tabActive,
        isUnderline && styles.tabUnderline,
        isUnderline && isActive && styles.tabUnderlineActive,
        disabled && styles.tabDisabled,
        style,
      ]}
    >
      {icon}
      <Text
        style={[styles.tabText, isActive && styles.tabTextActive, textStyle]}
      >
        {children}
      </Text>
    </Pressable>
  );
}

function TabsPanel({ index, children, style }: TabsPanelProps) {
  const { activeIndex } = useTabs();

  if (activeIndex !== index) return null;

  return <View style={[styles.panel, style]}>{children}</View>;
}

export const Tabs = Object.assign(TabsRoot, {
  List: TabsList,
  Tab,
  Panel: TabsPanel,
});

export { Tab, TabsList, TabsPanel };
