<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";
import router from "./router";
import firebase from "firebase";

export default {
  setup() {
    onBeforeMount(() => {
      router.beforeEach((to, from, next) => {
        if (
          to.name != "welcome" &&
          to.name != "login" &&
          to.name != "register"
        ) {
          console.log(to);
          firebase.auth().onAuthStateChanged((user) => {
            if (!user) {
              next({ name: "login" });
            } else {
              if (to.name == "daily") {
                next({ name: "hoy" });
              } else {
                next();
              }
            }
          });
        } else {
          if (to.name == "daily") {
            next({ name: "hoy" });
          } else {
            next();
          }
        }
      });
    });
  },
};
</script>

<style src="./assets/tailwind.css"></style>