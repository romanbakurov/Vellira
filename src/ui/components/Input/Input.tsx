import styles from './Input.module.scss';
import { cn } from '@utils/cn';
import { FormField } from '../FormField';
import type { InputProps } from './types';
import {
  forwardRef,
  useState,
  useRef,
  useEffect,
  useCallback,
  useId,
} from 'react';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id: prodId,
      label,
      placeholder,
      value,
      onChange,
      size = 'md',
      error,
      disabled,
      required,
      className,
      autoComplete,
      type = 'text',
    },
    ref
  ) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const generatedId = useId();
    const id = prodId ?? generatedId;

    const checkOverflow = useCallback(() => {
      if (inputRef.current) {
        const isOverflowing =
          inputRef.current.scrollWidth > inputRef.current.clientWidth;
        setIsOverflowing(isOverflowing);
      }
    }, []);

    useEffect(() => {
      checkOverflow();

      const resizeObserver = new ResizeObserver(checkOverflow);
      if (inputRef.current) {
        resizeObserver.observe(inputRef.current);
      }

      window.addEventListener('resize', checkOverflow);

      return () => {
        resizeObserver.disconnect();
        window.removeEventListener('resize', checkOverflow);
      };
    }, [checkOverflow]);

    useEffect(() => {
      checkOverflow();
    }, [value, checkOverflow]);

    const setRefs = useCallback(
      (element: HTMLInputElement | null) => {
        inputRef.current = element;
        if (typeof ref === 'function') {
          ref(element);
        } else if (ref) {
          ref.current = element;
        }
      },
      [ref]
    );

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
      },
      [onChange]
    );

    const handleMouseEnter = useCallback(() => {
      if (isOverflowing && value) {
        setShowTooltip(true);
      }
    }, [isOverflowing, value]);

    const handleMouseLeave = useCallback(() => {
      setShowTooltip(false);
    }, []);

    return (
      <FormField
        id={id}
        label={label}
        error={error}
        required={required}
        disabled={disabled}
      >
        <div className={styles.inputWrapper}>
          <input
            ref={setRefs}
            id={id}
            type={type}
            autoComplete={autoComplete}
            className={cn(
              styles.input,
              styles[size],
              {
                [styles.error]: !!error,
                [styles.withEllipsis]: true,
              },
              className
            )}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            aria-invalid={!!error}
            aria-describedby={error ? `${id}-error` : undefined}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
          {showTooltip && isOverflowing && value && (
            <div
              className={styles.tooltip}
              role='tooltip'
              aria-hidden={!showTooltip}
            >
              {value}
            </div>
          )}
        </div>
      </FormField>
    );
  }
);

Input.displayName = 'Input';
