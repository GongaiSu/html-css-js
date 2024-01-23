<template>
  <div>
    <h2>Home</h2>
    <h3>{{ name }}</h3>
    <button @click="HomeClick">!</button>
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
  methods:{
    HomeClick(){
      this.$emit("homebtn",12)
    }
  }
}
</script>

<style>

</style>