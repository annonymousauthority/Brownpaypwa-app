<template >
  <div class="col-span-6  h-screen-full">
    <!-- <div class="flex justify-between shadow-xl">
      <div class="justify-start mt-16">
        <span class="text-black px-4 text-base">
          Complete the steps to avoid unauthorised access to your account
        </span>
      </div>

      <div class="grid grid-cols-3 justify-end gap-36 mt-12 px-4">
        <div
          class="
            flex flex-col
            items-center
            ml-auto
            justify-center
            w-16
            h-16
            mb-4
            text-5xl
            font-extrabold
            rounded-full
            text-deep-purple-accent-400
            bg-white
            text-black
            border border-yellow-500
            sm:mx-auto
          "
        >
          1
        </div>
        <div class="flex">
          <div
            class="
              flex flex-col
              items-center
              justify-center
              w-14
              h-14
              mb-4
              text-5xl
              font-extrabold
              rounded-full
              text-deep-purple-accent-400
              bg-white
              text-black
              border border-yellow-500
              sm:mx-auto
            "
          >
            2
          </div>
        </div>
       <div class="sm:mr-5">
        <div
          class="
            flex flex-col
            items-center
            justify-center
            w-14
            h-14
            mb-4
            text-5xl
            font-extrabold
            rounded-full
            text-deep-purple-accent-400
            bg-white
            text-black
            border border-yellow-500
            sm:mx-auto
          "
        >
          3
          
        </div>
        
       </div>
      </div>
    </div> -->

    <div class="grid gap-4 col-gap-4 lg:grid-cols-2 mt-8 justify-items-end shadow-2xl px-4 mb-14">
      <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 ">
        <div class="sm:mr-5">
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              my-3
              rounded-full
              border-4 border-yellow-400
              bg-white
              text-yellow-400
              sm:w-24
              sm:h-24
            "
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
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div>
          <p class="text-xl text-black text-left font-bold sm:text-base">
            Email Address
          </p>
          <p class="text-sm text-gray-700 text-left w-full">
            All recipes are written using certain conventions, which define the
            characteristics of common ingredients. The rules vary from place to
            place.
          </p>
        </div>
      </div>

      <!----Start of second part-->
      <div class="flex flex-col justify-center">
        <div>
          <button
            class="
              bg-white,
              border-2 border-yellow-400
              text-black
              active:bg-pink-600
              font-bold
              uppercase
              jusitfy-end
              text-sm
              px-6
              py-3
              rounded
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
            v-on:click="toggleModal()"
          >
            Change Email
          </button>
          <div
            v-if="showModal"
            class="
              overflow-x-hidden overflow-y-auto
              fixed
              inset-0
              z-50
              outline-none
              focus:outline-none
              justify-center
              items-center
              flex
            "
          >
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!--content-->
              <div
                class="
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none
                "
              >
                <!--header-->
                <div
                  class="
                    flex
                    items-start
                    justify-between
                    p-5
                    border-b border-solid border-blueGray-200
                    rounded-t
                  "
                >
                  <h3 class="text-3xl font-semibold">Modal Title</h3>
                  <button
                    class="
                      p-1
                      ml-auto
                      bg-transparent
                      border-0
                      text-black
                      opacity-5
                      float-right
                      text-3xl
                      leading-none
                      font-semibold
                      outline-none
                      focus:outline-none
                    "
                    v-on:click="toggleModal()"
                  >
                    <span
                      class="
                        bg-transparent
                        text-black
                        opacity-5
                        h-6
                        w-6
                        text-2xl
                        block
                        outline-none
                        focus:outline-none
                      "
                    >
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <p
                    class="
                      my-4
                      text-black text-blueGray-500 text-lg
                      leading-relaxed
                    "
                  >
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <!--footer-->
                <div
                  class="
                    flex
                    items-center
                    justify-end
                    p-6
                    border-t border-solid border-blueGray-200
                    rounded-b
                  "
                >
                  <button
                    class="
                      text-red-500
                      bg-transparent
                      border border-solid border-red-500
                      hover:bg-red-500
                      hover:text-white
                      active:bg-red-600
                      font-bold
                      uppercase
                      text-sm
                      px-6
                      py-3
                      rounded
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Close
                  </button>
                  <button
                    class="
                      text-red-500
                      background-transparent
                      font-bold
                      uppercase
                      px-6
                      py-2
                      text-sm
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </div>
      </div>
    </div>

      <!---Second row card-->
      <div class="grid gap-4 col-gap-4 lg:grid-cols-2 mt-8 justify-items-end shadow-2xl px-4 py-4">
      <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 mt-4">
        <div class="sm:mr-5">
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              my-3
              rounded-full
              border-4 border-yellow-400
              bg-white
              text-yellow-400
              sm:w-24
              sm:h-24
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
        <div>
          <p class="text-xl text-black text-left font-bold sm:text-base">
            Two-step Verification
          </p>
          <p class="text-sm text-gray-700 text-left w-full">
            All recipes are written using certain conventions, which define the
            characteristics of common ingredients. The rules vary from place to
            place.
          </p>
        </div>
      </div>

      <!----Start of second part-->
      <div class="flex flex-col justify-center">
        <div>
          <button
            class="
              bg-white,
              border-yellow-400
              text-black
              active:bg-pink-600
              font-bold
              uppercase
              jusitfy-end
              text-sm
              px-12
              py-3
              rounded
              mr-1
              border-2
              ease-linear
              transition-all
              duration-150
            "
            type="button"
            v-on:click="toggleModal()"
          >
            Enable
          </button>
          <div
            v-if="showModal"
            class="
              overflow-x-hidden overflow-y-auto
              fixed
              inset-0
              z-50
              outline-none
              focus:outline-none
              justify-center
              items-center
              flex
            "
          >
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!--content-->
              <div
                class="
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none
                "
              >
                <!--header-->
                <div
                  class="
                    flex
                    items-start
                    justify-between
                    p-5
                    border-b border-solid border-blueGray-200
                    rounded-t
                  "
                >
                  <h3 class="text-3xl font-semibold">Modal Title</h3>
                  <button
                    class="
                      p-1
                      ml-auto
                      bg-transparent
                      border-0
                      text-black
                      opacity-5
                      float-right
                      text-3xl
                      leading-none
                      font-semibold
                      outline-none
                      focus:outline-none
                    "
                    v-on:click="toggleModal()"
                  >
                    <span
                      class="
                        bg-transparent
                        text-black
                        opacity-5
                        h-6
                        w-6
                        text-2xl
                        block
                        outline-none
                        focus:outline-none
                      "
                    >
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <p
                    class="
                      my-4
                      text-black text-blueGray-500 text-lg
                      leading-relaxed
                    "
                  >
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <!--footer-->
                <div
                  class="
                    flex
                    items-center
                    justify-end
                    p-6
                    border-t border-solid border-blueGray-200
                    rounded-b
                  "
                >
                  <button
                    class="
                      text-red-500
                      bg-transparent
                      border border-solid border-red-500
                      hover:bg-red-500
                      hover:text-white
                      active:bg-red-600
                      font-bold
                      uppercase
                      text-sm
                      px-6
                      py-3
                      rounded
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Close
                  </button>
                  <button
                    class="
                      text-red-500
                      background-transparent
                      font-bold
                      uppercase
                      px-6
                      py-2
                      text-sm
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </div>
      </div>
      </div>

      <!---Third row card-->
      <div class="grid gap-4 col-gap-4 lg:grid-cols-2 mt-8 justify-items-end shadow-2xl px-4 py-4">
      <div class="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0 mt-4">
        <div class="sm:mr-5">
          <div
            class="
              flex
              items-center
              justify-center
              w-16
              h-16
              my-3
              rounded-full
              border-4 border-yellow-400
              bg-white
              text-yellow-400
              sm:w-24
              sm:h-24
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
        <div>
          <p class="text-xl text-black text-left font-bold sm:text-base">
            Change Password
          </p>
          <p class="text-sm text-gray-700 text-left w-full">
            All recipes are written using certain conventions, which define the
            characteristics of common ingredients. The rules vary from place to
            place.
          </p>
        </div>
      </div>

      <!----Start of second part-->
      <div class="flex flex-col justify-center">
        <div>
          <button
            class="
              bg-white,
              border-2 border-yellow-400
              text-black
              active:bg-pink-600
              font-bold
              uppercase
              jusitfy-end
              text-sm
              px-12
              py-3
              rounded
              mr-1
              mb-1
              ease-linear
              transition-all
              duration-150
            "
            type="button"
            v-on:click="toggleModal()"
          >
            Change
          </button>
          <div
            v-if="showModal"
            class="
              overflow-x-hidden overflow-y-auto
              fixed
              inset-0
              z-50
              outline-none
              focus:outline-none
              justify-center
              items-center
              flex
            "
          >
            <div class="relative w-auto my-6 mx-auto max-w-6xl">
              <!--content-->
              <div
                class="
                  border-0
                  rounded-lg
                  shadow-lg
                  relative
                  flex flex-col
                  w-full
                  bg-white
                  outline-none
                  focus:outline-none
                "
              >
                <!--header-->
                <div
                  class="
                    flex
                    items-start
                    justify-between
                    p-5
                    border-b border-solid border-blueGray-200
                    rounded-t
                  "
                >
                  <h3 class="text-3xl font-semibold">Modal Title</h3>
                  <button
                    class="
                      p-1
                      ml-auto
                      bg-transparent
                      border-0
                      text-black
                      opacity-5
                      float-right
                      text-3xl
                      leading-none
                      font-semibold
                      outline-none
                      focus:outline-none
                    "
                    v-on:click="toggleModal()"
                  >
                    <span
                      class="
                        bg-transparent
                        text-black
                        opacity-5
                        h-6
                        w-6
                        text-2xl
                        block
                        outline-none
                        focus:outline-none
                      "
                    >
                      ×
                    </span>
                  </button>
                </div>
                <!--body-->
                <div class="relative p-6 flex-auto">
                  <p
                    class="
                      my-4
                      text-black text-blueGray-500 text-lg
                      leading-relaxed
                    "
                  >
                    I always felt like I could do anything. That’s the main
                    thing people are controlled by! Thoughts- their perception
                    of themselves! They're slowed down by their perception of
                    themselves. If you're taught you can’t do anything, you
                    won’t do anything. I was taught I could do everything.
                  </p>
                </div>
                <!--footer-->
                <div
                  class="
                    flex
                    items-center
                    justify-end
                    p-6
                    border-t border-solid border-blueGray-200
                    rounded-b
                  "
                >
                  <button
                    class="
                      text-red-500
                      bg-transparent
                      border border-solid border-red-500
                      hover:bg-red-500
                      hover:text-white
                      active:bg-red-600
                      font-bold
                      uppercase
                      text-sm
                      px-6
                      py-3
                      rounded
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Close
                  </button>
                  <button
                    class="
                      text-red-500
                      background-transparent
                      font-bold
                      uppercase
                      px-6
                      py-2
                      text-sm
                      outline-none
                      focus:outline-none
                      mr-1
                      mb-1
                      ease-linear
                      transition-all
                      duration-150
                    "
                    type="button"
                    v-on:click="toggleModal()"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="showModal"
            class="opacity-25 fixed inset-0 z-40 bg-black"
          ></div>
        </div>
      </div>
      </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    toggleModal: function () {
      this.showModal = !this.showModal;
    },
  },
};
</script>
