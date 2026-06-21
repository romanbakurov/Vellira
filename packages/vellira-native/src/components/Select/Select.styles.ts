import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalRoot: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  backdrop: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgb(0 0 0 / 25%)',
  },

  sheet: {
    backgroundColor: theme.colors.gray[0],
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
    overflow: 'hidden',
  },

  toolbar: {
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: theme.spacing[4],
    borderBottomColor: theme.colors.gray[150],
    borderBottomWidth: 1,
  },

  title: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },

  cancelText: {
    color: theme.colors.gray[600],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },

  doneText: {
    color: theme.colors.primary,
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },

  picker: {
    width: '100%',
  },
});
