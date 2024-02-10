<template>
  <div class="app">
    <h2 v-gyf:aaa.bbb="'gyf'">{{counter}}</h2>
  </div>
</template>


<script setup>
import { ref } from "vue"




const counter = ref(0)


const vGyf = {
  mounted(el,bindings){
    console.log(bindings)
  }
}


</script>

<style  scoped>

</style>