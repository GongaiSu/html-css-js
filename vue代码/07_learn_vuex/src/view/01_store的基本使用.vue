<template>
  <div class="app1">
   <h2>{{$store.state.counter }}</h2>
   <h2>setup:{{counter}}</h2>
   <button @click="incomment">+1</button>
  </div>
 </template>
 
 <script setup>
 import { toRefs } from 'vue';
 import { useStore } from 'vuex';
 
 
   const store = useStore()
 
   const {counter}= toRefs(store.state)
   function incomment(){
     store.commit("incomment")
   }
 </script>
 
 <style>
 </style>
 