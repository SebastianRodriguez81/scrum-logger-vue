<template>

  <q-splitter v-model="splitterModel" style="">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical class="text-teal">
        <div v-for="Route in Routes" :key="Route.to">
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

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="jump-up"
        transition-next="jump-up"
      >
        <div v-for="Route in Routes" :key="Route.to">
          <q-tab-panel :name="Route.name">
            <div class="text-h4 q-mb-md">{{ Route.name }}</div>            
          </q-tab-panel>
        </div>
        
      </q-tab-panels>
       <Body />
    </template>
    
  </q-splitter>
 
</template>

<script>
import Body from "../components/Body";

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
      splitterModel: 5,
    };
  },
};
</script>