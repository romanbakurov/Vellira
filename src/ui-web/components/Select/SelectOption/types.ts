export type SelectOptionProps = {
  option: { label: string; value: string; disabled?: boolean };
  isSelected: boolean;
  isActive: boolean;
  optionId: string;
  onSelect: (value: string) => void;
  onMouseEnter: () => void;
};
