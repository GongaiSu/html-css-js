<template>
  <h2>
    {{ info.age }},{{ counter }}
  </h2>
</template>

<script>
import { onUpdated, reactive, ref } from 'vue'
export default {

  setup(){
    const info  = reactive({
      name:"zs",
      age:18
    })
    const counter = ref(0)
    return {
      info,
      counter
    }
  }

}
</script>

<style>

</style>