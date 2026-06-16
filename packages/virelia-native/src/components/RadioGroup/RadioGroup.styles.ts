import { theme } from '@romanbakurov/virelia-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  group: {
    gap: theme.spacing[3],
  },
  horizontal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[2],
  },
  optionDisabled: {
    opacity: 0.5,
  },
  radio: {
    alignItems: 'center',
    borderColor: theme.colors.primary,
    borderRadius: 999,
    borderWidth: 2,
    height: 22,
    justifyContent: 'center',
    width: 22,
  },
  radioDisabled: {
    borderColor: theme.colors.gray[500],
  },
  dot: {
    backgroundColor: theme.colors.primary,
    borderRadius: 999,
    height: 10,
    width: 10,
  },
  label: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
  },
});
