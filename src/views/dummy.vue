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
              <router-link to="/about">
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  class="
                    font-medium
                    tracking-tight
                    text-white
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >About</a
                ></router-link
              >
            </li>
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

  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="grid gap-10 lg:grid-cols-2">
      <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
          <svg class="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
            <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points=" 8,5 8,1 16,1 16,5" stroke-linejoin="round"></polyline>
            <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="9,15 1,15 1,5 23,5 23,15 15,15" stroke-linejoin="round"></polyline>
            <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="22,18 22,23 2,23 2,18" stroke-linejoin="round"></polyline>
            <rect x="9" y="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" width="6" height="4" stroke-linejoin="round"></rect>
          </svg>
        </div>
        <div class="max-w-xl mb-6 text-left">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
           Come Join the future of 
            <span class="inline-block text-deep-purple-accent-400">Binance</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
          </p>
        </div>
        <div class="text-left">
          <a href="/" aria-label="" class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
            Learn more
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div class="flex items-center justify-center -mx-4 lg:pl-8">
        <div class="flex flex-col items-end px-3">
          <img
            class="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
          />
          <img class="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="" />
        </div>
        <div class="px-3">
          <img class="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="" />
        </div>
      </div>
    </div>
  </div>


  <!-- Second section -->
     <div
      class="
        text-left
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        xl:max-w-screen-xl
        md:px-24
        lg:px-8
        my-auto
        lg:py-20
        img_container
      "
    >
      <div class="flex flex-col justify-between lg:flex-row ">
        <div class="relative lg:w-1/2">
          <img class="object-fit h/5- img_border" :src="img" alt="" />
        </div>
        <div class="mt-12 lg:max-w-lg lg:pr-5 lg:mb-0 sm:max-text-3xl">
          <div class="max-w-xl sm:max-py-8">
            <h2
              class="
                max-w-xl
                mt-8
                font-sans
                xl:text-6xl
                text-5xl
                font-bold
                text-900
                sm:text-4xl
              "
            >
             Come join the future of Binance
            </h2>
            <h3 class="text-blue">
                <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider text-2xl  transition-colors duration-200 text-blue mt-5">
            Learn more
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
            </h3>
            <h3 class="text-blue">
                <a href="/" aria-label="" class="inline-flex items-center font-semibold tracking-wider text-2xl  transition-colors duration-200 text-blue mt-5">
            Contact us
            <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
            </svg>
          </a>
            </h3>
          </div>
        </div>
      </div>
    </div>

    <!-- Third Section -->
    <div
      class="
        text-left
        border-t border-gray-400
        px-4
        py-32
        mx-auto
        sm:max-w-screen
        md:max-w-screen-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        my-18
        lg:py-20
      "
    >
      <h2
        class="
          max-w-xl
          mt-1
          font-sans
          xl:text-4xl
          text-4xl
          font-bold
          text-black-700
          sm:text-4xl
        "
      >
        Our Philosophy
      </h2>
      <div class="flex flex-col items-left justify-between lg:flex-row">
        <div class="lg:max-w-md">
          <div class="max-w-xl">
            <p class="text-gray-700 py-8 md:text-lg text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              sunt odit reprehenderit, illum velit necessitatibus obcaecati
              accusantium, provident quas tenetur, sed atque. Quia nisi est
              quasi voluptate corrupti libero animi?
            </p>
          </div>
        </div>
        <div class="lg:max-w-xl">
          <div class="flex">
            <img :src="img1" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>
    <!-- End of third section -->

      <!-- Fourth Section -->
          <div
      class="
        text-left
        border-t border-gray-400
        px-4
        py-32
        mx-auto
        sm:max-w-screen
        md:max-w-screen-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        my-18
        lg:py-20
      "
    >
      <h2
        class="
          max-w-xl
          mt-1
          font-sans
          xl:text-4xl
          text-4xl
          font-bold
          text-black-700
          sm:text-4xl
        "
      >
        Our Vision
      </h2>
      <div class="flex flex-col items-left justify-between lg:flex-row">
        <div class="lg:max-w-md">
          <div class="max-w-xl">
            <p class="text-gray-700 py-8 md:text-lg text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              sunt odit reprehenderit, illum velit necessitatibus obcaecati
              accusantium, provident quas tenetur, sed atque. Quia nisi est
              quasi voluptate corrupti libero animi?
            </p>
          </div>
        </div>
        <div class="lg:max-w-xl">
          <div class="flex">
            <img :src="img2" alt="" srcset="">
          </div>
        </div>
      </div>
    </div>


    
</template>



<script>
import Navbar from "../components/Navbar.vue";
export default {
  data() {
    return {
      img: require("../assets/pexels-fauxels-3184418.jpg"),
      img1: require("../assets/pexels-nita-52910.jpg"),
      img2: require("../assets/pexels-skitterphoto-63901.jpg")
    };
  },
  components: {
    Navbar,
  },
};
</script>


