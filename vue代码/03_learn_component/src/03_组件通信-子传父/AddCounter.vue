<template>
  <div>
    <button @click="btnClick(1)">+1</button>
    <button @click="btnClick(5)">+5</button>
    <button @click="btnClick(10)">+10</button>
  </div>
</template>

<script>
export default {
    emits:["add"],
    methods:{
        btnClick(count){
            this.$emit("add",count,2)
        }
    }



}
</script>

<style>

</style>