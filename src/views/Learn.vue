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
                  >Explore the Crypto World</a
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
};
</script>
