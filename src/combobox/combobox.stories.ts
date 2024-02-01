import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./combobox";
import {ComboboxProps} from "./combobox";

export default {
  title: 'components/Combobox',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="p-8">
      <mauwi-combobox
        .label="${args.label}"
        .list="${args.list}"
      ></mauwi-combobox>
    </div>
  `,
} satisfies Meta<ComboboxProps>;

export const Default: StoryObj<ComboboxProps> = {
  args: {
    label: "Assigned to",
    list: [
      "John Doe",
      "Jane Smith",
      "Michael Johnson",
      "Amy Williams",
      "David Brown",
      "Emily Davis",
      "Daniel Taylor",
      "Samantha Martinez",
      "Christopher Garcia",
      "Jennifer Rodriguez",
    ],
  },
};

export const WithSecondaryText: StoryObj<ComboboxProps> = {
  args: {
    label: "Assigned to",
    list: [
      {
        primaryText: "John Doe",
        secondaryText: "john.doe@example.com"
      },
      {
        primaryText: "Jane Smith",
        secondaryText: "jane.smith@example.com"
      },
      {
        primaryText: "Michael Johnson",
        secondaryText: null
      },
      {
        primaryText: "Amy Williams",
        secondaryText: "amy.williams@example.com"
      },
      {
        primaryText: "David Brown",
        secondaryText: "david.brown@example.com"
      },
      {
        primaryText: "Emily Davis",
        secondaryText: "emily.davis@example.com"
      },
      {
        primaryText: "Daniel Taylor",
        secondaryText: "daniel.taylor@example.com"
      },
      {
        primaryText: "Samantha Martinez",
        secondaryText: "samantha.martinez@example.com"
      },
      {
        primaryText: "Christopher Garcia",
        secondaryText: "christopher.garcia@example.com"
      },
      {
        primaryText: "Jennifer Rodriguez",
        secondaryText: "jennifer.rodriguez@example.com"
      },
    ],
  },
};
