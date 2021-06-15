<template>
  <div>
  <NavBar />
  <SideBar :Routes="$store.state.Routes" />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default {
  components: {
    NavBar,
    SideBar,
  },
};
</script>