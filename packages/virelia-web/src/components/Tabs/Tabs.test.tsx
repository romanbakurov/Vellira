import { act } from 'react';

import { afterEach, describe, expect, it } from 'vitest';

import { render } from '../../test-utils/render';

import { TabsPanel } from './Panel/TabsPanel';
import { Tab } from './Tab/Tab';
import { Tabs } from './Tabs';

function TabsExample() {
  return (
    <Tabs>
      <div role='tablist'>
        <Tab index={0}>Overview</Tab>
        <Tab index={1}>Usage</Tab>
      </div>
      <TabsPanel index={0}>Overview panel</TabsPanel>
      <TabsPanel index={1}>Usage panel</TabsPanel>
    </Tabs>
  );
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('Tabs', () => {
  it('switches active panel when a tab is clicked', () => {
    const { container, unmount } = render(<TabsExample />);
    const tabs = container.querySelectorAll<HTMLButtonElement>('[role="tab"]');

    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(container.textContent).toContain('Overview panel');

    act(() => tabs[1].click());

    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(container.textContent).toContain('Usage panel');
    expect(container.textContent).not.toContain('Overview panel');

    unmount();
  });
});
