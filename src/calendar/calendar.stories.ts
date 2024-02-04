import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./Calendar";
import {CalendarProps} from "./Calendar";

export default {
  title: 'components/Calendar',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-calendar></mauwi-calendar>
  `,
} satisfies Meta<CalendarProps>;

export const Default: StoryObj<CalendarProps> = {
  args: {},
};