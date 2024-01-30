import type {Preview} from "@storybook/web-components";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'bg-slate-50',
      values: [
        {
          name: 'bg-slate-50',
          value: 'rgb(248 250 252)',
        },
        {
          name: 'bg-white',
          value: 'rgb(255 255 255)',
        },
        {
          name: 'bg-black',
          value: 'rgb(0 0 0)',
        },
      ],
    },
  },
};

export default preview;
