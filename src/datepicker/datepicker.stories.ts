import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./datepicker";
import {DatepickerProps} from "./datepicker";

export default {
  title: 'components/Datepicker',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="flex flex-row items-center">
      <div class="basis-1/2">
        <mauwi-datepicker
        ></mauwi-datepicker>
      </div>
      <div class="basis-1/2">
        <div>
          <p>Selected Date: <span id="selected-date"></span></p>
        </div>
      </div>
    </div>
    <script>
      document.querySelector("mauwi-datepicker").addEventListener("dateSelected", (e) => {
        document.getElementById("selected-date").innerText = new Date(e.target.selectedDate).toDateString();
      })
    </script>
  `,
} satisfies Meta<DatepickerProps>;

export const Default: StoryObj<DatepickerProps> = {
  args: {
  },
};