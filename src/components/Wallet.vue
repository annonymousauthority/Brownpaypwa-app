<template >
  <div class="col-span-3 2xl:col-span-3 xl:col-span-3 lg:col-span-6">
    <div class="flex flex-wrap overflow-hidden bg-white">
      <div
        class="
          w-full
         
          overflow-hidden
          lg:my-3
          lg:px-3
          lg:w-full
          xl:my-4
          xl:px-4
          xl:w-full
          mx-auto
        "
      >
        <h3 class="text-3xl text-gray-800 font-bold pt-18 text-left">
          My Wallet
        </h3>
        <div class="mt-8">
          <h4 class="text-2xl text-gray-800 text-center">Total Balance</h4>
          <span class="text-4xl text-gray-600 text-center"> $80,000 </span>
          <div class="mt-8">
            <div class="grid  lg:grid-cols-3">
              <div class="sm:mx-auto sm:text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-4
                    h-4
                    mb-4
                    rounded-full
                    bg-white
                    shadow-2xl
                    sm:mx-auto
                    sm:w-16
                    sm:h-16
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-black text-2xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                    />
                  </svg>
                </div>
                <h6 class="mb-3 text-xl text-gray-900 font-bold leading-5">
                  Send
                </h6>
              </div>

              <div class="sm:mx-auto sm:text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-8
                    h-8
                    mb-4
                    rounded-full
                    bg-white
                    shadow-2xl
                    sm:w-16
                    sm:h-16
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
                <h6 class="mb-3 text-xl font-bold leading-5 text-black">
                  Receive
                </h6>
              </div>
              <div class="max-w-md sm:mx-auto sm:text-center">
                <div
                  class="
                    flex
                    items-center
                    justify-center
                    w-16
                    h-16
                    mb-4
                    rounded-full
                    bg-white
                    shadow-2xl
                    sm:mx-auto
                    sm:w-16
                    sm:h-16
                  "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                    />
                  </svg>
                </div>
                <h6 class="mb-3 text-xl font-bold leading-5 text-black">
                  Swap
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div
          class="
            flex
            items-center
            mt-8
            shadow-4xl
            justify-between
            shadow-2xl
            px-8
            mb-8     
          "
          v-for="money in wallet"
          :key="money"
        >
          <div class="flex justify-start items-center pt-3 pb-3">
            <img
              class="object-cover h-10 rounded-full object-left"
              :src="money.img"
              alt="Avatar"
            />
            <a
              href="#"
              class=" font-semibold text-gray-700 dark:text-gray-200 mx-4"
              >{{ money.name }}</a
            >
          </div>
          <span class="flex justify-end text-black">{{ money.amount }}</span>
        </div>
      </div>
    </div>
  </div>

  <!----Second Panel-->
  <div class="col-span-3 2xl:col-span-3 xl:col-span-3 lg:col-span-6">
    <div class="bg-white rounded shadow-2xl p-7 sm:p-10 text-left">
      <h3
        class="
          mb-4
          xl:text-2xl
          font-bold
          text-xl
          text-left
          sm:mb-6
          sm:text-2xl
          text-black
        "
      >
        Convert Currency
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
        <div class="mb-1 sm:mb-2 my-18">
          <input
            placeholder="Amount"
            required=""
            type="text"
            class="
              flex-grow
              w-full
              h-12
              px-4
              mt-3
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
            <option class="text-lead">Convert to</option>
            <option>BTC</option>
            <option>ETH</option>
            <option>USDT</option>
          </select>
        </div>

        <div class="mt-4 mb-2 sm:mb-4 flex justify-center text-md">
          <button
            class="border border-yellow-200 text-black py-1 px-6 mt-5"
          >
            Convert Currency
          </button>
        </div>
      </form>
    </div>
    <div class="mt-18">
      <div class="bg-white rounded shadow-2xl p-7 sm:p-10 text-left mt-16">
        <h3
          class="
            mb-4
            xl:text-2xl
            text-xl
            font-semibold
            text-left
            sm:mb-6
            sm:text-2xl
            text-black
          "
        >
         Buy Currency
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

          

          <div class="mt-4 mb-2 sm:mb-4 flex justify-center text-md">
            <button
              class="border border-yellow-200 text-black py-1 px-6 mt-2"
            >
            Buy
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    //images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60"
    https: return {
      wallet: [
        {
          name: "BITCOIN",
          img: require("../assets/bitcoin.png"),
          amount: "0.3256 BTC",
        },
        {
          name: "TETHER",
          img: require("../assets/tether.png"),
          amount: "14980.68 USDT",
        },
        {
          name: "BINANCE",
          img: require("../assets/coin.png"),
          amount: "35.894 BNB",
        },
        {
          name: "ETHEREUM",
          img: require("../assets/ethereum.png"),
          amount: "4.200 ETH",
        },
      ],
    };
  },
};
</script>
