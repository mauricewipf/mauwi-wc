import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";

export interface DialogProps {
  headline: string;
  text: string;
  secondaryButton: string;
  primaryButton: string;
  hasIcon: boolean;
  hasDismissButton: boolean;
}

@customElement("mauwi-dialog")
export class Dialog extends TailwindElement() {
  @property() headline: string;
  @property() text: string;
  @property() secondaryButton: string;
  @property() primaryButton: string;
  @property() hasIcon: boolean;
  @property() hasDismissButton: boolean;

  @state() isOpen: boolean = false;

  public toggle() {
    this.isOpen = !this.isOpen;
  }

  public open() {
    this.isOpen = true;
  }

  public close() {
    this.isOpen = false;
  }

  private _onSecondaryClick(e: Event) {
    const event = new CustomEvent('secondaryClick', {bubbles: true, composed: true, cancelable: true});
    this.dispatchEvent(event);
    if (event.defaultPrevented) {
      e.preventDefault();
    }
    this.toggle();
  }

  private _onPrimaryClick(e: Event) {
    const event = new CustomEvent('primaryClick', {bubbles: true, composed: true, cancelable: true});
    this.dispatchEvent(event);
    if (event.defaultPrevented) {
      e.preventDefault();
    }
    this.toggle();
  }

  protected render() {
    return html`
      <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div
          class=${"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ease-in-out duration-300 ".concat(this.isOpen ? 'visible opacity-100' : 'invisible opacity-0')}></div>
        <div class=${"fixed inset-0 z-10 w-screen overflow-y-auto ".concat(this.isOpen ? 'visible' : 'invisible')}
             @click=${this.close}>
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              class=${"relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 ease-in-out duration-300 ".concat(this.isOpen ? 'opacity-100 translate-y-0 sm:scale-100' : 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95')}>
              <div class="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                ${this.hasDismissButton
                  ? html`
                    <button type="button"
                            class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span class="sr-only">Close</span>
                      <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                           aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>`
                  : null}
              </div>
              <div class="sm:flex sm:items-start">
                ${this.hasIcon
                  ? html`
                    <div
                      class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                           stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/>
                      </svg>
                    </div>`
                  : null}
                <div class=${"mt-3 text-center sm:mt-0 sm:text-left ".concat(this.hasIcon ? 'sm:ml-4' : '')}>
                  <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">${this.headline}</h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">${this.text}</p>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                <button type="button"
                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        @click=${this._onPrimaryClick}>
                  ${this.primaryButton}
                </button>
                <button type="button"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        @click=${this._onSecondaryClick}>
                  ${this.secondaryButton}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  }
}

declare global {
  interface DialogMap {
    "mauwi-dialog": Dialog;
  }
}
