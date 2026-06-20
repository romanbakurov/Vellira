import type { BaseCheckboxProps } from '@romanbakurov/vellira-types';

export interface CheckboxProps extends BaseCheckboxProps {
  label?: string;
  className?: string;
  error?: boolean;
  textError?: string;
}
