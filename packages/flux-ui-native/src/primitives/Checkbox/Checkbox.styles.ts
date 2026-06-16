import { theme } from '@romanbakurov/flux-ui-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.5,
  },
  boxDisabled: {
    backgroundColor: theme.colors.gray[100],
    borderColor: theme.colors.gray[500],
  },
  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    borderRadius: theme.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxChecked: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  label: {
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    color: theme.colors.gray[900],
  },
  labelDisabled: {
    color: theme.colors.gray[500],
  },
});
