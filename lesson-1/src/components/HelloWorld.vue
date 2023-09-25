<template>
  <div class="border border-warning border-3 p-2">
    <p @mouseover="getclicked()">by name {{ name }}</p>

    <p v-bind="$attrs">by function {{ getname() }}</p>

    <p>
      its a prop <b>{{ msg }} and {{ obj.name }} and {{ obj.age }}</b>
    </p>

    <button class="btn btn-info btn-sm mb-1" @click="getclicked()">
      click event
    </button>

    <input v-model="twowaybind" type="text" class="form-control" />
    <p>Two way binded value : {{ twowaybind }}</p>

    <input type="text" ref="myInput" />
    <button @click="onClick()">Focus</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
    obj: Object,
  },
  data() {
    return {
      name: "World",
      twowaybind: "",
    };
  },
  methods: {
    getname() {
      return this.name;
    },
    getclicked() {
      console.warn("clicked");
    },
    onClick() {
      this.$refs.myInput.focus();
      console.log(this.$refs.myInput.value);
    },
  },
};
</script>

<style scoped></style>
