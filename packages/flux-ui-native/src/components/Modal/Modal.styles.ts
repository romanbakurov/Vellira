import { theme } from '@romanbakurov/flux-ui-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    flex: 1,
    justifyContent: 'center',
    padding: theme.spacing[5],
  },
  content: {
    backgroundColor: theme.colors.gray[0],
    borderRadius: theme.radius.xl,
    gap: theme.spacing[4],
    maxWidth: 420,
    padding: theme.spacing[5],
    width: '100%',
  },
  header: {
    gap: theme.spacing[1],
  },
  title: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.semibold,
    fontSize: theme.typography.size.lg,
    lineHeight: theme.typography.lineHeight.md,
  },
  body: {
    gap: theme.spacing[3],
  },
  footer: {
    flexDirection: 'row',
    gap: theme.spacing[3],
    justifyContent: 'flex-end',
  },
});
