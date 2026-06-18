import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    borderColor: theme.colors.gray[200],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    backgroundColor: theme.colors.gray[0],
  },
  sm: {
    minHeight: 36,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  },
  md: {
    minHeight: 44,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },
  lg: {
    minHeight: 52,
    paddingHorizontal: theme.spacing[5],
    paddingVertical: theme.spacing[4],
  },
  error: {
    borderColor: theme.colors.error,
  },
  disabled: {
    backgroundColor: theme.colors.gray[55],
    color: theme.colors.gray[500],
  },
});
