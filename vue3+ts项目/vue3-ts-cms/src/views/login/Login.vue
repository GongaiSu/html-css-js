<template>
  <div class="login" v-loading="loadingStore.isLoading">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import useLoadingStore from '@/store/loading/loading'
import LoginPanel from './c-cpn/login-panel.vue'
const loadingStore = useLoadingStore()
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
