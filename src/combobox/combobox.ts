import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";
import {checkIcon, chevronUpDownIcon} from "../shared/icons";

type ComboboxItem = {primaryText: string, secondaryText: string};
export interface ComboboxProps {
  label: string;
  list: string[] | ComboboxItem[];
}

@customElement("mauwi-combobox")
export class Combobox extends TailwindElement() {
  @property() label: string;
  @property() list: string[] | ComboboxItem[];
  @state() selectedItem: ComboboxItem;
  @state() isListShown: boolean = true;
  @state() inputValue: string;

  private _onSelect(item: ComboboxItem) {
    this.selectedItem = item;
    this.isListShown = false;
  }

  private toggleList() {
    this.isListShown = !this.isListShown;
  }

  private _onFocusOut(e: Event) {
  }

  private _updateValue(e: Event) {
    this.isListShown = true;
    this.inputValue = (e.target as HTMLInputElement).value;
  }

  private filterList = (item: ComboboxItem): boolean => {
    if(!this.inputValue) {
      return true;
    } else {
      return item.primaryText?.toLowerCase().includes(this.inputValue?.toLowerCase());
    }
  }

  private renderListElement(item: ComboboxItem) {
    const isSelectedItem: boolean = JSON.stringify(item) === JSON.stringify(this.selectedItem);
    return html`
      <li class="relative cursor-default select-none py-2 pl-3 pr-9 hover:bg-indigo-600 group"
          id="option-0" 
          role="option"
          tabindex="-1" 
          @click=${() => this._onSelect(item)}>
        <div class="flex text-gray-900 group-hover:text-white">
          <span class=${`truncate ${ isSelectedItem ? 'font-semibold' : ''}`}>${item.primaryText}</span>
          <span class="ml-2 truncate text-gray-500 group-hover:text-indigo-200">${item.secondaryText}</span>
        </div>

        ${isSelectedItem
          ? html`<span class=${`absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600 group-hover:text-white`}>${checkIcon}</span>`
          : null
        }
      </li>`;
  }
  protected render() {
    return html`
      <div>
        <label for="combobox" class="block text-sm font-medium leading-6 text-gray-900">${this.label}</label>
        <div class="relative mt-2">
          <input id="combobox" 
                 type="text"
                 class="w-full rounded-md border-0 bg-white py-1.5 pl-3 pr-12 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                 role="combobox" 
                 aria-controls="options" 
                 aria-expanded="false" 
                 .value=${this.selectedItem?.primaryText || ''} 
                 @focusout=${this._onFocusOut} 
                 @keyup=${this._updateValue}>
          <button type="button"
                  class="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none" 
                  @click=${this.toggleList}>
            <div class="text-gray-400" aria-hidden="true">
              ${chevronUpDownIcon}
            </div>
          </button>

          ${this.isListShown
            ? html`
              <ul
                class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                id="options" role="listbox">
                ${this.list
                  .map((item: string | any) => typeof item === 'string'
                    ? {primaryText: item, secondaryText: null}
                    : item)
                  .filter(this.filterList)
                  .map((item: ComboboxItem) => this.renderListElement(item))}
              </ul>` 
            : null
          }
        </div>
      </div>
    `;
  }
}

declare global {
  interface ComboboxMap {
    "mauwi-combobox": Combobox;
  }
}