<template>
  <div class="bg-secondary">
    <RouterLink to="/"
      ><button class="btn btn-primary me-2">Home</button></RouterLink
    >
  </div>

  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
