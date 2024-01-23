<template>
  <div>
    <h2>Home</h2>
    <h3>{{ name }}</h3>
    <h2>{{ counter }}</h2>
    <button @click="HomeClick">!</button>
    <button @click="addCounter">+1</button>
  </div>
</template>

<script>
export default {
  name:"home",
  props:{
    name:{
      type:String,
      default:"www"
    }
  },
  data(){
    return{
      counter:0
    }
  },
  methods:{
    HomeClick(){
      this.$emit("homebtn",12)
    },
    addCounter(){
      this.counter++
    }
  },
  activated(){
    console.log("activated")
  },
  deactivated(){
    console.log("deactivated")
  }
}
</script>

<style>

</style>