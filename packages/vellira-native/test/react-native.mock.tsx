import React, { forwardRef } from 'react';

type PressableState = { pressed: boolean };

type NativeProps = {
  children?: React.ReactNode;
  style?: unknown;
  disabled?: boolean;
  accessibilityRole?: string;
  accessibilityState?: Record<string, unknown>;
  accessibilityLabel?: string;
  onPress?: () => void;
  onPressIn?: () => void;
  onPressOut?: () => void;
  onLongPress?: () => void;
  onChangeText?: (value: string) => void;
  value?: string;
  editable?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: string;
  testID?: string;
};

const flattenStyle = (style: unknown): React.CSSProperties | undefined => {
  if (!style) return undefined;
  if (Array.isArray(style)) {
    return Object.assign({}, ...style.map(flattenStyle).filter(Boolean));
  }
  if (typeof style === 'object') return style as React.CSSProperties;
  return undefined;
};

const roleFromAccessibility = (role?: string) => {
  if (role === 'button') return 'button';
  if (role === 'checkbox') return 'checkbox';
  if (role === 'radio') return 'radio';
  if (role === 'radiogroup') return 'radiogroup';
  if (role === 'tab') return 'tab';
  if (role === 'tablist') return 'tablist';
  return undefined;
};

const stateProps = (state?: Record<string, unknown>) => ({
  'aria-checked':
    typeof state?.checked === 'boolean' ? String(state.checked) : undefined,
  'aria-disabled':
    typeof state?.disabled === 'boolean' ? String(state.disabled) : undefined,
  'aria-expanded':
    typeof state?.expanded === 'boolean' ? String(state.expanded) : undefined,
  'aria-selected':
    typeof state?.selected === 'boolean' ? String(state.selected) : undefined,
});

export const View = forwardRef<HTMLDivElement, NativeProps>(
  ({ children, style, accessibilityRole, accessibilityState, testID }, ref) => (
    <div
      ref={ref}
      data-testid={testID}
      role={roleFromAccessibility(accessibilityRole)}
      style={flattenStyle(style)}
      {...stateProps(accessibilityState)}
    >
      {children}
    </div>
  )
);
View.displayName = 'View';

export const Text = forwardRef<HTMLSpanElement, NativeProps>(
  ({ children, style, testID }, ref) => (
    <span ref={ref} data-testid={testID} style={flattenStyle(style)}>
      {children}
    </span>
  )
);
Text.displayName = 'Text';

export const Pressable = forwardRef<HTMLButtonElement, NativeProps>(
  (
    {
      children,
      style,
      disabled,
      accessibilityRole,
      accessibilityState,
      accessibilityLabel,
      onPress,
      onPressIn,
      onPressOut,
      onLongPress,
      testID,
    },
    ref
  ) => {
    const resolvedStyle =
      typeof style === 'function'
        ? style({ pressed: false } satisfies PressableState)
        : style;

    return (
      <button
        ref={ref}
        type='button'
        data-testid={testID}
        disabled={disabled}
        aria-label={accessibilityLabel}
        role={roleFromAccessibility(accessibilityRole)}
        style={flattenStyle(resolvedStyle)}
        onClick={onPress}
        onMouseDown={onPressIn}
        onMouseUp={onPressOut}
        onDoubleClick={onLongPress}
        {...stateProps(accessibilityState)}
      >
        {children}
      </button>
    );
  }
);
Pressable.displayName = 'Pressable';

export const TextInput = forwardRef<HTMLInputElement, NativeProps>(
  (
    {
      value,
      placeholder,
      editable = true,
      secureTextEntry,
      keyboardType,
      onChangeText,
      style,
      testID,
    },
    ref
  ) => (
    <input
      ref={ref}
      data-testid={testID}
      value={value ?? ''}
      placeholder={placeholder}
      disabled={!editable}
      type={secureTextEntry ? 'password' : 'text'}
      inputMode={keyboardType === 'numeric' ? 'numeric' : undefined}
      style={flattenStyle(style)}
      onChange={(event) => onChangeText?.(event.currentTarget.value)}
    />
  )
);
TextInput.displayName = 'TextInput';

export const Modal = ({
  visible,
  children,
}: NativeProps & { visible?: boolean }) => {
  if (!visible) return null;
  return <div data-testid='native-modal'>{children}</div>;
};

export const StyleSheet = {
  create<T extends Record<string, unknown>>(styles: T): T {
    return styles;
  },
};
