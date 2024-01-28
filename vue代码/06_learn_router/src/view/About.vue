<template>
  <h3>about</h3>
  <button @click="backClick">返回</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
  const router = useRouter()
  function backClick(){
    router.forward()  
  }
</script>

<style scoped>

</style>