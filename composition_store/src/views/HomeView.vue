<template>
  <div class="container">
    <HelloWorld name="Rajan by props" />

    <RouterLink to="/temp"
      ><button class="btn btn-primary me-2">
        go to store counter
      </button></RouterLink
    >
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
</script>
