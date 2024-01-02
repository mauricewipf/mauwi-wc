import mermaid from 'mermaid';
import {customElement} from "lit/decorators.js";
import {TailwindElement} from "../../shared/tailwind.element";

@customElement(("mauwi-xy-chart"))
export class XYChart extends TailwindElement() {
  @Element() el: HTMLElement;
  private xyChartDefinition = `xychart-beta
    title "Availability"
    x-axis [SUN, MON, TUE, WED, THU, FRI, SAT]
    y-axis "Chance (in %)" 0 --> 100
    line [50, 60, 100, 100, 80, 55, 60]`;

  componentDidLoad() {
    mermaid.initialize({
      startOnLoad: true,
      xyChart: {
        height: 250,
        showTitle: false,
      }
    });
  }

  componentDidRender() {
    if (this.el) {
      mermaid.render('xy-chart', this.xyChartDefinition)
        .then(({ svg }) => {
          this.el.innerHTML = svg;
        });
    }
  }

  render() {
    return null;
  }
}