<!--About us -->
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
              <router-link to="/about">
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  class="
                    font-medium
                    tracking-tight
                    text-white
                    transition-colors
                    duration-200
                    hover:text-deep-purple-accent-400
                  "
                  >About</a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/career">
                <a
                  href="/career"
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
                  >Careers</a
                ></router-link
              >
            </li>
            <li>
              <router-link to="/partnership">
                <a
                  href="/partnership"
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
  <!--End of Banner section-->
    <div class="relative">
    <img
      :src="img"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div
        class="
          px-4
          py-16
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8
          lg:py-10
        "
      >
       <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl sm:mx-auto lg:max-w-2xl text-white">
      <div class="flex flex-col mb-16 sm:text-center sm:mb-0">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 class="max-w-lg mb-6 font-sans xl:text-6xl text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="e77df901-b9d7-4b9b-822e-16b2d410795b" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)" width="52" height="24"></rect>
              </svg>
             About <span class="title">Brownpay</span>
            </span>
          </h2>
          <p class="text-base text-white md:text-3xl">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div>
          <a
            href="/"
            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>
   
      </div>
    </div>
  </div>
 
    <div
      class="
        text-left
        px-4
        py-16
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        my-auto
        lg:py-20
      "
    >
      <div class="flex flex-col justify-between lg:flex-row">
        <div class="relative lg:w-1/2">
          <img class="object-fit img_border" :src="img" alt="" />
        </div>
        <div class="mt-12 lg:max-w-lg lg:pr-5 lg:mb-0 sm:max-text-3xl">
          <div class="max-w-xl sm:max-py-8">
            <h2
              class="
                max-w-xl
                mt-8
                font-sans
                xl:text-6xl
                text-5xl
                font-bold
                text-900
                sm:text-4xl
              "
            >
              About <br />
              Brownpay
            </h2>
            <p class="text-base sm:max-py-16 mt-5 text-gray-700 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- End of first-section -->

    <!-- Second-section -->

    <div
      class="
        text-left
        border-t border-gray-400
        px-4
        py-32
        mx-auto
        sm:max-w-screen
        md:max-w-screen-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        my-18
        lg:py-20
      "
    >
      <h2
        class="
          max-w-xl
          mt-1
          font-sans
          xl:text-4xl
          text-4xl
          font-bold
          text-black-700
          sm:text-4xl
        "
      >
        Brownpay Powered Transactions
      </h2>
      <div class="flex flex-col items-left justify-between lg:flex-row">
        <div class="lg:max-w-md">
          <div class="max-w-xl">
            <p class="text-gray-700 py-8 md:text-lg text-left">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              sunt odit reprehenderit, illum velit necessitatibus obcaecati
              accusantium, provident quas tenetur, sed atque. Quia nisi est
              quasi voluptate corrupti libero animi?
            </p>
          </div>
        </div>
        <div class="lg:max-screen-xl">
          <div class="grid gap-20 sm:grid-cols-1 lg:grid-cols-2">
            <div
              class="
                px-2
                py-10
                text-center
                transition
                duration-300
                transform
                border-2
                cards
                bg-white
                rounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-bold align-text-top text-3xl text-black">
                Transactions
              </p>
              <p class="font-semibold py-10 text-5xl text-black">$2m +</p>
            </div>
            <div
              class="
                px-10
                py-10
                text-center
                transition
                cards
                bg-white
                border-2
                duration-300
                transform
                rounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-bold text-3xl text-black">Users Served</p>
              <p class="font-semibold py-10 text-5xl text-black">10k +</p>
            </div>
            <div
              class="
                px-5
                py-10
                mb-10
                text-center
                transition
                cards
                bg-white
                border-2
                duration-300
                transform
                rounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-bold text-3xl text-black">Currencies</p>
              <p class="font-semibold py-10 text-5xl text-black">3</p>
            </div>
            <div
              class="
                px-10
                py-10
                mb-10
                text-center
                transition
                cards
                border-2
                bg-white
                duration-300
                transform
                rounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-bold text-3xl mb-2 text-black">Countries</p>
              <p class="font-semibold py-10 text-5xl text-black">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- End of section 2 -->

    <!--last -->
    <div
      class="
        text-left
        px-4
        py-4
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        my-auto
        lg:py-0
      "
    >
      <h2
        class="
          max-w-xl
          mt-13
          font-sans
          xl:text-4xl
          text-4xl
          font-bold
          text-black-700
          sm:text-4xl
        "
      >
        Our Executive Team
      </h2>
    </div>
    <div
      class="
        px-4
        py-8
        mx-auto
        sm:max-w-xl
        md:max-w-full
        lg:max-w-screen-xl
        md:px-24
        lg:px-8
        lg:py-4
      "
    >
      <div
        class="
          grid
          gap-20
          mx-auto
          lg:max-w-screen-lg
          sm:grid-cols-2
          lg:grid-cols-3
          mt-5
        "
      >
        <div class="flex flex-col items-center">
          <img
            class="object-cover w-60 h-60 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div class="flex flex-col items-center">
            <p class="text-lg font-bold">Oliver Aguilerra</p>
            <p class="text-sm text-gray-800">Product Manager</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img
            class="object-cover w-60 h-60 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div class="flex flex-col items-center">
            <p class="text-lg font-bold">Marta Clermont</p>
            <p class="text-sm text-gray-800">Design Team Lead</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img
            class="object-cover w-60 h-60 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div class="flex flex-col items-center">
            <p class="text-lg font-bold">Anthony Geek</p>
            <p class="text-sm text-gray-800">CTO, Lorem Inc.</p>
          </div>
        </div>
      </div>
      <div
        class="
          grid
          gap-x-0
          mx-auto
          lg:max-w-screen-sm
          sm:grid-cols-2
          lg:grid-cols-2
          mt-10
        "
      >
        <div class="flex flex-col items-center">
          <img
            class="object-cover w-60 h-60 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div class="flex flex-col items-center">
            <p class="text-lg font-bold">Alice Melbourne</p>
            <p class="text-sm text-gray-800">Human Resources</p>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <img
            class="object-cover w-60 h-60 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Person"
          />
          <div class="flex flex-col items-center">
            <p class="text-lg font-bold">Martin Garix</p>
            <p class="text-sm text-gray-800">Bad boy</p>
          </div>
        </div>
      </div>
    </div>


  <Footer />
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
export default {
  data() {
    return {
      img: require("../assets/5690591.jpg"),
    };
  },
  components: { Navbar, Footer },
};
</script>
