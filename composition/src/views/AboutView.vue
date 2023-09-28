<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-autofocus />
  </div>
  <ul>
    <li v-for="item in details" :key="item.id">
      <RouterLink :to="`/aboutdetails/${item.id}`">{{ item.title }}</RouterLink>
    </li>
  </ul>
</template>
<script setup>
import { ref } from "vue";

const details = ref([
  { id: 1, title: "About 1" },
  { id: 2, title: "About 2" },
  { id: 3, title: "About 3" },
  { id: 4, title: "About 4" },
]);
const vAutofocus = {
  // use it as v-autofocus
  mounted: (el) => {
    el.focus();
  },
};
</script>
