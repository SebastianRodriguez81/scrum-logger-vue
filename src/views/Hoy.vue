<template>
 <h4>contador store por computed {{count}}</h4>
 <h4>contador store directo {{$store.state.count}}</h4>
 <q-btn class="glossy" round color="secondary" icon="local_florist" @click="$store.commit('increment')"/>
  <div class="w-full xl:w-82 md:w-87 lg:w-90">
    <LogBox />
  </div>
</template>

<script>

import LogBox from '../components/LogBox'
import { mapState } from 'vuex';

export default {
  components: {
    LogBox    
  },
  computed: mapState({
      count: state => state.count
})
}
</script>

<style>

</style>