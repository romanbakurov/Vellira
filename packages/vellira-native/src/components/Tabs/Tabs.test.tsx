import { act } from 'react';

import { afterEach, describe, expect, it } from 'vitest';

import { render } from '../../test-utils/render';

import { Tabs } from '.';

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Native Tabs', () => {
  it('switches active panel when tab is pressed', () => {
    const { container, unmount } = render(
      <Tabs>
        <Tabs.List>
          <Tabs.Tab index={0}>Overview</Tabs.Tab>
          <Tabs.Tab index={1}>Usage</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel index={0}>Overview panel</Tabs.Panel>
        <Tabs.Panel index={1}>Usage panel</Tabs.Panel>
      </Tabs>
    );

    expect(container.textContent).toContain('Overview panel');

    const tabs = container.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    act(() => tabs[1].click());

    expect(container.textContent).toContain('Usage panel');
    expect(container.textContent).not.toContain('Overview panel');

    unmount();
  });
});
