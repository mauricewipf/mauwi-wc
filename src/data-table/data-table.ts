import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html, nothing} from "lit";

export interface DataTableProps {
  columnTitlesByOrder: string[]; // Maintain the projected order in the table
  list: {}[];
  isSortable: boolean;
  isStriped: boolean;
}

@customElement("mauwi-data-table")
export class DataTable extends TailwindElement() {
  @property() columnTitlesByOrder: string[];
  @property() list: { [key: string]: string }[];
  @property() isSortable: boolean = false;
  @property() isStriped: boolean = false;
  @state() activeOrder: string;

  private _sortListBy(columnTitle: string) {
    this.activeOrder = columnTitle;
    this.list = this.list.sort(function (a, b) {
      const x = a[columnTitle].toLowerCase();
      const y = b[columnTitle].toLowerCase();

      if (x > y) {
        return 1;
      }
      if (x < y) {
        return -1;
      }
      return 0;
    });
  }

  protected render() {
    return html`
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <table class="min-w-full divide-y divide-gray-300">
            <thead>
            <tr>
              ${this.columnTitlesByOrder.map((columnTitle) => html`
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                  ${this.isSortable
                    ? html`<button type="button" class="group inline-flex"
                              @click=${() => this._sortListBy(columnTitle)}>${columnTitle}
                      <span class="ml-2 rounded ${this.activeOrder === columnTitle
                        ? 'bg-gray-200 text-gray-900 group-hover:bg-gray-300'
                        : 'invisible flex-none text-gray-400 group-hover:visible group-focus:visible'}">
                          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                  clip-rule="evenodd"/>
                          </svg>
                        </span>
                    </button>`
                    : html`<span class="group inline-flex">${columnTitle}</span>`}

                </th>`)}

              <th scope="col" class="relative py-3.5 pl-3 pr-0">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 bg-white">
            ${this.list.map((item, index) => html`
              <tr class="${this.isStriped ? 'even:bg-gray-50' : nothing}">
                ${this.columnTitlesByOrder.map((columnTitle) => html`
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm first:font-medium text-gray-900 sm:pl-0">
                    ${item[columnTitle]}
                  </td>`)}
                <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm sm:pr-0">
                  <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                </td>
              </tr>
            `)}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
}

declare global {
  interface DataTableMap {
    "mauwi-data-table": DataTable;
  }
}