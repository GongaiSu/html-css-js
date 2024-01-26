<template>
  <div class="user">
    <h3>User</h3>
  </div>
</template>

<script setup>
import { onBeforeRouteUpdate, useRoute } from "vue-router";


  const route = useRoute()
  const id = route.params.id
  console.log(`id:${id}`)
  onBeforeRouteUpdate((to,from)=>{
    console.log("to:",to.params.id)
    console.log("from:",from.params.id)
  })


</script>

<style>

</style>