import styles from './Button.module.scss';
import { cn } from '@/ui/utils/cn';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'delete';

export interface ButtonProps {
  title: string;
  color: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  title,
  color,
  size = 'medium',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[`button_color_${color}`],
        styles[`button_${size}`]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};
