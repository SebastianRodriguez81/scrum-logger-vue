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
export default {};
</script>