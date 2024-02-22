<template>
  <div class="login" v-loading="loginStore.isLoading">
    <login-panel></login-panel>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login';
import LoginPanel from './c-cpn/login-panel.vue'
const loginStore = useLoginStore()
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
