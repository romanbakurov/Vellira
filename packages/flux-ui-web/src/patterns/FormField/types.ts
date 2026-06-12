import type { ReactNode } from 'react';

export interface FormFieldProps {
  id?: string;
  label?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  children: ReactNode;
}
