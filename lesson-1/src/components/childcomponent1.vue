<template>
  <div class="border border-info border-3 mt-3 p-2">
    <div>
      <p v-if="showMessage">Hello, World!</p>
      <p v-else>Goodbye, World!</p>
      <button class="btn btn-primary btn-sm" @click="toggleMessage">
        Toggle Message
      </button>
    </div>
    <br />
    <div>
      v-for
      <ul class="list-group">
        <li class="list-group-item" v-for="item in items" :key="item.id">
          {{ item.id }}. {{ item.name }}
        </li>
      </ul>
    </div>
    <div>
      <p>Counter: {{ counter }}</p>
      <button @click="incdecCounter('incr')">Increment</button>
      <button @click="incdecCounter('decr')">Decrement</button>
    </div>

    <!-- single slot -->
    <slot></slot>

    <!-- multiple slot -->
    <slot name="head"> <p>default value goes here</p></slot>
    <slot name="foot"> </slot>
  </div>
</template>

<script>
export default {
  name: "ChildComponent1",
  data() {
    return {
      showMessage: true,
      items: [
        { id: 1, name: "Banana" },
        { id: 2, name: "Tomato" },
        { id: 3, name: "Apple" },
      ],
      counter: 0,
    };
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
    },
    incdecCounter(type) {
      if (type === "incr") {
        this.counter++;
      }
      if (type === "decr") {
        this.counter--;
      }
    },
  },
  watch: {
    counter(val, prev) {
      console.log(`value changed from ${prev} to ${val}`);
      if (val > 5) this.counter = 0;
    },
  },
};
</script>

<style scoped></style>
