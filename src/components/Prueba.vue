<template>
  <div class="q-pa-md">
    <q-parallax :height="200" :speed="0.5">
      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg" />
      </template>

      <h1 class="text-pink">Charts</h1>
    </q-parallax>
  </div>
  <div class="chart">
    <Chart />
  </div>

  <div class="counter">
    Contador directo a store &nbsp;
    <q-btn
      class="glossy"
      round
      color="primary"
      icon="local_florist"
      @click="$store.commit('increment')"
    />
    &nbsp;
    <q-btn
      class="glossy"
      round
      color="secondary"
      icon="local_florist"
      @click="$store.commit('decrement')"
    />
    &nbsp;
    {{ $store.state.count }}
  </div>
</template>

<script>
import Chart from "../components/lineChart.vue";

export default {
  components: {
    Chart,
  },
};
</script>

<style>
.chart {
  margin: auto;
  width: fit-content;
  border: 3px solid white;
  padding: 10px;
}

.counter {
  margin: auto;
  width: fit-content;
  color: white;
  padding: 10px;
}
</style>