import { StyleSheet } from 'react-native';

import { theme } from '@romanbakurov/flux-ui-tokens/native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: theme.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    marginLeft: 8,
  },

  checkboxChecked: {
    backgroundColor: theme.colors.gray[0],
  },

  checkboxDisabled: {
    opacity: 0.5,
  },
});
