import {html} from "lit";
import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../../shared/tailwind.element";

export interface HoursProps {
  from: number;
  to: number;
}

@customElement("mauwi-dual-slider")
export class DualSlider extends TailwindElement() {
  @property() hours: HoursProps;

  @state() minValue: number = 0;
  @state() maxValue: number = 24;
  @state() range1Value: number = 12;
  @state() range2Value: number = 19;

  handleMinInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.minValue = parseFloat(inputElement.value);
  }

  handleMaxInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.maxValue = parseFloat(inputElement.value);
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
                <span>Begin:</span>
                <input
                        type="number"
                        min="0"
                        max="24"
                        step="1"
                        value=${this.minValue.toString()}
                        @click="${this.handleMinInputChange}"
                        class="w-1/2 h-8 p-2 bg-gray-200 rounded-lg text-gray-700"
                />
                <span class="ms-3">End:</span>
                <input
                        type="number"
                        min="0"
                        max="24"
                        step="1"
                        value=${this.maxValue.toString()}
                        @click="${this.handleMaxInputChange}"
                        class="w-1/2 h-8 p-2 bg-gray-200 rounded-lg text-gray-700"
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