<template>
  <div class="col-4 p-3 mb-2 bg-primary text-white">
    <div class="col-4">
      <label> HOLA Por favor padre dame piernas </label>
      <div  class="col-4">
        <router-link to="/login" tag="button">login</router-link>
      </div>
      <div class="col-1">
        <router-view></router-view>
      </div>
      <div>
            <label> necesito un footer </label>
      </div>
    </div>
  </div>
</template>