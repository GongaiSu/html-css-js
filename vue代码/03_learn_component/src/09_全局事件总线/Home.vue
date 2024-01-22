<template>
  <h2>我是home</h2>
  <button @click="homeClick">home的按钮</button>
</template>

<script>
import emmitt from './utils/TestBus';
export default {

  methods:{
    homeClick(){
      emmitt.emit("gyf",12)
    }
  }

}
</script>

<style>

</style>