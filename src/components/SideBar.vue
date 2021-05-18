<template>
  <q-splitter v-model="splitterModel" style="">
    <template v-slot:before>
      <q-tabs v-model="tab" vertical class="text-teal">
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

    <template v-slot:after>
      <q-tab-panels
        v-model="tab"
        animated
        swipeable
        vertical
        transition-prev="fade"
        transition-next="fade"
      >
        <q-tab-panel
          v-for="Route in Routes"
          :key="Route.nro"
          :name="Route.name"
        >
          <div class="text-h4 q-mb-md">{{ Route.label }}</div>
          <div class="text-h4 q-mb-md">{{Route.nro }}: Componenticemos esto! sale un Titulo.vue</div>
        </q-tab-panel>
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