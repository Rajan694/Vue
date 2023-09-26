<template>
  <div class="container">
    <HelloWorld msg="Welcome to Your Vue.js App" :obj="obj" na="rtyu" />

    <!-- Slots -->

    <!-- single slot -->
    <!-- <ChildComponent1><h1>using slots</h1></ChildComponent1> -->

    <!-- Multiple Slots -->
    <ChildComponent1>
      <template v-slot:head>
        <h1>using slot1</h1>
      </template>
      <template v-slot:foot>
        <h1>using slot2</h1>
      </template>
    </ChildComponent1>
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
