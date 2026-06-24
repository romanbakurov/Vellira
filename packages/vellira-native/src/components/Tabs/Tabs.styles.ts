import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: theme.spacing[4],
    width: '100%',
  },

  rootVertical: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: theme.spacing[4],
  },

  listVertical: {
    flexDirection: 'column',
    width: 140,
    flexShrink: 0,
  },

  tabVertical: {
    flex: 0,
    width: '100%',
    justifyContent: 'flex-start',
  },

  panel: {
    backgroundColor: theme.colors.gray[0],
    flex: 1,
    flexShrink: 1,
    minWidth: 0,
  },
});
