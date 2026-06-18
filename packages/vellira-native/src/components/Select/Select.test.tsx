import { act } from 'react';

import { afterEach, describe, expect, it, vi } from 'vitest';

import { render } from '../../test-utils/render';

import { Select } from './Select';

const options = [
  { label: 'France', value: 'fr' },
  { label: 'Spain', value: 'es' },
];

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Select', () => {
  it('opens options and selects a value', () => {
    const onChange = vi.fn();
    const { container, unmount } = render(
      <Select label='Country' options={options} onChange={onChange} />
    );

    const trigger =
      container.querySelector<HTMLButtonElement>('[role="button"]');
    act(() => trigger?.click());

    expect(trigger?.getAttribute('aria-expanded')).toBe('true');

    const option = Array.from(container.querySelectorAll('button')).find(
      (button) => button.textContent?.includes('France')
    );

    act(() => option?.click());

    expect(onChange).toHaveBeenCalledWith('fr');
    expect(container.textContent).toContain('France');

    unmount();
  });
});
