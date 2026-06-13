export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'danger';

export interface BaseButtonProps {
  variant?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
}
