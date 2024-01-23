<template>
  <h2>{{ counter }}</h2>
  <button @click="counter++">++1</button>
  <template v-if="flag">
    <home></home>
  </template>
  <button @click="flag=!flag">显示home</button>

</template>

<script>

import Home from "./Home.vue"
export default {
  name:"App",
  components:{
    Home
  },
  data(){
    return {
      counter:0,
      flag:true
    }
  },
  beforeCreate(){
    console.log("beforeCreate");
  },
  created(){
    console.log("created")
  },
  beforeMount(){
    console.log("beforeMount")
  },
  mounted(){
    console.log("mounted")
  },
  beforeUpdate(){
    console.log("beforeUpdate")
  },
  updated(){
    console.log("updated")
  }

}
</script>

<style>

</style>