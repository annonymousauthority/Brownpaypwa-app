<template>
  <navbar />
 <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
            <a class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl" href="#">
               Get in Touch with us
            </a>
            <p class="text-lg text-gray-600">
             Please fill the form below for further Enquiry
            </p>
        </div>
    </header>


  <div class="absolute inset-x-0 bottom-0"></div>
  <div
    class="
      px-4
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:max-w-screen-xl
      xl:min-w-screen-md
      md:px-24
      lg:px-8
    
    "
  >
    <div
      class="
        relative
        max-w-2xl
        sm:mx-auto
        sm:max-w-xl
        md:max-w-2xl
        sm:text-center
      "
    >
      <div class="bg-white rounded shadow-2xl p-7 sm:p-10 text-left">
      
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
              >Email</label
            >
            <input
              placeholder="Enter Entail"
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
              id="email"
              name="Email"
            />
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

  <!-- End of form -->

  <!--last Section tarts-->

  <div class="absolute inset-x-0 bottom-0 text-black"></div>
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
      lg:py-20
    "
  >
    <div
      class="
        relative
        max-w-2xl
        sm:mx-auto
        sm:max-w-xl
        md:max-w-2xl
        sm:text-center
      "
    >
      <header class="w-full container mx-auto">
        <div class="flex flex-col items-center text-center py-12">
          <a
            class="
              font-bold
              text-gray-800
              uppercase
              hover:text-gray-700
              text-5xl
            "
            href="#"
          >
            FAQ
          </a>
          <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </header>
      <div class="w-full md:w-full mx-auto p-8">
        <div class="shadow-md">
          <div class="tab w-full overflow-hidden border-t text-left">
            <input
              class="absolute opacity-0"
              id="tab-single-one"
              type="radio"
              name="tabs2"
            />
            <label
              class="block p-5 leading-normal cursor-pointer"
              for="tab-single-one"
              >What is Brownpay</label
            >
            <div
              class="
                tab-content
                overflow-hidden
                border-l-2
                bg-gray-100
                border-yellow-600
                leading-normal
              "
            >
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t text-left">
            <input
              class="absolute opacity-0"
              id="tab-single-two"
              type="radio"
              name="tabs2"
            />
            <label
              class="block p-5 leading-normal cursor-pointer"
              for="tab-single-two"
              >Is Brownpay available In my country?</label
            >
            <div
              class="
                tab-content
                overflow-hidden
                border-l-2
                bg-gray-100
                border-yellow-600
                leading-normal
              "
            >
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t text-left">
            <input
              class="absolute opacity-0"
              id="tab-single-three"
              type="radio"
              name="tabs2"
            />
            <label
              class="block p-5 leading-normal cursor-pointer"
              for="tab-single-three"
              >What are the commission fees?</label
            >
            <div
              class="
                tab-content
                overflow-hidden
                border-l-2
                bg-gray-100
                border-yellow-600
                leading-normal
              "
            >
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
          <div class="tab w-full overflow-hidden border-t text-left">
            <input
              class="absolute opacity-0"
              id="tab-single-four"
              type="radio"
              name="tabs2"
            />
            <label
              class="block p-5 leading-normal cursor-pointer"
              for="tab-single-four"
              >How to get started?</label
            >
            <div
              class="
                tab-content
                overflow-hidden
                border-l-2
                bg-gray-100
                border-yellow-600
                leading-normal
              "
            >
              <p class="p-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur, architecto, explicabo perferendis nostrum, maxime
                impedit atque odit sunt pariatur illo obcaecati soluta molestias
                iure facere dolorum adipisci eum? Saepe, itaque.
              </p>
            </div>
          </div>
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
  components: {
    Navbar,
    Footer,
  },

  mounted() {
    var myRadios = document.getElementsByName("tabs2");
    var setCheck;
    var x = 0;
    for (x = 0; x < myRadios.length; x++) {
      myRadios[x].onclick = function () {
        if (setCheck != this) {
          setCheck = this;
        } else {
          this.checked = false;
          setCheck = null;
        }
      };
    }
  },
};
</script>
<style
Navbar lang="">
</style>