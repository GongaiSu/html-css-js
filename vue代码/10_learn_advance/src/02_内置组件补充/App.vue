<template>
  <div class="app">
    <h2>app</h2>
    <Suspense>
      <template #default>
        <home></home>
      </template>
      <template #fallback>
        <h2>----------</h2>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const home = defineAsyncComponent(()=>import("./AsyncHome.vue"))
</script>

<style  scoped>

</style>