<template>
  <div class="dashboard dark:bg-dark">
    <DashboardNav />
    <div class="container px-6 py-4 mx-auto ">
      <div class="flex flex-wrap overflow-hidden lg:-mx-4 xl:-mx-6">
        <div
          class="
            w-full
            overflow-hidden
            lg:my-4
            lg:px-4
            lg:w-1/2
            xl:my-6
            xl:px-4
            xl:w-3/12
          "
        >
        <Sidebar/>
        </div>

        <div
          class="
            w-full
            overflow-hidden
            lg:my-4
            lg:px-4
            lg:w-1/2
            xl:my-6
            xl:px-6
            xl:w-9/12
          "
        >
          <div class="grid grid-cols-6 gap-4">
        <router-view></router-view>
      </div>
        </div>
      </div>
    </div>

    <!-- <div class="grid grid-cols-6 gap-4 ml-0 lg:ml-64 xl:ml-80  ">
        <router-view></router-view>
      </div> -->
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar.vue";
import DashboardNav from "../components/DashboardNav.vue";
export default {
  components: { Sidebar, DashboardNav },
};
</script>

