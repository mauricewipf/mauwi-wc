import {MultiPageFormProps} from "./multi-page-form";
import {Meta, StoryObj} from "@storybook/web-components";
import {html} from "lit";
import "./multi-page-form"

export default {
  title: 'components/MultiPageForm',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="flex flex-row">
      <div class="basis-1/2">
        <mauwi-multi-page-form/>
        <script>
          document.getElementsByTagName("mauwi-multi-page-form")[0].addEventListener("submitted", (e) => {
            document.getElementById("output").innerText = JSON.stringify(e.target.data, null, '\t');
          })
        </script>
      </div>
      <div class="basis-1/2">
        <div class="bg-gray-900 rounded-2xl text-gray-300 font-mono">
          <div class="p-6">
            <p>Output:</p>
            <span id="output">[Placeholder]</span>
          </div>
        </div>
      </div>
    </div>
  `,
} satisfies Meta<MultiPageFormProps>;

export const Default: StoryObj<MultiPageFormProps> = {
  args: {
  },
};
