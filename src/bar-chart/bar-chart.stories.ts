import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./bar-chart";
import {BarChartProps} from "./bar-chart";

export default {
  title: 'components/BarChart',
  tags: ['autodocs'],
  render: (args) => html`
    <mauwi-bar-chart
      .height="${args.height}"
      .chartTitle="${args.chartTitle}"
      .yAxisTitle="${args.yAxisTitle}"
      .backgroundColor="${args.backgroundColor}"
      .textAndPlotColor="${args.textAndPlotColor}"
      .octoberRevenue="${args.octoberRevenue}"
      .novemberRevenue="${args.novemberRevenue}"
      .decemberRevenue="${args.decemberRevenue}"
    ></mauwi-bar-chart>
  `,
} satisfies Meta<BarChartProps>;

export const Default: StoryObj<BarChartProps> = {
  args: {
    height: 400,
    yAxisTitle: "Revenue in $",
    backgroundColor: "rgb(248 250 252)",
    textAndPlotColor: "rgb(17 24 39)",
    octoberRevenue: 8500,
    novemberRevenue: 7000,
    decemberRevenue: 10000,
  },
};