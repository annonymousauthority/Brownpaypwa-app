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
              <router-link to="/tips">
                <a
                  href="#"
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
                  >Tips and Tutorials</a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/market">
                <a
                  href="#"
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
                  >Market Updates</a
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!---End of Banner Section-->

  <!---Heading-->
  <div class="mx">
    <h5 class="font-bold pt-10 text-5xl">
     Learn About<span class="title">Crypto</span>
    </h5>
    <h4 class="mb-10">
      <span
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
        consectetur modi molestias vero!</span
      >
    </h4>
  </div>
  <!--End of Heaing-->
  <Carousel/>
    <section>
    <div
      class="
        border-t border-gray-800
        px-4
        pt-16
        mt-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        lg:py-5
      "
    >
      <h5 class="text-left text-3xl font-bold mb-10">Getting Started</h5>
      <div
        class="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <div
          class="
            overflow-hidden
            transition-shadow
            duration-300
            bg-white
            rounded
          "
          v-for="news in learn.slice(0, 6)"
          :key="news.id"
        >
          <img
            :src="news.img"
            class="object-cover w-full h-64 rounded"
            alt=""
          />
          <div class="py-5">
            <p class="mb-2 text-xs font-semibold text-gray-600 uppercase">
              {{ news.date }}
            </p>
            <a
              href="/"
              aria-label="Article"
              class="
                inline-block
                mb-3
                text-black
                transition-colors
                text-left
                duration-200
                hover:text-deep-purple-accent-700
              "
              ><p class="text-2xl font-bold leading-5 text-left">
                {{ news.title }}
              </p></a
            >
            <p class="text-left mb-4 text-gray-700">
              {{ news.heading.substring(0, 100) + "..." }}
            </p>
            <button
              class="btn-action-button text-white inline-flex items-center mt-1"
            >
              Learn More
              <svg
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>



  <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
import Carousel from "../components/Carousel.vue"

export default {
  components: {
    Navbar,
    Footer,
    Carousel
  },

   computed: {
    learn() {
      return this.$store.state.learn;
    },
   }
 
};
</script>
