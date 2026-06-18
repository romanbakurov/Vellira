import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.radius.md,
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 8,
    paddingTop: 8,
  },

  text: {
    fontFamily: theme.typography.family.regular,
    color: theme.colors.gray[0],
    fontWeight: theme.typography.weight.medium,
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    opacity: 0.8,
  },
});
