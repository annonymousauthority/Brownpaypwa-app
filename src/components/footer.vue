<template>
  <div class="hero-bg">
    <div class="relative text-left">
      <div
        class="
          px-4
          pt-12
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-12
          lg:px-auto
        "
      >
        <div class="grid gap-0 row-gap-10 mb-8 lg:grid-cols-7">
          <div class="md:max-w-lg lg:col-span-2 row-gap-4">
            <a class="flex items-center my-5" href="/">
              <img class="h-12 w-auto sm:h-12" :src="logo" alt="site" />
            </a>
            <div class="mt-1 lg:max-w-sm">
              <p class="text-sm text-gray-600 mb-2">
                © Copyright 2021 Brownpay.
              </p>
              <div class="flex items-center space-x-4 sm:mt-2">
                <a
                  href="/"
                  class="
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-deep-purple-accent-400
                  "
                >
                  <svg viewBox="0 0 24 24" fill="#00acee" class="h-5">
                    <path
                      d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                    ></path>
                  </svg>
                </a>

                <a
                  href="/"
                  class="
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-deep-purple-accent-400
                  "
                >
                  <svg viewBox="0 0 30 30" :fill="facebook" class="h-6">
                    <circle cx="15" cy="15" r="4"></circle>
                    <path
                      d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                    ></path>
                  </svg>
                </a>

                <a
                  href="/"
                  class="
                    text-gray-500
                    transition-colors
                    duration-300
                    hover:text-deep-purple-accent-400
                  "
                >
                  <svg viewBox="0 0 24 24" fill="#3b5998" class="h-5">
                    <path
                      d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            class="
              grid grid-cols-1
              gap-2
              row-gap-4
              lg:col-span-4
              md:grid-cols-3
              mt-5
            "
          >
            <div>
              <p
                class="
                  font-semibold
                  tracking-wide
                  text-gray-800 text-left text-xl
                  my-4
                "
              >
                Company
              </p>
              <ul class="mt-2 space-y-2 text-left text-md">
                <li>
                  <router-link to="/about">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >About us</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="/career">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Careers</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Cookie Policy</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Team</a
                    >
                  </router-link>
                </li>
              </ul>
            </div>
            <div>
              <p
                class="
                  font-bold
                  tracking-wide
                  text-gray-900 text-xl text-left
                  my-4
                "
              >
                Learn
              </p>
              <ul class="mt-2 space-y-3 text-left">
                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Explore Crypto Prices</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Investment Opportunities</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >How to send Money</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >What is Blockchain</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >How to Earn from Crypto</a
                    >
                  </router-link>
                </li>
              </ul>
            </div>
            <div>
              <p
                class="
                  font-bold
                  tracking-wide
                  text-gray-900 text-xl text-left
                  my-4
                "
              >
                Support
              </p>
              <ul class="mt-2 space-y-3 text-left text-md">
                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Help Center</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="/partnership">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Contact Us</a
                    >
                  </router-link>
                </li>

                <li>
                  <router-link to="">
                    <a
                      href="/"
                      class="
                        text-gray-600
                        transition-colors
                        duration-300
                        hover:text-deep-purple-accent-400
                      "
                      >Account Verification</a
                    >
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="
            flex flex-col
            justify-between
            pt-5
            pb-0
            border-t border-deep-purple-accent-200
            sm:flex-row
          "
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/Hero.png"),
      facebook:
        "background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",
    };
  },
};
</script>

