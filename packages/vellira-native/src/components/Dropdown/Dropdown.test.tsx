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

describe('Native Dropdown', () => {
  it('opens and selects an item', () => {
    const onSelect = vi.fn();
    const { container, unmount } = render(
      <Dropdown label='Actions' items={items} onSelect={onSelect} />
    );

    const trigger =
      container.querySelector<HTMLButtonElement>('[role="button"]');
    act(() => trigger?.click());

    expect(container.textContent).toContain('Edit');

    const editItem = Array.from(container.querySelectorAll('button')).find(
      (button) => button.textContent?.includes('Edit')
    );
    act(() => editItem?.click());

    expect(onSelect).toHaveBeenCalledWith('edit');

    unmount();
  });
});
