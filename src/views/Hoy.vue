<template>
  <div class="w-full xl:w-82 md:w-87 lg:w-90">
    <LogBox />
  </div>
</template>

<script>
import LogBox from "../components/LogBox";

export default {
  components: {
    LogBox,
  },

  created() {
    this.$store.commit('setRoutes', [
      { name: "Nuevo", icon: "event", label: "Nuevo", to: "/" },
      {
        name: "PARALAX",
        icon: "cloud_upload",
        label: "PAX",
        to: "/ayer",
      },
      {
        name: "Historicos",
        icon: "alarm",
        label: "Historicos",
        to: "/archivo",
      },
    ],)
  },

};
</script>

<style>
</style>