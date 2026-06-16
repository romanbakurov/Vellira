import { theme } from '@romanbakurov/virelia-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    alignSelf: 'flex-start',
  },
  bubble: {
    backgroundColor: theme.colors.gray[900],
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing[2],
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  },
  text: {
    color: theme.colors.gray[0],
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.xs,
    lineHeight: theme.typography.lineHeight.sm,
  },
});
