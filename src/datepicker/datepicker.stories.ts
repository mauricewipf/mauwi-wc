import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./datepicker";
import {DatepickerProps} from "./datepicker";

export default {
  title: 'components/Datepicker',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="flex flex-row items-center">
      <div class="md:basis-1/2">
        <mauwi-datepicker></mauwi-datepicker>

        <p class="mt-24">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  `,
} satisfies Meta<DatepickerProps>;

export const Default: StoryObj<DatepickerProps> = {
  args: {},
};

export const SmallScreen: StoryObj<DatepickerProps> = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone5',
    },
  },
  args: {},
};
