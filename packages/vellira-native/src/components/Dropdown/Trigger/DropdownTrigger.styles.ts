import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  trigger: {
    minHeight: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing[2],
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[200],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
  },

  iconOnly: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: 32,
    minHeight: 32,
  },

  triggerDisabled: {
    opacity: 0.45,
  },

  triggerText: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  arrow: {
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
