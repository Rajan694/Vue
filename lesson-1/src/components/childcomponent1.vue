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
    };
  },
  methods: {
    toggleMessage() {
      this.showMessage = !this.showMessage;
    },
  },
};
</script>

<style scoped></style>
