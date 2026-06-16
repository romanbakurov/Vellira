import type {
  BaseInputProps,
  InputSize,
  InputType,
} from '@romanbakurov/virelia-types';

export type { InputSize, InputType } from '@romanbakurov/virelia-types';

export interface InputProps extends BaseInputProps {
  label: string;
  placeholder?: string;
  size?: InputSize;
  error?: string;
  type?: InputType;
  id?: string;
  className?: string;
  autoComplete?: string;
}
