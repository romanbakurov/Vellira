import type { BadgeProps } from './types';

import styles from './Badge.module.scss';

export function Badge(_props: BadgeProps) {
  return <div className={styles.badge}>Badge</div>;
}
