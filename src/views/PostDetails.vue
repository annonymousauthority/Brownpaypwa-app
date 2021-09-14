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
  

  <!---Main Section-->
     <div class="container mx-auto flex flex-wrap py-6">

        <!-- Post Section -->
        <section class="w-full md:w-2/3 sm:w-1/2 sm:-ml-44  md:ml-44 xl:ml-72 flex flex-col items-center px-3">

            <article class="flex flex-col shadow my-4">
                <!-- Article Image -->
                <a href="#" class="">
                    <img :src="post.img">
                </a>
                <div class="bg-white flex flex-col justify-start p-6">
                    <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4">Crypto</a>
                    <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{{post.title}}</a>
                
                    <p class="pb-3 text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel neque non libero suscipit suscipit eu eu urna. Proin bibendum urna mattis ante malesuada ultrices. Etiam in turpis vitae elit dictum aliquet. Donec mattis risus in turpis dapibus, eget tempus sem tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In est enim, imperdiet sed ornare quis, pellentesque vel risus. Nunc vitae vestibulum turpis. Quisque eget eleifend urna. Etiam et vulputate purus, ut egestas sem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis quis neque non urna venenatis mollis et at massa. Pellentesque sem lacus, malesuada vel hendrerit molestie, mollis vel elit.</p>
                   
                   
                </div>
            </article>

            <div class="w-full flex pt-6">
                <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-left p-6">
                    <p class="text-lg text-blue-800 font-bold flex items-center"><i class="fas fa-arrow-left pr-1"></i> Previous</p>
                    <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                </a>
                <a href="#" class="w-1/2 bg-white shadow hover:shadow-md text-right p-6">
                    <p class="text-lg text-blue-800 font-bold flex items-center justify-end">Next <i class="fas fa-arrow-right pl-1"></i></p>
                    <p class="pt-2">Lorem Ipsum Dolor Sit Amet Dolor Sit Amet</p>
                </a>
            </div>

            

        </section>
    </div>



  <!---Main section End-->
  <Footer/>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue";
// import axios from 'axios'
import postData from "../store/store.json";
export default {
     components: {
    Navbar,
    Footer,
  },

  computed: {
    destinationId() {
      return parseInt(this.$route.params.id);
    },

    post() {
      return postData.articles.find((post) => post.id === this.destinationId);
    },
  },
};
</script>
