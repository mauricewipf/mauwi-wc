import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./template";
import {TemplateProps} from "./template";

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