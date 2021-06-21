<template>
  <div class="example">
    <apexcharts
      width="500"
      height="350"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></apexcharts>
  </div>
</template>

<script>
import VueApexCharts from "vue3-apexcharts";
import LogItem from "../modules/daily/domain/LogItem";

export default {
  name: "Chart",
  components: {
    apexcharts: VueApexCharts,
  },
  data() {
    return {
      logitems: [],
      chartOptions: {
        chart: {
          id: "basic-bar",
        },

        xaxis: {
          categories: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Sepriembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
          ],
        },
        fill: { colors: ["#ed61a6"] },
      },

      series: [
        {
          name: "Loggs",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };
  },

  async created() {
    await this.getLogs();

    this.logitems.forEach((log) => {
      if (new Date(log.fecha).getFullYear() == new Date().getFullYear()) {
        this.series[0].data[new Date(log.fecha).getMonth()]++;
      }
    });
  },

  methods: {
    async getLogs() {
      try {
        this.logitems = await LogItem.getAll();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
