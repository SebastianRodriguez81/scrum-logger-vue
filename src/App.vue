<template>
  <div class="h-screen">
    <Main />
  </div>
  <Navigator />
</template>

<script>
import Main from "./components/Main";
import Navigator from "./router/Navigator";
import { mapState } from "vuex";

export default {
  components: {
    Main,
    Navigator,
  },

  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style src="./assets/tailwind.css"></style>