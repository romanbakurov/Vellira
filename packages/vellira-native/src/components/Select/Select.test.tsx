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
  it('opens options and selects a value after confirmation', () => {
    const onChange = vi.fn();

    const { container, unmount } = render(
      <Select label='Country' options={options} onChange={onChange} />
    );

    const trigger =
      container.querySelector<HTMLButtonElement>('[role="button"]');

    act(() => {
      trigger?.click();
    });

    expect(trigger?.getAttribute('aria-expanded')).toBe('true');

    const option = Array.from(document.body.querySelectorAll('button')).find(
      (button) => button.textContent === 'France'
    );

    expect(option).toBeTruthy();

    act(() => {
      option?.click();
    });

    expect(onChange).not.toHaveBeenCalled();

    const doneButton = Array.from(
      document.body.querySelectorAll('button')
    ).find((button) => button.textContent === 'Done');

    expect(doneButton).toBeTruthy();

    act(() => {
      doneButton?.click();
    });

    expect(onChange).toHaveBeenCalledWith('fr');
    expect(container.textContent).toContain('France');
    expect(trigger?.getAttribute('aria-expanded')).toBe('false');

    unmount();
  });
});
