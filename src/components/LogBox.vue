<template class="body">
  <div v-if="!submitted" class="app min-h-screen min-v-screen p-8 bg-grey-lightest font-sans">
    <div class="row sm:flex">
      <div class="col sm:w-1/2">
        <div class="box border rounded flex flex-col shadow bg-white">
          <div class="box__title bg-grey-lighter px-3 py-2 border-b">
            <h2 class="text-xl text-grey-darker font-medium">
                Ayer
            </h2>
          </div>
          <textarea
            rows="5"
            placeholder="Qué hice ayer?"
            class="text-grey-darkest flex-1 p-2 m-1 bg-transparent"
            name="tt"
            v-model="ayer"
          ></textarea>
        </div>
      </div>

      <div class="col mt-8 sm:ml-8 sm:mt-0 sm:w-1/2">
        <div class="box border rounded flex flex-col shadow bg-white">
          <div class="box__title bg-grey-lighter px-3 py-2 border-b">
            <h2 class="text-xl text-grey-darker font-medium">
                Hoy
            </h2>
          </div>
          <textarea
            rows="5"
            placeholder="Qué voy a hacer hoy?"
            class="text-grey-darkest flex-1 p-2 m-1 bg-transparent"
            name="tt"
            v-model="hoy"
          ></textarea>
        </div>
      </div>        
    </div>
    <div class="row flex">
        <button @click="saveLog" class="bg-pink-600 hover:bg-pink-700 text-white mt-8 font-bold py-2 px-4 rounded">
          Guardar
        </button>
    </div>    
        
  </div>
  <div v-else>
      <button @click="newLog" class="bg-pink-600 hover:bg-pink-700 text-white mt-8 font-bold py-2 px-4 rounded w-full">
        Nuevo
      </button>
  </div>
</template>

<script>
import LogService from '../services/LogItemsService'

export default {

  props: {
    idp: String,
    ayerp: String,
    hoyp: String
  },
  
  data(){
    return {      
      ayer: this.ayerp,
      hoy: this.hoyp,
      submitted: false
    }
  },

  watch: {
    ayerp: function (val) {
      this.ayer = val;
    },
    hoyp: function (val) {
      this.hoy = val;
    }
  },

  methods: {
    saveLog() {
      const data = {
        ayer: this.ayer,
        hoy: this.hoy       
      }

      if (this.idp) {
        console.log('con id')
        LogService.update(this.idp, data)
        .then(response => {
          this.submitted = true
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })

      }else{
        console.log('sin  id')
        LogService.create(data)
        .then(response => {
          this.submitted = true
          console.log(response.data)
        })
        .catch(e => {
          console.log(e)
        })
      }

   
    },

    newLog() {
      this.submitted = false;
      this.logItem = {};
    }
  }
}
</script>

<style scoped>
    * {
        width: 100%;        
    }    
</style>
