<template>
  <div class="sidepanel sm:hidden xl:contents">
    <div
      class="
        sidebar
        lg:fixed
        mx-auto
        w-80
        py-8
        bg-white
        text-center
        border
        dark:bg-gray-900
        dark:border-gray-600
        
      "
    >
      <div class="flex flex-col items-center mt-6 lg:-ml-8">
        <div class="flex">
          <img
            class="object-cover w-20 h-20 mr-4 lg:ml-8 rounded-full shadow"
            src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
            alt="Person"
          />
          <div class="flex flex-col justify-center">
            <p class="text-md text-gray-800">useradmin@brownpay.io</p>
            <p
              class="
                text-md
                flex
                text-left
                flex-col
                font-bold
                text-gray-800
                mt-2
                mr-4
              "
            >
              Balance: $1,200
            </p>
          </div>
        </div>
        <div class="flex flex-col items-center lg:ml-32">
          <div class="flex"></div>
        </div>
      </div>

      <hr class="pt-4 mt-8" />

      <div class="flex flex-col justify-between flex-1 ml-0 xl:ml-4">
        <nav>
          <router-link to="/dashboard/main" exact-active-class="current">
            <a
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
          <a
            class="
              flex
              items-center
              self-end
              px-4
              mt-5
              py-2
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
        </nav>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
