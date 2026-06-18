import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { render } from '../../test-utils/render';

import { Dropdown } from './Dropdown';

const items = [
  { label: 'Edit', value: 'edit' },
  { label: 'Delete', value: 'delete', danger: true },
];

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Dropdown', () => {
  it('opens menu and selects an enabled item', () => {
    const onSelect = vi.fn();
    const { container, unmount } = render(
      <Dropdown
        label='Actions'
        trigger='Actions'
        items={items}
        onSelect={onSelect}
      />
    );

    const trigger = container.querySelector<HTMLButtonElement>('button');
    act(() => trigger?.click());

    expect(trigger?.getAttribute('aria-expanded')).toBe('true');
    expect(document.querySelector('[role="menu"]')).not.toBeNull();

    const firstItem = document.querySelector<HTMLElement>('[role="menuitem"]');
    act(() => firstItem?.click());

    expect(onSelect).toHaveBeenCalledWith('edit');
    expect(document.querySelector('[role="menu"]')).toBeNull();

    unmount();
  });

  it('does not open when disabled', () => {
    const { container, unmount } = render(
      <Dropdown disabled label='Actions' trigger='Actions' items={items} />
    );

    const trigger = container.querySelector<HTMLButtonElement>('button');
    act(() => trigger?.click());

    expect(trigger?.getAttribute('aria-expanded')).toBe('false');
    expect(container.querySelector('[role="menu"]')).toBeNull();

    unmount();
  });
});
