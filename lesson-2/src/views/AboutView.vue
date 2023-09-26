<template>
  <div>
    <h4>About page</h4>
    <p>{{ profile }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "AboutView",
  data() {
    return { profile: null };
  },
  mounted() {
    const route = useRoute();
    this.profile = route.params.name;
  },
};
</script>

<style scoped></style>
