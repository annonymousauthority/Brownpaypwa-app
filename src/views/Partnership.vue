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
              <router-link to="/career">
                <a
                  href="/career"
                  aria-label="Careers"
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
                  href="/"
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

  <!--First Section-->
  <div class="relative">
    <img :src="img" class="absolute inset-0 object-cover w-full h-full" alt="" />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
            <h2 class="max-w-lg mb-6 font-sans text-4xl font-bold tracking-tight text-white sm:text-4xl text-left sm:leading-none">
              Age-long
             <span class="title">Relationships</span>
            </h2>
            <p class="max-w-xl mb-4 text-base text-white text-left md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudan, totam rem aperiam, eaque ipsa quae.
            </p>
            <!-- <a href="/" aria-label="" class="inline-flex justify-content-left text-white items-left font-semibold tracking-wider">
              Learn more
              <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
              </svg>
            </a> -->
          </div>
          <div class="w-full max-w-xl xl:px-8 xl:w-5/12">
                  <div class="bg-white rounded shadow-2xl p-7 sm:p-10 text-left">
          <h3
            class="
              mb-4
              xl:text-4xl
              text-xl
              font-semibold
              sm:text-center
              sm:mb-6
              sm:text-2xl
            "
          >
            Contact <span class="title">Us</span>
          </h3>
          <form>
            <div class="mb-1 sm:mb-2">
              <label for="firstName" class="inline-block mb-1 font-medium"
                >Full name</label
              >
              <input
                placeholder="John"
                required=""
                type="text"
                class="
                  flex-grow
                  w-full
                  h-12
                  px-4
                  mb-2
                  transition
                  duration-200
                  bg-white
                  border border-gray-300
                  rounded
                  shadow-sm
                  appearance-none
                  focus:border-deep-purple-accent-400
                  focus:outline-none
                  focus:shadow-outline
                "
                id="fullName"
                name="fullName"
              />
            </div>
            <div class="mb-1 sm:mb-2">
              <label for="company" class="inline-block mb-1 font-medium"
                >Company</label
              >
              <input
                placeholder="Enter Company name"
                required=""
                type="text"
                class="
                  flex-grow
                  w-full
                  h-12
                  px-4
                  mb-2
                  transition
                  duration-200
                  bg-white
                  border border-gray-300
                  rounded
                  shadow-sm
                  appearance-none
                  focus:border-deep-purple-accent-400
                  focus:outline-none
                  focus:shadow-outline
                "
                id="company"
                name="commpany"
              />
            </div>
            <label for="category"></label>
            <div class="mb-1 sm:mb-2">
              <label class="text-gray-700"> </label>
              <div class="relative inline-block w-full text-gray-700">
                <select
                  class="
                    w-full
                    bg-white
                    h-12
                    pl-3
                    pr-6
                    text-base
                    border
                    rounded-lg
                    appearance-none
                    focus:shadow-outline
                  "
                  placeholder="Regular input"
                  name="category"
                  id="category"
                >
                  <option>Category</option>
                  <option>Partnership</option>
                  <option>Consulting</option>
                  <option>Enquiry</option>
                </select>
                <div
                  class="
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    px-2
                    pointer-events-none
                  "
                >
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div class="mb-1 sm:mb-2">
              <label class="text-gray-700 mb-5" for="message">
                <textarea
                  class="
                    flex-1
                    appearance-none
                    border border-gray-300
                    w-full
                    py-2
                    px-4
                    bg-white
                    text-gray-700
                    placeholder-gray-400
                    rounded-lg
                    text-base
                    focus:outline-none
                    focus:ring-2
                    focus:border-transparent
                  "
                  id="comment"
                  placeholder="Enter your comment"
                  name="comment"
                  rows="5"
                  cols="40"
                >
                </textarea>
              </label>
            </div>
            <div class="mt-4 mb-2 sm:mb-4">
              <button
                type="submit"
                class="
                  inline-flex
                  items-center
                  justify-center
                  btn-action-button
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
              >
                Send Now
              </button>
            </div>
            <p class="text-xs text-gray-600 sm:text-sm">
              Transaction the Brownpay Way
            </p>
          </form>
        </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Start of form -->
  
  <Footer />
</template>



<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
export default {
  data() {
    return {
      img: require("../assets/wallpaperflare.com_wallpaper.jpg"),
    };
  },

  components: {
    Navbar,
    Footer,
  },


};
</script>
