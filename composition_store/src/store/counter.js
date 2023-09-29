// Import necessary dependencies
import { defineStore } from "pinia";

// Define your store
export const useMyStore = defineStore({
  id: "counter",
  // Define the state
  state: () => ({
    counter: 0,
  }),

  // Define mutations to modify the state
  actions: {
    increment(amount) {
      this.counter += amount;
    },

    decrement(amount) {
      this.counter -= amount;
    },
  },

  // Define getters to access the state
  getters: {
    oddoreven() {
      return this.counter % 2 === 0 ? "Even" : "Odd";
    },
  },
});
