<template>
  <div class="col-span-2">
    <div class="shadow-xl">
      <div class="flex flex-col items-center mt-6 -mx-2">
        <img
          class="object-cover w-44 h-44 mx-2 rounded-full"
          src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt="avatar"
        />

        <h4
          class="
            mx-
            mt-3
            font-medium
            text-gray-800
            dark:text-gray-200
            flex
            mr-4
          "
        >
          <span class="title text-lg mr-5">Balance:</span>
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
              d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
            />
          </svg>
        </h4>
        <div
          class="flex flex-wrap overflow-hidden xl:-mx-4"
          v-for="money in prices"
          :key="money.btc"
        >
          <div
            class="
              w-2/5
              overflow-hidden
              lg:my-10
              lg:px-10
              xl:my-4
              xl:px-4
              xl:w-1/3
            "
          >
            <span class="text-sm text-gray-800">{{ money.btc }} BTC</span>
          </div>

          <div
            class="
              w-2/5
              overflow-hidden
              lg:my-10
              lg:px-10
              xl:my-4
              xl:px-4
              xl:w-1/3
            "
          >
            <span class="text-sm text-gray-800">{{ money.eth }} ETH</span>
          </div>

          <div
            class="
              w-1/2
              overflow-hidden
              lg:my-10
              lg:px-10
              xl:my-4
              xl:px-4
              xl:w-1/3
            "
          >
            <span class="text-gray-800 text-sm">${{ money.dollar }}</span>
          </div>
        </div>

        <button class="border border-yellow-200 text-black py-1 px-6 mt-5 mb-5">
          SEND
        </button>
      </div>
    </div>
  </div>

  <div class="col-span-4">
    <div class="shadow-xl">
      <div class="flex flex-col items-center mt-6 -mx-2 py-8">
        <h1 class="text-black text-xl">Carousel card</h1>
      </div>
    </div>
  </div>
  <div class="col-span-3 mt-5">
    <div
      class="
        max-w-2xl
        px-8
        py-4
        mx-auto
        bg-white
        rounded-lg
        shadow-md
        dark:bg-gray-800
      "
    >
      <div class="flex items-center justify-between">
        <span class="text-xl text-gray-600 dark:text-gray-400">Wallet</span>
        <a
          class="
            px-3
            py-1
            text-sm
            font-bold
            text-black
            transition-colors
            duration-200
            transform
            bg-white
            shadow-xl
            rounded
            cursor-pointer
          "
          ><svg
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
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            /></svg
        ></a>
      </div>

      <div class="flex items-center justify-between mt-4">
        <div class="text-center">
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mx-auto
              text-gray-600
            "
          >
            <h1 class="text-lg">Assets</h1>
          </div>
          <h6 class="text-gray-900 text-lg font-bold leading-5">3</h6>
        </div>
        <div class="text-center">
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mx-auto
              text-gray-600
            "
          >
            <h1 class="text-lg">Balance</h1>
          </div>
          <h6 class="text-gray-900 text-lg font-bold leading-5">$1200</h6>
        </div>
        <div class="text-center">
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              mx-auto
              text-gray-600
            "
          >
            <h1 class="text-lg">Assets</h1>
          </div>
          <h6 class="text-gray-900 text-lg font-bold leading-5">3</h6>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-3 mt-4">
    <div
      class="
        max-w-2xl
        px-8
        py-4
        mx-auto
        bg-white
        rounded-lg
        shadow-xl
        dark:bg-gray-800
      "
    >
      <div class="flex items-center justify-between">
        <span class="text-xl text-gray-600 dark:text-gray-400"
          >Transactions</span
        >
        <a
          class="
            px-3
            py-1
            text-sm
            font-bold
            text-black
            transition-colors
            duration-200
            transform
            bg-white
            shadow-xl
            rounded
            cursor-pointer
          "
          ><svg
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
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            /></svg
        ></a>
      </div>

      <div
        class="flex flex-wrap overflow-hidden lg:-mx-10 xl:-mx-4 text-left"
        v-for="info in card"
        :key="info.price"
      >
        <div
          class="
            w-1/2
            overflow-hidden
            lg:my-10
            lg:px-10
       
            xl:px-4
            xl:w-1/3
          "
        >
          <span :class="[info.sent ? 'text-red-400' : 'text-green-400']">{{
            info.price
          }}</span>
        </div>

        <div
          class="
            w-1/2
            overflow-hidden
            lg:my-10
            lg:px-10
           
            xl:px-4
            xl:w-1/3
          "
        >
          <span class="text-gray-600">{{ info.text }}</span>
        </div>

        <div
          class="
            w-1/2
            overflow-hidden
            lg:my-10
            lg:px-10
            xl:my-4
            xl:px-4
            xl:w-1/3
          "
        >
          <span class="text-gray-600">{{ info.name }}</span>
        </div>
      </div>
    </div>
  </div>
  <div class="col-span-6 ml-6">
    <div
      class="
        flex flex-wrap
        overflow-hidden
        lg:-mx-12
        border border-gray-200
        xl:-mx-6
        shadow-xl
      "
    >
      <div
        class="w-4/5 overflow-hidden lg:my-6 lg:px-12 xl:my-6 xl:px-6 xl:w-4/5"
      >
        <h2
          class="
            font-sans
            text-left
            ml-4
            text-3xl
            font-bold
            tracking-tight
            text-gray-600
          "
        >
          Invite friends and Win!
        </h2>
        <p class="max-w-2xl font-bold ml-0 xl:-ml-4 text-gray-600 text-lg">
          Get as high as $1000 from inviting friends and family into the
          platform
        </p>
        <button
          class="
            border
            flex
            justify-start
            ml-0
            xl:ml-4
            border-yellow-200
            bg-yellow-400
            text-black
            py-1
            px-6
            mt-5
            mb-5
          "
        >
          Invite Friends
        </button>
      </div>

      <div
        class="w-1/5 overflow-hidden lg:my-12 lg:px-12 xl:my-6 xl:px-6 xl:w-1/5"
      >
        <img
          src="https://mdbootstrap.com/img/new/standard/city/026.jpg"
          alt="..."
          class="rounded object-fit w-auto h-auto border-none"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "DashMain",
  data() {
    return {
      prices: [
        {
          btc: "0.000387",
          eth: "0.002545",
          dollar: "2300",
        },
      ],
      card: [
        {
          price: "$250",
          text: "Received from",
          name: "Emilia",
          sent: false,
        },
        {
          price: "$200",
          text: "sent to",
          name: "Deborah",
          sent: true,
        },
        {
          price: "$250",
          text: "Received from",
          name: "Emily",
          sent: false,
        },
      ],
    };
  },
};
</script>
<style lang="">
</style>