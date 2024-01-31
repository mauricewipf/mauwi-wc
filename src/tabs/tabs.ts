import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";

export interface TabsProps {
  options: string[];
}

@customElement("mauwi-tabs")
export class Tabs extends TailwindElement() {
  @property() options: string[];
  @state() selectedOption: string;

  connectedCallback() {
    super.connectedCallback();
    this.selectedOption = this.options[0];
  }

  private _onSelect(e: Event) {
    e.preventDefault();
    this.selectedOption = (e.target as HTMLElement).getAttribute('data-value');
  }

  protected render() {
    return html`
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select id="tabs" name="tabs"
                class="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500">
          ${this.options.map((option) => html`
            <option ?selected=${option === this.selectedOption} 
                    data-value=${option}
                    @click=${this._onSelect}>${option}</option>`
          )}
        </select>
      </div>
      <div class="hidden sm:block">
        <nav class="flex space-x-2" aria-label="Tabs">
          ${this.options.map((option) => html`
            <a href="#" 
               class=${`rounded-md px-3 py-2 text-sm font-medium ${option === this.selectedOption ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-indigo-700 hover:bg-indigo-50'}`} 
               aria-current="page" 
               data-value=${option}
               @click=${this._onSelect}>${option}</a>`
          )}
        </nav>
      </div>
    `;
  }
}

declare global {
  interface TabsMap {
    "mauwi-tabs": Tabs;
  }
}