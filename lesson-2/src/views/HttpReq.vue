<template>
  <div class="border border-success border-4 p-2 d-flex flex-row flex-wrap">
    <div v-if="loading">Loading...</div>
    <div v-if="!loading && list.length === 0">No data</div>
    <div v-for="user in list" :key="user.id">
      <div class="card" style="width: 18rem">
        <img :src="user.avatar" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ user.first_name }} {{ user.last_name }}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{{ user.id }}</li>
          <li class="list-group-item">{{ user.email }}</li>
        </ul>
      </div>
    </div>
  </div>
  <button @click="erro">get error</button>
  <p>{{ errorr }}</p>
</template>

<script>
import axios from "axios";
export default {
  name: "HttpReq",
  data() {
    return {
      errorr: "hi",
      list: [],
      loading: false,
    };
  },
  async mounted() {
    this.loading = true;
    await axios.get("https://reqres.in/api/users?page=2").then((response) => {
      this.loading = false;
      this.list = response.data.data;

      // console.log(this.list);
    });
  },
  methods: {
    async erro() {
      try {
        await axios.get("https://reqres.in/api/unknown/23").then((response) => {
          console.log(response.data.data);
        });
      } catch (error) {
        this.errorr = error.response.status;
      }
    },
  },
};
</script>

<style scoped></style>
