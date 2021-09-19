<template>
  <DashboardNav />
  <div
    class="
      md:max-w-full
      md:ml-0
      2xl:ml-52
      md:px-24
      lg:px-16
      2xl:container
      lg:py-10
      text-white
    "
  >
   
      <Sidebar />
    <div class="grid grid-cols-6 gap-4 ml-0 lg:ml-64 xl:ml-80">
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
