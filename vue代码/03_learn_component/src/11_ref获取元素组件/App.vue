<template>
  <h2 ref="title">{{ counter }}</h2>
  <button @click="counter++">++1</button>
  <template v-if="flag">
    <home ref="home"></home>
  </template>
  <button ref="titles" @click="flag=!flag">显示home</button>
  <button  @click="btnClick">执行home的方法</button>

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
  mounted(){
    console.log(this.$refs.title)
    console.log(this.$refs.titles.textContent)
  },
  methods:{
    btnClick(){
      this.$refs.home.showHello()
    }
  }
  

}
</script>

<style>

</style>