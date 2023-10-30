<template>
  <div class="container">
    <RouterLink to="/table"
      ><button class="btn btn-primary me-2">Table</button></RouterLink
    >
    <p>Date</p>
    <div class="text-primary">
      <date-range-picker
        opens="right"
        :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
        :showWeekNumbers="true"
        v-model="dateRange"
        :show-dropdowns="false"
        :auto-apply="false"
        @update="updateDateRange"
        data-bs-theme="dark"
      >
      </date-range-picker>
      <p>{{ dateRange }}</p>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import DateRangePicker from "daterange-picker-vue3";
import "daterange-picker-vue3/dist/daterange-picker-vue3.css";

//for date range
const dateRange = {
  startDate: "2019-01-01",
  endDate: "2019-12-31",
};
function updateDateRange() {
  console.log(
    new Date(dateRange.startDate).toISOString().split("T")[0],
    new Date(dateRange.endDate).toISOString().split("T")[0]
  );
}
</script>

<style scoped></style>
