<template>
  <div class="q-gutter-y-md" style="">
    <q-tabs v-model="tab" inline-label class="bg-pink-500 text-white shadow-2">
      <div class="">
        <q-btn flat @click="drawer = !drawer" round dense icon="menu" class="absolute-left ml-5" />
      </div>
      <q-route-tab 
        name="Daily" 
        icon="event" 
        label="Daily" 
        to="/" exact 
      />
      <q-route-tab
        name="Sprint"
        icon="replay_circle_filled"
        label="Sprint"
        to="/test"
        exact
      />
      <q-route-tab
        name="Kanban"
        icon="post_add"
        label="Kanban"
        to="/kanban"
        exact
      />
      <q-route-tab 
        name="Usuario" 
        icon="account_circle" 
        label="Usuario" 
        to="/usuario" exact 
      />
      </q-tabs>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>