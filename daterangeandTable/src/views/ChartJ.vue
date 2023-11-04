<template>
  <div><Doughnut :data="data" :options="options" /></div>
</template>

<script setup>
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Colors,
} from "chart.js";
import { Doughnut } from "vue-chartjs";

ChartJS.register(ArcElement, Tooltip, Legend, Colors, "defaultFontFamily");

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Data Two",
      // backgroundColor: [
      //       "#8BBD4B",
      //       "#0099CC",
      //       "#FF8A70",
      //       "#3366CC",
      //       "#EC99B1",
      //       "#BC8F8F",
      //       "#8EEDE5",
      //       "#FF8C00",
      //       "#FF666E",
      //       "#A0522D",
      //       "#F08080",
      //       "#FFD700",
      //       "#8DD378",
      //     ],
      data: [30, 30, 30],
      circumference: (ctx) => {
        const total = [
          ...ctx.chart.data.datasets[ctx.datasetIndex + 1].data,
        ].reduce((a, b) => a + b, 0);
        const currentSegment =
          ctx.chart.data.datasets[ctx.datasetIndex + 1].data[0];
        const radius = 360;
        const segmentPecentage = (currentSegment / total) * radius;
        return segmentPecentage;
      },
    },
    {
      label: "Data three",
      // backgroundColor: [
      //           "#8BBD4B",
      //           "#0099CC",
      //           "#FF8A70",
      //           "#3366CC",
      //           "#EC99B1",
      //           "#BC8F8F",
      //           "#8EEDE5",
      //           "#FF8C00",
      //           "#FF666E",
      //           "#A0522D",
      //           "#F08080",
      //           "#FFD700",
      //           "#8DD378",
      //         ],
      data: [10, 20],
    },
  ],
};

const options = {
  responsive: true,
  aspectRatio: 1 / 1.4,
  layout: {
    padding: {
      top: 10,
    },
  },
  maintainAspectRatio: false,

  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        color: "#808000",
        font: {
          size: 15,
        },
      },
    },
    colors: {
      forceOverride: true,
    },
    tooltip: {
      enabled: true,
      usePointStyle: true,
      // callbacks: {
      //   afterLabel: function (context) {
      //     console.log(context);
      //     return "Rajan";
      //   },
      // },
    },
  },
};
</script>

<style lang="scss" scoped></style>
