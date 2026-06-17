import type { Meta, StoryObj } from '@storybook/react';
import { Text } from 'react-native';

import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    appearance: {
      control: 'select',
      options: ['pills', 'underline'],
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab index={0}>Overview</Tabs.Tab>
        <Tabs.Tab index={1}>Usage</Tabs.Tab>
        <Tabs.Tab index={2}>API</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel index={0}>
        <Text>Overview content for the native tabs component.</Text>
      </Tabs.Panel>
      <Tabs.Panel index={1}>
        <Text>Usage examples and implementation notes.</Text>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <Text>API details are shown in this panel.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};

export const Underline: Story = {
  args: {
    appearance: 'underline',
  },
  render: Default.render,
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: Default.render,
};

export const WithDisabledTab: Story = {
  render: (args) => (
    <Tabs {...args}>
      <Tabs.List>
        <Tabs.Tab index={0}>Active</Tabs.Tab>
        <Tabs.Tab index={1} disabled>
          Disabled
        </Tabs.Tab>
        <Tabs.Tab index={2}>Settings</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel index={0}>
        <Text>Active panel.</Text>
      </Tabs.Panel>
      <Tabs.Panel index={1}>
        <Text>This panel is not reachable while the tab is disabled.</Text>
      </Tabs.Panel>
      <Tabs.Panel index={2}>
        <Text>Settings panel.</Text>
      </Tabs.Panel>
    </Tabs>
  ),
};
