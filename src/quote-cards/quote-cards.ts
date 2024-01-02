import {html} from "lit";
import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";

export interface QuoteCardsProps {
  cards: QuoteCard[];
}

export interface QuoteCard {
    author: string;
    text: string;
    date: string;
    rating?: number;
    color?: string;
}

@customElement("mauwi-quote-cards")
export class QuoteCards extends TailwindElement() {
  @property() cards: QuoteCard[];

  private renderQuoteCard({text, author, date}: QuoteCard) {
      return html`
          <div class="bg-gray-950 text-gray-200 rounded-sm shadow-sm p-4 h-64 w-96 text-lg font-sans tracking-wide relative flex-none">
              <div class="float-left pe-4 h-56">
                  <span class="text-9xl font-serif">“</span>
              </div>
              <p class="line-clamp-6">${text}</p>
              <p class="text-gray-400">—&nbsp;${author}</p>
              <p class="text-gray-400 flex justify-end self-end absolute bottom-4 right-4">${date}</p>
          </div>
      `;
  }

  render() {
    return html`
      <Host>
        <div class="flex flex-nowrap gap-4 overflow-auto">
        ${
          this.cards.map((card) => this.renderQuoteCard(card))
        }
        </div>
      </Host>
    `;
  }

}
