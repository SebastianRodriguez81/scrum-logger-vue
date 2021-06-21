<template>
  <div class="q-gutter-y-md" style="">
    <q-tabs v-model="tab" inline-label class="bg-pink-500 text-white shadow-2">
      <!-- <div class="">
        <q-btn
          flat
          @click="drawer = !drawer"
          round
          dense
          icon="menu"
          class="absolute-left ml-5"
        />
      </div> -->
      <q-route-tab
        @click="rutear('/logger/daily')"
        name="Daily"
        icon="event"
        label="Daily"
        to="/logger/daily"
        exact
      />
      <q-route-tab
        @click="rutear('/logger/about')"
        name="About"
        icon="replay_circle_filled"
        label="About"
        to="/logger/about"
        exact
      />
      <q-route-tab
        @click="rutear('/logger/usuario')"
        name="Usuario"
        icon="account_circle"
        label="Usuario"
        to="/logger/usuario"
        exact
      />
    </q-tabs>
  </div>
</template>

<script>
export default {
  components: {},

  methods: {
    rutear(ruta) {
      const routes = this.$router
        .getRoutes()
        .find((route) => route.path === ruta).children;
      let index = 1;
      const routex = [];
      routes.forEach((route) => {
        routex.push({
          nro: index,
          name: route.name,
          label: route.name,
          icon: "event",
          to: ruta + "/" + route.path,
        });
        index++;
      });
      console.log(routex);
      this.$store.commit("setRoutes", routex);
    },
  },
};
</script>