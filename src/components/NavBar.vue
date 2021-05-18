<template>
  <div class="q-gutter-y-md" style="">
    <q-tabs v-model="tab" inline-label class="bg-pink-700 text-white shadow-2">
      <q-route-tab name="Daily" icon="event" label="Daily" to="/" exact />
      <q-route-tab
        name="Sprint"
        icon="replay_circle_filled"
        label="Sprint"
        to="/test"
        exact
      />
      <q-route-tab
        name="Backlog"
        icon="post_add"
        label="Backlog"
        to="/prueba"
        exact
      />
    </q-tabs>
  </div>
  <SideBar :Routes="$store.state.Routes" />
</template>

<script>
import SideBar from "../components/SideBar";
export default {
  components: {
    SideBar,
  },
};
</script>