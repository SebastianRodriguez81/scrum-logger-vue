<template>
  <q-splitter v-model="splitterModel" style="height: 100vh">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical class="text-white bg-blue-500">
        <div v-for="Route in Routes" :key="Route.nro">
          <q-route-tab
            :name="Route.name"
            :icon="Route.icon"
            :label="Route.label"
            :to="Route.to"
            exact
          />
        </div>
      </q-tabs>
    </template>

    <template v-slot:after >
      <q-tab-panels 
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="fade"
        transition-next="fade"
      >
        <q-tab-panel class="bg-blue-500"
          v-for="Route in Routes"
          :key="Route.nro"
          :name="Route.name"
        >        
          <div class="text-weight-bold text-h4 q-mb-md text-pink-300 uppercase">{{ Route.label }}</div>  
          <hr>           
        </q-tab-panel>
      </q-tab-panels>
      <Body />
    </template>
  </q-splitter>
</template>

<script>
import Body from "./Body";
import { ref } from 'vue'

export default {
  props: {
    Routes: [],
  },

  components: {
    Body,
  },

  data() {
    return {
      tab: "mails",
      splitterModel: ref(15),
    };
  },
};
</script>

<style scoped>
   
</style>