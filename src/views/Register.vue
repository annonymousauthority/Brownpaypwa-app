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
        Create your account
      </h2>

      <!-- <p class="text-xl text-center text-gray-600 dark:text-gray-200">Welcome back!</p> -->

      <div class="mt-8">
        <div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
          <div class="col-span-2 lg:col-span-4">
            <div class="relative">
              <input
                type="text"
                id="contact-form-name"
                class="
                  rounded-lg
                  border-transparent
                  flex-1
                  appearance-none
                  border border-gray-300
                  w-full
                  py-2
                  px-4
                  bg-white
                  text-gray-700
                  placeholder-gray-400
                  shadow-sm
                  text-base
                  focus:outline-none
                  focus:ring-2 focus:ring-gray-300
                  focus:border-transparent
                "
                placeholder="Full name"
                v-model="fullName"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <!-- <label
          class="
            block
            mb-2
            text-sm
            font-medium
            text-gray-600
            dark:text-gray-200
            text-left
          "
          for="LoggingEmailAddress"
          >Email Address</label
        > -->
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
            focus:outline-none
            focus:ring-2 focus:ring-gray-300
            focus:border-transparent
          "
          type="email"
          placeholder="Email"
          v-model="email"
        />
      </div>

      <div class="mt-4">
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
            focus:outline-none
            focus:ring-2 focus:ring-gray-300
            focus:border-transparent
          "
          type="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <div class="mt-4">
        <div class="col-span-2 lg:col-span-4">
          <div class="relative">
            <input
              type="text"
              id="comfirmPassword"
              class="
                rounded-lg
                border-transparent
                flex-1
                appearance-none
                border border-gray-300
                w-full
                py-2
                px-4
                bg-white
                text-gray-700
                placeholder-gray-400
                shadow-sm
                text-base
                focus:outline-none
                focus:ring-2 focus:ring-gray-300
                focus:border-transparent
              "
              placeholder="Comfirm Password"
            />
          </div>
        </div>
      </div>
      <p
        href="#"
        class="text-md mt-3 text-left text-gray-500 dark:text-gray-300"
      >
        Already have an account?
        <router-link to="/signin"
          ><span class="title hover:underline">Sign in</span></router-link
        >
      </p>

      <div class="grid grid-col-2 grid-flow-col gap-4">
        <div>
          <label class="flex items-center justify-start mt-6">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-1">I agree to Privacy Policy</span>
          </label>

          <label class="flex items-center justify-start">
            <input type="checkbox" class="form-checkbox" />
            <span class="ml-1">I agree t terms and conditions</span>
          </label>
        </div>

        <div class="mt-8">
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
            Sign up
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
