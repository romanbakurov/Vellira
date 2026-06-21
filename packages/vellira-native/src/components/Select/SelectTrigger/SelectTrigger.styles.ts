import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  trigger: {
    minHeight: 46,
    width: '100%',
    minWidth: 0,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[200],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
  },

  triggerOpen: {
    borderColor: theme.colors.primary,
  },

  triggerError: {
    borderColor: theme.colors.error,
  },

  triggerDisabled: {
    backgroundColor: theme.colors.gray[55],
    opacity: 0.6,
  },

  text: {
    flex: 1,
    minWidth: 0,
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  textDisabled: {
    color: theme.colors.gray[500],
  },

  placeholder: {
    color: theme.colors.gray[500],
  },

  icon: {
    width: 16,
    height: 16,
    marginLeft: theme.spacing[2],
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconOpen: {
    transform: [{ rotate: '180deg' }],
  },
});
