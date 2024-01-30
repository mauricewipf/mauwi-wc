import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./Dashboard";
import {DashboardProps} from "./Dashboard";

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