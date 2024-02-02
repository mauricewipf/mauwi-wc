import {customElement, property, state} from "lit/decorators.js";
import {html, nothing} from "lit";
import {TailwindElement} from "../shared/tailwind.element";
import style from "./multi-page-form.css?inline";

export interface MultiPageFormProps {
  action?: string;
}

@customElement("mauwi-multi-page-form")
export class MultiPageForm extends TailwindElement(style) {
  @property() action: string;
  @state() numberPages: number = 4;
  @state() currentPage: number = 4;

  private nextPage = () => {
    this.currentPage++;
  }

  private previousPage = () => {
    this.currentPage--;
  }

  private renderProgessNav(numberPages: number, currentPage: number) {
    return html`
      <div class="flex items-center justify-between mb-4">
        <nav aria-label="Progress">
          <ol role="list" class="flex items-center">
            ${this.renderList()}
          </ol>
        </nav>
      </div>
    `;
  }

  private renderList = () => {
    const listElements = [];
    for (let i = 1; i <= this.numberPages; i++) {
      if (i === this.currentPage) {
        listElements.push(this.getCurrentStep(i));
      } else if (i < this.currentPage) {
        listElements.push(this.getCompletedStep(i));
      } else {
        listElements.push(this.getUpcomingStep(i));
      }
    }
    return listElements;
  }

  private getCompletedStep = (step: number) => {
    return html`
      <li class="relative ${step === this.numberPages ? '' : 'pr-8 sm:pr-20'}">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-0.5 w-full bg-indigo-600"></div>
        </div>
        <a href="#"
           class="relative flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 hover:bg-indigo-900">
          <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clip-rule="evenodd"/>
          </svg>
          <span class="sr-only">Step ${step}</span>
        </a>
      </li>`;
  }

    private getCurrentStep = (step: number) => {
      return html`
          <li class="relative ${step === this.numberPages ? '' : 'pr-8 sm:pr-20'}">
          <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="h-0.5 w-full bg-gray-200"></div>
          </div>
          <a href="#" class="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white" aria-current="step">
              <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" aria-hidden="true"></span>
              <span class="sr-only">Step ${step}</span>
          </a>
          </li>`;
    }

    private getUpcomingStep = (step: number) => {
      return html`<li class="relative ${step === this.numberPages ? '' : 'pr-8 sm:pr-20'}">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="h-0.5 w-full bg-gray-200"></div>
      </div>
      <a href="#" class="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400">
          <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true"></span>
          <span class="sr-only">Step ${step}</span>
      </a>
      </li>`;
    }

