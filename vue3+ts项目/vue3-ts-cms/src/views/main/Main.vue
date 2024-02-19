<template>
  <div class="main">
    <h2>main {{ counterStore.counter }} -- {{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">变成120</button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'
const counterStore = useCounterStore()

const changeCounter = () => {
  counterStore.changeCounterAction(120)
}
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
