import {html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../../shared/tailwind.element";

export interface HoursProps {
  from: number;
  to: number;
}

@customElement("mauwi-dual-slider")
export class DualSlider extends TailwindElement() {
  @property() hours: HoursProps;

  handleStartInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.hours.from = parseFloat(inputElement.value);
  }

  handleEndInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.hours.to = parseFloat(inputElement.value);
  }

  render() {
    return html`
      <div class="py-4">
        <h3 class="text-l font-semibold">
          Time
        </h3>
        <div class="flex justify-start">
        </div>
        <div class="flex justify-between items-center">
          <span>Start:</span>
          <input
            type="number"
            min="0"
            max="24"
            step="1"
            value=${this.hours?.from?.toString()}
            @click="${this.handleStartInputChange}"
            class="w-1/2 h-8 p-2 ml-2 rounded-lg text-gray-700"
          />
          <span class="ms-3">End:</span>
          <input
            type="number"
            min="0"
            max="24"
            step="1"
            value=${this.hours?.to?.toString()}
            @click="${this.handleEndInputChange}"
            class="w-1/2 h-8 p-2 ml-2 rounded-lg text-gray-700"
          />
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "mauwi-dual-slider": DualSlider;
  }
}