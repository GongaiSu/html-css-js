<template>
  <div class="app">
    <h2>counter:{{ counterStore.count }}</h2>
    <h2>解构后的:{{ count }}</h2>
    <button @click="countBtnClick">count+1</button>
  </div>
</template>

<script setup>

import useCounter from "@/store/counter"
import { storeToRefs } from "pinia"

const counterStore= useCounter()
const {count} = storeToRefs(counterStore)


function countBtnClick(){
  counterStore.count++
}
</script>

<style>

</style>
