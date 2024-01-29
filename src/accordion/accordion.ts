import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";
import {minusIcon, plusIcon} from "./icons";

export interface AccordionProps {
  faqs: {
    question: string,
    answer: string,
  }[];
}

@customElement("mauwi-accordion")
export class Accordion extends TailwindElement() {
  @property() faqs: {
    question: string,
    answer: string,
  }[];
  @state() _faqs: {
    question: string,
    answer: string,
    id: string,
    collapsed: boolean,
  }[];

  connectedCallback() {
    super.connectedCallback();
    this._faqs = this.faqs?.map((faq, index) => (
      {...faq, id: index.toString(), collapsed: true}
    ));
  }

  protected render() {
    return html`
      <dl class="space-y-6 divide-y divide-gray-900/10">
        ${this._faqs
          ?.map((faq) => html`
            <div class="pt-6">
              <dt>
                <button type="button" class="flex w-full items-start justify-between text-left text-gray-900"
                        aria-controls=${"faq-" + faq.id} aria-expanded="false" @click=${() => this.toggle(faq.id)}>
                  <span class="text-base font-semibold leading-7">${faq.question}</span>
                  <span class="ml-6 flex h-7 items-center">
                    ${faq.collapsed
                      ? plusIcon
                      : minusIcon}
                  </span>
                </button>
              </dt>
              ${faq.collapsed
                ? null
                : html`
                  <dd class="mt-2 pr-12" id=${"faq-" + faq.id}>
                    <p class="text-base leading-7 text-gray-600">${faq.answer}</p>
                  </dd>`}
            </div>
          `)
        }
      </dl>
    `;
  }

  private toggle(id: string) {
    this._faqs = this._faqs.map((faq) => (faq.id === id
      ? {...faq, collapsed: !faq.collapsed}
      : {...faq}));
  }
}

declare global {
  interface AccordionMap {
    "mauwi-accordion": Accordion;
  }
}
