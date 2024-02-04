import {customElement, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html, nothing} from "lit";
import {calendarDaysIcon} from "../shared/icons";
import "../calendar/calendar";

export interface DatepickerProps {
}

@customElement("mauwi-datepicker")
export class Datepicker extends TailwindElement() {
  @state() isCalendarDisplayed: boolean = true;
  @state() selectedDate: Date;

  private _handleDateSelected(e: CustomEvent) {
    this.selectedDate = e.detail.date;
    const customEvent = new CustomEvent('dateSelected', {
      bubbles: true,
      detail: {date: e.detail.date}
    })
    this.dispatchEvent(customEvent);
  }
  protected render() {
    return html`
      <div class="max-w-md md:block">
        <button type="button"
                class="w-full inline-flex items-center gap-x-3 rounded-md bg-white px-3 py-2 text-sm text-gray-400 shadow-sm ring-1 ring-gray-300 tracking-wide">
          ${calendarDaysIcon}
          ${!!this.selectedDate ? new Date(this.selectedDate).toDateString() : 'Pick a date'}
        </button>

        <div class="${this.isCalendarDisplayed ? nothing : 'hidden'}">
          <mauwi-calendar @dateSelected=${this._handleDateSelected}></mauwi-calendar>
        </div>
      </div>
    `;
  }
}

declare global {
  interface DatepickerMap {
    "mauwi-datepicker": Datepicker;
  }
}
