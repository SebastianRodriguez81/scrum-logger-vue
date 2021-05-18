<template>
  <NavBar />
</template>

<script>
import NavBar from "./components/NavBar";
import { mapState } from "vuex";

export default {
  components: {
    NavBar,
  },

  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style src="./assets/tailwind.css"></style>