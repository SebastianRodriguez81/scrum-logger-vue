<template>
  <div v-if="loading" class="fixed-center">
    <Spinner></Spinner>
  </div>
  <div v-if="loadFull" class="q-pa-md">
    <div v-if="!modificacion" class="row justify-left q-gutter-xl bg-black">
      <q-intersection
        v-for="logitem in logitems"
        :key="logitem.id"
        once
        transition="scale"
        class=""
      >
        <LogCard
          @LogChange="logChanged"
          :id="logitem.id"
          :fecha="logitem.fecha"
          :ayer="logitem.ayer"
          :hoy="logitem.hoy"
        ></LogCard>
      </q-intersection>
    </div>
    <LogBox
      @LogBoxEmit="LogBoxEmited"
      v-if="modificacion"
      :idp="item.id"
      :ayerp="item.ayer"
      :hoyp="item.hoy"
    ></LogBox>
  </div>
</template>

<script>
import LogService from "../services/LogItem/LogItemsService";
import LogCard from "../components/LogCard";
import LogBox from "../components/LogBox";
import Spinner from "../components/Spinner";

export default {
  components: {
    LogCard,
    LogBox,
    Spinner,
  },

  data() {
    return {
      logitems: [],
      item: {},
      load: true,
      modificacion: false,
    };
  },

  computed: {
    loadFull: function () {
      return !this.load;
    },

    loading: function () {
      return this.load;
    },
  },

  created() {
    this.getLogs();
  },

  methods: {
    logChanged(item) {
      if (item.isChanged) {
        this.editLogCard(item);
      }
      if (item.isDeleted) {
        this.deleteLogCard();
      }
    },

    LogBoxEmited() {
      this.getLogs();
      this.modificacion = false;
    },

    editLogCard(item) {
      this.item = item;
      this.modificacion = true;
    },

    deleteLogCard() {
      this.getLogs();
    },

    getLogs() {
      this.load = true;
      LogService.getAll()
        .then((logitems) => {
          this.logitems = logitems;
          this.load = false;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
};
</script>


