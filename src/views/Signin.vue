<template>
  <div
    class="
      flex
      max-w-md
      mx-auto
      overflow-hidden
      bg-white
      rounded-xl
      shadow-lg
      dark:bg-gray-800
      lg:max-w-96
      mt-28
      md:mt-52
      lg:mt-32
    "
  >
    <div class="w-full px-6 py-8 md:px-8 lg:max-w-96">
      <h2
        class="text-2xl font-semibold text-center text-gray-700 dark:text-white"
      >
        Sign in to Brownpay
      </h2>

      <button
        class="
          flex
          items-center
          justify-center
          mt-8
          text-gray-600
          rounded-xl
          shadow-lg
          dark:bg-gray-700
          dark:text-gray-200
          hover:bg-gray-100
          px-4
          mx-auto
        "
      >
        <div class="px-2 py-2">
          <svg class="w-12 h-12" viewBox="0 0 40 40">
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#FFC107"
            />
            <path
              d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
              fill="#FF3D00"
            />
            <path
              d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
              fill="#4CAF50"
            />
            <path
              d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
              fill="#1976D2"
            />
          </svg>
        </div>

        <span class="py-3 text-md font-bold text-center"
          ><b>Sign in with Google</b></span
        >
      </button>

      <!-- <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

        <p
          class="text-xs text-center text-gray-500 uppercase dark:text-gray-400"
        >
          or login with email
        </p>

        <span class="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
      </div> -->

      <div class="mt-5">
        <label
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-600
            dark:text-gray-200
            text-left
            mt-4
          "
          for="LoggingEmailAddress"
          >Email Address</label
        >
        <input
          id="LoggingEmailAddress"
          class="
            block
            w-full
            px-4
            py-2
            text-gray-700
            bg-white
            border border-gray-300
            rounded-md
            dark:bg-gray-800
            dark:text-gray-300
            dark:border-gray-600
            focus:ring-2 focus:ring-gray-300
            dark:focus:border-blue-500
            focus:outline-none
          "
          type="email"
          v-model="emailAddress"
        />
      </div>

      <div class="mt-4">
        <div class="flex justify-between">
          <label
            class="
              block
              mb-2
              text-sm
              font-medium
              text-gray-600
              dark:text-gray-200
            "
            for="loggingPassword"
            >Password</label
          >
        </div>

        <input
          id="loggingPassword"
          class="
            block
            w-full
            px-4
            py-2
            text-gray-700
            bg-white
            border border-gray-300
            rounded-md
            dark:bg-gray-800
            dark:text-gray-300
            dark:border-gray-600
            focus:ring-2 focus:ring-gray-300
            dark:focus:border-blue-500
            focus:outline-none
          "
          type="password"
          v-model="password"
        />
      </div>
      <router-link to="/forgotpassword">
        <p
          href="#"
          class="text-md mt-3 text-left text-gray-500 dark:text-gray-300"
        >
          <b> Forget Password?</b>
        </p>
      </router-link>
      <p
        href="#"
        class="text-md mt-3 text-left text-gray-500 dark:text-gray-300"
      >
        Don't have an account?
        <router-link to="/register"
          ><span class="title hover:underline">Sign up</span></router-link
        >
      </p>
      <div class="flex flex-wrap justify-between">
        <label class="flex items-center justify-start mt-5">
          <input type="checkbox" class="form-checkbox" />
          <span class="ml-1">Keep me signed in on this device</span>
        </label>

        <div class="mt-5">
          <button
            class="
              w-full
              px-4
              py-2
              tracking-wide
              text-white
              transition-colors
              duration-200
              transform
              bg-yellow-500
              rounded
              focus:outline-none
              focus:bg-gray-600
            "
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
