<template>

  <h2>{{ counter }}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import {ref} from 'vue'
export default {
  setup(){
    let counter = ref(10)
    const increment =()=>{
      console.log(counter)
      console.log("increment")
      counter.value++
    }
    const decrement =()=>{
      counter.value--
    }

    return{
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style>

</style>
