import { CarsharingAvailabilityProps } from '../carsharing-availability';
import {html} from "lit";

export const WeekdaysCheckboxes: any = ({weekdays}) => {
  return html`
    <div class='flex justify-center items-center'>
      <div class='bg-white rounded-md'>
        <div class='flex space-x-4'>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('SUN')} />
            <span class='text-gray-700'>Sunday</span>
          </label>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('MON')} />
            <span class='text-gray-700'>Monday</span>
          </label>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('TUE')} />
            <span class='text-gray-700'>Tuesday</span>
          </label>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('WED')} />
            <span class='text-gray-700'>Wednesday</span>
          </label>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('THU')} />
            <span class='text-gray-700'>Thursday</span>
          </label>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('FRI')} />
            <span class='text-gray-700'>Friday</span>
          </label>
          <label class='flex items-center space-x-2'>
            <input type='checkbox' class='form-checkbox text-blue-500' checked={weekdays?.includes('SAT')} />
            <span class='text-gray-700'>Saturday</span>
          </label>
        </div>
      </div>
    </div>
  `;
};
