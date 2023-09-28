<template>
      <h2>This is about details page</h2>
    <h4>Content of page of id {{ $route.params.id }} by using $route.params</h4>
    <h4>
      Content of page of id {{ routeID }} by using route.params and in script tag
    </h4>

    <RouterLink to="/about"
      ><button class="btn btn-primary btn-sm me-2">
        Back by using routerlink
      </button></RouterLink
    >
    <button class="btn btn-primary btn-sm me-2" @click="$router.back()">
      Back by using $router
    </button>
    <button class="btn btn-primary btn-sm me-2" @click="gohome()">
      go home in 3 sec using router
    </button>
    <button class="btn btn-primary btn-sm me-2" @click="gofirst()">
      go to first id
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
// const routeID = useRoute().params.id;
//            or
const route = useRoute();
const routeID = ref(route.params.id);

const router = useRouter();
const gohome = () => {
  setTimeout(() => {
    router.push("/");
    //  or
    // router.push({ name: "HomeView" });
  }, 3000);
};

const gofirst = () => {
  routeID.value = route.params.id;
  router.push({ name: "AboutDetail", params: { id: 1 } });
};
</script>

<style scoped></style>
