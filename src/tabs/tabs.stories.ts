import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./tabs";
import {TabsProps} from "./tabs";

export default {
  title: 'components/Tabs',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-tabs
      .options="${args.options}"
    ></mauwi-tabs>
  `,
} satisfies Meta<TabsProps>;

export const Default: StoryObj<TabsProps> = {
  args: {
    options: ["Overview", "Analytics", "Reports", "Notifications"],
  },
};

export const SmallScreen: StoryObj<TabsProps> = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone5',
    },
  },
};
