<template>

  <div id="app" class="bg-blue-400">
     <Main />
  </div>

</template>

<script>
import Main from "./components/Main";
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

<style src="./assets/tailwind.css"></style>