// Import necessary dependencies
import { defineStore } from "pinia";

// Define your store
export const useMyStore = defineStore("myStore", {
  // Define the state
  state: () => ({
    count: 0,
  }),

  // Define mutations to modify the state
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },

  // Define getters to access the state
  getters: {
    doubleCount() {
      return this.count * 2;
    },
  },
});
