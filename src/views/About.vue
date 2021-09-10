<template>
  <Navbar />
  <div class="banner">
    <div class="max-w-8xl mx-auto px-3 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div
          class="
            order-3
            text-center
            mx-auto
            justify-between
            flex
            items
            center
            w-full
            sm:w-auto
          "
        >
          <ul class="items-center space-x-10 flex text-1xl p-4">
            <li>
              <router-link to="/about">
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  class="
                    font-medium
                    tracking-tight
                    text-white
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >About</a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/career">
                <a
                  href="/career"
                  aria-label="Career"
                  title="Careers"
                  class="
                    font-medium
                    tracking-wide
                    text-white
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >Careers</a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/partnership">
                <a
                  href="/partnership"
                  aria-label="Partnership & Collaboration"
                  title="Partnership & Collaboration"
                  class="
                    font-medium
                    tracking-wide
                    text-white
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >Partnership & Collaboration</a
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!--End of Banner section-->
  <div class="relative">
    <img
      :src="img"
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
                    leading-none
                    tracking-tight
                    text-white
                    sm:text-4xl
                    md:mx-auto
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
                    About <span class="title">Brownpay</span>
                  </span>
                </h2>
                <p class="text-base text-white md:text-3xl">
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
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- End of first-section -->

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
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
      <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
        <a href="#" class="mb-6 sm:mx-auto">
          <div
            class="
              flex
              items-center
              justify-center
              w-12
              h-12
              rounded-full
              title
            "
          >
            <svg
              class="w-20 h-20 text-deep-purple-accent-400"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              ></polygon>
            </svg>
          </div>
        </a>
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <h2
            class="
              max-w-lg
              xl:text-5xl
              mb-6
              font-sans
              text-3xl
              font-bold
              leading-none
              tracking-tight
              text-gray-900
              sm:text-4xl
              md:mx-auto
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
              Brownpay Powered
            </span>
            <span class="title">Transactions</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            eligendi, delectus consectetur nemo enim consequuntur itaque.
            Deserunt quisquam maxime excepturi esse tenetur, praesentium itaque
            rem maiores. Impedit tempora provident sint fugit, vel, numquam
            repellat minima cumque esse optio distinctio incidunt, non ducimus
            inventore. Sunt culpa quibusdam ex, nesciunt sapiente hic.
          </p>
        </div>
        <!-- <div>
          <a
            href="/"
            class="
              inline-flex
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
            Get started
          </a>
        </div> -->
      </div>
    </div>
    <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4 py-20">
      <div class="text-center md:border-r">
        <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">2.m</h6>
        <p
          class="
            text-sm
            font-medium
            tracking-widest
            text-gray-800
            uppercase
            lg:text-base
          "
        >
          Transactions
        </p>
      </div>
      <div class="text-center md:border-r">
        <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">10.9K</h6>
        <p
          class="
            text-sm
            font-medium
            tracking-widest
            text-gray-800
            uppercase
            lg:text-base
          "
        >
          Users Saved
        </p>
      </div>
      <div class="text-center md:border-r">
        <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">3</h6>
        <p
          class="
            text-sm
            font-medium
            tracking-widest
            text-gray-800
            uppercase
            lg:text-base
          "
        >
          Currencies
        </p>
      </div>
      <div class="text-center">
        <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">5</h6>
        <p
          class="
            text-sm
            font-medium
            tracking-widest
            text-gray-800
            uppercase
            lg:text-base
          "
        >
          Countries
        </p>
      </div>
    </div>
  </div>

  <!-- Second-section -->

 

  <!-- End of section 2 -->

  <!--last -->
  <div class="relative">
    <img :src="imgl" class="absolute inset-0 object-cover w-full h-full" alt="" />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <h2
      class="
        max-w-xl
        mt-13
        font-sans
        xl:text-4xl
        text-4xl
        font-bold
        text-white
        sm:text-4xl
      "
    >
      Our Executive Team
    </h2>
  </div>
  <div
    class="
      px-4
      py-8
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-24
      lg:px-8
      lg:py-4
    "
  >
 <div class="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 py-10">
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold text-white">Oliver Aguilerra</p>
          <p class="text-sm text-white">Product Manager</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold text-white">Marta Clermont</p>
          <p class="text-sm text-white">Design Team Lead</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold text-white">Anthony Geek</p>
          <p class="text-sm text-white">CTO, Lorem Inc.</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold text-white">Alice Melbourne</p>
          <p class="text-sm text-white">Human Resources</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold text-white">Martin Garix</p>
          <p class="text-sm text-white">Bad boy</p>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>

   
    <!-- <div
      class="
        grid
        gap-x-0
        mx-auto
        lg:max-w-screen-sm
        sm:grid-cols-2
        lg:grid-cols-2
        mt-10
      "
    >
      <div class="flex flex-col items-center">
        <img
          class="object-cover w-60 h-60 mb-2 rounded-full shadow"
          src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="Person"
        />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Alice Melbourne</p>
          <p class="text-sm text-gray-800">Human Resources</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img
          class="object-cover w-60 h-60 mb-2 rounded-full shadow"
          src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
          alt="Person"
        />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Martin Garix</p>
          <p class="text-sm text-gray-800">Bad boy</p>
        </div>
      </div>
    </div> -->
 

  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
export default {
  data() {
    return {
      img: require("../assets/5690591.jpg"),
       imgl:require('../assets/5690588.jpg')
    };
  },
  components: { Navbar, Footer },
};
</script>
