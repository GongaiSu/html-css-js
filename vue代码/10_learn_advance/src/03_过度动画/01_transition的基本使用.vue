<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">显示</button>
    </div>
    <transition>
      <h2 v-if="isShow">hhhhhhhhhh</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";


const isShow =  ref(false)

</script>

<style scoped>

h2{
  display: inline-block;
}

.v-enter-from,
.v-leave-to{
  opacity: 0;
  transform: scale(0.5);
}

.v-enter-to,
.v-leave-from{
  opacity:1;
  transform: scale(1);
}

.v-enter-active,
.v-leave-active{
  transition: all 2s ease;
}


</style>