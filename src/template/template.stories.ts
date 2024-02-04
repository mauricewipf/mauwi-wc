import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./template";
import {TemplateProps} from "./template";
import {DatepickerProps} from "../datepicker/datepicker";

export default {
  title: 'components/Template',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-template
      .myProperty="${args.myProperty}"
    ></mauwi-template>
  `,
} satisfies Meta<TemplateProps>;

export const Default: StoryObj<TemplateProps> = {
  args: {
    myProperty: null,
  },
};

export const SmallScreen: StoryObj<DatepickerProps> = {
  ...Default,
  parameters: {
    viewport: {
      defaultViewport: 'iphone5',
    },
  },
};
