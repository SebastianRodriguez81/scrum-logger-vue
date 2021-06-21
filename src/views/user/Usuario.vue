<template>
  <div>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card">
        <q-item>
          <q-item-section avatar>
            <q-avatar size="170px">
              <img
                src="https://e-cdn-images.dzcdn.net/images/artist/9cc9cc29462e4b331ce6560f87d094b5/264x264-000000-80-0-0.jpg"
              />
            </q-avatar>
          </q-item-section>

          <q-item-section class="textoAvatar rainbow">
            <q-item-label>Ricardo Montaner</q-item-label>
            <q-item-label class="rainbow2" caption>Cantante</q-item-label>
          </q-item-section>
        </q-item>

        <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-card>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 500px;
}
.textoAvatar {
  font-size: 2rem;
}

.rainbow {
  color: #eb6fad;
  animation-name: rainbow;
  animation-duration: 5s;
}

.rainbow2 {
  color: #eb6fad;
  animation-name: rainbow;
  animation-duration: 15s;
}

@keyframes rainbow {
  from {
    color: rgb(255, 255, 255);
  }
  to {
    color: #eb6fad;
  }
}
</style>