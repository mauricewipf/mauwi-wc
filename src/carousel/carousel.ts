import {customElement, property, state} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";
import {arrowLeftIcon, arrowRightIcon} from "../shared/icons";

/*
Whitelabeled CSS:
Add Tailwind CSS classes to list that are concatenated like `aspect-${variable}`.
This prevents Tailwind from removing them during tree-shaking.
aspect-square
aspect-video
*/

export interface CarouselProps {
  images: string[];
  aspectRatio: "square" | "video";
}

@customElement("mauwi-carousel")
export class Carousel extends TailwindElement() {
  @property() images: string[];
  @property() aspectRatio: "square" | "video" = "video";
  @state() currentPage: number = 0;

  private translates = [];

  connectedCallback() {
    super.connectedCallback();
    for (let i = 0; i < this.images.length; i++) {
      this.translates.push({
        imageUrl: this.images[i],
        translate: "translate-x-full",
      })
    }
  }

  private _onNextClick() {
    this.translates[this.currentPage] = {
      imageUrl: this.translates[this.currentPage].imageUrl,
      translate: "-translate-x-full"
    }
    this.translates[this.currentPage+1] = {
      imageUrl: this.translates[this.currentPage].imageUrl,
      translate: "translate-x-full"
    }

    this.currentPage++;
  }

  private _onPreviousClick() {
    this.translates[this.currentPage] = {
      imageUrl: this.translates[this.currentPage].imageUrl,
      translate: "translate-x-full"
    }
    this.translates[this.currentPage-1] = {
      imageUrl: this.translates[this.currentPage].imageUrl,
      translate: "-translate-x-full"
    }

    this.currentPage--;
  }

  private renderImage(imageUrl: string, index: number) {
    return html`
      <div
        class="absolute h-full duration-700 ease-in-out ${this.currentPage === index ? '' : this.translates[index].translate} w-full rounded-lg bg-cover bg-no-repeat bg-center"
        style="background-image: url(${imageUrl});">
      </div>`;
  }
  protected render() {
    return html`
      <div class="flex items-center">
        <div class="justify-end mr-3 ${this.currentPage === 0 ? 'invisible' : ''}" @click=${this._onPreviousClick}>${arrowLeftIcon}</div>
        <div class="flex-1 aspect-${this.aspectRatio} flex justify-center shadow-lg rounded-lg relative overflow-hidden">
          ${this.images.map((image, index) => this.renderImage(image, index))}
        </div>
        <div class="justify-start ml-3 ${this.currentPage === this.images.length-1 ? 'invisible' : ''}" @click=${this._onNextClick}>${arrowRightIcon}</div>
      </div>
    `;

  }
}

declare global {
  interface CarouselMap {
    "mauwi-carousel": Carousel;
  }
}

