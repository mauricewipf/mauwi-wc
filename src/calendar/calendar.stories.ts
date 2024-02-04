import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./Calendar";
import {CalendarProps} from "./Calendar";

export default {
  title: 'components/Calendar',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-calendar></mauwi-calendar>
    <p class="mt-16">Selected date: <span id="selected-date"></span></p>
    <script>
      document.querySelector("mauwi-calendar").addEventListener("dateSelected", (e) => {
        document.getElementById("selected-date").innerText = new Date(e.detail.date).toDateString();
      })
    </script>
  `,
} satisfies Meta<CalendarProps>;

export const Default: StoryObj<CalendarProps> = {
  args: {},
};