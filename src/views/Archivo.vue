<template>
  <div>
    <div v-if="loading"><spinner></spinner></div>
    <div id="logitem-card" class="grid grid-cols-1 mt-5 md:grid-cols-3 xl:grid-cols-5">
      <div v-for="logitem in logitems" :key="logitem.id">
        <LogCard @LogChange="logChanged" :id="logitem.id" :fecha="logitem.fecha" :ayer="logitem.ayer" :hoy="logitem.hoy"></LogCard> 
      </div> 
    </div>
    <LogBox @LogBoxEmit="LogBoxEmited" v-if="loadFull" :idp="item.id" :ayerp="item.ayer" :hoyp="item.hoy"></LogBox>
  </div>
</template>

<script>
import LogService from '../services/LogItem/LogItemsService'
import LogCard from '../components/LogCard' 
import LogBox from '../components/LogBox' 
import spinner from '../components/Spinner' 

export default {

  components: {
    LogCard,
    LogBox,
    spinner
  },

  data() {
    return {
      logitems: [],
      item: {},
      load: true
    }
  }, 

  computed:{
    loadFull: function(){
      return !this.load;
    },

    loading: function(){
      return this.load;
    }
  },
  
  created() {
    this.getLogs();
  },

  methods: {
    logChanged(item){
      if(item.isChanged){
        this.editLogCard(item);
      }
      if(item.isDeleted){
        this.deleteLogCard();
      }
    },

    LogBoxEmited(){
      this.getLogs();
    },

    editLogCard(item){
      this.item = item;
    },

    deleteLogCard() {      
      this.getLogs();
    },

    getLogs() {
      this.load = true;
      LogService.getAll()
      .then(logitems => {
        this.logitems = logitems
        this.load = false;
      })
      .catch(e => {
        console.log(e)
      })
    },
  }  
}
</script>