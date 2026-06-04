import { cn } from '@utils/cn';
import styles from './DropdownTrigger.module.scss';
import DefaultArrowIcon from '@/assets/icons/ChevronDown.svg?react';
import type { DropdownTriggerProps } from './types';
import { forwardRef, type CSSProperties } from 'react';

export const DropdownTrigger = forwardRef<
  HTMLButtonElement,
  DropdownTriggerProps
>(
  (
    {
      children,
      isOpen,
      disabled,
      onClick,
      onKeyDown,
      label,
      icon,
      arrowIcon,
      rotateAngle = 90,
      ...ariaProps
    },
    ref
  ) => {
    // const hasText = typeof children === 'string' && children.trim().length > 0;
    const hasIcon = Boolean(icon);
    const hasContent = Boolean(children);

    const isOnlyIcon = hasIcon && !hasContent;
    const showArrow = hasContent;
    const arrow = arrowIcon ?? <DefaultArrowIcon />;
    const ariaLabel = isOnlyIcon ? (label ?? 'Open menu') : undefined;

    return (
      <button
        ref={ref}
        type='button'
        disabled={disabled}
        aria-disabled={disabled}
        onClick={onClick}
        onKeyDown={onKeyDown}
        className={cn(styles.button, {
          [styles.disabled]: disabled,
          [styles.iconOnly]: isOnlyIcon,
        })}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        aria-haspopup='menu'
        style={
          {
            '--dropdown-rotate-angle': `${rotateAngle}deg`,
          } as CSSProperties
        }
        {...ariaProps}
      >
        {hasIcon && (
          <span aria-hidden='true' className={styles.iconLeft}>
            {icon}
          </span>
        )}

        {children}

        {showArrow && (
          <span
            aria-hidden='true'
            className={cn(styles.arrow, {
              [styles.open]: isOpen,
            })}
          >
            {arrow}
          </span>
        )}
      </button>
    );
  }
);

DropdownTrigger.displayName = 'DropdownTrigger';
