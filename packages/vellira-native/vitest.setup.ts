globalThis.IS_REACT_ACT_ENVIRONMENT = true;

import React from 'react';

import { Text } from 'react-native';
import { vi } from 'vitest';

vi.mock('@romanbakurov/vellira-icons', () => ({
  ChevronDown: () => React.createElement(Text, null, '⌄'),
  Check: () => React.createElement(Text, null, '✓'),
}));

vi.mock('@react-native-picker/picker', async () => {
  return await import('./src/test-utils/mocks/react-native-picker');
});
