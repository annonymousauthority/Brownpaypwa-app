<template>
  <DashboardNav />
  <div
    class="
      mx-auto
      sm:max-w-xl
      md:max-w-full
      lg:container
      lg:ml-36
      md:px-24
      lg:px-16
      lg:py-10
      text-white
    "
  >
    <div class="">
      <Sidebar />
    </div>
    <div class="grid grid-cols-6 gap-4 ml-96">
    <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import DashboardNav from "../components/DashboardNav.vue";
export default {
  components: { Sidebar, DashboardNav },
};
</script>
