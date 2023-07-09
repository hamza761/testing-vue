<template>
  <Button @click="count--" v-if="count>0">-</Button>
  <Button>count</Button>
  <Button @click="count++" v-if="count < 10">+</Button>
</template>
<script setup>
import { ref } from "vue";
import { Button } from "./components";
const count = ref(0)
</script>