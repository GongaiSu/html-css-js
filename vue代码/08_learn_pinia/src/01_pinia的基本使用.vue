<template>
  <div class="app">
    <h2>counter:{{ counterStore.count }}</h2>
  </div>
</template>

<script setup>

import useCounter from "@/store/counter"

const counterStore= useCounter()
console.log(counterStore)
</script>

<style>

</style>
