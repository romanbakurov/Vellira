export type SelectTriggerProps = {
  id?: string;
  errorId?: string;
  name?: string;
  isOpen: boolean;
  disabled?: boolean;
  hasLabel: boolean;
  labelId: string;
  listboxId: string;
  activeIndex: number;
  ariaLabel?: string;
  error?: boolean | string;
  displayText: string;
  buttonRef: React.Ref<HTMLButtonElement>;
  onClick: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
};
