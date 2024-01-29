import {customElement, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";

export interface DatepickerProps {
}

@customElement("mauwi-datepicker")
export class Datepicker extends TailwindElement() {
  @state() displayedMonth: Date = new Date();
  @state() selectedDate: Date;
  private today: Date = new Date();

  private static month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  private previousMonth() {
    const d = new Date(this.displayedMonth);
    d.setDate(0);
    this.displayedMonth = d;
  }

  private nextMonth() {
    this.displayedMonth = Datepicker.calculateNextMonth(this.displayedMonth);
  }

  private static calculateNextMonth(d: Date): Date {
    let nextMonth: Date;
    if (d.getMonth() == 11) {
      nextMonth = new Date(d.getFullYear() + 1, 0, 1);
    } else {
      nextMonth = new Date(d.getFullYear(), d.getMonth() + 1, 1);
    }
    return nextMonth;
  }

  getHeading() {
    return Datepicker.month[this.displayedMonth.getMonth()] + " " + this.displayedMonth.getFullYear();
  }

  private renderDay(date: Date) {
    const formattedDate: string = Datepicker.formatDate(date);
    const isThisMonth = this.displayedMonth.getMonth() === date.getMonth();
    const isToday = formattedDate === Datepicker.formatDate(this.today);
    const isSelectedDate = formattedDate === Datepicker.formatDate(this.selectedDate);
    let textColor: string;
    if (isSelectedDate) {
      textColor = "font-semibold text-white";
    } else if (isToday) {
      textColor = "font-semibold text-indigo-600";
    } else if (isThisMonth) {
      textColor = "text-gray-900";
    } else {
      textColor = "text-gray-400";
    }

    return html`
      <!-- TODO: Add rounded-tl-lg  for corner left-top -->
      <button type="button"
              class=${`py-1.5 hover:bg-gray-100 focus:z-10 ${isThisMonth ? 'bg-white' : 'bg-gray-50'} ${textColor}`} 
              @click=${() => this._onSelectDay(date)}>
        <time datetime=${formattedDate} class=${`mx-auto flex h-7 w-7 items-center justify-center rounded-full ${isSelectedDate ? 'bg-gray-900' : ''}`}
        >${date.getDate()}</time>
      </button>`;
  }

  private calculateDays() {
    const firstDayOfMonth = new Date(this.displayedMonth);
    firstDayOfMonth.setDate(1)
    const weekdayOfFirstDayOfMonth: number = firstDayOfMonth.getDay(); // 0-6 (0 === Sunday)

    const lastDayOfMonth: number = new Date(this.displayedMonth.getFullYear(), this.displayedMonth.getMonth() + 1, 0).getDate(); // 28-31
    const weekdayOfLastDayOfMonth: number = new Date(this.displayedMonth.getFullYear(), this.displayedMonth.getMonth() + 1, 0).getDay(); // 0-6

    const days: Date[] = [];

    if (weekdayOfFirstDayOfMonth !== 1) {
      // Add days from previous month
      const lastMonth = new Date(this.displayedMonth);
      lastMonth.setDate(0);
      const lastDayOfLastMonth = lastMonth.getDate(); // 28-31

      for (let i = lastDayOfLastMonth; i > (lastDayOfLastMonth - weekdayOfFirstDayOfMonth+1); i--) {
        const d = new Date(lastMonth.getFullYear(), lastMonth.getMonth(), i);
        days.unshift(d);
      }
    }

    for (let i = 1; i <= lastDayOfMonth; i++) {
      const d = new Date(this.displayedMonth.getFullYear(), this.displayedMonth.getMonth(), i);
      days.push(d);
    }

    if (weekdayOfLastDayOfMonth !== 0) {
      // Add days from next month
      const nextMonth: Date = Datepicker.calculateNextMonth(this.displayedMonth);
      for (let i = 1; i <= (7-weekdayOfLastDayOfMonth); i++) {
        const d = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), i);
        days.push(d);
      }
    }

    return days;
  }

  private static formatDate(date: Date) {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;

    return [year, month, day].join('-');
  }

  private _onSelectDay(date: Date) {
    this.selectedDate = date;
  }

  protected render() {
    const days = this.calculateDays();

    return html`
      <div class="max-w-md md:block">
        <div class="flex items-center text-center text-gray-900">
          <button type="button"
                  class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  @click=${this.previousMonth}>
            <span class="sr-only">Previous month</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                 class="h-5 w-5">
              <path fill-rule="evenodd"
                    d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
          <div class="flex-auto text-sm font-semibold">${this.getHeading()}</div>
          <button type="button"
                  class="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
                  @click=${this.nextMonth}>
            <span class="sr-only">Next month</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
                 class="h-5 w-5">
              <path fill-rule="evenodd"
                    d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                    clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="mt-6 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
          <div>M</div>
          <div>T</div>
          <div>W</div>
          <div>T</div>
          <div>F</div>
          <div>S</div>
          <div>S</div>
        </div>

        <div
          class=${`isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200 [&>*:nth-child(1)]:rounded-tl-lg [&>*:nth-child(7)]:rounded-tr-lg [&>*:nth-child(${days.length-6})]:rounded-bl-lg [&>*:last-child]:rounded-br-lg`}>
          ${days.map((day) => this.renderDay(day))}
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
