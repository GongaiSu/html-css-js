<template>
  <h2>我是about</h2>
  <h3>姓名：{{name }}</h3>
  <h3>年龄：{{age }}</h3>
</template>

<script>
import emmitt from './utils/TestBus';
export default {
  data(){
    return{
      name:"zs",
      age:18
    }
  },
  created(){
    emmitt.on("gyf",(age)=>{
      this.age=age
    })
  }
}
</script>

<style>

</style>