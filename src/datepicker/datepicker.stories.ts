import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./datepicker";
import {DatepickerProps} from "./datepicker";

export default {
  title: 'components/Datepicker',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-datepicker
    ></mauwi-datepicker>
  `,
} satisfies Meta<DatepickerProps>;

export const Default: StoryObj<DatepickerProps> = {
  args: {
  },
};