<template>
  <div class="home">
    <ul>
      <template v-for="item in $store.state.home.banners" :key="item.acm">
        <li> {{ item.title }}</li>
      </template>  
    </ul>
  </div>
 </template>
 
 <script setup>
import { useStore } from 'vuex';

const store = useStore()
store.dispatch("home/AsyncHomeMultidataAction")

 </script>
 
 <style>
 </style>
 