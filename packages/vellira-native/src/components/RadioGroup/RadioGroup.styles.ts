import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  group: {
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    gap: theme.spacing[3],
  },

  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  option: {
    minWidth: 0,
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[2],
  },

  optionDisabled: {
    opacity: 0.6,
  },

  radio: {
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: theme.colors.gray[300],
    borderRadius: 999,
    borderWidth: 2,
    backgroundColor: theme.colors.gray[0],
  },

  radioSelected: {
    borderColor: theme.colors.primary,
  },

  radioDisabled: {
    borderColor: theme.colors.gray[400],
    backgroundColor: theme.colors.gray[55],
  },

  dot: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 999,
  },

  dotDisabled: {
    backgroundColor: theme.colors.gray[500],
  },

  label: {
    minWidth: 0,
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
    lineHeight: theme.typography.lineHeight.md,
  },

  labelDisabled: {
    color: theme.colors.gray[500],
  },
});
