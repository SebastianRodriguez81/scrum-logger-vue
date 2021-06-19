<template>
  <div>
  <div class="q-pa-md row items-start q-gutter-md">    
    <q-card class="my-card">
      <q-item>
        <q-item-section avatar>
          <q-avatar size="170px">
            <img src="https://e-cdn-images.dzcdn.net/images/artist/9cc9cc29462e4b331ce6560f87d094b5/264x264-000000-80-0-0.jpg">
          </q-avatar>
        </q-item-section>

        <q-item-section class="textoAvatar">
          <q-item-label>Ricardo Montaner</q-item-label>
          <q-item-label caption>Cantante</q-item-label>
        </q-item-section>
      </q-item>

      <img src="https://cdn.quasar.dev/img/parallax2.jpg">
    </q-card>     
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
        name: "Usuario",
        icon: "account_circle",
        label: "usuario",
        to: "/usuario",
      },
    ]);
  },
};
</script>


<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
}
.textoAvatar {
    font-size: 2rem;
}
</style>