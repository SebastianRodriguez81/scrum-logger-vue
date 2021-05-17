<template>
  <div>
    <div class="bg-white rounded shadow border p-6 w-64 m-3">
      <h5 class="text-3l font-bold mb-4 mt-0">{{ formatDate(fecha) }}</h5>
      <q-scroll-area
        :delay="1200"
        :thumb-style="thumbStyle"
        :content-style="contentStyle"
        :content-active-style="contentActiveStyle"
        style="height: 200px; max-width: 300px"
      >
        <div class="text-gray-700 text-sm">
          <h2><b>AYER</b></h2>
          <h3>{{ ayer }}</h3>
          <br />
          <h2><b>HOY</b></h2>
          <h3>{{ hoy }}</h3>
        </div>
      </q-scroll-area>

      <div class="mt-3 flex justify-end">
        <span @click="deleteLog()" id="trash" class="p-1"
          ><i class="fas fa-dumpster fa-lg"></i
        ></span>
        <span @click="editLog()" id="edit" class="p-1"
          ><i class="fas fa-edit fa-lg"></i
        ></span>
        <q-btn
          class="glossy"
          round
          color="secondary"
          icon="local_florist"
          @click="$store.commit('increment')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LogService from "../services/LogItem/LogItemsService";
import moment from "moment";

export default {
  props: {
    id: String,
    fecha: String,
    ayer: String,
    hoy: String,
  },

  methods: {
    editLog() {
      let data = {};
      data.isDeleted = false;
      data.isChanged = true;
      data.id = this.id;
      data.fecha = this.fecha;
      data.ayer = this.ayer;
      data.hoy = this.hoy;

      this.$emit("LogChange", data);
    },

    deleteLog() {
      let data = {};

      LogService.delete(this.id)
        .then(() => {
          data.isDeleted = true;
          this.$emit("LogChange", data);
        })
        .catch((e) => {
          console.log(e);
          data.isDeleted = false;
          this.$emit("LogChange", data);
        });
    },

    formatDate(date) {
      if (date) {
        return moment(String(date)).format("DD/MM/YY");
      }
    },
  },
};
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
#trash,
#edit {
  cursor: pointer;
}
</style>