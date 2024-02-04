<template>
  
  <div class="app">
    <router-view></router-view>
    <tab-bar v-if="!route.meta.hideTabBar"></tab-bar>
    <loading />
  </div>
  <!-- <tab-bar></tab-bar> -->
</template>

<script setup>
import {useRoute} from 'vue-router'
import tabBar from "./components/tab-bar/tab-bar.vue";
import Loading from "./components/loading/loading.vue";

const route = useRoute()
</script>

<style scoped>

</style>
