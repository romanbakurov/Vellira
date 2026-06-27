import { darkTheme as theme } from '@romanbakurov/vellira-tokens';
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

  box: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: theme.components.checkbox.default.border,
    borderRadius: theme.tokens.radius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.components.checkbox.default.bg,
  },

  boxChecked: {
    backgroundColor: theme.components.checkbox.checked.default.bg,
    borderColor: theme.components.checkbox.checked.default.border,
  },

  boxDisabled: {
    backgroundColor: theme.components.checkbox.disabled.bg,
    borderColor: theme.components.checkbox.disabled.border,
  },

  boxError: {
    borderColor: theme.semantic.status.error.strong,
  },

  label: {
    fontFamily: theme.tokens.typography.family.regular,
    fontSize: theme.tokens.typography.size.md,
    color: theme.components.checkbox.default.fg,
  },

  labelDisabled: {
    color: theme.components.checkbox.disabled.fg,
  },

  container: {
    gap: 4,
  },

  errorText: {
    color: theme.semantic.status.error.fg,
    fontSize: theme.tokens.typography.size.sm,
  },
});
