import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { render } from '../../test-utils/render';

import { Checkbox } from './Checkbox';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Checkbox', () => {
  it('toggles uncontrolled value and calls onCheckedChange', () => {
    const onCheckedChange = vi.fn();
    const { container, unmount } = render(
      <Checkbox label='Accept' onCheckedChange={onCheckedChange} />
    );

    const checkbox =
      container.querySelector<HTMLButtonElement>('[role="checkbox"]');

    expect(checkbox?.getAttribute('aria-checked')).toBe('false');
    act(() => checkbox?.click());
    expect(checkbox?.getAttribute('aria-checked')).toBe('true');
    expect(onCheckedChange).toHaveBeenCalledWith(true);

    unmount();
  });
});
