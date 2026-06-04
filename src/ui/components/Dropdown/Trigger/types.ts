export interface DropdownTriggerProps {
  children?: ReactNode;
  isOpen: boolean;
  disabled?: boolean;
  label?: string;
  icon?: ReactNode;
  rotateAngle?: number;
  arrowIcon?: ReactNode;
  onClick?: () => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  'aria-expanded': boolean;
  'aria-haspopup': boolean;
  'aria-controls'?: string;
  'aria-label'?: string;
  className?: string;
}
