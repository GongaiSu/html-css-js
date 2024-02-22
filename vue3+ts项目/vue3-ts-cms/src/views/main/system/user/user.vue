<template>
  <div class="user">
    <user-search></user-search>
    <user-content></user-content>
  </div>
</template>

<script setup lang="ts">
import userSearch from './c-cnpm/user-search.vue'
import userContent from './c-cnpm/user-content.vue'
</script>

<style lang="less" scoped>
.user {
}
</style>
