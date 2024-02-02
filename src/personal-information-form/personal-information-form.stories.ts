import {Meta, StoryObj} from '@storybook/web-components';
import {html} from "lit";
import "./personal-information-form";

export default {
  title: 'components/PersonalInformationForm',
  tags: ['autodocs'],
  render: (args) => html`
    <div class="flex flex-row gap-x-4 items-end">
      <div class="basis-1/2">
        <mauwi-personal-information-form
        ></mauwi-personal-information-form>
        <script>
          document.getElementsByTagName("mauwi-personal-information-form")[0].addEventListener("submitted", (e) => {
            document.getElementById("output").innerText = JSON.stringify(e.target.data, null, '\t');
          })
        </script>
      </div>
      <div class="basis-1/2">
        <div class="bg-gray-900 rounded-2xl text-gray-300 font-mono">
          <div class="p-6">
            <p >Output:</p>
            <span id="output">[Placeholder]</span>
          </div>
        </div>
      </div>
    </div>
  `,
} satisfies Meta;

export const Default: StoryObj = {
  args: {
  },
};