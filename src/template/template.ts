import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../shared/tailwind.element";
import {html} from "lit";
import style from "./template.css?inline"; // Keep the 'inline'

export interface TemplateProps {
  myProperty: any;
}

@customElement("mauwi-template")
export class Template extends TailwindElement(style) {
  @property() myProperty: any;

  protected render() {
    return html`
      <div>Coming soon</div>
    `;
  }
}

declare global {
  interface TemplateMap {
    "mauwi-template": Template;
  }
}