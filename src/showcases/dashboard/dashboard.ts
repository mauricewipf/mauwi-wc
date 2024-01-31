import {customElement, property} from "lit/decorators.js";
import {TailwindElement} from "../../shared/tailwind.element";
import {html} from "lit";
import "../../bar-chart/bar-chart"
import "../../tabs/tabs";

export interface DashboardProps {
}

@customElement("mauwi-dashboard")
export class Dashboard extends TailwindElement() {
  @property() myProperty: any;

  protected render() {
    return html`
      <div class="mx-auto max-w-7xl">
        <h1 class="text-4xl font-bold text-gray-800">Dashboard</h1>

        <div class="mt-16">
          <mauwi-tabs .options=${["Overview", "Analytics", "Reports", "Notifications"]}></mauwi-tabs>
        </div>

        <div class="flex flex-row mt-6 gap-8">
          <div class="basis-1/4 p-8 shadow-md rounded-xl border-1 border-gray-200 bg-white">
            <div class="flex justify-between">
              <p class="text-sm text-gray-900">Total Revenue</p>
              <span class="text-gray-900">${currencyDollarIcon}</span>
            </div>
            <p class=" mt-3 text-3xl font-bold text-gray-900">$45,231.89</p>
            <p class="mt-1 text-gray-500">+20.1% from last month</p>
          </div>
          <div class="basis-1/4 p-8 shadow-md rounded-xl border-1 border-gray-200 bg-white">
            <div class="flex justify-between">
              <p class="text-sm text-gray-900">Subscriptions</p>
              <span class="text-gray-900">${userGroupIcon}</span>
            </div>
            <p class=" mt-3 text-3xl font-bold text-gray-900">+2,350</p>
            <p class="mt-1 text-gray-500">+180.1% from last month</p>
          </div>
          <div class="basis-1/4 p-8 shadow-md rounded-xl border-1 border-gray-200 bg-white">
            <div class="flex justify-between">
              <p class="text-sm text-gray-900">Sales</p>
              <span class="text-gray-900">${ticketIcon}</span>
            </div>
            <p class=" mt-3 text-3xl font-bold text-gray-900">+12,234</p>
            <p class="mt-1 text-gray-500">+19% from last month</p>
          </div>
          <div class="basis-1/4 p-8 shadow-md rounded-xl border-1 border-gray-200 bg-white">
            <div class="flex justify-between">
              <p class="text-sm text-gray-900">Active Now</p>
              <span class="text-gray-900">${signalIcon}</span>
            </div>
            <p class=" mt-3 text-3xl font-bold text-gray-900">573</p>
            <p class="mt-1 text-gray-500">+201 since last hour</p>
          </div>
        </div>

        <div class="flex flex-row mt-12 gap-8">
          <div class="basis-3/5 p-8 shadow-md rounded-xl border-1 border-gray-200 bg-white">
            <p class="text-lg font-bold">Overview</p>
            <p class="text-gray-500"></p>
            <div class="mt-4">
              <mauwi-bar-chart .height=${380} .yAxisTitle="${''}"></mauwi-bar-chart>
            </div>
          </div>

          <div class="basis-2/5 p-8 shadow-md rounded-xl border-1 border-gray-200 bg-white">
            <p class="text-lg font-bold">Recent Sales</p>
            <p class="text-gray-500">You made 265 sales this month.</p>
            <ul role="list" class="mt-2">
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
                       src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt="">
                  <div class="min-w-0 flex-auto">
                    <p class="leading-6 text-gray-900">Leslie Alexander</p>
                    <p class="mt-1 truncate text-xs text-gray-500">leslie.alexander@example.com</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="font-semibold text-gray-900">+$1,999.00</p>
                  <p class="mt-1 text-xs text-gray-500">
                    <time datetime="2023-01-23T13:23Z">3 hrs ago</time>
                  </p>
                </div>
              </li>
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
                       src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt="">
                  <div class="min-w-0 flex-auto">
                    <p class="leading-6 text-gray-900">Michael Foster</p>
                    <p class="mt-1 truncate text-xs text-gray-500">michael.foster@example.com</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="font-semibold leading-6 text-gray-900">+$39.00</p>
                  <p class="mt-1 text-xs text-gray-500">
                    <time datetime="2023-01-23T13:23Z">4 hrs ago</time>
                  </p>
                </div>
              </li>
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
                       src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt="">
                  <div class="min-w-0 flex-auto">
                    <p class="leading-6 text-gray-900">Dries Vincent</p>
                    <p class="mt-1 truncate text-xs text-gray-500">dries.vincent@example.com</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="font-semibold leading-6 text-gray-900">+$299.00</p>
                  <p class="mt-1 text-xs text-gray-500">
                    <time datetime="2023-01-23T13:23Z">1 day ago</time>
                  </p>
                </div>
              </li>
              <li class="flex justify-between gap-x-6 py-5">
                <div class="flex min-w-0 gap-x-4">
                  <img class="h-12 w-12 flex-none rounded-full bg-gray-50"
                       src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                       alt="">
                  <div class="min-w-0 flex-auto">
                    <p class="leading-6 text-gray-900">Courtney Henry</p>
                    <p class="mt-1 truncate text-xs text-gray-500">courtney.henry@example.com</p>
                  </div>
                </div>
                <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                  <p class="font-semibold leading-6 text-gray-900">+$39.00</p>
                  <p class="mt-1 text-xs text-gray-500">
                    <time datetime="2023-01-23T13:23Z">2 days ago</time>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    `;
  }
}

const currencyDollarIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
       class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
  </svg>
`;

const userGroupIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
       class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
  </svg>
`;

const signalIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
       class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
  </svg>
`;

const ticketIcon = html`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
       class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round"
          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 0 1 0 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 0 1 0-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375Z"/>
  </svg>
`;