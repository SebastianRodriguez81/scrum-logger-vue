<template>
  <div>
    <div v-if="loading" class="fixed-center">
      <Spinner></Spinner>
    </div>
    <div v-if="loadFull" class="q-pa-md">
      <div v-if="!modificacion" class="row justify-left q-gutter-xl bg-blue-500">
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
  </div>
</template>

<script>
import LogItem from "../../modules/daily/domain/LogItem";
import LogCard from "../../modules/daily/components/LogCard";
import LogBox from "../../modules/daily/components/LogBox";
import Spinner from "../../components/Spinner";

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

    async getLogs() {
      this.load = true;
      try {
        this.logitems = await LogItem.getAll();
      } catch (error) {
        console.log(error)
      }      
      this.load = false;
    },
  },
};
</script>


