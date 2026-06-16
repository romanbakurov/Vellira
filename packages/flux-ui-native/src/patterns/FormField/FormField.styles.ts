import { theme } from '@romanbakurov/flux-ui-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: theme.spacing[2],
  },
  label: {
    color: theme.colors.gray[800],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.sm,
    lineHeight: theme.typography.lineHeight.sm,
  },
  labelDisabled: {
    color: theme.colors.gray[500],
  },
  required: {
    color: theme.colors.error,
  },
  error: {
    color: theme.colors.error,
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.xs,
    lineHeight: theme.typography.lineHeight.sm,
  },
});
