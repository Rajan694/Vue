<template>
  <div class="container">
    <HelloWorld msg="Welcome to Your Vue.js App" :obj="obj" />
    <ChildComponent1 />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ChildComponent1 from "./components/childcomponent1.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ChildComponent1,
  },
  data() {
    return {
      obj: { name: "hello", age: 20 },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 20px;
}
</style>
