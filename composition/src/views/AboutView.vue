<template>
  <div class="about">
    <h1>This is an about page</h1>

    <input v-autofocus />
  </div>
</template>
<script setup>
const vAutofocus = {
  // use it as v-autofocus
  mounted: (el) => {
    el.focus();
  },
};
</script>
