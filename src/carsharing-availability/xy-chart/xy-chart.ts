import mermaid from 'mermaid';
import {customElement, state} from "lit/decorators.js";
import {TailwindElement} from "../../shared/tailwind.element";
import {html} from "lit";

@customElement("mauwi-xy-chart")
export class XYChart extends TailwindElement() {
  private parser = new DOMParser();
  @state() svg: HTMLElement;

  private xyChartDefinition = `xychart-beta
    title "Availability"
    x-axis [SUN, MON, TUE, WED, THU, FRI, SAT]
    y-axis "Chance (in %)" 0 --> 100
    line [50, 60, 100, 100, 80, 55, 60]`;

  connectedCallback() {
    super.connectedCallback();
    mermaid.initialize({
      startOnLoad: true,
      xyChart: {
        height: 250,
        showTitle: false,
      }
    });
    mermaid.render('xy-chart', this.xyChartDefinition)
      .then(({svg}) => {
        this.svg = this.parser.parseFromString(svg, "image/svg+xml").documentElement;
      });
  }

  render() {
    return html`${this.svg}`;
  }
}
