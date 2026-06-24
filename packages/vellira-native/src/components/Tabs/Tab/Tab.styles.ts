import { theme } from '@romanbakurov/vellira-tokens';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    borderRadius: theme.radius.md,
    flexDirection: 'row',
    gap: theme.spacing[2],
    justifyContent: 'center',
    minHeight: 38,
    paddingHorizontal: theme.spacing[3],
    paddingVertical: theme.spacing[2],
  },

  tabVertical: {
    flex: 0,
    width: '100%',
    justifyContent: 'flex-start',
  },

  tabActive: {
    backgroundColor: 'transparent',
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

  tabTextPillsActive: {
    color: theme.colors.gray[0],
  },

  tabPillsActive: {
    backgroundColor: theme.colors.primary,
  },

  tabDefaultActive: {
    backgroundColor: 'transparent',
  },

  tabIcon: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  tabIconActive: {
    color: theme.colors.primary,
  },

  tabIconPillsActive: {
    color: theme.colors.gray[0],
  },
});
