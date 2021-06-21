<template>
  <div>
    <SideBar :Routes="$store.state.Routes" />
  </div>
</template>

<script>
import SideBar from "../../components/SideBar";

export default {
  components: {
    SideBar,
  },
};
</script>