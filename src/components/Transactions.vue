<template>
  <div class="lg:col-span-6 xl:col-span-3 2xl:col-span3 shadow-lg">
    <div class="bg-white rounded shadow-2xl p-7 sm:p-10 text-left">
      <h3
        class="
          mb-4
          xl:text-4xl
          text-xl
          font-semibold
          text-left
          sm:mb-6
          sm:text-2xl
          text-black
        "
      >
        Transfer Currency
      </h3>
      <form>
        <div class="mb-1 sm:mb-2">
          <div class="relative inline-block w-full text-gray-700">
            <select
              class="
                w-full
                bg-white
                text-black
                border border-gray-100
                h-12
                pl-3
                pr-6
                shadow-xl
                rounded-lg
                appearance-none
                focus:
                border-none
              "
              placeholder="Regular input"
              name="category"
              id="category"
            >
              <option class="text-lead">Select Currency</option>
              <option>BTC</option>
              <option>ETH</option>
              <option>USDT</option>
            </select>
            <div
              class="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                pointer-events-none
              "
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="mb-1 sm:mb-2 my-8">
          <input
            placeholder="Amount"
            required=""
            type="text"
            class="
              flex-grow
              w-full
              h-12
              px-4
              mb-2
              py-6
              transition
              duration-200
              bg-white
              shadow-xl
              border border-gray-100
              rounded
              text-black
              appearance-none
              focus:border-deep-purple-accent-400
              focus:outline-none
              focus:shadow-outline
            "
            id="amount"
            name="amount"
          />
        </div>

        <div class="mb-1 sm:mb-2 my-8">
          <input
            placeholder="Receiver's ID"
            required=""
            type="text"
            class="
              flex-grow
              shadow-xl
              w-full
              h-12
              px-4
              py-6
              mb-2
              transition
              duration-200
              bg-white
              border border-gray-100
              text-black
              rounded
              appearance-none
              focus:border-deep-purple-accent-400
              focus:outline-none
              focus:shadow-outline
            "
            id="Receiver"
            name="receiver"
          />
        </div>

        <div class="mt-4 mb-2 sm:mb-4 flex justify-center text-xl">
          <button
            class="border border-yellow-200 text-black py-1 px-6 mt-5 mb-5"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  </div>

  <div
    class="col-span-3 lg:col-span-6 xl:col-span-3 2xl:col-span-3 ml-0 xl:ml-16"
  >
    <div class="shadow-xl bg-white h-72">
      <h3 class="text-2xl text-gray-600 mt-0 xl:mt-16 pt-20">Balance</h3>
      <h1 class="price text-4xl text-yellow-400">$15,000</h1>
      <span class="text-gray-600">USD</span>
      <h3 class="font-bold text-gray-600 mt-6">
        Wallet ID: <span class="text-gray-600">2354HDHAKNKB</span>
      </h3>
    </div>
  </div>

  <div
    class="
      lg:col-span-6
      xl:col-span-3
      col-span-4
      2xl:col-span-3
      my-5
      mt-8
      ml-0
      xl:ml-6
    "
  >
    <div class="flex flex-col px-8">
      <div
        class="-my-2  sm:-mx-6 lg:-mx-8 bg-white shadow-xl h-80"
      >
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden sm:rounded-lg">
            <h3
              class="
                mt-5
                xl:text-2xl
                text-xl
                font-semibold
                text-left
                sm:mb-6
                sm:text-2xl
                text-black
              "
            >
              Transaction History
            </h3>
            <table class="min-w-full">
              <thead class="text-center">
                <tr>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-center text-lg text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Amount
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-center text-lg text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-center text-lg text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Recipient
                  </th>
                  <th
                    scope="col"
                    class="
                      px-6
                      py-3
                      text-center text-lg text-gray-500
                      uppercase
                      tracking-wider
                    "
                  >
                    Date
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr v-for="past in history" :key="past.amount">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          ${{ past.amount }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div
                      class="text-sm text-gray-900"
                      :class="[past.state ? 'text-red-600' : 'text-green-600']"
                    >
                      {{ past.status }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="
                        px-2
                        inline-flex
                        text-md
                        leading-5
                        font-semibold
                        rounded-full
                        text-gray-600
                      "
                    >
                      {{ past.recipient }}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ past.date }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-3 lg:col-span-6 xl:col-span-3 ml-0 xl:ml-16 mt-6">
    <div class="shadow-2xl bg-white h-64 2xl:h-64 w-full">
      <h3 class="text-3xl text-gray-800 pt-6">Coming Soon</h3>
      <img src="../assets/stack-crypto.jpg" class="w-full h-full mb-8" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Transaction",
  data() {
    return {
      history: [
        {
          amount: "500",
          status: "Sent",
          recipient: "Marcus",
          date: Date.now(),
          time: "12:51pm",
          state: false,
        },
        {
          amount: "100",
          status: "failed",
          recipient: "Marcus",
          date: Date.now(),
          time: "12:51pm",
          state: true,
        },
      ],
    };
  },
};
</script>
