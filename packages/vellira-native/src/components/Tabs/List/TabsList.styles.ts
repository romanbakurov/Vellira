import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    width: '100%',
    gap: theme.spacing[2],
  },

  listPills: {
    backgroundColor: theme.colors.gray[55],
    borderRadius: theme.radius.lg,
    padding: theme.spacing[1],
  },

  listVertical: {
    alignSelf: 'flex-start',
    width: 110,
    flexDirection: 'column',
  },
});
