<template>
  <div class="mb-5">
    <ul class="flex">
        <li class="flex-1 mr-2">
            <img width="50" src="https://image.flaticon.com/icons/png/512/47/47303.png" alt="Logo">
        </li>
        <li class="flex-1 mr-2">
            <router-link to="/">HOY</router-link>
        </li>
        <li class="flex-1 mr-2">
            <router-link to="/ayer">AYER</router-link>
        </li>
        <li class="flex-1 mr-2">
            <router-link to="/archivo">ARCHIVO</router-link>
        </li>
    </ul>
    <hr>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  font-size: 15px;
  font-weight: bold;  
}
</style>