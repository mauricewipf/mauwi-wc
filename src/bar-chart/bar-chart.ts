import {TailwindElement} from "../shared/tailwind.element";
import {customElement, property, state} from "lit/decorators.js";
import {html, PropertyValues} from "lit";
import mermaid from "mermaid";

@customElement("mauwi-bar-chart")
export class BarChart extends TailwindElement() {
  @property() octoberRevenue: number = 8500;
  @property() novemberRevenue: number = 7000;
  @property() decemberRevenue: number = 6000;

  private parser = new DOMParser();
  @state() svg: HTMLElement;

  private getXyChartDefinition = (oct: number, nov: number, dec: number) => {
    return `xychart-beta
    title "Sales Revenue"
    x-axis [jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec]
    y-axis "Revenue (in $)" 0 --> 11000
    bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, ${this.isNumber(oct)}, ${this.isNumber(nov)}, ${this.isNumber(dec)}]`;
  }

  private isNumber = (input: any) => {
    return isFinite(input) ? input : 0;
  }

  connectedCallback() {
    super.connectedCallback();
    mermaid.initialize({
      startOnLoad: true,
      xyChart: {
        height: 250,
        showTitle: false,
      }
    });
  }

  protected willUpdate(_changedProperties: PropertyValues) {
    if (_changedProperties.has('octoberRevenue')
      || _changedProperties.has('novemberRevenue')
      || _changedProperties.has('decemberRevenue')) {
      mermaid.render('xy-chart', this.getXyChartDefinition(this.octoberRevenue, this.novemberRevenue, this.decemberRevenue))
        .then(({svg}) => {
          this.svg = this.parser.parseFromString(svg, "image/svg+xml").documentElement;
        });
    }
  }

  render() {
    return html`${this.svg}`;
  }
}