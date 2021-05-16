<template>
  <div>
    <div id="logitem-card" class="grid grid-cols-1 mt-5 md:grid-cols-3 xl:grid-cols-5">
      <div v-for="logitem in logitems" :key="logitem._id">
        <div class="bg-white rounded shadow border p-6 w-64 m-3">
          <h5 class="text-3l font-bold mb-4 mt-0">{{ formatDate(logitem.fecha) }}</h5>
          <div class="text-gray-700 text-sm">
            <h2><b>AYER</b></h2>
            <h3>{{ logitem.ayer }}</h3>
            <br>                  
            <h2><b>HOY</b></h2>
            <h3>{{ logitem.hoy }}</h3>                  
          </div>
          <div class="mt-3 flex justify-end">
            <span @click="deleteLog(logitem._id)" id="trash" class="p-1 "><i class="fas fa-dumpster fa-lg"></i></span>
            <span @click="editLog(logitem)" id="edit" class="p-1 "><i class="fas fa-edit fa-lg"></i></span>
          </div>
        </div>        
      </div> 
    </div>
    <LogBox :idp="item._id" :ayerp="item.ayer" :hoyp="item.ayer"></LogBox>
  </div>
</template>

<script>
import LogService from '../services/LogItemsService'
import LogBox from '../components/LogBox' 

import moment from 'moment'

export default {

  components: {
    LogBox
  },

  data() {
    return {
      logitems: [],
      item: {}
    }
  }, 
  
  created() {
    this.getLogs() 
  },

  methods: {
    editLog(item){
      this.item = item
      console.log(this.item)
      console.log(this.item.ayer)
    },

    deleteLog(id) {
      LogService.delete(id)
        .then(res => {
          console.log(res.data)
          this.getLogs()
        })
        .catch(e => {
          console.log(e)
        })
    },

    getLogs() {
      LogService.getAll()
        .then(res => {
          this.logitems = res.data
          console.log(res.data)
        })
        .catch(e => {
          console.log(e)
        })
    },

    formatDate(date) {
      if (date) {
        return moment(String(date)).format('DD/MM/YY')
      }
    }
  }  
}
</script>

<style scoped>
  h2 {
    font-size: 1.2rem;
    font-weight: bold;
  }

  h3 {
    font-size: 1rem;
    line-height: normal;
  }

  #trash {
    color: red;    
  }

  #edit {
    color: green;
  }
  #trash, #edit {
    cursor: pointer;
  }
</style>