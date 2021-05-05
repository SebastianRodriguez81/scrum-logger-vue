<template>
  <div id="app" class="min-h-screen flex flex-col items-center justify-center p-10 bg-blue-400">
    <div class="w-full xl:w-82 md:w-87 lg:w-90">
      <NavBar />
      <h1 class="text-5xl font-bold text-pink-600">Scrum Daily Logger</h1>            
    </div>
    <br>    
    <router-view/>    
  </div>
</template>


<script>
import NavBar from './components/NavBar'

export default {
  components: {
    NavBar    
  }
}
</script>

<style src="./assets/tailwind.css"></style>