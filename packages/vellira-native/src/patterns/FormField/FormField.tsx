import { Text, View } from 'react-native';

import { styles } from './FormField.styles';
import type { FormFieldProps } from './types';

export function FormField({
  label,
  error,
  required,
  disabled,
  children,
  style,
  labelStyle,
  errorStyle,
}: FormFieldProps) {
  return (
    <View style={[styles.root, style]}>
      {label && (
        <Text
          style={[styles.label, disabled && styles.labelDisabled, labelStyle]}
        >
          {label}
          {required && <Text style={styles.required}> *</Text>}
        </Text>
      )}

      {children}

      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
}
