<template>
  <div class="border border-warning border-3 p-2">
    <p @mouseover="getclicked()">by name {{ name }}</p>
    <p>by function {{ getname() }}</p>
    <p>
      its a prop <b>{{ msg }} and {{ obj.name }} and {{ obj.age }}</b>
    </p>
    <button class="btn btn-info btn-sm mb-1" @click="getclicked">
      click event
    </button>
    <input v-model="twowaybind" type="text" class="form-control" />
    <p>Two way binded value : {{ twowaybind }}</p>
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
  },
};
</script>

<style scoped></style>
