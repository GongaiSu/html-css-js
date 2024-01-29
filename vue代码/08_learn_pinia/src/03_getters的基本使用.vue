<template>
  <div class="app">
    <h2>doubleCounter:{{ counterStore.doubleCounter }}</h2>
    <h2>doubleCounterAndOne:{{ counterStore.doubleCounterAndOne }}</h2>
    <h2>firendById-111:{{ counterStore.firendById("111") }}</h2>
    <h2>firendById-112:{{ counterStore.firendById("112") }}</h2>
    <h2>showMessage:{{ counterStore.showMessage}}</h2>
  </div>
</template>

<script setup>

import useCounter from "@/store/counter"

const counterStore= useCounter()
</script>

<style>

</style>
