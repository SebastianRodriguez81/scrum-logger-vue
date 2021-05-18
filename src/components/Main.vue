<template>
    <NavBar />
    <SideBar :Routes="$store.state.Routes" />    
</template>

<script>
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default {
  components: {
    NavBar,
    SideBar,
  },
};
</script>