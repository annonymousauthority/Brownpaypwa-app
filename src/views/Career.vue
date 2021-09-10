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

   <div class="first-sec">
    <div class="layer">
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
        <div class="grid gap-10 lg:grid-cols-2">
          <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
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
              "
            >
              <svg class="text-white-7 h-7" viewBox="0 0 24 24">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points=" 8,5 8,1 16,1 16,5"
                  stroke-linejoin="round"
                ></polyline>
                <polyline
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points="9,15 1,15 1,5 23,5 23,15 15,15"
                  stroke-linejoin="round"
                ></polyline>
                <polyline
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  points="22,18 22,23 2,23 2,18"
                  stroke-linejoin="round"
                ></polyline>
                <rect
                  x="9"
                  y="13"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  width="6"
                  height="4"
                  stroke-linejoin="round"
                ></rect>
              </svg>
            </div>
            <div class="max-w-xl mb-6 text-left">
              <h2
                class="
                  max-w-lg
                  mb-6
                  font-sans
                  text-3xl
                  font-bold
                  tracking-tight
                  text-white
                  sm:text-4xl
                  sm:leading-none
                "
              >
                Come Join the future of
                <span class="inline-block title">Finance</span>
              </h2>
              <p class="text-base text-white md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>
            <div class="text-left text-white">
              <a
                href="/"
                aria-label=""
                class="
                  inline-flex
                  items-center
                  font-semibold
                  transition-colors
                  duration-200
                  text-deep-purple-accent-400
                  hover:text-deep-purple-800
                "
              >
                Learn more
                <svg
                  class="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path
                    d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex items-center justify-center -mx-4 lg:pl-8">
            <div class="flex flex-col items-end px-3">
              <img
                class="
                  object-cover
                  mb-6
                  rounded
                  shadow-lg
                  h-28
                  sm:h-48
                  xl:h-56
                  w-28
                  sm:w-48
                  xl:w-56
                "
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
              <img
                class="
                  object-cover
                  w-20
                  h-20
                  rounded
                  shadow-lg
                  sm:h-32
                  xl:h-40
                  sm:w-32
                  xl:w-40
                "
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt=""
              />
            </div>
            <div class="px-3">
              <img
                class="
                  object-cover
                  w-40
                  h-40
                  rounded
                  shadow-lg
                  sm:h-64
                  xl:h-80
                  sm:w-64
                  xl:w-80
                "
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End of Second Section -->

  <!-- Third Section -->
  <div class="border-b border-gray-600">
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
        text-left
      "
    >
      <div class="grid gap-10 lg:grid-cols-2 flex-row-reverse">
        <div>
          <img
            class="object-cover w-full h-56 rounded shadow-lg sm:h-96"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
        </div>
        <div class="py-10">
          <h5 class="mb-4 text-5xl font-extrabold leading-none">
            Our <span class="title">Philosophy</span>
          </h5>
          <p class="mb-6 text-gray-900">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae explicabo. Sed ut perspiciatis unde omnis iste natus error sit
            voluptatem totam rem aperiam, eaque ipsa quae explicabo.
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- End of third section -->

  <!-- Fourth Section -->
  <div
    class="
      relative
      mx-auto
      flex flex-col-reverse
      py-16
      lg:pt-0
      lg:flex-col
      lg:pb-0
    "
  >
    <div
      class="
        inset-y-0
        top-0
        right-0
        z-0
        w-full
        max-w-xl
        px-4
        mx-auto
        md:px-0
        lg:pr-0
        lg:mb-0
        lg:mx-0
        lg:w-7/12
        lg:max-w-full
        lg:absolute
        xl:px-0
      "
    >
      <svg
        class="
          absolute
          left-0
          hidden
          h-full
          text-white
          transform
          -translate-x-1/2
          lg:block
        "
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none slice"
      >
        <path d="M50 0H100L50 100H0L50 0Z"></path>
      </svg>
      <img
        class="
          object-cover
          w-full
          h-56
          rounded
          shadow-lg
          lg:rounded-none
          lg:shadow-none
          md:h-96
          lg:h-full
        "
        :src="img"
        alt=""
      />
    </div>
    <div
      class="
        relative
        flex flex-col
        items-start
        w-full
        max-w-xl
        px-4
        mx-auto
        md:px-0
        lg:px-8
        lg:max-w-screen-xl
      "
    >
      <div class="mb-4 lg:my-40 lg:max-w-lg text-white text-left">
        <h2
          class="
            mb-5
            font-sans
            xl:text-5xl
            font-bold
            tracking-tight
            text-gray-900
            sm:text-4xl
            sm:leading-none
          "
        >
          Our <span class="title">Vision</span>
        </h2>
        <p class="pr-5 mb-5 text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
          explicabo.
        </p>
      </div>
    </div>
  </div>
    <!--End of Section Fourth section-->


    <!--Final Section-->
    <h5 class="mx-auto py-20 text-5xl">
      Open <span class="title">Position</span>
    </h5>

    <Footer/>
</template>



<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
export default {
  components: {
    Navbar,
    Footer
  },

  data() {
    return {
      img: require("../assets/pexels-fauxels-3184418.jpg"),
      img1: require("../assets/pexels-nita-52910.jpg"),
      img2: require("../assets/pexels-skitterphoto-63901.jpg"),
    };
  },
};
</script>
