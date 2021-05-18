<template>
  <div class="q-pa-md">
    <q-parallax :height="150">
      <template v-slot:media>
        <video
          width="720"
          height="440"
          poster="https://cdn.quasar.dev/img/polina.jpg"
          autoplay
          loop
          muted
        >
          <source
            type="video/webm"
            src="https://cdn.quasar.dev/img/polina.webm"
          />
          <source
            type="video/mp4"
            src="https://cdn.quasar.dev/img/polina.mp4"
          />
        </video>
      </template>

      <h3 class="text-white">Video</h3>
    </q-parallax>
  </div>
  <div class="q-pa-md">
    <q-parallax>
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </template>

      <template v-slot:content="scope">
        <div
          class="absolute column items-center"
          :style="{
            opacity: 0.45 + (1 - scope.percentScrolled) * 0.55,
            top: scope.percentScrolled * 60 + '%',
            left: 0,
            right: 0,
          }"
        >
          <img
            src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
            style="width: 150px; height: 150px"
          />
          <div class="text-h3 text-white text-center">Quasar Framework</div>
          <div class="text-h6 text-grey-3 text-center">v{{ $q.version }}</div>
        </div>
      </template>
    </q-parallax>
  </div>
  <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>

      <h1 class="text-white">Docks</h1>
    </q-parallax>
  </div>
</template>

<script>
export default {
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
        name: "TAB 3",
        icon: "warning_amber",
        label: "TAB 3",
        to: "/prueba",
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