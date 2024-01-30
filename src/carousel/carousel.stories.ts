import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./carousel";
import {CarouselProps} from "./carousel";

export default {
  title: 'components/Carousel',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="w-1/2">
      <mauwi-carousel
        .images="${args.images}"
        .aspectRatio="${args.aspectRatio}"
      ></mauwi-carousel>
    </div>
  `,
} satisfies Meta<CarouselProps>;

export const Default: StoryObj<CarouselProps> = {
  args: {
    images: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    aspectRatio: "square",
  },
};