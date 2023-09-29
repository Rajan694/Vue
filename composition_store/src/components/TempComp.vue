<template>
  <div class="counter">
    <button class="counter-btn rounded-pill" @click="store.increment(2)">
      ++
    </button>
    <button class="counter-btn rounded-pill" @click="store.increment(1)">
      +
    </button>
    <p class="counter-text">Counter: {{ store.counter }} |</p>

    <button class="counter-btn rounded-pill" @click="store.decrement(1)">
      -
    </button>
    <button class="counter-btn rounded-pill" @click="store.decrement(2)">
      --
    </button>
  </div>
  <br /><br />
  <h4>The given number is {{ store.oddoreven }}</h4>
</template>

<script setup>
// Import the store
import { useMyStore } from "../store/counter.js";

// Use the store in the component
const store = useMyStore();
</script>
