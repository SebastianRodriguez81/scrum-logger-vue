<template>
  <h4>contador store directo {{ $store.state.count }}</h4>
  <div class="w-full xl:w-82 md:w-87 lg:w-90">
    <Prueba />
    <Prueba />
    <Prueba />
    <Prueba />
    <Prueba />
    <LogOut />
  </div>
</template>

<script>
import Prueba from "../../components/Prueba.vue"
import LogOut from "../../components/Logout.vue"

export default {
  components: {
    Prueba,
    LogOut
  },
};
</script>

<style>
</style>