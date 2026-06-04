import { cn } from '@utils/cn';
import styles from './DropdownItem.module.scss';
import type { DropdownItemProps } from './types';

export const DropdownItem = ({
  children,
  label,
  icon,
  danger,
  disabled,
  active,
  onClick,
  onMouseEnter,
  shortcut,
  textWrap = 'truncate',
  className,
}: DropdownItemProps) => {
  const contentText = children || label;

  return (
    <li
      role='menuitem'
      aria-disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={disabled ? undefined : onMouseEnter}
      className={cn(
        styles.item,
        {
          [styles.active]: active,
          [styles.disabled]: disabled,
          [styles.danger]: danger,
        },
        className
      )}
    >
      {icon && (
        <span aria-hidden='true' className={styles.itemIcon}>
          {icon}
        </span>
      )}
      {contentText && (
        <span className={cn(styles.itemText, styles[`itemText--${textWrap}`])}>
          {contentText}
        </span>
      )}
      {shortcut && <span className={styles.itemShortcut}>{shortcut}</span>}
    </li>
  );
};
