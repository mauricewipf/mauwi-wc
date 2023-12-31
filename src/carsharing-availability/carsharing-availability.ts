import {HoursProps} from './dual-slider/dual-slider';
import {html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import style from "./carsharing-availability.css?inline";

export interface CarsharingAvailabilityProps {
  headline: string;
  weekdays: string[];
  hours: HoursProps;
  chance: any;
}

@customElement("mauwi-carsharing-availability")
export class CarsharingAvailability extends TailwindElement(style) {
  @property() headline: string;
  @property() weekdays: string[];
  @property() hours: HoursProps;
  @property() chance: any;

  private renderWeekdaysCheckboxes(weekdays: string[]) {
    return html`
      <div class='flex justify-center items-center'>
        <div class='bg-white rounded-md'>
          <div class='flex space-x-4'>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('SUN')} />
              <span class='text-gray-700'>Sunday</span>
            </label>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('MON')} />
              <span class='text-gray-700'>Monday</span>
            </label>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('TUE')} />
              <span class='text-gray-700'>Tuesday</span>
            </label>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('WED')} />
              <span class='text-gray-700'>Wednesday</span>
            </label>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('THU')} />
              <span class='text-gray-700'>Thursday</span>
            </label>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('FRI')} />
              <span class='text-gray-700'>Friday</span>
            </label>
            <label class='flex items-center space-x-2'>
              <input type='checkbox' class='form-checkbox text-blue-500' checked=${weekdays?.includes('SAT')} />
              <span class='text-gray-700'>Saturday</span>
            </label>
          </div>
        </div>
      </div>
    `;
  }

  private renderDualSlider() {
    return html`
    `;
  }

  private renderXyChart() {
    return html`
    `;
  }

  render() {
    return html`
      <div class="font-sans flex">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <h2 class="text-xl font-semibold pb-2">${this.headline}</h2>
          ${this.renderWeekdaysCheckboxes(this.weekdays)}
          <mauwi-dual-slider hours=${this.hours}></mauwi-dual-slider>
<!--          <xy-chart></xy-chart>-->
          <div class="flex justify-start py-2">
            <a href="#"
               class="hover:bg-blue-400 group rounded-md bg-blue-500 text-white uppercase text-sm font-medium py-2 px-3.5 shadow-sm">
              Reserve
            </a>
          </div>
          <p class="text-gray-400">Reserve 12 hours in advance to get a car guaranteed.</p>
        </div>
      </div>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    "mauwi-carsharing-availability": CarsharingAvailability;
  }
}