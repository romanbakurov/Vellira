import { theme } from '@romanbakurov/flux-ui-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: theme.spacing[4],
  },
  list: {
    backgroundColor: theme.colors.gray[55],
    borderRadius: theme.radius.lg,
    flexDirection: 'row',
    padding: theme.spacing[1],
  },
  listVertical: {
    alignSelf: 'flex-start',
    flexDirection: 'column',
  },
  tab: {
    alignItems: 'center',
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    gap: theme.spacing[2],
    justifyContent: 'center',
    minHeight: 38,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  },
  tabActive: {
    backgroundColor: theme.colors.gray[0],
  },
  tabUnderline: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 2,
    borderRadius: 0,
  },
  tabUnderlineActive: {
    borderBottomColor: theme.colors.primary,
  },
  tabDisabled: {
    opacity: 0.45,
  },
  tabText: {
    color: theme.colors.gray[700],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.sm,
  },
  tabTextActive: {
    color: theme.colors.primary,
  },
  panel: {
    backgroundColor: theme.colors.gray[0],
  },
});
