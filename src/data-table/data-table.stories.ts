import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./data-table";
import {DataTableProps} from "./data-table";

export default {
  title: 'components/DataTable',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Users</h1>
          <p class="mt-2 text-sm text-gray-700">A list of all the users in your account including their name, title,
            email and role.</p>
        </div>
      </div>
      <div class="mt-8">
        <mauwi-data-table
          .columnTitlesByOrder="${args.columnTitlesByOrder}"
          .list="${args.list}"
          .isSortable="${args.isSortable}"
          .isStriped="${args.isStriped}"
        ></mauwi-data-table>
      </div>
    </div>
  `,
} satisfies Meta<DataTableProps>;

export const Default: StoryObj<DataTableProps> = {
  args: {
    isSortable: false,
    isStriped: false,
    columnTitlesByOrder: ["Name", "Title", "Email", "Role"],
    list: [
      {
        "Name": "Lindsay Walton",
        "Title": "Front-end Developer",
        "Email": "lindsay.walton@example.com",
        "Role": "Admin"
      },
      {
        "Name": "John Doe",
        "Title": "Back-end Developer",
        "Email": "john.doe@example.com",
        "Role": "Member"
      },
      {
        "Name": "Jane Smith",
        "Title": "UI/UX Designer",
        "Email": "jane.smith@example.com",
        "Role": "Owner"
      },
      {
        "Name": "Alex Johnson",
        "Title": "Full-stack Developer",
        "Email": "alex.johnson@example.com",
        "Role": "Admin"
      },
      {
        "Name": "Emily Davis",
        "Title": "Software Engineer",
        "Email": "emily.davis@example.com",
        "Role": "Member"
      },
      {
        "Name": "Michael Brown",
        "Title": "Product Manager",
        "Email": "michael.brown@example.com",
        "Role": "Owner"
      },
      {
        "Name": "Sarah Miller",
        "Title": "Data Analyst",
        "Email": "sarah.miller@example.com",
        "Role": "Admin"
      },
      {
        "Name": "Kevin Wilson",
        "Title": "Quality Assurance Engineer",
        "Email": "kevin.wilson@example.com",
        "Role": "Member"
      },
      {
        "Name": "Jessica Garcia",
        "Title": "Project Manager",
        "Email": "jessica.garcia@example.com",
        "Role": "Admin"
      },
      {
        "Name": "Ryan Martinez",
        "Title": "Systems Administrator",
        "Email": "ryan.martinez@example.com",
        "Role": "Member"
      },
      {
        "Name": "Megan Taylor",
        "Title": "Marketing Specialist",
        "Email": "megan.taylor@example.com",
        "Role": "Owner"
      }
    ],
  },
};

export const StripedRows: StoryObj<DataTableProps> = {
  args: {
    ...Default.args,
    isSortable: false,
    isStriped: true,
  },
};

export const SortableColumns: StoryObj<DataTableProps> = {
  args: {
    ...Default.args,
    isSortable: true,
    isStriped: true,
  },
};
