<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-10 bg-blue-400">
  <h4>contador store por computed {{count}}</h4>
  <h4>contador store directo {{$store.state.count}}</h4>
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
import { mapState } from 'vuex';

export default {
  
  components: {
    NavBar    
  },
  computed: mapState({
      count: state => state.count
})
  
}
</script>

<style src="./assets/tailwind.css"></style>