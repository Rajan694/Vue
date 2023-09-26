<template>
  <h5>from hello world</h5>
  <h5>{{ username }}</h5>
</template>

<script>
export default {
  name: "HelloWorld",
  inject: ["username"],
};
</script>

<style scoped></style>
