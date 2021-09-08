<template>
  <Navbar />
  <div class="relative">
    <img
      :src="img"
      class="absolute inset-0 object-cover w-full h-full bg-auto"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75 flex flex-col-reverse">
      <div
        class="
          px-4
          py-16
          ml-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-12
          md:ml-1
          md:mr-20
          lg:px-1
          lg:ml-auto
          xl:px-80
          lg:py-20
        "
      >
        <div class="mx-auto lg:max-w-screen-xl">
          <div class="mb-16 lg:max-w-lg lg:mb-0">
            <div class="max-w-xl mb-6">
              <h2
                class="
                  max-w-lg
                  mb-6
                  font-sans
                  text-3xl
                  font-bold
                  text-white text-left
                  sm:text-4xl
                  sm:leading-none
                  xl:text-6xl
                "
              >
                Send Money <br />
                to family <br />
                everywhere<br class="hidden md:block" />
              </h2>
              <p class="text-base text-white text-left md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div>
              <form class="flex flex-col mx-auto items-start w-full mb-4 md:flex-row">
                <input
                  placeholder="Email"
                  required=""
                  type="text"
                  class="
                    flex-grow
                    w-2/3
                    sm:mx-auto
                    h-12
                    px-4
                    mb-3
                    transition
                    duration-200
                    bg-white
                    border border-gray-300
                    rounded
                    shadow-sm
                    appearance-none
                    md:mr-1
                    md:mb-0
                    focus:border-deep-purple-accent-400
                    focus:outline-none
                    focus:shadow-outline
                  "
                />
                <button
                  type="submit"
                  class="
                    inline-flex
                    btn-action-button
                    items-center
                    justify-center
                    w-2/3
                    h-12
                    px-6
                    font-medium
                    tracking-wide
                    text-white
                    transition
                    duration-200
                    rounded
                    shadow-md
                    md:w-auto
                    bg-deep-purple-accent-400
                    hover:bg-deep-purple-accent-700
                    focus:shadow-outline
                    focus:outline-none
                    btn
                  "
                >
                  Get Started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--Hero Section Ends-->

  <!--- Echange Section -->
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
    <div class="py-2">
      <div class="sm:-mx-8 sm:px-4 py-4 overflow-x-auto">
        <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table class="min-w-full leading-normal">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="
                    px-5
                    py-3
                    bg-white
                    border-t border-r border-l border-b border-gray-600
                    text-gray-800 text-center text-xl
                    uppercase
                    font-bold
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
                    border-t border-r border-l border-b border-gray-600
                    text-gray-800 text-center text-xl
                    uppercase
                    font-bold
                  "
                >
                  Price $
                </th>
                <th
                  scope="col"
                  class="
                    px-5
                    py-3
                    bg-whitborder-r
                    border-t border-b border-gray-600
                    text-gray-800 text-center text-xl
                    uppercase
                    font-bold
                  "
                >
                  Last Trade Price
                </th>
              </tr>
            </thead>
            <tbody v-for="currency in info" :key="currency.symbol">
              <tr>
                <td
                  class="
                    px-5
                    py-5
                    bg-white
                    text-lg
                    border-r border-l border-gray-600
                  "
                >
                  <div class="text-center">
                    <p class="text-gray-900 text-center whitespace-no-wrap">
                      {{ currency.symbol }}
                    </p>
                  </div>
                </td>
                <td
                  class="
                    px-5
                    py-5
                    bg-white
                    text-lg
                    border-r border-l border-gray-600
                  "
                >
                  <p class="text-gray-900 text-center whitespace-no-wrap">
                    {{ currency.volume_24h }}
                  </p>
                </td>
                <td
                  class="
                    px-5
                    py-5
                    bg-white
                    text-lg
                    border-r border-l border-gray-600
                  "
                >
                  <p
                    class="
                      text-gray-900 text-center
                      whitespace-no-wrap
                      text-red
                    "
                  >
                    {{ currency.last_trade_price }}
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <!--Exchange Section Ends -->

  <!--Next section Begins -->

  <div class="relative">
    <img
      src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
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
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto xl:text-5xl  text-5xl">
            Send money with <br> little or no commission.
          </h2>
          <p class="text-base text-white md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div>
          <a
            href="/"
            class="inline-flex btn-action-button items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
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
  <!-- <div
    class="
      px-2
      py-16
      mx-auto
      sm:max-w-xl
      md:max-w-screen-xl
      lg:max-w-screen-xl
      lg:px-auto
      lg:py-20
    "
  >
    <div class="grid gap-4 row-gap-8 lg:grid-cols-2">
      <div class="flex flex-col justify-center">
        <div class="max-w-xl mb-6">
          <h2
            class="       
              mb-6
              font-sans
              text-3xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-4xl
              sm:leading-none
              text-left
            "
          >
            Virutal Subscriptions <br />
            Cards
          </h2>
          <p class="text-base text-gray-700 md:text-lg text-left">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
        </div>
      </div>
      <div>
        <div
          class="
            relative
            mb-6
            sm:mx-0
            md:mb-1
            md:max-w-lg
            lg:max-w-lg
            w-full
            lg:px-auto
          "
        >
          <img
            class="object-fit sm:h-80 w-full h-56 rounded shadow-lg md:h-64 lg:h-70"
            :src="img3"
            alt=""
          />
        </div>
        <p class="text-base text-gray-700 md:text-lg mt-4">Coming Soon!</p>
        <form class="flex flex-col w-4/5 mx-auto items-center mb-4 md:flex-row ml-1 mt-4">
          <input
            placeholder="Email"
            required=""
            type="text"
            class="
              flex-grow
              sm:max-w-lg
              h-12
              px-4
              mb-3
              transition
              duration-200
              bg-white
              border border-gray-300
              rounded
              shadow-sm
              appearance-none
              md:mr-1
              md:mb-0
              focus:border-deep-purple-accent-400
              focus:outline-none
              focus:shadow-outline
            "
          />

          <button
            type="submit"
            class="
              inline-flex
              btn-action-button
              items-center
              justify-center
              h-12
              mx-auto
              px-4
              text-white
              transition
              duration-200
              rounded
              shadow-md
              text-center
              xl:2/5
              3
              md:w-2/5
              focus:shadow-outline
              focus:outline-none
            "
          >
            Get Notified
          </button>
        </form>
      </div>
    </div>
  </div> -->

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
      img: require("../assets/HeroBg.jpg"),
      img1: require("../assets/Currency icons.png"),
      img3: require("../assets/virtualCard.jpeg"),

      info: null,
    };
  },

  mounted() {
    axios
      .get("https://api.blockchain.com/v3/exchange/tickers")
      .then(
        (response) =>
          (this.info = response.data.filter(
            (x) =>
              x.symbol == "BTC-USD" ||
              x.symbol == "ETH-USD" ||
              x.symbol == "USDT-USD"
          ))
      );
  },
};
</script>

<style>
</style>