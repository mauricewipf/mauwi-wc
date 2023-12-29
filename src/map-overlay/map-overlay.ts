import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";
import style from "./map-overlay.css?inline";

@customElement("mauwi-map-overlay")
export class MapOverlay extends TailwindElement(style) {
    @property({type: Boolean}) isOpen = true;

    toggle() {
        this.isOpen = !this.isOpen;
    }

    render() {
        return html`
            <div class="relative z-10" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                <div @click="${this.toggle}" class="'fixed ' + ${this.isOpen ? 'inset-0 overflow-hidden' : ''}"></div>
                <div class="absolute inset-0 overflow-hidden">
                    <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                        <div class="'pointer-events-auto w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ' + ${this.isOpen ? 'translate-x-0' : 'translate-x-full'}">
                            <div class="flex h-full flex-col divide-y divide-gray-200 bg-gray-100 shadow-xl">
                                <div class="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                                    <div class="px-4 sm:px-6">
                                        <div class="flex items-start justify-between">
                                            <h2 class="text-base font-semibold leading-6 text-gray-900"
                                                id="slide-over-title">Panel
                                                title</h2>
                                            <div class="ml-3 flex h-7 items-center">
                                                <button type="button"
                                                        @click="${this.toggle}"
                                                        class="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                                                    <span class="absolute -inset-2.5"></span>
                                                    <span class="sr-only">Close panel</span>
                                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                                         stroke-width="1.5"
                                                         stroke="currentColor"
                                                         aria-hidden="true">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              d="M6 18L18 6M6 6l12 12"/>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative mt-6 flex-1 px-4 sm:px-6">Content</div>
                                </div>
                                <div class="p-6 bg-white h-1/2 rounded-t-3xl">
                                    <h3 class="text-2xl mb-3">Screening Packages</h3>
                                    <div class="mb-4">
                                        <div class="flex justify-between">
                                            <div>Basic</div>
                                            <div>$ 999.00</div>
                                        </div>
                                        <div class="text-gray-400">Includes basic service</div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="flex justify-between">
                                            <div>Extended</div>
                                            <div>$ 299.00</div>
                                        </div>
                                        <div class="text-gray-400">Includes extended service</div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="flex justify-between">
                                            <div>Complete</div>
                                            <div>$ 599.00</div>
                                        </div>
                                        <div class="text-gray-400">Includes complete service</div>
                                    </div>
                                    <div class="mb-4">
                                        <div class="flex justify-between">
                                            <div>Exclusive</div>
                                            <div>$ 799.00</div>
                                        </div>
                                        <div class="text-gray-400">Includes exclusive service</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

}
