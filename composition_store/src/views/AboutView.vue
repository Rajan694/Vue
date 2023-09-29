<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input v-autofocus />
    <input ref="input" />
    <button @click="getd()">Focus</button>
  </div>
  <ul>
    <li v-for="item in details" :key="item.id">
      <RouterLink :to="`/aboutdetails/${item.id}`">{{ item.title }}</RouterLink>
    </li>
  </ul>
  <button
    @click="increment(1)"
    class="btn btn-lg"
    :class="oddoreven == 'Even' ? 'btn-primary' : 'btn-danger'"
  >
    {{ counter }} by composable
  </button>
  <button
    @click="store.increment(1)"
    class="btn btn-lg"
    :class="store.oddoreven == 'Even' ? 'btn-primary' : 'btn-danger'"
  >
    {{ store.counter }} by store
  </button>
</template>

<script setup>
import { ref } from "vue";
import { useCounter } from "../use/useCounter.js";
const { counter, increment, oddoreven } = useCounter();

// Import the store
import { useMyStore } from "../store/counter.js";

// Use the store in the component
const store = useMyStore();

const input = ref(null);
const getd = () => {
  input.value.focus();
};

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
