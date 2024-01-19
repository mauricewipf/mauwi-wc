import {HoursProps} from './dual-slider/dual-slider';
import {html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import "./dual-slider/dual-slider";
import "./weekdays-checkboxes/weekdays-checkboxes";
import "./xy-chart/xy-chart";

export interface CarsharingAvailabilityProps {
  headline: string;
  weekdays: string[];
  hours: HoursProps;
}

@customElement("mauwi-carsharing-availability")
export class CarsharingAvailability extends TailwindElement() {
  @property() headline: string;
  @property() weekdays: string[];
  @property() hours: HoursProps;

  render() {
    return html`
      <div class="font-sans flex">
        <div class="bg-white rounded-lg shadow-lg p-4">
          <h2 class="text-xl font-semibold pb-2">${this.headline}</h2>
          <mauwi-weekdays-checkboxes weekdays="${this.weekdays}"></mauwi-weekdays-checkboxes>
          <mauwi-dual-slider .hours=${this.hours}></mauwi-dual-slider>
          <mauwi-xy-chart></mauwi-xy-chart>
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
  interface CarsharingAvailabilityMap {
    "mauwi-carsharing-availability": CarsharingAvailability;
  }
}