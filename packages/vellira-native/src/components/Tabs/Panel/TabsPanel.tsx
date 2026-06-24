import { View } from 'react-native';

import { useTabs } from '../TabsContext';

import { styles } from './TabsPanel.styles';
import type { TabsPanelProps } from './types';

export const TabsPanel = ({ index, children, style }: TabsPanelProps) => {
  const { activeIndex } = useTabs();

  if (activeIndex !== index) return null;

  return <View style={[styles.panel, style]}>{children}</View>;
};

TabsPanel.displayName = 'TabsPanel';
