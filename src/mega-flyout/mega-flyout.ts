import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";
import style from "./mega-flyout.css?inline";

export interface MegaFlyoutProps {
  isOpen: boolean;
  headline: string;
  linkSections: Array<LinkSection & { order: number }>
}

export interface LinkSection {
  headline: string;
  links: Array<{
    label: string;
    url: string;
  }>
}

@customElement("mauwi-mega-flyout")
export class MegaFlyout extends TailwindElement(style) {
  @property() linkSections: Array<LinkSection & { order: number }>;
  @property() isOpen: boolean = false;
  @property() headline: string = 'Mega Flyout Menu';

  toggleFlyout() {
    this.isOpen = !this.isOpen;
  }

  private renderLinkSection({headline, links}: LinkSection) {
    return html`
      <div>
        <div class="font-bold pb-2 mb-2 border-b-2">${headline}</div>
        <ul class="space-y-0 list-inside list-image-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgc3Ryb2tlLXdpZHRoPSIxLjUiCiAgICAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiIGhlaWdodD0iMTJweCIgY2xhc3M9InctNiBoLTYiPgogIDxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTE3LjI1IDguMjVMMjEgMTJtMCAwbC0zLjc1IDMuNzVNMjEgMTJIMyIvPgo8L3N2Zz4K')]">${
        links?.map(link => html`
            <li class="p-2 rounded-lg hover:bg-sky-100 active:bg-sky-200"><a href=${link.url}>${link.label}</a></li>
          `)}</ul>
      </div>
    `;
  }

  render() {
    return html`
      <div class="mega-flyout ${this.isOpen ? 'open' : ''}">
        <button class="cursor-pointer bg-none border-none text-3xl hover:bg-sky-100 active:bg-sky-200 pb-1 px-1 rounded-md"
                @click="${this.toggleFlyout}">☰
        </button>
        <div class="menu-container">
          <div class="text-xl mb-3">${this.headline}</div>
          <div class="grid grid-cols-3 gap-x-16 gap-y-8">${
              this.linkSections
                ?.map(linkSection => this.renderLinkSection(linkSection))}
          </div>
        </div>
      </div>
    `;
  }
}
