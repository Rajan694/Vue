<template>
  <Navbar />

  <RouterView />
</template>
<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Layout/NavBar.vue";
</script>

<style>
@keyframes bgColor {
  5% {
    box-shadow: 0rem 0.5rem 1rem red;
  }
  10% {
    box-shadow: 0rem 0.5rem 1rem orange;
  }
  15% {
    box-shadow: 0rem 0.5rem 1rem yellow;
  }
  20% {
    box-shadow: 0rem 0.5rem 1rem green;
  }
  25% {
    box-shadow: 0rem 0.5rem 1rem blue;
  }
  30% {
    box-shadow: 0rem 0.5rem 1rem indigo;
  }
  35% {
    box-shadow: 0rem 0.5rem 1rem violet;
  }
  40% {
    box-shadow: 0rem 0.5rem 1rem purple;
  }
  45% {
    box-shadow: 0rem 0.5rem 1rem pink;
  }
  50% {
    box-shadow: 0rem 0.5rem 1rem red;
  }
  55% {
    box-shadow: 0rem 0.5rem 1rem orange;
  }
  60% {
    box-shadow: 0rem 0.5rem 1rem yellow;
  }
  65% {
    box-shadow: 0rem 0.5rem 1rem green;
  }
  70% {
    box-shadow: 0rem 0.5rem 1rem blue;
  }
  75% {
    box-shadow: 0rem 0.5rem 1rem indigo;
  }
  80% {
    box-shadow: 0rem 0.5rem 1rem violet;
  }
  85% {
    box-shadow: 0rem 0.5rem 1rem purple;
  }
  90% {
    box-shadow: 0rem 0.5rem 1rem pink;
  }
  95% {
    box-shadow: 0rem 0.5rem 1rem red;
  }
  100% {
    box-shadow: 0rem 0.5rem 1rem orange;
  }
}
div {
  animation-name: bgColor !important;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: linear;
}
</style>
