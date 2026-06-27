import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: theme.tokens.radius.md,
  },

  fullWidth: {
    alignSelf: 'stretch',
  },

  text: {
    fontFamily: theme.tokens.typography.family.regular,
    fontWeight: theme.tokens.typography.weight.medium,

    // Кнопка сама задает цвет текста через props,
    // поэтому это значение используется как fallback.
    color: theme.components.button.primary.default.fg,
  },

  disabled: {
    opacity: 0.5,
  },

  pressed: {
    opacity: 0.8,
  },
});
