<template>
  <p>{{ name }}</p>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about/about">About</router-link> |
    <router-link to="/httpreq">HttpReq</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      name: "provide and inject works",
    };
  },
  provide() {
    return {
      username: this.name,
    };
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
