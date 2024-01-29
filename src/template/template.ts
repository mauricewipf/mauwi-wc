import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";

export interface TemplateProps {
  myProperty: any;
}

@customElement("mauwi-template")
export class Template extends TailwindElement() {
  @property() myProperty: any;

  protected render() {
    return html`
      <div></div>
    `;
  }
}

declare global {
  interface TemplateMap {
    "mauwi-template": Template;
  }
}