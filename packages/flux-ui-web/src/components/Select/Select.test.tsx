import { act } from 'react';
import { createRoot } from 'react-dom/client';

import { afterEach, describe, expect, it } from 'vitest';

import { Select } from './Select';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Select', () => {
  it('submits its selected value and connects error text', () => {
    const form = document.createElement('form');
    document.body.append(form);
    const root = createRoot(form);

    act(() =>
      root.render(
        <Select
          id='country'
          name='country'
          label='Country'
          value='fr'
          error='Choose a valid country'
          options={[{ label: 'France', value: 'fr' }]}
        />
      )
    );

    const trigger = form.querySelector('[role="combobox"]');
    const errorId = trigger?.getAttribute('aria-describedby');

    expect(new FormData(form).get('country')).toBe('fr');
    expect(errorId).toBe('country-error');
    expect(document.getElementById(errorId ?? '')?.textContent).toBe(
      'Choose a valid country'
    );
    act(() => root.unmount());
  });
});
