import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  groupLabel: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[2],
    color: theme.colors.gray[600],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.xs,
    lineHeight: theme.typography.lineHeight.sm,
    textTransform: 'uppercase',
  },
});
