<template>
  <div class="container">
    <RouterLink to="/table"
      ><button class="btn btn-primary me-2">Table</button></RouterLink
    >
    <p>Date</p>
    <div>
      <date-range-picker
        class="rajan"
        opens="right"
        :locale-data="{ firstDay: 1, format: 'dd-mm-yyyy' }"
        v-model="dateRange"
        :show-dropdowns="false"
        :auto-apply="false"
        @update="updateDateRange"
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
  startDate: "2023-10-10",
  endDate: "2023-10-21",
};
function updateDateRange() {
  console.log(
    new Date(dateRange.startDate).toISOString().split("T")[0],
    new Date(dateRange.endDate).toISOString().split("T")[0]
  );
}
</script>

<style>
.reportrange-text {
  background: inherit !important;
}
.daterangepicker {
  background-color: var(--bs-body-bg) !important;
}
.calendar-table {
  background-color: var(--bs-body-bg) !important;
  border: 1px solid var(--bs-border-color) !important;
}
th {
  color: var(--bs-emphasis-color) !important;
  background-color: var(--bs-body-bg) !important;
}
table {
  color: var(--bs-emphasis-color) !important;
  background-color: var(--bs-body-bg) !important;
}
tr {
  color: var(--bs-emphasis-color) !important;
  background-color: var(--bs-body-bg) !important;
}
tbody {
  color: var(--bs-emphasis-color) !important;
  background-color: var(--bs-body-bg) !important;
}

td {
  color: var(--bs-emphasis-color) !important;
  background-color: var(--bs-body-bg) !important;
}
td.in-range {
  background-color: #ebf4f8 !important;
  color: var(--bs-gray-900) !important;
  border-color: transparent !important;
}
td.active {
  background-color: #357ebd !important;
  border-color: transparent !important;
}
.drp-calendar.left {
  border-left: 1px solid var(--bs-border-color) !important;
}
</style>
