import { theme } from '@romanbakurov/virelia-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: theme.spacing[2],
  },
  trigger: {
    alignItems: 'center',
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[200],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 46,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },
  triggerOpen: {
    borderColor: theme.colors.primary,
  },
  triggerError: {
    borderColor: theme.colors.error,
  },
  disabled: {
    backgroundColor: theme.colors.gray[55],
    opacity: 0.6,
  },
  text: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
  },
  placeholder: {
    color: theme.colors.gray[500],
  },
  chevron: {
    color: theme.colors.gray[600],
    fontSize: theme.typography.size.sm,
  },
  dropdown: {
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[150],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  option: {
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },
  optionActive: {
    backgroundColor: theme.colors['gray-blue'][50],
  },
  optionDisabled: {
    opacity: 0.45,
  },
  optionText: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
  },
});
