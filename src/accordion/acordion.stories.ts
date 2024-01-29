import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./accordion";
import {AccordionProps} from "./accordion";

export default {
  title: 'components/Accordion',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="bg-white">
      <div class="mx-auto max-w-7xl">
        <div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <mauwi-accordion
            .faqs="${args.faqs}"
          ></mauwi-accordion>
        </div>
      </div>
    </div>
  `,
} satisfies Meta<AccordionProps>;

export const Default: StoryObj<AccordionProps> = {
  args: {
    faqs: [
      {
        question: "What's the best thing about Switzerland?",
        answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
      {
        question: "How do you make holy water?",
        answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aut tempora vitae odio inventore fuga aliquam nostrum quod porro. Delectus quia facere id sequi expedita natus.",
      },
      {
        question: "What do you call someone with no body and no nose?",
        answer: "Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, voluptas ipsa quia excepturi, quibusdam natus exercitationem sapiente tempore labore voluptatem.",
      },
      {
        question: "Why do you never see elephants hiding in trees?",
        answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
      },
    ],
  },
};