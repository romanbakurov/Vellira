import React from 'react';

export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'secondary' | 'delete';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonColor;
  size?: ButtonSize;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}
