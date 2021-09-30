<template>
  <div
    class="xl:col-span-2 lg:col-span-3 sm:col-span-3 md:col-span-6"
    v-for="person in user"
    :key="person.name"
  >
    <div class="shadow-xl bg-white h-96">
      <div class="flex flex-col items-center mt-6">
        <img
          class="object-cover w-44 h-44 mx-2 rounded-full mt-5"
          :src="person.img"
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
          class="flex flex-wrap overflow-hidden lg:-mx-4 xl:-mx-1 md:mt-5"
          v-for="money in prices"
          :key="money.btc"
        >
          <div
            class="
              w-full
              overflow-hidden
              lg:my-4
              lg:px-4
              lg:w-1/3
              xl:my-1
              xl:px-1
              xl:w-1/3
              md:px-4
              md:w-1/3
            "
          >
            <span class="text-sm text-gray-800">{{ money.btc }} BTC</span>
          </div>

          <div
            class="
              w-full
              overflow-hidden
              lg:my-4
              lg:px-4
              lg:w-1/3
              xl:my-1
              xl:px-1
              xl:w-1/3
              md:px-4
              md:w-1/3
            "
          >
            <span class="text-sm text-gray-800">{{ money.eth }} ETH</span>
          </div>

          <div
            class="
              w-full
              overflow-hidden
              lg:my-4
              lg:px-4
              lg:w-1/3
              xl:my-1
              xl:px-1
              xl:w-1/3
              md:px-4
              md:w-1/3
            "
          >
            <span class="text-gray-800 text-sm">${{ money.dollar }}</span>
          </div>
        </div>

        <button
          class="
            border border-yellow-200
            lg:mt-0
            xl:mt-0
            md:mt-5
            text-black
            py-1
            px-6
            mb-0
            lg:mb-5
            xl:mb-3
          "
        >
          Send
        </button>
      </div>
    </div>
  </div>

  <div class="xl:col-span-4 lg:col-span-3 sm:col-span-3 md:col-span-6">
    <div class="shadow-xl">
      <div class="flex flex-col items-center mt-6 -mx-2">
        <div class="carousel-inner  relative overflow-hidden w-full h-96">
          <input
            class="carousel-open"
            type="radio"
            id="carousel-1"
            name="carousel"
            aria-hidden="true"
            hidden=""
            checked="checked"
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh">
            <div
              class="
                block
                h-full
                w-full
                bg-yellow-400
                text-white text-5xl text-center
              "
            >
              Slide 1
            </div>
          </div>
          <label
            for="carousel-3"
            class="
              prev
              control-1
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              text-3xl
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
            "
            >‹</label
          >
          <label
            for="carousel-2"
            class="
              next
              control-1
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              text-3xl
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
            >›</label
          >

          <!--Slide 2-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-2"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh">
            <div
              class="
                block
                h-full
                w-full
                bg-yellow-400
                text-white text-5xl text-center
              "
            >
              Slide 2
            </div>
          </div>
          <label
            for="carousel-1"
            class="
              prev
              control-2
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              text-3xl
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
            "
            >‹</label
          >
          <label
            for="carousel-3"
            class="
              next
              control-2
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              text-3xl
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
            >›</label
          >

          <!--Slide 3-->
          <input
            class="carousel-open"
            type="radio"
            id="carousel-3"
            name="carousel"
            aria-hidden="true"
            hidden=""
          />
          <div class="carousel-item absolute opacity-0" style="height: 50vh">
            <div
              class="
                block
                h-full
                w-full
                bg-yellow-400
                text-white text-5xl text-center
              "
            ></div>
          </div>
          <label
            for="carousel-2"
            class="
              prev
              control-3
              w-10
              h-10
              ml-2
              md:ml-10
              absolute
              cursor-pointer
              hidden
              text-3xl
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              left-0
              my-auto
            "
            >‹</label
          >
          <label
            for="carousel-1"
            class="
              next
              control-3
              w-10
              h-10
              mr-2
              md:mr-10
              absolute
              cursor-pointer
              hidden
              text-3xl
              font-bold
              text-black
              hover:text-white
              rounded-full
              bg-white
              hover:bg-blue-700
              leading-tight
              text-center
              z-10
              inset-y-0
              right-0
              my-auto
            "
            >›</label
          >

          <!-- Add additional indicators for each slide-->
        </div>
      </div>
    </div>
  </div>
  <div class="xl:col-span-3 sm:col-span-3 md:col-span-6 lg:col-span-3 mt-5">
    <div
      class="px-8 py-4 mx-auto bg-white rounded-lg shadow-xl dark:bg-gray-800"
    >
      <div class="flex items-center justify-between">
        <span class="text-2xl text-gray-600 dark:text-gray-400">Wallet</span>
        <a
          class="
            px-3
            py-1
            text-sm
            font-bold
            text-black
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

      <div class="flex items-center justify-between mb-5">
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
            <h3 class="text-2xl">Assets</h3>
          </div>
          <h6 class="text-gray-900 text-2xl font-bold leading-5">3</h6>
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
            <h3 class="text-2xl">Balance</h3>
          </div>
          <h6 class="text-gray-900 text-2xl font-bold leading-5">$1200</h6>
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
          ></div>
          <button
            class="border border-yellow-200 text-black py-1 px-6 mt-5 mb-5"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  </div>
  <div class="xl:col-span-3 lg:col-span-3 sm:col-span-3 md:col-span-6 mt-4">
    <div
      class="
        px-8
        h-56
        xl:py-4
        lg:py-0
        mx-auto
        bg-white
        rounded-lg
        shadow-xl
        dark:bg-gray-800
      "
    >
      <div class="flex items-center justify-between">
        <span class="text-2xl text-gray-600 dark:text-gray-400"
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
        class="flex flex-wrap overflow-hidden lg:-mx-3 xl:-mx-3"
        v-for="info in card"
        :key="info.price"
      >
        <div
          class="
            w-full
            overflow-hidden
            lg:my-3
            lg:px-3
            lg:w-1/3
            xl:my-3
            xl:px-3
            xl:w-1/3
            md:px-4
            md:w-1/3
            md:my-4
          "
        >
          <span :class="[info.sent ? 'text-red-400' : 'text-green-400']">{{
            info.price
          }}</span>
        </div>

        <div
          class="
            w-full
            overflow-hidden
            lg:my-3
            lg:px-3
            lg:w-1/3
            xl:my-3
            xl:px-3
            xl:w-1/3
            md:px-4
            md:w-1/3
              md:my-4
          "
        >
          <span class="text-gray-600">{{ info.text }}</span>
        </div>

        <div
          class="
            w-full
            overflow-hidden
            lg:my-3
            lg:px-3
            lg:w-1/3
            xl:my-3
            xl:px-3
            xl:w-1/3
            md:px-4
            md:w-1/3
              md:my-4
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
        bg-white
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
          dollar: "2300"
        }
      ],
      card: [
        {
          price: "$250",
          text: "Received from",
          name: "Emilia",
          sent: false
        },
        {
          price: "$200",
          text: "sent to",
          name: "Deborah",
          sent: true
        },
        {
          price: "$250",
          text: "Received from",
          name: "Emily",
          sent: false
        }
      ]
    };
  },
  computed: {
    user() {
      return this.$store.state.users;
    }
  }
};
</script>
<style lang="">
</style>