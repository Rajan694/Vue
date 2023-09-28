import { ref, reactive, computed, watch } from "vue";
export function useCounter() {
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

  return {
    counter,
    increment,
    decrement,
    oddoreven,
    counterData,
  };
}
