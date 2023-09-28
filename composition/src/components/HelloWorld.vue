<template>
  <div class="counter">
    <button class="counter-btn rounded-pill" @click="increment(2)">++</button>
    <button class="counter-btn rounded-pill" @click="increment(1)">+</button>
    <p class="counter-text">Counter: {{ counter }} |</p>
    <p class="counter-text">| Counter: {{ counterData.count }}</p>

    <button class="counter-btn rounded-pill" @click="decrement(1)">-</button>
    <button class="counter-btn rounded-pill" @click="decrement(2)">--</button>
  </div>
  <br /><br />
  <h4>The given number is {{ oddoreven }}</h4>
</template>

<script setup>
import { ref, reactive, computed, watch } from "vue";

const counter = ref(0);
const counterData = reactive({
  count: 0,
});
watch(counter, (newValue, oldValue) => {
  console.log(`The state changed from ${oldValue} to ${newValue}`);
});
watch(
  () => counterData.count,
  (newValue, oldValue) => {
    console.log(`The state changed from ${oldValue} to ${newValue}`);
  }
);

const oddoreven = computed(() => {
  return counter.value % 2 === 0 ? "Even" : "Odd";
});
const increment = (amount) => {
  counter.value += amount;
  counterData.count += amount;
};

const decrement = (amount) => {
  counter.value -= amount;
  counterData.count -= amount;
};
</script>

<!-- Older composition API 

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const increment = () => {
      counter.value++;
    };

    const decrement = () => {
      counter.value--;
    };

    return {
      counter,
      increment,
      decrement,
    };
  },
};
</script> -->

<style>
.counter {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
}

.counter-text {
  font-size: 24px;
  margin-bottom: 10px;
}

.counter-btn {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5px;
}

.counter-btn:hover {
  background-color: #0056b3;
}
</style>
