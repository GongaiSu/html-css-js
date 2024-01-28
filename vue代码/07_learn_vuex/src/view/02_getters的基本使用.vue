<template>
  <div class="app">
    <h2>getter的使用:{{ $store.getters.DoubleCounter }}</h2>
    <h2>getter的使用getFirendsAge:{{ $store.getters.getFirendsAge }}</h2>
    <h2>getter的使用message:{{ $store.getters.message }}</h2>
    <h2>getter的使用getFirendById:{{ $store.getters.getFirendById("111") }}</h2>
    <h2>getter的使用getFirendById:{{ $store.getters.getFirendById("112") }}</h2>
  </div>
 </template>
 
 <script setup>
 </script>
 
 <style>
 </style>
 