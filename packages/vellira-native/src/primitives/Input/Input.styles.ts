import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const placeholderTextColor = theme.colors.gray[400];

export const styles = StyleSheet.create({
  input: {
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',

    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[200],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
  },

  sm: {
    minHeight: 36,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
    fontSize: theme.typography.size.sm,
  },

  md: {
    minHeight: 44,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    fontSize: theme.typography.size.md,
  },

  lg: {
    minHeight: 52,
    paddingHorizontal: theme.spacing[5],
    paddingVertical: theme.spacing[4],
    fontSize: theme.typography.size.lg,
  },

  error: {
    borderColor: theme.colors.error,
  },

  disabled: {
    color: theme.colors.gray[500],
    backgroundColor: theme.colors.gray[55],
  },
});
