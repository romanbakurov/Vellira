import { Text } from 'react-native';

import { styles } from './DropdownGroup.styles';
import type { DropdownGroupProps } from './types';

export function DropdownGroup({ label }: DropdownGroupProps) {
  return <Text style={styles.groupLabel}>{label}</Text>;
}

DropdownGroup.displayName = 'DropdownGroup';
