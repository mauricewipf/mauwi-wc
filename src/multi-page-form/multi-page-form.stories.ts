import {Meta, StoryObj} from '@storybook/html';
import {MultiPageFormProps} from "./multi-page-form";

export default {
  title: 'components/MultiPageForm',
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'lightgrey',
      values: [
        {
          name: 'lightgrey',
          value: '#f8f8f8',
        },
      ],
    },
  },
} satisfies Meta<MultiPageFormProps>;

const Template = (args: MultiPageFormProps) => {
  const element: any = document.createElement('multi-page-form');
  console.log(args)
  return element;
};

export const Primary: StoryObj<MultiPageFormProps> = Template.bind({});
Primary.args = {};
