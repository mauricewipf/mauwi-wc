import {Meta, StoryObj} from '@storybook/web-components';
import {MegaFlyoutProps} from "./mega-flyout";
import {html} from "lit";
import "./mega-flyout";

export default {
  title: 'showcases/MegaFlyout',
  tags: ['autodocs'],
  render: (args: MegaFlyoutProps) => html`
    <mauwi-mega-flyout
      isOpen="${args.isOpen}"
      headline="${args.headline}"
      .linkSections="${args.linkSections}"
    ></mauwi-mega-flyout>
  `,
  parameters: {
    backgrounds: {
      default: 'lightgrey',
      values: [
        {
          name: 'lightgrey',
          value: '#f8f8f8',
        },
      ],
    },
  },
} satisfies Meta<MegaFlyoutProps>;

export const Default: StoryObj<MegaFlyoutProps> = {
  args: {
    isOpen: true,
    headline: 'My Mega Menu',
    linkSections: [
      {
        order: 0,
        headline: 'Magnetic Moonlight',
        links: [
          {url: '#', label: 'Sunset Bliss'},
          {url: '#', label: 'Enchanted Forest'},
          {url: '#', label: 'Celestial Dreams'},
          {url: '#', label: 'Moonlit Serenade'},
          {url: '#', label: 'Pixel Ponder'},
        ]
      }, {
        order: 1,
        headline: 'Rustic Radiance',
        links: [
          {url: '#', label: 'Neon Nebula'},
          {url: '#', label: 'Techno Tango'},
          {url: '#', label: 'Whimsical Whirlwind'},
        ]
      }, {
        order: 3,
        headline: 'Enigmatic Echo',
        links: [
          {url: '#', label: 'Galactic Gourmet'},
          {url: '#', label: 'Aurora Amazement'},
          {url: '#', label: 'Mystic Mirage'},
          {url: '#', label: 'Jazzed Jigsaw'},
          {url: '#', label: 'Sapphire Symphony'},
        ]
      }, {
        order: 4,
        headline: 'Astral Adventure',
        links: [
          {url: '#', label: 'Lunar Lullaby'},
          {url: '#', label: 'Retro Rendezvous'},
          {url: '#', label: 'Oceanic Odyssey'},
        ]
      }, {
        order: 5,
        headline: 'Crimson Cascade',
        links: [
          { url: '#', label: 'Starlight Serendipity' },
          { url: '#', label: 'Velvet Voyage' },
          { url: '#', label: 'Ethereal Elegance' },
          { url: '#', label: 'Silent Symphony' },
        ]
      }, {
        order: 6,
        headline: 'Twilight Tango',
        links: [
          { url: '#', label: 'Iridescent Illusion' },
          { url: '#', label: 'Secret Solace' },
        ]
      },
    ],
  },
};
