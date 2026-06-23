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

  menu: {
    maxHeight: '70%',
    overflow: 'hidden',
    paddingVertical: theme.spacing[2],
    backgroundColor: theme.colors.gray[0],
    borderTopLeftRadius: theme.radius.xl,
    borderTopRightRadius: theme.radius.xl,
  },
});
