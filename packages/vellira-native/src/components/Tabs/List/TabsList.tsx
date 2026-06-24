import { View } from 'react-native';

import { useTabs } from '../TabsContext';

import { styles } from './TabsList.styles';
import type { TabsListProps } from './types';

export const TabsList = ({ children, style }: TabsListProps) => {
  const { orientation, appearance } = useTabs();

  return (
    <View
      accessibilityRole='tablist'
      style={[
        styles.list,
        appearance === 'pills' && styles.listPills,
        orientation === 'vertical' && styles.listVertical,
        style,
      ]}
    >
      {children}
    </View>
  );
};

TabsList.displayName = 'TabsList';
