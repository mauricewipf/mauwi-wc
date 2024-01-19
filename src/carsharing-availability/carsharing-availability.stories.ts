import {Meta, StoryObj} from '@storybook/web-components';
import {CarsharingAvailabilityProps} from './carsharing-availability';
import './carsharing-availability';
import {html} from "lit";

export default {
  title: 'components/CarsharingAvailability',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-carsharing-availability 
      headline="${args.headline}"
      weekdays="${args.weekdays}"
      .hours="${args.hours}"
    ></mauwi-carsharing-availability>
  `,
} satisfies Meta<CarsharingAvailabilityProps>;

export const Default: StoryObj<CarsharingAvailabilityProps> = {
  args: {
    headline: 'Custom Carsharing Availability',
    weekdays: ['MON', 'TUE', 'THU', 'SUN'],
    hours: {
      from: 7,
      to: 20
    },
  },
};