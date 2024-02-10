<template>
  <div class="app">
    <h2 v-gyf>{{counter}}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>


<script setup>
import { ref } from "vue"




const counter = ref(0)


const vGyf = {
  created(){
    console.log("created")
  },
  beforeMount(){
    console.log("beforeMounted")
  }
  ,
  mounted(){
    console.log("mounted")
  },

  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  },
  beforeUnmount(){

  },
  unmounted(){

  }
}


</script>

<style  scoped>

</style>