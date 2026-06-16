import { theme } from '@romanbakurov/flux-ui-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  root: {
    gap: theme.spacing[2],
  },
  trigger: {
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[200],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    flexDirection: 'row',
    gap: theme.spacing[2],
    minHeight: 42,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },
  triggerText: {
    color: theme.colors.gray[900],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.md,
  },
  menu: {
    backgroundColor: theme.colors.gray[0],
    borderColor: theme.colors.gray[150],
    borderRadius: theme.radius.lg,
    borderWidth: 1,
    overflow: 'hidden',
  },
  item: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: theme.spacing[3],
    minHeight: 42,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[3],
  },
  itemPressed: {
    backgroundColor: theme.colors.gray[55],
  },
  itemDisabled: {
    opacity: 0.45,
  },
  itemText: {
    color: theme.colors.gray[900],
    flex: 1,
    fontFamily: theme.typography.family.regular,
    fontSize: theme.typography.size.md,
  },
  dangerText: {
    color: theme.colors.error,
  },
  groupLabel: {
    color: theme.colors.gray[600],
    fontFamily: theme.typography.family.medium,
    fontSize: theme.typography.size.xs,
    paddingHorizontal: theme.spacing[4],
    paddingVertical: theme.spacing[2],
    textTransform: 'uppercase',
  },
  separator: {
    backgroundColor: theme.colors.gray[150],
    height: 1,
  },
});
