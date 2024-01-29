<template>
  <div class="app">
    <h2>mutation的使用:{{ $store.state.name }}</h2>
    <button @click="changeName">name</button>
  </div>
 </template>
 
 <script setup>
import { useStore } from 'vuex';


  const store = useStore()
  function changeName(){
    store.commit("changeName",{
      name:"zs"
    })
  }
 </script>
 
 <style>
 </style>
 