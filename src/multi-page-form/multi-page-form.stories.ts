import {MultiPageFormProps} from "./multi-page-form";
import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "./multi-page-form"

export default {
  title: 'components/MultiPageForm',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-multi-page-form/>
  `,
  parameters: {
    backgrounds: {
      default: 'darkgrey',
      values: [
        {
          name: 'darkgrey',
          value: '#444',
        },
      ],
    },
  },
} satisfies Meta<MultiPageFormProps>;

export const Default: StoryObj<MultiPageFormProps> = {
  args: {
  },
};
