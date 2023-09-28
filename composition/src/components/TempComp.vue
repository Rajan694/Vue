<!-- <template>
  <div>
    <p>Count: {{ $store.count }}</p>
    <p>Double Count: {{ $store.doubleCount }}</p>
    <button @click="$store.increment()">Increment</button>
    <button @click="$store.decrement()">Decrement</button>
  </div>
</template>

<script setup>
// Import the store
import { useMyStore } from "@/stores/myStore";

// Use the store in the component
const store = useMyStore();
</script> -->

<template>
  <div>
    <p>Count: {{ $store.count }}</p>
    <p>Double Count: {{ $store.doubleCount }}</p>
    <button @click="$store.increment()">Increment</button>
    <button @click="$store.decrement()">Decrement</button>
  </div>
</template>

<script>
// Import the store
import { useMyStore } from "@/stores/myStore";

export default {
  setup() {
    // Use the store in the component
    const store = useMyStore();

    return {
      $store: store,
    };
  },
};
</script>