  private renderPage = (pageNumber: number) => {
    switch (pageNumber) {
      case 1:
        return html`<form class="space-y-6 h-[30rem]" action="#" method="POST">
          <div>
            <label htmlFor="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" type="email" autocomplete="email" required
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <label htmlFor="fullName" class="block text-sm font-medium leading-6 text-gray-900">Full name</label>
            <div class="mt-2">
              <input id="fullName" name="fullName" type="text" autocomplete="current-fullName" required
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
        </form>`;
      case 2:
        return html`<form class="space-y-6 h-[30rem]" action="#" method="POST">
          <div class="col-span-full">
            <label htmlFor="street-addressline-one" class="block text-sm font-medium leading-6 text-gray-900">Street
              address line 1</label>
            <div class="mt-2">
              <input type="text" name="street-address-one" id="street-addressline-one"
                     autocomplete="street-addressline-one"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="col-span-full">
            <label htmlFor="street-addressline-two" class="block text-sm font-medium leading-6 text-gray-900">Street
              address line 2</label>
            <div class="mt-2">
              <input type="text" name="street-address-two" id="street-addressline-two"
                     autocomplete="street-addressline-two"
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div class="col-span-full">
            <label htmlFor="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
            <div class="mt-2">
              <select id="country" name="country" autocomplete="country-name" class="form-input-2">
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
                <option>Germany</option>
              </select>
            </div>
          </div>
        </form>`;
      case 3:
        return html`<form class="space-y-6 h-[30rem]" action="#" method="POST">
          <fieldset>
            <legend class="sr-only">Notifications</legend>
            <div class="space-y-5">
              <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                  <input id="comments" aria-describedby="comments-description" name="comments" type="checkbox"
                         class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                </div>
                <div class="ml-3 text-sm leading-6">
                  <label htmlFor="comments" class="font-medium text-gray-900">Comments</label>
                  <p id="comments-description" class="text-gray-500">Get notified when someones posts a comment on a
                    posting.</p>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                  <input id="candidates" aria-describedby="candidates-description" name="candidates" type="checkbox"
                         class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                </div>
                <div class="ml-3 text-sm leading-6">
                  <label htmlFor="candidates" class="font-medium text-gray-900">Candidates</label>
                  <p id="candidates-description" class="text-gray-500">Get notified when a candidate applies for a
                    job.</p>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                  <input id="offers" aria-describedby="offers-description" name="offers" type="checkbox"
                         class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                </div>
                <div class="ml-3 text-sm leading-6">
                  <label htmlFor="offers" class="font-medium text-gray-900">Offers</label>
                  <p id="offers-description" class="text-gray-500">Get notified when a candidate accepts or rejects an
                    offer.</p>
                </div>
              </div>
            </div>
          </fieldset>
        </form>`;
      case 4:
        return html`<form class="space-y-6 h-[30rem]" action="#" method="POST">
          <fieldset>
            <legend class="text-base font-semibold text-gray-900">Select a side</legend>
            <div class="mt-4 divide-y divide-gray-200 border-b border-t border-gray-200">
              <div class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm leading-6">
                  <label htmlFor="side-null" class="select-none font-medium text-gray-900">None</label>
                </div>
                <div class="ml-3 flex h-6 items-center">
                  <input id="side-null" name="plan" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
              </div>
              <div class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm leading-6">
                  <label htmlFor="side-1" class="select-none font-medium text-gray-900">Baked beans</label>
                </div>
                <div class="ml-3 flex h-6 items-center">
                  <input id="side-1" name="plan" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
              </div>
              <div class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm leading-6">
                  <label htmlFor="side-2" class="select-none font-medium text-gray-900">Coleslaw</label>
                </div>
                <div class="ml-3 flex h-6 items-center">
                  <input id="side-2" name="plan" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
              </div>
              <div class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm leading-6">
                  <label htmlFor="side-3" class="select-none font-medium text-gray-900">French fries</label>
                </div>
                <div class="ml-3 flex h-6 items-center">
                  <input id="side-3" name="plan" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
              </div>
              <div class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm leading-6">
                  <label htmlFor="side-4" class="select-none font-medium text-gray-900">Garden salad</label>
                </div>
                <div class="ml-3 flex h-6 items-center">
                  <input id="side-4" name="plan" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
              </div>
              <div class="relative flex items-start py-4">
                <div class="min-w-0 flex-1 text-sm leading-6">
                  <label htmlFor="side-5" class="select-none font-medium text-gray-900">Mashed potatoes</label>
                </div>
                <div class="ml-3 flex h-6 items-center">
                  <input id="side-5" name="plan" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
                </div>
              </div>
            </div>
          </fieldset>
        </form>`;
    }
  }

  render() {
    return html`
      <div class="font-sans flex w-[24rem]">
        <div class="bg-white p-6 shadow rounded-lg">

          ${this.renderProgessNav(this.numberPages, this.currentPage)}

          <form>
            ${this.currentPage === 1 ? this.renderPage(1) : nothing}
            ${this.currentPage === 2 ? this.renderPage(2) : nothing}
            ${this.currentPage === 3 ? this.renderPage(3) : nothing}
            ${this.currentPage === 4 ? this.renderPage(4) : nothing}

            <nav class="flex items-center justify-between border-t border-gray-200 pt-3" aria-label="Pagination">
              <div class="flex flex-1 ${this.currentPage === 1 ? 'justify-end' : 'justify-between'}">
                ${
                  this.currentPage !== 1
                    ? html`
                      <button @click="${this.previousPage}" class="btn btn-tertiary">Previous</button>`
                    : nothing
                }
                ${
                  this.currentPage !== this.numberPages
                    ? html`
                      <button @click="${this.nextPage}" class="btn btn-tertiary">Next</button>`
                    : nothing
                }
                ${
                  this.currentPage === this.numberPages
                    ? html`
                      <button class="btn btn-primary">Submit</button>`
                    : nothing
                }
              </div>
            </nav>
          </form>

        </div>
      </div>
    `;
  }

}
