<template>
  <Navbar />
  <div class="relative">
    <img
      :src="img"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-80">
      <div
        class="
          px-4
          py-16
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
          lg:py-10
        "
      >
        <div
          class="
            px-4
            py-16
            mx-auto
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            lg:px-8
            lg:py-20
          "
        >
          <div class="max-w-xl sm:mx-auto lg:max-w-2xl text-white">
            <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
              <div
                class="
                  max-w-xl
                  mb-10
                  md:mx-auto
                  sm:text-center
                  lg:max-w-2xl
                  md:mb-12
                  leading-8
                "
              >
                <h2
                  class="
                    max-w-lg
                    mb-6
                    font-sans
                    xl:text-6xl
                    text-3xl
                    font-bold
                    tracking-normal
                    text-white
                    sm:text-4xl
                    md:mx-auto
                    leading-8
                  "
                >
                  <span class="relative inline-block">
                    <svg
                      viewBox="0 0 52 24"
                      fill="currentColor"
                      class="
                        absolute
                        top-0
                        left-0
                        z-0
                        hidden
                        w-32
                        -mt-8
                        -ml-20
                        text-blue-gray-100
                        lg:w-32
                        lg:-ml-28 lg:-mt-10
                        sm:block
                      "
                    >
                      <defs>
                        <pattern
                          id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                          x="0"
                          y="0"
                          width=".135"
                          height=".30"
                        >
                          <circle cx="1" cy="1" r=".7"></circle>
                        </pattern>
                      </defs>
                      <rect
                        fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                        width="52"
                        height="24"
                      ></rect>
                    </svg>
                    Send Money to
                    <span class="relative inline-block px-2">
                      <div class="absolute inset-0 transform -skew-x-12"></div>
                      <span class="relative">Family</span>
                    </span>
                    <span class="relative inline-block px-2">
                      <div class="absolute inset-0 transform -skew-x-12"></div>
                      <span class="relative title">Everywhere</span>
                    </span>
                  </span>
                </h2>
                <p class="text-base text-white md:text-3xl">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque rem aperiam, eaque ipsa quae.
                </p>
              </div>
              <form
                class="
                  flex flex-col
                  items-center
                  w-full
                  mb-4
                  md:flex-row
                  md:px-16
                "
              >
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  class="
                    flex-grow
                    w-full
                    h-12
                    px-4
                    mb-3
                    text-black
                    transition
                    duration-200
                    border-2 border-transparent
                    rounded
                    appearance-none
                    md:mr-2
                    md:mb-0
                    bg-deep-purple-900
                    focus:border-teal-accent-700
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
                <a
                  href="/"
                  class="
                    inline-flex
                    items-center
                    btn-action-button
                    justify-center
                    w-full
                    h-12
                    px-6
                    font-semibold
                    tracking-wide
                    text-teal-900
                    transition
                    duration-200
                    rounded
                    shadow-md
                    md:w-auto
                    hover:text-deep-purple-900
                    bg-teal-accent-400
                    hover:bg-teal-accent-700
                    focus:shadow-outline
                    focus:outline-none
                  "
                >
                  Subscribe
                </a>
              </form>
              <a
                href="#exchange"
                aria-label="Scroll down"
                class="
                  flex
                  items-center
                  justify-center
                  w-20
                  h-20
                  mx-auto
                  text-white
                  duration-300
                  transform
                  border border-gray-400
                  rounded-full
                  hover:text-teal-accent-400
                  hover:border-teal-accent-400
                  hover:shadow
                  hover:scale-110
                  mt-12
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path
                    d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Hero Section Ends-->

  <!--- Echange Section -->
  <div id="exchange">
  <div
    class="
      px-4
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-16
      lg:px-auto
      lg:py-20
    "
  >
    <table
      class="
        w-full
        flex flex-row
        sm:bg-white
        rounded-lg
        overflow-hidden
        sm:shadow-lg
        my-5
      "
    >
      <thead class="text-black">
        <tr
          class="
            bg-teal-400
            flex flex-col flex-no
            wrap
            sm:table-row
            rounded-l-lg
            sm:rounded-none
            mb-2
            sm:mb-0
            border-t border-r border-gray-00
          "
        >
          <th class="p-3 xl:text-3xl border-r border-gray-00 text-center">
            Currency
          </th>
          <th class="p-3 xl:text-3xl border-r border-gray-00 text-center">
            Price
          </th>
          <th class="p-3 xl:text-3xl border-r border-gray-00 text-center">
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody
        class="flex-1 sm:flex-none"
        v-for="currency in info"
        :key="currency.symbol"
      >
        <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
          <td
            class="
              border-grey-light border
              xl:text-xl
              hover:bg-gray-100
              p-3
              mx-auto
            "
          >
            <div class="flex items-center justify-center">
              <img
                :src="currency.image"
                alt="avatar"
                class="object-cover w10 h-10 rounded-full shadow-sm"
              />
              <div>
                <p class="text-sm ml-4 xl:text-xl leading-4 text-gray-600">
                  {{ currency.name }}
                </p>
              </div>
            </div>
          </td>
          <td
            class="
              border-grey-light border
              xl:text-xl
              hover:bg-gray-100
              p-3
              truncate
            "
          >
            $ {{ currency.current_price }}
          </td>
          <td
            class="
              border-grey-light border
              hover:bg-gray-100
              p-3
              hover:font-medium
              cursor-pointer
              xl:text-xl
            "
          >
            {{ currency.market_cap }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
  <!--Exchange Section Ends -->

  <!--Next section Begins -->

  <div class="relative">
    <img
      src="https://images.unsplash.com/photo-1600633748503-9bc43cc48cca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div
        class="
          px-4
          py-16
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-1
          lg:py-20
        "
      >
        <div
          class="
            px-4
            py-16
            mx-auto
            sm:max-w-xl
            md:max-w-full
            lg:max-w-screen-xl
            md:px-24
            lg:px-8
            lg:py-20
          "
        >
          <div
            class="
              max-w-xl
              mb-10
              md:mx-auto
              sm:text-center
              lg:max-w-2xl
              md:mb-12
            "
          >
            <h2
              class="
                max-w-lg
                mb-6
                font-sans font-bold
                leading-none
                tracking-tight
                text-white
                sm:text-4xl
                md:mx-auto
                xl:text-5xl
                text-5xl
              "
            >
              Send money with <br />
              little or no <span class="title">Commission</span>.
            </h2>
            <p class="text-base text-white md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae.
            </p>
          </div>
          <div>
            <a
              href="/"
              class="
                inline-flex
                btn-action-button
                items-center
                justify-center
                h-12
                px-6
                font-medium
                tracking-wide
                text-white
                transition
                duration-200
                rounded
                shadow-md
                bg-deep-purple-accent-400
                hover:bg-deep-purple-accent-700
                focus:shadow-outline
                focus:outline-none
              "
            >
              Send Now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--End of New Section-->

  <!--Virtual Card Section -->
   <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col items-center justify-between lg:flex-row">
      <div class="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none text-left">
            Virtual Subscription <span class="title">Cards</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg text-left">
           Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
       
      </div>
      <div class="relative lg:w-1/2">
        <img
           class="object-contain w-full h-56 rounded sm:h-96"
            :src="img3"
            alt=""
          />
          <form
                class="
                  flex flex-col
                  items-center
                  w-full
                  mb-4
                  md:flex-row
                  md:px-16
                "
              >
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  class="
                    flex-grow
                    w-full
                    h-12
                    px-4
                    mb-3
                    text-white
                    transition
                    duration-200
                    border-2 border-gray-200
                    rounded
                    appearance-none
                    md:mr-2
                    md:mb-0
                    bg-deep-purple-900
                    focus:border-teal-accent-700
                    focus:outline-none
                    focus:shadow-outline
                    
                    
                  "
                />
                <a
                  href="/"
                  class="
                    inline-flex
                    items-center
                    btn-action-button
                    justify-center
                    w-full
                    h-12
                    px-6
                    font-semibold
                    tracking-wide
                    text-teal-900
                    transition
                    duration-200
                    rounded
                    shadow-md
                    md:w-auto
                    hover:text-deep-purple-900
                    bg-teal-accent-400
                    hover:bg-teal-accent-700
                    focus:shadow-outline
                    focus:outline-none
                  "
                >
                  Subscribe
                </a>
              </form>
        
      </div>
    </div>
  </div>
  
  <footercomponent />
</template>

<script>
import axios from "axios";
import footercomponent from "./footer.vue";
import Navbar from "./Navbar.vue";
export default {
  components: { Navbar, footercomponent },
  data() {
    return {
      img: require("../assets/5690591.jpg"),
      img3: require("../assets/virtualCard.jpeg"),

      info: null,
    };
  },

  methods: {
    apiCall: function () {
      axios
        .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
        .then(
          (response) =>
            (this.info = response.data.filter(
              (x) =>
                x.symbol == "btc" || x.symbol == "eth" || x.symbol == "usdt"
            ))
        );
    },

    intervalFetchData: function () {
      setInterval(() => {
        this.apiCall();
      }, 1000);
    },
  },

  mounted() {
    this.apiCall();
    this.intervalFetchData();
  },
};
</script>

<style>
</style>