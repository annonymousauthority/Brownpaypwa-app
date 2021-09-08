<template>
  <Navbar />

  <div>
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
        img_container
      "
    >
      <div
        class="
          flex flex-wrap
          content-center
          flex-col
          items-center
          justify-between
          lg:flex-row
        "
      >
        <div class="relative lg:w-1/2">
          <img class="object-fit img_border" :src="img" alt="" />
        </div>
        <div class="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
          <div class="max-w-xl mb-6">
            <h2
              class="
                max-w-lg
                font-sans
                xl:text-7xl
                text-5xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-4xl
                sm:leading-none
              "
            >
              About Brownpay
            </h2>
            <p class="text-base mt-5 text-gray-700 md:text-lg">
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
        border-t
        border-gray-400
        px-4
        py-32
        mx-auto
        sm:max-w-xl
        md:max-w-full
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
      <div
        class="
          flex flex-wrap
          content-center
          flex-col
          items-center
          justify-between
          lg:flex-row
        "
      >
        <div class="mb-80 lg:max-w-lg lg:mb-0">
          <div class="max-w-xl">
            <p class="text-gray-700 md:text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              sunt odit reprehenderit, illum velit necessitatibus obcaecati
              accusantium, provident quas tenetur, sed atque. Quia nisi est
              quasi voluptate corrupti libero animi?
            </p>
          </div>
        </div>
        <div class="relative lg:w-2/5">
          <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-2 mt-16">
            <div
              class="
                px-5
                py-20
                text-center
                transition
                duration-300
                transform
                border-2
                img_border
                bg-white
                rounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-semibold text-black">
                Sed ut perspiciatis unde omnis iste
              </p>
            </div>
            <div
              class="
                px-10
                py-20
                text-center
                transition
                img_border
                bg-white
                border-2
                duration-300
                transformrounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-semibold text-black">
                Well, the way they make shows is
              </p>
            </div>
            <div
              class="
                px-10
                py-20
                text-center
                transition
                img_border
                bg-white
                border-2
                duration-300
                transformrounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-semibold text-black">
                Some don't, become nothing again
              </p>
            </div>
            <div
              class="
                px-10
                py-20
                text-center
                transition
                img_border
                border-2
                bg-white
                duration-300
                transformrounded
                shadow-2xl
                hover:scale-105
                md:shadow-xl
                hover:shadow-2xl
              "
            >
              <p class="font-semibold text-black">
                Pommy ipsum smeg head whizz morris
              </p>
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
    <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
   
    <div class="grid gap-20 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Oliver Aguilerra</p>
          <p class="text-sm text-gray-800">Product Manager</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Marta Clermont</p>
          <p class="text-sm text-gray-800">Design Team Lead</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Anthony Geek</p>
          <p class="text-sm text-gray-800">CTO, Lorem Inc.</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Alice Melbourne</p>
          <p class="text-sm text-gray-800">Human Resources</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-60 h-60 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Martin Garix</p>
          <p class="text-sm text-gray-800">Bad boy</p>
        </div>
      </div>      
    </div>
  </div>

      
        
  </div>

  <Footer/>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
export default {
  data() {
    return {
      img: require("../assets/pexels-worldspectrum-1097946.jpg"),
    };
  },
  components: { Navbar, Footer },
};
</script>
