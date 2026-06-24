import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  panel: {
    flex: 1,
    minWidth: 0,
    backgroundColor: theme.colors.gray[0],
    paddingTop: theme.spacing[3],
  },
});
