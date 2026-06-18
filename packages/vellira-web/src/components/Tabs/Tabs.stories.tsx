import {
  Alarm,
  Folder,
  Home,
  Image,
  Music,
  Profile,
  Settings,
} from '@romanbakurov/vellira-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { Tabs } from '../Tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
### Tabs Component

Navigation component for switching between related content panels.

**Features**
- Text, icon, and text-with-icon tabs
- Default, underline, and pills appearances
- Horizontal and vertical orientation
- Disabled tabs
- Panel composition through \`Tabs.Panel\`

### Accessibility

Tabs render tablist, tab, and panel semantics so keyboard and screen reader users can understand the relationship between controls and content.

Correct usage:

\`\`\`tsx
<Tabs defaultActiveIndex={0}>
  <Tabs.List>
    <Tabs.Tab index={0}>Overview</Tabs.Tab>
    <Tabs.Tab index={1}>Settings</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel index={0}>Overview content</Tabs.Panel>
  <Tabs.Panel index={1}>Settings content</Tabs.Panel>
</Tabs>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Tab orientation',
      defaultValue: 'horizontal',
    },
    appearance: {
      control: 'select',
      options: ['default', 'pills', 'underline'],
      description: 'Visual variant of tabs',
      defaultValue: 'default',
    },
    defaultActiveIndex: {
      control: 'number',
      description: 'Index of initially active tab',
      defaultValue: 0,
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

const TextTabs = () => (
  <>
    <Tabs.Tab index={0}>Home</Tabs.Tab>
    <Tabs.Tab index={1}>Profile</Tabs.Tab>
    <Tabs.Tab index={2}>Settings</Tabs.Tab>
    <Tabs.Tab index={3}>Notifications</Tabs.Tab>
  </>
);

const IconTabs = () => (
  <>
    <Tabs.Tab index={0} icon={<Home />} aria-label='Home' />
    <Tabs.Tab index={1} icon={<Profile />} aria-label='Profile' />
    <Tabs.Tab index={2} icon={<Settings />} aria-label='Settings' />
    <Tabs.Tab index={3} icon={<Alarm />} aria-label='Notifications' />
  </>
);

const TextIconTabs = () => (
  <>
    <Tabs.Tab index={0} icon={<Home />}>
      Home
    </Tabs.Tab>
    <Tabs.Tab index={1} icon={<Profile />}>
      Profile
    </Tabs.Tab>
    <Tabs.Tab index={2} icon={<Settings />}>
      Settings
    </Tabs.Tab>
    <Tabs.Tab index={3} icon={<Profile />}>
      Notifications
    </Tabs.Tab>
  </>
);

const DisabledTabs = () => (
  <>
    <Tabs.Tab index={0} icon={<Home />}>
      Home
    </Tabs.Tab>
    <Tabs.Tab index={1} icon={<Profile />}>
      Profile
    </Tabs.Tab>
    <Tabs.Tab index={2} disabled icon={<Settings />}>
      Settings
    </Tabs.Tab>
    <Tabs.Tab index={3} icon={<Profile />}>
      Notifications
    </Tabs.Tab>
  </>
);

const DefaultPanels = () => (
  <>
    <Tabs.Panel index={0}>
      <div>Home content - Home information</div>
    </Tabs.Panel>
    <Tabs.Panel index={1}>
      <div>Profile content - User information and preferences</div>
    </Tabs.Panel>
    <Tabs.Panel index={2}>
      <div>Settings content - Configuration options</div>
    </Tabs.Panel>
    <Tabs.Panel index={3}>
      <div>Notifications content - Alert and notification settings</div>
    </Tabs.Panel>
  </>
);

const FilePanels = () => (
  <>
    <Tabs.Panel index={0}>
      <ul>
        <li>document.pdf</li>
        <li>presentation.pptx</li>
        <li>spreadsheet.xlsx</li>
      </ul>
    </Tabs.Panel>

    <Tabs.Panel index={1}>
      <ul>
        <li>photo.jpg</li>
        <li>screenshot.png</li>
        <li>illustration.svg</li>
      </ul>
    </Tabs.Panel>
    <Tabs.Panel index={2}>
      <ul>
        <li>song.mp3</li>
        <li>podcast.wav</li>
        <li>playlist.m3u</li>
      </ul>
    </Tabs.Panel>
  </>
);

const FileTabs = () => (
  <>
    <Tabs.Tab index={0} icon={<Folder />}>
      Files
    </Tabs.Tab>
    <Tabs.Tab index={1} icon={<Image />}>
      Images
    </Tabs.Tab>
    <Tabs.Tab index={2} icon={<Music />}>
      Music
    </Tabs.Tab>
  </>
);

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0}>
      <Tabs.List>
        <TextTabs />
      </Tabs.List>
      <DefaultPanels />
    </Tabs>
  ),
};

export const Underline: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} appearance='underline'>
      <Tabs.List>
        <TextTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const UnderlineWithIcons: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} appearance='underline'>
      <Tabs.List>
        <TextIconTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} appearance='pills'>
      <Tabs.List>
        <IconTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const Pills: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} appearance='pills'>
      <Tabs.List>
        <TextTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const PillsWithIcons: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} appearance='pills'>
      <Tabs.List>
        <TextIconTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0}>
      <Tabs.List>
        <DisabledTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const CustomContent: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0}>
      <Tabs.List>
        <FileTabs />
      </Tabs.List>

      <FilePanels />
    </Tabs>
  ),
};

export const VerticalBasic: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical'>
      <Tabs.List>
        <TextTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalUnderline: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical' appearance='underline'>
      <Tabs.List>
        <TextTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalUnderlineWithIcons: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical' appearance='underline'>
      <Tabs.List>
        <TextIconTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalIconOnly: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical' appearance='pills'>
      <Tabs.List>
        <IconTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalPills: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical' appearance='pills'>
      <Tabs.List>
        <TextTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalPillsWithIcons: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical' appearance='pills'>
      <Tabs.List>
        <TextIconTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalDisabledState: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical'>
      <Tabs.List>
        <DisabledTabs />
      </Tabs.List>

      <DefaultPanels />
    </Tabs>
  ),
};

export const VerticalCustomContent: Story = {
  render: () => (
    <Tabs defaultActiveIndex={0} orientation='vertical'>
      <Tabs.List>
        <FileTabs />
      </Tabs.List>

      <FilePanels />
    </Tabs>
  ),
};
