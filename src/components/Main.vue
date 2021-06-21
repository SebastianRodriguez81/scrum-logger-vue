<template>
  <div class="bg-blue-500">
    <NavBar />
    <router-view></router-view>
    <Logout />
  </div>
</template>

<script>
import NavBar from "./NavBar";
import Logout from "./Logout";

export default {
  components: {
    NavBar,
    Logout,
  },
};
</script>