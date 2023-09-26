<template>
  <div class="container">
    <HelloWorld msg="Welcome to Your Vue.js App" :obj="obj" na="rtyu" />

    <!-- Slots -->

    <!-- single slot -->
    <ChildComponent2><h1>using slots</h1></ChildComponent2>

    <!-- Multiple Slots -->
    <ChildComponent1>
      <template v-slot:head>
        <h1>using slot1</h1>
      </template>
      <template v-slot:foot>
        <h1>using slot2</h1>
      </template>
    </ChildComponent1>

    <div class="border border-secondary border-3 mt-3 p-2">
      <!-- dynamic components -->
      <component :is="tab" />
      <button class="btn btn-primary btn-sm" @click="tab = 'JavaComp'">
        Java
      </button>
      <button class="btn btn-primary btn-sm" @click="tab = 'NodeComp'">
        Node
      </button>
      <button class="btn btn-primary btn-sm" @click="tab = 'AngularComp'">
        Angular
      </button>
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ChildComponent1 from "./components/childcomponent1.vue";
import ChildComponent2 from "./components/childcomponent2.vue";
import AngularComp from "./components/Angular.vue";
import NodeComp from "./components/node.vue";
import JavaComp from "./components/java.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    ChildComponent1,
    ChildComponent2,
    AngularComp,
    NodeComp,
    JavaComp,
  },
  data() {
    return {
      tab: "Java",
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
