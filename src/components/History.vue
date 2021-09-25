<template>
  <div class="col-span-12">
    <div class="mx-auto px-4 sm:px-8 max-w-full">
      <div class="py-8">
        <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div
            class="
              inline-block
              min-w-full
              border border-yellow-200
              rounded-lg
              overflow-hidden
              shadow-xl
            "
          >
            <table class="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-center text-lg
                      font-bold
                      uppercase
                    "
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-center text-lg
                      font-bold
                      uppercase
                    "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-center text-lg
                      font-bold
                      uppercase
                    "
                  >
                    Wallet ID
                  </th>
                  <th
                    scope="col"
                    class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-center text-lg
                      font-bold
                      uppercase
                    "
                  >
                    Recipient
                  </th>
                  <th
                    scope="col"
                    class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-center text-lg
                      font-bold
                      uppercase
                    "
                  >
                    Currency
                  </th>
                  <th
                    scope="col"
                    class="
                      px-5
                      py-3
                      bg-white
                      border-b border-gray-200
                      text-gray-800 text-center text-lg
                      font-bold
                      uppercase
                    "
                  ></th>
                </tr>
              </thead>
              <tbody v-for="story in history" :key="story.amount" >
                <tr class="border-r border-gray-200">
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <div class="flex items-center">
                      <div class="ml-3">
                        <p class="text-gray-900 whitespace-no-wrap">
                          ${{ story.amount }}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p
                      :class="[story.sent ? 'text-red-400' : 'text-green-400']"
                      class="text-gray-900 whitespace-no-wrap"
                    >
                      {{ story.status }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ story.Wallet }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="
                        relative
                        inline-block
                        px-3
                        py-1
                        font-semibold
                        text-green-900
                        leading-tight
                      "
                    >
                      <span class="relative">
                        {{ story.receipient }}
                      </span>
                    </span>
                  </td>
                  <td
                    class="px-5 py-5 border-b  border-gray-200 bg-white text-sm"
                  >
                    <span
                      class="
                        relative
                        inline-block
                        px-3
                        py-1
                        font-semibold
                        text-black
                        leading-tight
                      "
                    >
                      <span
                        aria-hidden="true"
                        class="
                          absolute
                          inset-0
                          bg-yellow-400
                          opacity-50
                          rounded-full
                        "
                      >
                      </span>
                      <span class="relative">
                        {{ story.currency }}
                      </span>
                    </span>
                  </td>
                  <td
                    class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                  >
                    <button
                      class="
                        border
                        flex
                        justify-start
                        ml-0
                        xl:ml-4
                        border-yellow-200
                        text-black
                        py-1
                        px-6
                        mt-5
                        mb-5
                      "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              class="
                px-5
                bg-white
                py-5
                flex flex-col
                xs:flex-row
                items-center
                xs:justify-between
              "
            >
              <div class="flex items-center">
                <button
                  type="button"
                  class="
                    w-full
                    p-4
                    border
                    text-base
                    rounded-l-xl
                    text-gray-600
                    bg-white
                    hover:bg-gray-100
                  "
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  class="
                    w-full
                    px-4
                    py-2
                    border-t border-b
                    text-base text-indigo-500
                    bg-white
                    hover:bg-gray-100
                  "
                >
                  1
                </button>
                <button
                  type="button"
                  class="
                    w-full
                    px-4
                    py-2
                    border
                    text-base text-gray-600
                    bg-white
                    hover:bg-gray-100
                  "
                >
                  2
                </button>
                <button
                  type="button"
                  class="
                    w-full
                    px-4
                    py-2
                    border-t border-b
                    text-base text-gray-600
                    bg-white
                    hover:bg-gray-100
                  "
                >
                  3
                </button>
                <button
                  type="button"
                  class="
                    w-full
                    px-4
                    py-2
                    border
                    text-base text-gray-600
                    bg-white
                    hover:bg-gray-100
                  "
                >
                  4
                </button>
                <button
                  type="button"
                  class="
                    w-full
                    p-4
                    border-t border-b border-r
                    text-base
                    rounded-r-xl
                    text-gray-600
                    bg-white
                    hover:bg-gray-100
                  "
                >
                  <svg
                    width="9"
                    fill="currentColor"
                    height="8"
                    class=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      history: [
        {
          amount: 500,
          status: "Sent",
          Wallet: "21sd456sd554sd",
          currency: "USDT",
          receipient: "John Connor",
          sent: true,
        },
        {
          amount: 100,
          status: "Received",
          Wallet: "21sd456sd554sd",
          currency: "BNB",
          receipient: "John Connor",
          sent: false,
        },
        {
          amount: 580,
          status: "Sent",
          Wallet: "21sd456sd554sd",
          currency: "BTC",
          receipient: "John Connor",
          sent: true,
        },
        {
          amount: 500,
          status: "Sent",
          Wallet: "21sd456sd554sd",
          currency: "ETH",
          receipient: "John Connor",
          sent: true,
        },
        {
          amount: 500,
          status: "Received",
          Wallet: "21sd456sd554sd",
          currency: "BTC",
          receipient: "John Connor",
          sent: false,
        },
        {
          amount: 4500,
          status: "Received",
          Wallet: "21sd456sd554sd",
          currency: "BNB",
          receipient: "John Connor",
          sent: false,
        },
        {
          amount: 7500,
          status: "Sent",
          Wallet: "21sd456sd554sd",
          currency: "ETH",
          receipient: "John Connor",
          sent: true,
        },
        {
          amount: 500,
          status: "Sent",
          Wallet: "21sd456sd554sd",
          currency: "ETH",
          receipient: "John Connor",
          sent: true,
        },
        {
          amount: 500,
          status: "Sent",
          Wallet: "21sd456sd554sd",
          currency: "USDT",
          receipient: "John Connor",
          sent: true,
        },
        {
          amount: 505,
          status: "sent",
          Wallet: "21sd456sd554sd",
          currency: "BTC",
          receipient: "John Connor",
          sent: true,
        },
      ],
    };
  },
};
</script>
