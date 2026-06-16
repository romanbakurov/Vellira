import type { BaseFormFieldProps } from '@romanbakurov/flux-ui-types';
import type { ReactNode } from 'react';

export interface FormFieldProps extends BaseFormFieldProps {
  children: ReactNode;
}
