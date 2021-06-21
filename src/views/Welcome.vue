<template>
  <div class="login">
    <label class="titulo">SCRUMLOGGER</label>
    <div class="login">
      <router-view></router-view>
    </div>
  </div>
</template>


<script>
import router from "../router";

export default {
  setup() {
    router.push({ name: "login" }); 
  },
};
</script>

<style >
div.login {

  align-content: center;
}
label.titulo {
  color: #eb6fad;
  text-align: center;
  display:block;
  font-size: xxx-large;
  width: 100%;
  animation-name: rainbow;
  animation-duration: 5s;
}

@keyframes rainbow {
  from {
    color: rgb(255, 255, 255);
  }
  to {
    color: #eb6fad;
  }
}

div.login {
  background-color: #3b82f6;
}
</style>
