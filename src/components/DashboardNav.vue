<template>
  <div class="">
    <nav class="bg-yellow-400 shadow w-full ">
      <div class="container px-6 py-4 mx-auto">
        <div class="md:flex md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <div class="flex items-center xl:hidden">
              <button class="px-8 mr-2" aria-label="Open Menu" @click="drawer">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-8 h-8"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
            <div class="text-xl font-semibold text-gray-700">
              <a
                class="
                  text-2xl
                  font-bold
                  text-gray-800
                  dark:text-white
                  lg:text-3xl
                  hover:text-gray-700
                  dark:hover:text-gray-300
                "
                href="#"
                >Brownpay</a
              >
            </div>
          </div>
          <div
            class="flex md:flex md:items-center justify-end md:justify-between"
          >
            <div class="flex items-center justify-end mt-4 md:mt-0">
              <button
             
                class="
                  hidden
                  mx-4
                  text-gray-600
                  md:block
                  dark:text-gray-200
                  hover:text-gray-700
                  dark:hover:text-gray-400
                  focus:text-gray-700
                  dark:focus:text-gray-400
                  focus:outline-none
                "
                aria-label="show notifications"
              >
                <svg
                  class="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
             

              <button
                type="button"
                class="flex items-center focus:outline-none"
                aria-label="toggle profile dropdown"
              >
                <div
                  class="
                    w-8
                    h-8
                    overflow-hidden
                    border-2 border-gray-400
                    rounded-full
                  "
                >
                  <img
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                    class="object-cover w-full h-full"
                    alt="avatar"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <nav class="flex fixed w-full items-center justify-between px-6 h-16">
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-10 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-80"
            tabindex="0"
          ></div>
        </div>
      </transition>
      <aside
        class="
          transform
          top-0
          left-0
          w-64
          bg-white
          fixed
          h-full
          overflow-auto
          ease-in-out
          transition-all
          duration-300
          z-30
        "
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="flex flex-col items-center mt-6">
          <img
            class="object-cover w-20 h-20 mx-2 rounded-full mt-5 mx-auto"
            src="https://mdbootstrap.com/img/new/standard/city/026.jpg"
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
            useradmin@brownpay.io
          </h4>
        </div>
        <!-- <span
          @click="isOpen = false"
          class="flex w-full items-center p-4 border-b"
        >
          <img
            src="/logos/fox-hub.png"
            alt="Logo"
            class="h-auto w-32 mx-auto"
          />
        </span> -->
        <hr class="my-8" />

        <router-link to="/dashboard/main" exact-active-class="current">
          <a
            @click="isOpen = false"
            class="
              flex
              items-center
              px-4
              py-2
              text-gray-700
              hover:bg-yellow-400
              dark:hover:bg-gray-700
              dark:hover:text-gray-200
              hover:text-white
              dark:bg-gray-700
              dark:text-gray-200
            "
            href="#"
          >
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>

            <span class="mx-4 text-center font-medium">Dashboard</span>
          </a>
        </router-link>
        <router-link to="/dashboard/transaction" active-class="current">
          <a
            @click="isOpen = false"
            class="
              flex
              items-center
              px-4
              py-2
              mt-5
              text-gray-600
              transition-colors
              duration-200
              transform
              dark:text-gray-400
              hover:bg-yellow-400
              dark:hover:bg-gray-700
              dark:hover:text-gray-200
              hover:text-white
            "
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mx-4 font-medium">Make Transactions</span>
          </a>
        </router-link>

        <router-link to="/dashboard/wallet" active-class="current">
          <a
            @click="isOpen = false"
            class="
              flex
              items-center
              px-4
              py-2
              mt-5
              text-gray-600
              transition-colors
              duration-200
              transform
              dark:text-gray-400
              hover:bg-yellow-400
              dark:hover:bg-gray-700
              dark:hover:text-gray-200
              hover:text-white
            "
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mx-4 font-medium">Wallet</span>
          </a>
        </router-link>
        <router-link to="/dashboard/history" active-class="current">
          <a
            @click="isOpen = false"
            class="
              flex
              items-center
              px-4
              py-2
              mt-5
              text-gray-600
              transition-colors
              duration-200
              transform
              dark:text-gray-400
              hover:bg-yellow-400
              dark:hover:bg-gray-700
              dark:hover:text-gray-200
              hover:text-white
            "
            href="#"
          >
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
                d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
              />
            </svg>

            <span class="mx-4 font-medium">Transaction History</span>
          </a>
        </router-link>
        <router-link to="/dashboard/settings">
          <a
            @click="isOpen = false"
            class="
              flex
              items-center
              px-4
              py-2
              mt-5
              text-gray-600
              transition-colors
              duration-200
              transform
              dark:text-gray-400
              hover:bg-yellow-400
              dark:hover:bg-gray-700
              dark:hover:text-gray-200
              hover:text-white
            "
            href="#"
          >
            <svg
              class="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <span class="mx-4 font-medium">Settings</span>
          </a>
        </router-link>
        <div class="fixed bottom-0 w-full">
          <router-link to="/dashboard/main">
            <a
              @click="isOpen = false"
              class="
                flex
                items-center
                self-end
                px-4
                py-2
                mt-14
                text-gray-600
                transition-colors
                duration-200
                transform
                dark:text-gray-400
                hover:bg-yellow-400
                dark:hover:bg-gray-700
                dark:hover:text-gray-200
                hover:text-white
              "
              href="#"
            >
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>

              <span class="mx-4 font-medium">Logout</span>
            </a>
          </router-link>
        </div>
      </aside>
    </nav>
    <!--  -->
  </div>
</template>
<script>

export default {
  name: "DashboardNav",

  data() {
    return {
      isOpen: false,
      // theme: ""
    };
  }, 
  methods: {
    drawer() {
      this.isOpen = !this.isOpen;
    },
    // updateTheme(theme) {
    //   this.theme = theme;
    // }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler(isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden");
          else document.body.style.removeProperty("overflow");
        }
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
    });
    
  },

   
};
</script>
