import styles from './DropdownGroup.module.scss';
import type { DropdownGroupProps } from './types';

export const DropdownGroup = ({ label }: DropdownGroupProps) => {
  return (
    <li role='presentation' className={styles.group}>
      {label}
    </li>
  );
};
