<template>
  <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>

      <h1 class="text-pink">Docks</h1>
    </q-parallax>
  </div>
  <q-btn
        class="glossy"
        round
        color="secondary"
        icon="local_florist"
        @click="$store.commit('increment')"
      />
</template>

<script>
export default {};
</script>

<style>
</style>