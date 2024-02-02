import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./dashboard";
import {DashboardProps} from "./dashboard";

export default {
  title: 'showcase/Dashboard',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-dashboard
    ></mauwi-dashboard>
  `,
  parameters: {
  },
} satisfies Meta<DashboardProps>;

export const Default: StoryObj<DashboardProps> = {
  args: {
  },
};