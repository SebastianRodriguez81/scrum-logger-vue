<template>
  <div>
  <div class="q-pa-md">
    
  </div>
  <Logout />
  </div>
</template>

<script>
import Logout from "../components/Logout"

export default {
   components: {
    Logout
  },
  created() {
    this.$store.commit("setRoutes", [
      { nro: 1, name: "Volver", icon: "replay", label: "Volver", to: "/" },
      {
        nro: 2,
        name: "TAB 2",
        icon: "warning",
        label: "TAB 2",
        to: "/test",
      },
      {
        nro: 3,
        name: "Kanban",
        icon: "warning_amber",
        label: "kanban",
        to: "/kanban",
      },
      {
        nro: 4,
        name: "TAB 4",
        icon: "warning",
        label: "TAB 4",
        to: "/prueba2",
      },
      {
        nro: 5,
        name: "TAB 5",
        icon: "warning_amber",
        label: "TAB 5",
        to: "/prueba3",
      },
    ]);
  },
};
</script>

<style>
</style>