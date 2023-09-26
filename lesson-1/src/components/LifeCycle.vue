<template>
  <div>
    <p v-if="isShow">life cycle hook</p>
    <button class="btn btn-secondary btn-sm" @click="isShow = !isShow">
      toggle
    </button>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  data() {
    return {
      isShow: true,
    };
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("updated");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  },
};
</script>

<style scoped></style>
