<template>
  <Navbar />
  <!---Banner Section-->
  
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
  <div class="mx">
    <h5 class="font-bold pt-10 text-5xl">
      Market <span class="title">updates</span>
    </h5>
    <h4 class="mb-10">
      <span
        >Get updated on live happenings that influence market moves and trends.</span
      >
    </h4>
  </div>

  <!-- First section -->
  <section class="text-gray-600">
    <div
      class="
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        px-5
        pt-12
        border-t border-gray-800
        mx-auto
        flex flex-wrap
      "
    >
      <div
        class="lg:w-1/2 w-full mb-10 pb-5 lg:mb-0 rounded-lg overflow-hidden"
        v-for="news in articles.slice(0, 1)"
        :key="news"
      >
        <div
          class="
            overflow-hidden
            transition-shadow
            duration-300
            bg-white
            rounded
            border-t border-gray-900
          "
        >
          <a href="/" aria-label="Article"
            ><img
              :src="news.img"
              class="object-cover w-full xl:h-full h-64 rounded"
              alt=""
          /></a>
          <div class="py-5 text-left">
            <a
              href="/"
              aria-label="Article"
              class="
                inline-block
                mb-3
                text-black
                transition-colors
                duration-200
                hover:text-deep-purple-accent-700
              "
              ><p class="text-2xl font-bold leading-5">
                {{ news.title }}
              </p></a
            >
            <p class="mb-4 text-gray-700">
              {{ news.heading.substring(0, 100) + "..." }}
            </p>
            <div class="flex space-x-4">
              <a
                href="/"
                aria-label="Likes"
                class="
                  flex
                  items-start
                  text-gray-800
                  transition-colors
                  duration-200
                  hover:text-deep-purple-accent-700
                  group
                "
              >
              </a>
              <p
                class="
                  mb-2
                  text-xs text-left
                  font-semibold
                  text-gray-600
                  uppercase
                "
              >
                {{ news.date }}
              </p>
            <router-link :to="`/post/${news.id}`" >
                <button
                class="
                  btn-action-button
                  text-white
                  inline-flex
                  items-center
                  mt-4
                  text-center
                  mx-auto
                "
                  
        
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
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <div
        class="
          flex flex-col flex-wrap
          lg:py-2
          -mb-10
          lg:w-1/2
          lg:pl-12
          lg:text-left
          text-center
        "
      >
        <div
          class="py-2 flex flex-wrap md:flex-nowrap border-t border-gray-800"
          v-for="news in articles.slice(4, 7)"
          :key="news"
        >
          <div class="md:flex-grow lg">
            <h2
              class="text-2xl text-left font-bold text-gray-900 title-font mb-2"
            >
              {{ news.title }}
            </h2>
            <p class="text-left pr-4 leading-relaxed">
              {{ news.heading }}
            </p>
           <router-link :to="`/post/${news.id}`" >
                <button
                class="
                  btn-action-button
                  text-white
                  inline-flex
                  items-center
                  mt-4
                  text-center
                  mx-auto
                "
                  
        
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
              </router-link>
          </div>
          <div class="md:h-52 md:mb-0 mb-6 flex flex-col">
            <img
              class="object-cover w-full xl:h-full h-64 rounded"
              :src="news.img"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Next section starts-->
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
      <h5 class="text-left text-3xl font-bold mb-10">Trending in the Market</h5>
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
          v-for="news in articles.slice(1, 4)"
          :key="news.id"
        >
          ><img
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
              {{ news.heading }}
            </p>
         <router-link :to="`/post/${news.id}`" >
                <button
                class="
                  btn-action-button
                  text-white
                  inline-flex
                  items-center
                  mt-4
                  text-center
                  mx-auto
                "
                  
        
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
              </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!--Next section Ends-->
  <section class="text-gray-600 body-font">
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
        py-24
        flex flex-wrap
      "
    >
      <div class="lg:py-2 -mb-10 lg:w-1/2 lg:text-left text-center">
        <div
          class="py-2 flex flex-wrap md:flex-nowrap"
          v-for="news in articles.slice(7, 9)"
          :key="news"
         
        >
          <div
            class="md:h-52 md:pt-2 md:mr-8 xl:mr-6 md:mb-0 mb-6 flex flex-col"
          >
            <img
              class="object-cover w-full xl:h-full h-64 rounded"
              :src="news.img"
              alt=""
            />
          </div>
          <div class="md:flex-grow lg">
            <h2
              class="text-2xl text-left font-bold text-gray-900 title-font mb-2"
            >
              {{ news.title }}
            </h2>
            <p class="text-left pr-4 leading-relaxed">
              {{ news.heading }}
            </p>

           <router-link :to="`/post/${news.id}`" >
                <button
                class="
                  btn-action-button
                  text-white
                  inline-flex
                  items-center
                  mt-4
                  text-center
                  mx-auto
                "
                  
        
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
              </router-link>
          </div>
        </div>
      </div>
      <div
        class="
          xl:ml-10
          md:mt-8
          xl:mt-0
          lg:ml-10
          py-6
          lg:w-2/5
          w-full
          mb-10
          pb-5
          lg:mb-0
          rounded-lg
          overflow-hidden
        "
        v-for="news in articles.slice(9, 10)"
        :key="news.id"
       
      
        
      >
        <div
          class="
            overflow-hidden
            transition-shadow
            duration-300
            bg-white
            rounded
            border-t border-gray-900
          "
        >
        <img
              :src="news.img"
              class="object-cover w-full xl:h-full h-64 rounded"
              alt=""
          />
         
          <div class="py-5 text-left">
               <p class="text-2xl font-bold leading-5">
                {{ news.title }}
              </p>
            
            <p class="mt-4 text-gray-700">
              {{ news.heading.substring(0, 100) + "..." }}
            </p>
            <div class="flex space-x-4">
            
              <p
                class="
                  mb-2
                  text-xs text-left
                  font-semibold
                  text-gray-600
                  uppercase
                "
              >
                {{ news.date }}
              </p>

              <router-link :to="`/post/${news.id}`" >
                <button
                class="
                  btn-action-button
                  text-white
                  inline-flex
                  items-center
                  mt-4
                  text-center
                  mx-auto
                "
                  
        
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
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

     <!-- Text Header -->
   
   


 


  <!--Last section Ends-->

  <Footer />
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    articles() {
      return this.$store.state.articles;
    },

    

   
  },
};
</script>
