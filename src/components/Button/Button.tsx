import styles from './Button.module.scss'
import { cn } from '@/utils/cn';

export interface ButtonProps {
    title: string;
    color: 'red' | 'violet' | 'blue';
    size?: 'small' | 'medium' | 'large' ;
    disabled?: boolean;
    onClick?: () => void;
}

export const Button = ({
                           title,
                           color,
                           size = 'medium',
                           disabled = false,
                           onClick,
} : ButtonProps) => {
    return (
        <button className={cn(
            styles.button,
            styles[`button_color_${color}`],
            styles[`button_${size}`]
        )}
                disabled={disabled}
                onClick={onClick}
        >
            {title}
        </button>
    )
}