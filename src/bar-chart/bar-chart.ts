import {TailwindElement} from "../shared/tailwind.element";
import {customElement, property, state} from "lit/decorators.js";
import {html, PropertyValues} from "lit";
import mermaid from "mermaid";
import {XYChartThemeConfig} from "mermaid/dist/diagrams/xychart/chartBuilder/interfaces";

export interface BarChartProps {
  height: number;
  chartTitle: string;
  yAxisTitle: string;
  backgroundColor: string;
  textAndPlotColor: string;
  octoberRevenue: number;
  novemberRevenue: number;
  decemberRevenue: number;
}

@customElement("mauwi-bar-chart")
export class BarChart extends TailwindElement() {
  @property() height: number = 250;
  @property() chartTitle: string;
  @property() yAxisTitle: string;
  @property() backgroundColor: string = "rgb(255 255 255)";
  @property() textAndPlotColor: string = "rgb(17 24 39)";
  @property() octoberRevenue: number = 8500;
  @property() novemberRevenue: number = 7000;
  @property() decemberRevenue: number = 6000;

  private getThemeVariables(): string {
    const themeVariables: XYChartThemeConfig = {
      backgroundColor: this.backgroundColor,
      titleColor: this.textAndPlotColor,
      xAxisLabelColor: this.textAndPlotColor,
      xAxisLineColor: this.textAndPlotColor,
      xAxisTickColor: this.textAndPlotColor,
      xAxisTitleColor: this.textAndPlotColor,
      yAxisLabelColor: this.textAndPlotColor,
      yAxisLineColor: this.textAndPlotColor,
      yAxisTickColor: this.textAndPlotColor,
      yAxisTitleColor: this.textAndPlotColor,
      plotColorPalette: this.textAndPlotColor
    };
    return JSON.stringify(themeVariables);
  }

  private parser = new DOMParser();
  @state() svg: HTMLElement;

  private getXyChartDefinition = (oct: number, nov: number, dec: number) => {
    return `
    %%{init: { "themeVariables": {"xyChart": ${this.getThemeVariables()} } }}%%
    xychart-beta
        title "${this.chartTitle || null}"
        x-axis [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec]
        y-axis "${this.yAxisTitle}" 0 --> 12000
        bar [5000, 6000, 7500, 8200, 9500, 10500, 11000, 10200, 9200, ${this.isNumber(oct)}, ${this.isNumber(nov)}, ${this.isNumber(dec)}]
    `;
  }

  private isNumber = (input: any) => {
    return isFinite(input) ? input : 0;
  }

  connectedCallback() {
    super.connectedCallback();
    mermaid.initialize({
      startOnLoad: true,
      xyChart: {
        height: this.height,
        showTitle: !!this.chartTitle,
        xAxis: {
          showAxisLine: false,
          showTick: false,
        },
        yAxis: {
          showAxisLine: false,
          showTick: false,
        },
      },
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

declare global {
  interface BarChartMap {
    "mauwi-bar-chart": BarChart;
  }
}
