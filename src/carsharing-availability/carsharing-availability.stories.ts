import {Meta, StoryObj} from '@storybook/html';
import {CarsharingAvailabilityProps} from './carsharing-availability';

export default {
  title: 'components/CarsharingAvailability',
  tags: ['autodocs'],
} satisfies Meta<CarsharingAvailabilityProps>;

// Useful: https://github.com/CodeByAlex/storybook-framework-boilerplate/blob/master/examples/framework-kitchen-sink/stories/button.stories.js#L13-L18
const Template = (args: CarsharingAvailabilityProps) => {
  const element: HTMLCarsharingAvailabilityElement = document.createElement('carsharing-availability');
  element.headline = args.headline;
  element.weekdays = args.weekdays;
  element.hours = args.hours;
  return element;
};

export const Primary: StoryObj<CarsharingAvailabilityProps> = Template.bind({});
Primary.args = {
  headline: 'Carsharing Availability',
  weekdays: ['MON', 'TUE', 'THU', 'SUN'], // Double quotes necessary
  hours: {
    from: 7,
    to: 20
  },
  chance: 'foo',
};
