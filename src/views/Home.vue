<template>
  <div :class="appTheme">
    <landingpage/>
  </div>
</template>

<script>
import Landingpage from '../components/landingpage.vue'
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    Landingpage
  }
};
</script>
