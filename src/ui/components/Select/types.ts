type SelectOption = {
  label: string;
  value: string;
  disabled?: boolean;
};

export interface SelectProps {
  // Accessibility
  label?: string;
  id?: string;
  name?: string;

  // Controlled / Uncontrolled
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;

  // Options
  options: SelectOption[];
  placeholder?: string;

  // State
  required?: boolean;
  disabled?: boolean;
  error?: string;

  // Styling
  className?: string;
}
