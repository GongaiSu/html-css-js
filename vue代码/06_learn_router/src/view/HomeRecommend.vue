<template>
  <div class="home-recommend">
    home-recommend {{ $route.query }}
  </div>
</template>

<script setup>
    defineProps({
    foo:{
      type:String,
      default:"ssss"
    }
  })
</script>

<style scoped>

</style>