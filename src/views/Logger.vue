<template>
  <div class="bg-blue-500">
    <div class="h-screen bg-blue-500">
      <Main />
    </div>
  </div>
</template>

<script>
import Main from "../components/Main";
import { mapState } from "vuex";

export default {
  components: {
    Main,
  },

  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style src="../assets/tailwind.css"></style>