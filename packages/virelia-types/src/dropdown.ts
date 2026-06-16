export interface BaseDropdownMenuItem {
  type?: 'item';
  value: string;
  disabled?: boolean;
}

export interface BaseDropdownGroup {
  type: 'group';
}

export interface BaseDropdownSeparator {
  type: 'separator';
}

export type BaseDropdownItem =
  | BaseDropdownMenuItem
  | BaseDropdownGroup
  | BaseDropdownSeparator;

export interface BaseDropdownProps {
  items: BaseDropdownItem[];
  onSelect?: (value: string) => void;
  disabled?: boolean;
}

export type BaseDropdownContentProps = Record<never, never>;

export type BaseDropdownGroupProps = Record<never, never>;

export type BaseDropdownItemProps = BaseDropdownMenuItem & {
  active: boolean;
};

export interface BaseDropdownTriggerProps {
  isOpen: boolean;
}
