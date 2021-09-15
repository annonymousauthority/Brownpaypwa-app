<template>
  <div
    class="
      px-4
      py-5
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      md:px-12
      lg:px-auto
    "
  >
    <div class="relative flex items-center justify-between">
      <router-link to="/">
        <a class="flex items-center" href="#">
          <img class="h-12 w-auto sm:h-12" :src="logo" alt="site" />
        </a>
      </router-link>
      <ul class="items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Our product"
            title="Our product"
            class="
              font-medium
              tracking-wide
              text-gray-700
              transition-colors
              duration-200
              hover:text-deep-purple-accent-400
            "
            >Home</a
          >
        </li>
        <li>
          <router-link to="/blog">
            <a
              href="#"
              aria-label="Blog"
              title=""
              class="
                font-medium
                tracking-wide
                text-gray-700
                transition-colors
                duration-200
                hover:text-deep-purple-accent-400
              "
              >Blog</a
            >
          </router-link>
        </li>
        <li>
          <router-link to="/about">
            <a
              href="/"
              aria-label="About us"
              title="About us"
              class="
                font-medium
                tracking-wide
                text-gray-700
                transition-colors
                duration-200
                hover:text-deep-purple-accent-400
              "
              >About us</a
            ></router-link
          >
        </li>
        <li>
          <router-link to="/contact">
            <a
              href="#"
              aria-label="Contact Us"
              title="Contact Us"
              class="
                font-medium
                tracking-wide
                text-gray-700
                transition-colors
                duration-200
                hover:text-deep-purple-accent-400
              "
              >Contact us</a
            ></router-link
          >
        </li>
      </ul>
      <ul class="flex items-center hidden space-x-8 lg:flex">
        <li>
          <a
            href="/"
            aria-label="Sign In"
            title="Sign In"
            class="
              font-medium
              tracking-wide
              text-gray-700
              transition-colors
              duration-200
              hover:text-deep-purple-accent-400
            "
            >Sign In</a
          >
        </li>
        <li>
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
            aria-label="Sign up"
            title="Sign up"
          >
            Get Started
          </a>
        </li>
      </ul>
      <div class="lg:hidden">
        <button
          aria-label="Open Menu"
          title="Open Menu"
          class="
            p-2
            -mr-1
            transition
            duration-200
            rounded
            focus:outline-none
            focus:shadow-outline
            hover:bg-deep-purple-50
            focus:bg-deep-purple-50
          "
          @click="isMenuOpen = true"
        >
          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
            ></path>
            <path
              fill="currentColor"
              d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
            ></path>
            <path
              fill="currentColor"
              d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
            ></path>
          </svg>
        </button>
        <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-50">
          <div class="p-5 bg-white border rounded shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <a class="flex items-center sm:w-full" href="/">
                  <img class="h-12 w-auto sm:h-12" :src="logo" alt="site" />
                </a>
              </div>
              <div>
                <button
                  aria-label="Close Menu"
                  title="Close Menu"
                  class="
                    p-2
                    -mt-2
                    -mr-2
                    transition
                    duration-200
                    hover:bg-gray-200
                    focus:bg-gray-200
                    focus:outline-none
                    focus:shadow-outline
                  "
                  @click="isMenuOpen = false"
                >
                  <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <nav>
              <ul class="space-y-4">
                <li>
                  <a
                    href="/"
                    aria-label="Our product"
                    title="Our product"
                    class="
                      font-medium
                      tracking-wide
                      text-gray-700
                      transition-colors
                      duration-200
                    "
                    >Home</a
                  >
                </li>
                <li>
                  <a
                    href="/blog"
                    aria-label="Our product"
                    title="Our product"
                    class="
                      font-medium
                      tracking-wide
                      text-gray-700
                      transition-colors
                      duration-200
                      hover:text-deep-purple-accent-400
                    "
                    >Blog</a
                  >
                </li>

                <li>
                  <router-link to="/about">
                    <a
                      href="/"
                      aria-label="About us"
                      title="About us"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >About us</a
                    ></router-link
                  >
                </li>

                <li>
                  <router-link to="/contact">
                    <a
                      href="#"
                      aria-label="Contact Us"
                      title="Contact Us"
                      class="
                        font-medium
                        tracking-wide
                        text-gray-700
                        transition-colors
                        duration-200
                        hover:text-deep-purple-accent-400
                      "
                      >Contact us</a
                    ></router-link
                  >
                </li>

                <li>
                  <a
                    href="/"
                    class="
                      inline-flex
                      btn-action-button
                      items-center
                      justify-center
                      w-full
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
                    aria-label="Sign up"
                    title="Sign up"
                  >
                    Sign up
                  </a>
                </li>
              </ul>
            </nav>
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
      isMenuOpen: false,
      logo: require("../assets/Hero.png"),
    };
  },
};
</script>