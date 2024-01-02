import {Meta, StoryObj} from '@storybook/html';
import {MegaFlyoutProps} from "./mega-flyout";

export default {
  title: 'components/MegaFlyout',
  tags: ['autodocs'],
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

const Template = (args: MegaFlyoutProps) => {
  const element: any = document.createElement('mauwi-mega-flyout');
  element.isOpen = args.isOpen;
  element.headline = args.headline;
  element.linkSections = args.linkSections;
  return element;
};

export const Primary: StoryObj<MegaFlyoutProps> = Template.bind({});
Primary.args = {
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
};
