<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">显示</button>
    </div>
    <transition name="gyf">
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


.gyf-enter-active{
  animation: gyfAdmin 2s ease;
}

.gyf-leave-active{
  animation: gyfAdmin 2s ease reverse;
}



@keyframes gyfAdmin {
  0%{
    transform: scale(0);
    opacity: 0;
  }

  50%{
    transform: scale(1.5);
    opacity: 0.5;
  }

  100%{
    transform: scale(1);
    opacity: 1;
  }
}

</style>