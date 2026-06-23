import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  item: {
    minHeight: 48,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[3],
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },

  itemPressed: {
    backgroundColor: theme.colors.gray[55],
  },

  itemDisabled: {
    opacity: 0.45,
  },

  itemDanger: {
    backgroundColor: theme.colors['error-bg'],
  },

  itemText: {
    flex: 1,
    minWidth: 0,
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  itemTextDisabled: {
    color: theme.colors.gray[500],
  },

  dangerText: {
    color: theme.colors.error,
  },
});
