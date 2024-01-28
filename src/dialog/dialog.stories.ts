import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./dialog";
import {DialogProps} from "./dialog";

export default {
  title: 'components/Dialog',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="h-64">
      <button type="button" @click=${() => document.getElementsByTagName("mauwi-dialog")[0].toggle()}> Toggle dialog</button>
      <mauwi-dialog
        .headline="${args.headline}"
        .text="${args.text}"
        .secondaryButton="${args.secondaryButton}"
        .primaryButton="${args.primaryButton}"
        .hasIcon="${args.hasIcon}"
        .hasDismissButton="${args.hasDismissButton}"
      ></mauwi-dialog>
    </div>
  `,
} satisfies Meta<DialogProps>;

export const Default: StoryObj<DialogProps> = {
  args: {
    headline: "Deactivate account",
    text: "Are you sure you want to deactivate your account? All of your data will be permanently removed from our servers forever. This action cannot be undone.",
    secondaryButton: "Cancel",
    primaryButton: "Deactivate",
    hasIcon: true,
    hasDismissButton: true,
  },
};