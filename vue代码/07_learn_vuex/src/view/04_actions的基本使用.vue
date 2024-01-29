<template>
  <div class="app">
    <h2>actions的使用:{{ $store.state.counter }}</h2>
    <button @click="incommentCounter">+1</button>
    <h2>actions的name使用:{{ $store.state.name }}</h2>
    <button @click="changeName">name</button>
  </div>
 </template>
 
 <script setup>
import { useStore } from 'vuex';


  const store = useStore()
  function changeName(){
    store.dispatch("changeNameAction",{
      name:"zs"
    })
  }

  function incommentCounter(){
    store.dispatch("incommentAction")
  }

 </script>
 
 <style>
 </style>
 