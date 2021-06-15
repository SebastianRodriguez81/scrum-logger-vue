<template>
  <div class="bg-blue-500">
  <div class="h-screen bg-blue-500">
    <Main />
  </div>
  <Navigator />
  </div>
</template>

<script>
import Main from "./components/Main";
import Navigator from "./router/Navigator";
import { mapState } from "vuex";

import { onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import firebase from 'firebase'

export default {
  setup () {
    const router = useRouter()
    const route = useRoute()

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace('/login')
        } else if (route.path == "/login" || route.path == "/register" ) {
          router.replace('/')
        }
      })
    })

  },
  
  components: {
    Main,
    Navigator,
  },

  computed: mapState({
    count: (state) => state.count,
  }),
};
</script>

<style src="./assets/tailwind.css"></style>