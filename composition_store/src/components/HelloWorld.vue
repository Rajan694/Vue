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
  <br /><br />
  <h2>{{ props.name }}</h2>
</template>

<script setup>
import { useCounter } from "../use/useCounter.js";
const { counter, increment, decrement, oddoreven, counterData } = useCounter();

const props = defineProps({
  name: String,
});
</script>

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
